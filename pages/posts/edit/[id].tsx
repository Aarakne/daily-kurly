import type { NextPage } from 'next'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
// import { useQuery } from 'react-query'
import Carousel from '../../../components/public/Carousel'
import Container from '../../../components/public/Container'
// import { fetchPostDetail } from '../../../queries/posts'

const EditPostImageContainer = styled.div`
  position: relative;
  overflow: hidden;

  background-color: red;
`

const CarouselItem = styled.div`
  background-color: black;
`

const PostImageContainer = styled.div`
  /* padding: 10px; */
  display: flex;
  justify-content: center;

  margin: 10px;

  background-color: lightblue;
`

const PostImage = styled.div`
  width: 100px;
  height: 100px;

  background-color: white;
`

const PostEdit: NextPage = () => {
  const router = useRouter()

  const {
    query: { id: postId },
  } = router

  //   const { data: post } = useQuery(
  //     ['fetchPostDetail', postId],
  //     () => fetchPostDetail(postId),
  //     { enabled: Boolean(postId), staleTime: 60 * 60 * 1000 },
  //   )

  const tempPost = {
    _id: '1',
    title: 'postId_1',
    content: {
      images: ['image1', 'image2', 'image3', 'image4'],
      text: 'Very Delicious',
    },
  }

  return (
    <Container headerLeft="<" headerTitle="게시물 편집" headerRight="등록">
      <EditPostImageContainer>
        <Carousel
          autoplay={false}
          slidesToShow={2.5}
          infinite={false}
          arrows={false}
        >
          {tempPost.content.images.map((image, index) => (
            <CarouselItem key={index}>
              <PostImageContainer>
                <PostImage>{image}</PostImage>
                {/* <Image src={post.ImageUrl} /> */}
              </PostImageContainer>
            </CarouselItem>
          ))}
        </Carousel>
      </EditPostImageContainer>
    </Container>
  )
}

export default PostEdit
