import styled from '@emotion/styled'
import useMe from '../../hooks/useMe'
import Carousel from '../public/Carousel'

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
  position: relative;
  overflow: hidden;

  background-color: lightblue;
`
const CarouselItem = styled.div`
  background-color: red;
`

const Post = styled.div`
  /* padding: 10px; */
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-right: 10px;
  background-color: lightseagreen;
`

const PostImageContainer = styled.div`
  width: 100px;
  height: 100px;

  background-color: white;
`

const PostTitle = styled.div`
  margin-top: 10px;
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
          <Carousel autoplay={false} slidesToShow={2.5} infinite={false}>
            {me.likedPosts.map((post, index) => (
              <CarouselItem key={index}>
                <Post key={index}>
                  <PostImageContainer>
                    {/* <Image src={post.ImageUrl} /> */}
                  </PostImageContainer>
                  <PostTitle>{post.title}</PostTitle>
                </Post>
              </CarouselItem>
            ))}
          </Carousel>
        </LikedPostsContainer>
      </Wrapper>
    )
  )
}

export default LikedProducts
