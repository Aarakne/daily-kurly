import styled from '@emotion/styled'
import { useQuery } from 'react-query'
import { fetchLikedPosts } from '../../queries/posts'
import Image from 'next/image'

const Wrapper = styled.div`
  padding-top: 20px;

  background-color: lightgray;
`

const Title = styled.div`
  padding: 20px;
  font-size: 18px;
  font-weight: bold;

  background-color: lightsteelblue;
`

const LikedPostsContainer = styled.div`
  display: flex;
  overflow: auto;

  padding: 20px;

  background-color: lightblue;

  &::-webkit-scrollbar {
    display: none;
  }
`

const Post = styled.div`
  /* padding: 10px; */
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-right: 10px;
  background-color: lightseagreen;
`

const PostImage = styled.div`
  width: 100px;
  height: 100px;

  background-color: white;
`

const PostTitle = styled.div`
  padding: 10px;

  text-align: center;

  background-color: lightcyan;
`

const LikedProducts = () => {
  //   const me = useRecoilValue(userState)
  const me = { grade: 'purple', name: 'lee123' }

  const { data: likedPosts } = useQuery(['fetchlikedPost'], fetchLikedPosts, {
    staleTime: 60 * 1000,
  })

  return (
    <Wrapper>
      <Title
        onClick={() => {
          likedPosts &&
            console.log(
              likedPosts[0].content.images[0].replace(
                's3://daily-kurly/',
                'https://daily-kurly.s3.ap-northeast-2.amazonaws.com/',
              ),
            )
        }}
      >
        {me.name} 님이 {'❤️'}한 요리
      </Title>
      <LikedPostsContainer>
        {likedPosts?.map((post, index) => (
          <Post key={index}>
            <Image
              src={post?.content.images[0].replace(
                's3://daily-kurly/',
                'https://daily-kurly.s3.ap-northeast-2.amazonaws.com/',
              )}
              width={100}
              height={100}
              alt="liked post"
            />
            <PostTitle>{post.title}</PostTitle>
          </Post>
        ))}
      </LikedPostsContainer>
    </Wrapper>
  )
}

export default LikedProducts
