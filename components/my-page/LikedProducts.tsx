import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import useMe from '../../hooks/useMe'

const Wrapper = styled.div`
  padding: 10px;

  background-color: lightgray;
`

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;

  background-color: lightcoral;
`

const LikedPostsContainer = styled.div`
  display: flex;
  padding-top: 20px;

  background-color: lightblue;
`

const Post = styled.div`
  padding: 10px;

  background-color: lightcoral;
`

const PostImageContainer = styled.div`
  width: 200px;
  height: 100px;

  background-color: white;
`

const PostTitle = styled.div`
  padding: 10px;

  text-align: center;

  background-color: lightgray;
`

const LikedProducts = () => {
  const me = useMe()

  return (
    me && (
      <Wrapper>
        <Title>
          {me.name} 님이 {'❤️'}한 요리
        </Title>
        <LikedPostsContainer>
          {me.likedPosts.map((post, index) => (
            <Post key={index}>
              <PostImageContainer>
                {/* <Image src={post.ImageUrl} */}
              </PostImageContainer>
              <PostTitle>{post.title}</PostTitle>
            </Post>
          ))}
        </LikedPostsContainer>
      </Wrapper>
    )
  )
}

export default LikedProducts
