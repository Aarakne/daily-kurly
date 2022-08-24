import styled from '@emotion/styled'
import { useQuery } from 'react-query'
import { fetchLikedPosts } from '../../queries/posts'
import Image from 'next/image'
import { useRecoilValue } from 'recoil'
import { userState } from '../../stores/auth'
import { useRouter } from 'next/router'

const Title = styled.div`
  padding: 30px 0 0 20px;

  font-size: 18px;
  font-weight: bold;
`

const LikedPostsContainer = styled.div`
  display: flex;
  overflow: auto;

  padding: 20px 0 0 10px;

  &::-webkit-scrollbar {
    display: none;
  }
`

const Post = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;

  margin-right: 10px;
`

const PostTitle = styled.div`
  padding: 10px;

  text-align: center;
`

const LikedProducts = () => {
  const router = useRouter()
  const me = useRecoilValue(userState)

  const { data: likedPosts } = useQuery(['fetchlikedPost'], fetchLikedPosts, {
    staleTime: 60 * 1000,
  })

  const getCdnUrl = (imageUrl: string) => {
    return imageUrl.replace(
      's3://daily-kurly/',
      'https://daily-kurly.s3.ap-northeast-2.amazonaws.com/',
    )
  }

  return (
    <>
      <Title>
        {me?.name} 님이 {'❤️'}한 요리
      </Title>
      <LikedPostsContainer>
        {likedPosts?.map((post, index) => (
          <Post key={index} onClick={() => router.push(`/posts/${post._id}`)}>
            <Image
              src={getCdnUrl(post?.content.images[0])}
              width={100}
              height={100}
              alt="liked post"
            />
            <PostTitle>{post.title}</PostTitle>
          </Post>
        ))}
      </LikedPostsContainer>
    </>
  )
}

export default LikedProducts
