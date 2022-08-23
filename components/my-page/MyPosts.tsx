import styled from '@emotion/styled'
import useMe from '../../hooks/useMe'

const Wrapper = styled.div`
  padding-top: 50px;

  background-color: lightgray;
`

const Title = styled.div`
  padding: 20px;
  font-size: 18px;
  font-weight: bold;

  background-color: lightsteelblue;
`

const CurationPostsContainer = styled.div`
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

const CurationKeywordContainer = styled.div`
  padding: 20px;

  font-size: 18px;
  font-weight: bold;

  background-color: lightcyan;
`

const CurationKeyword = styled.div`
  width: auto;
  display: inline-block;

  color: white;

  margin-top: 10px;
  padding: 10px 20px;

  border-radius: 20px;

  background-color: purple;
`

const MyPosts = () => {
  const me = useMe()

  return (
    me && (
      <Wrapper>
        <Title>
          {me.name} 님이 관심 많은 <br />{' '}
          <span style={{ color: 'red' }}>{'한식'}</span> 인기 요리에요 😝
        </Title>
        <CurationPostsContainer>
          {me.likedPosts.map((post, index) => (
            <Post key={index}>
              <PostImage>{/* <Image src={post.ImageUrl} /> */}</PostImage>
              <PostTitle>{post.title}</PostTitle>
            </Post>
          ))}
        </CurationPostsContainer>

        <CurationKeywordContainer>
          <span style={{ color: 'red' }}>
            {'난이도가 높고'},<br />
            {'소요시간이 긴'}
          </span>{' '}
          요리를 좋아하시네요 😀
          <CurationKeyword>{'찜질방 고수'}</CurationKeyword>
        </CurationKeywordContainer>
      </Wrapper>
    )
  )
}

export default MyPosts
