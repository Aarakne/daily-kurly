import styled from '@emotion/styled'
import useMe from '../../hooks/useMe'
import Carousel from '../public/Carousel'

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
  position: relative;
  overflow: hidden;

  background-color: lightblue;
`
const CarouselItem = styled.div`
  background-color: red;
`

const CurationPost = styled.div`
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

const Curation = () => {
  const me = useMe()

  return (
    me && (
      <Wrapper>
        <Title>
          {me.name} 님이 관심 많은 <br />{' '}
          <span style={{ color: 'red' }}>{'한식'}</span> 인기 요리에요 😝
        </Title>
        <CurationPostsContainer>
          <Carousel autoplay={false} slidesToShow={2.5} infinite={false}>
            {me.likedPosts.map((post, index) => (
              <CarouselItem key={index}>
                <CurationPost key={index}>
                  <PostImageContainer>
                    {/* <Image src={post.ImageUrl} /> */}
                  </PostImageContainer>
                  <PostTitle>{post.title}</PostTitle>
                </CurationPost>
              </CarouselItem>
            ))}
          </Carousel>
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

export default Curation
