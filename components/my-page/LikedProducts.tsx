import styled from '@emotion/styled'
import useMe from '../../hooks/useMe'

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
              <PostImage>{/* <Image src={post.ImageUrl} /> */}</PostImage>
              <PostTitle>{post.title}</PostTitle>
            </Post>
          ))}
        </LikedPostsContainer>
      </Wrapper>
    )
  )
}

export default LikedProducts
