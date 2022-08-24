import type { NextPage } from 'next'
import Container from '../../components/public/Container'
import Profile from '../../components/my-page/Profile'
import LikedProducts from '../../components/my-page/LikedPosts'
import MyPosts from '../../components/my-page/MyPosts'
import { useQuery } from 'react-query'
import { useMemo } from 'react'
import { fetchMyPosts } from '../../queries/posts'

const MyPage: NextPage = () => {
  const { data: posts, isSuccess } = useQuery(['fetchMyPost'], fetchMyPosts, {
    staleTime: 60 * 1000,
  })

  const likeCounts = useMemo(
    () => posts?.reduce((sum, curPost) => sum + curPost.likeCount, 0),
    [posts],
  )

  return (
    <Container headerTitle="My Daily">
      {isSuccess && (
        <>
          <Profile postCounts={posts.length} likeCounts={likeCounts} />
          <LikedProducts />
          <MyPosts posts={posts} />
        </>
      )}
    </Container>
  )
}

export default MyPage
