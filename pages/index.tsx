import styled from '@emotion/styled'
import type { NextPage } from 'next'
import { useEffect, useMemo, useRef } from 'react'
import { useInfiniteQuery, useQuery } from 'react-query'
import { useRecoilState, useRecoilValue } from 'recoil'
import api from '../api'
import Category1s from '../components/feed/Category1s'
import FeedItem from '../components/feed/FeedItem'
import FeedItems from '../components/feed/FeedItems'
import FloatingButtons from '../components/public/FloatingButtons'
import useAuth from '../hooks/useAuth'
import useCategories from '../hooks/useCategories'
import useInfiniteScroll from '../hooks/useInfiniteScroll'
import { fetchLikedPosts } from '../queries/posts'
import { loggedInState } from '../stores/auth'
import { selectedCategory1sState } from '../stores/categories'
import { likedPostsState } from '../stores/like'
import { isOpenedSheetState } from '../stores/sheet'

interface CategoryType {
  _id: string
  tag: string
}

const Wrapper = styled.div`
  position: relative;
`

const fetchPosts = async (pageParam: number, selectedCategory1s: string[]) => {
  const params = {
    page: pageParam,
    cat1: selectedCategory1s,
  }
  const { data } = await api.get('post/list', { params })

  return data
}

const Home: NextPage = () => {
  const getCategories = useCategories()
  const { signUp, login } = useAuth()

  const [loggedIn, setLoggedIn] = useRecoilState(loggedInState)
  const [likedPosts, setLikedPosts] = useRecoilState(likedPostsState)
  const selectedCategory1s = useRecoilValue(selectedCategory1sState)
  const isOpenedSheet = useRecoilValue(isOpenedSheetState)

  const lastItemRef = useRef<HTMLDivElement>(null)

  const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ['posts', selectedCategory1s],
    ({ queryKey, pageParam = 1 }) =>
      fetchPosts(pageParam, queryKey[1] as string[]),
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.hasNext) return pages.length + 1
      },
    },
  )

  useQuery(['liked-posts'], fetchLikedPosts, {
    onSuccess: (data) => {
      setLikedPosts(data)
    },
  })

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

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <Wrapper>
      <Category1s />
      {isLoading ? (
        <div>로딩 중이에요</div>
      ) : posts && posts.length > 0 ? (
        <FeedItems>
          {posts.map((post) => (
            <FeedItem
              key={post._id}
              id={post._id}
              image={post.content.images[0]}
              liked={
                !!likedPosts.find((likedPost) => likedPost._id === post._id)
              }
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
