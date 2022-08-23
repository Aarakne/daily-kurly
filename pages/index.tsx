import styled from '@emotion/styled'
import type { NextPage } from 'next'
import { useEffect, useMemo, useRef } from 'react'
import { useInfiniteQuery } from 'react-query'
import { useRecoilState, useRecoilValue } from 'recoil'
import api from '../api'
import Category2s from '../components/feed/Category2s'
import FeedItem from '../components/feed/FeedItem'
import FeedItems from '../components/feed/FeedItems'
import FloatingButtons from '../components/public/FloatingButtons'
import useAuth from '../hooks/useAuth'
import useInfiniteScroll from '../hooks/useInfiniteScroll'
import { loggedInState } from '../stores/auth'
import { isOpenedSheetState } from '../stores/sheet'

const Wrapper = styled.div`
  position: relative;
`

const fetchPosts = async (pageParam: number) => {
  const { data } = await api.get(`post/list?page=${pageParam}`)

  return data
}

const Home: NextPage = () => {
  const { signUp, login } = useAuth()
  const [loggedIn, setLoggedIn] = useRecoilState(loggedInState)
  const isOpenedSheet = useRecoilValue(isOpenedSheetState)

  const lastItemRef = useRef<HTMLDivElement>(null)

  const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ['posts'],
    ({ pageParam = 1 }) => fetchPosts(pageParam),
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.hasNext) return pages.length + 1
      },
    },
  )

  useInfiniteScroll({
    target: lastItemRef,
    hasNextPage,
    fetchNextPage,
    threshold: 0.1,
  })

  const posts = useMemo(
    () => data?.pages.map((page) => page.posts).flat(),
    [data],
  )

  useEffect(() => {
    if (isOpenedSheet) document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpenedSheet])

  useEffect(() => {
    const checkLoginStatus = async () => {
      if (loggedIn) return
      let loginStatus = await login()
      if (!loginStatus) {
        await signUp()
        loginStatus = await login()
      }
      setLoggedIn(loginStatus)
    }

    checkLoginStatus()
  }, [loggedIn])

  return (
    <Wrapper>
      <Category2s />
      {isLoading ? (
        <div>로딩 중이에요</div>
      ) : posts && posts.length > 0 ? (
        <FeedItems>
          {posts.map((post) => (
            <FeedItem
              key={post._id}
              id={post._id}
              image={post.content.images[0]}
            />
          ))}
          {hasNextPage && <div ref={lastItemRef} />}
        </FeedItems>
      ) : (
        <div>게시글이 없어요</div>
      )}
      <FloatingButtons />
    </Wrapper>
  )
}

export default Home
