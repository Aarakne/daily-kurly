import styled from '@emotion/styled'
import moment from 'moment'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
// import { useQuery } from 'react-query'
import Carousel from '../../components/public/Carousel'
import Container from '../../components/public/Container'
import useMe from '../../hooks/useMe'
// import { fetchPostDetail } from '../../queries/posts'

const Wrapper = styled.div`
  padding: 10px;

  background-color: gray;
`

const ProfileContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  padding: 10px;

  background-color: darkblue;
`

const ProfileImageContainer = styled.div`
  width: 50px;
  height: 50px;

  background-color: lightblue;

  border-radius: 50px;
`

const Content = styled.div`
  flex: 1;

  margin-left: 10px;
  background-color: lightcyan;
`

const Name = styled.div`
  font-size: 18px;
  font-weight: bold;
`

const PostInfo = styled.div`
  padding-top: 5px;

  background-color: lightgray;
`

const Grade = styled.span`
  font-size: 15px;
  color: #5f0080;
`

const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;

  padding: 0;

  background-color: black;
`

const CarouselItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 300px;

  background-color: red;
`

const PostImage = styled.div`
  width: 280px;
  height: 280px;

  background-color: lightblue;
`
const PostInfoContainer = styled.div`
  display: flex;

  padding: 10px;

  background-color: lightsteelblue;
`

const PostTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
`

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;

  padding-top: 10px;
`

const Tag = styled.div`
  color: white;
  font-size: 12px;

  margin-top: 5px;
  margin-right: 10px;
  padding: 5px 10px;

  background-color: #5f0080;

  border-radius: 5px;
`

const PostLikeButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const PostLikeButton = styled.button`
  width: 70px;
  height: 70px;

  background-color: #5f0080;

  border-radius: 50px;
`

const PostLikeCount = styled.div`
  padding-top: 10px;
  color: #5f0080;
`

const UsedProductContainer = styled.div``

const UsedProductTitle = styled.div`
  font-size: 18px;
  font-weight: bold;

  padding-left: 10px;

  background-color: steelblue;
`

const UsedProduct = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 10px;
  padding: 10px;

  background-color: lightsteelblue;

  border-radius: 10px;
`

const UsedProductContent = styled.div`
  display: flex;
  background-color: blue;
`

const UsedProductImage = styled.div`
  width: 100px;
  height: 100px;

  background-color: steelblue;
`

const UsedProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-left: 10px;

  background-color: blue;
`

const UsedProductName = styled.div`
  font-size: 18px;
  font-weight: bold;

  background-color: steelblue;
`

const UsedProductBrand = styled.div`
  padding-top: 10px;
  background-color: steelblue;
`

const UsedProductPrice = styled.div`
  color: red;

  background-color: steelblue;
`

const UsedProductLikeButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px;
`

const UsedProductLikeButton = styled.div``

const Posts: NextPage = () => {
  const me = useMe()
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
    createdAt: '20220823',
    tags: [
      '계란요리',
      '자취용',
      '5분요리',
      '5분요리',
      '5분요리',
      '5분요리',
      '5분요리',
    ],

    likeCount: 13022,
    usedProducts: [
      {
        name: '이나이 숙주',
        brand: '풀무원',
        sellingPrice: '3000',
        image: 'product_image_1',
      },
      {
        name: '닭고기',
        brand: '하림',
        sellingPrice: '6000',
        image: 'product_image_2',
      },
    ],
  }

  return (
    me && (
      <Container
        headerLeft="<"
        headerTitle="Daily Kurly"
        headerRight=""
        isHeader={true}
      >
        <ProfileContainer>
          <ProfileImageContainer>
            {/* <Image src={me.profileImage} /> */}
          </ProfileImageContainer>
          <Content>
            <Name>
              {me.name} <Grade>{me.grade}</Grade>
            </Name>
            <PostInfo>{moment(moment(tempPost.createdAt)).fromNow()}</PostInfo>
          </Content>
        </ProfileContainer>

        <CarouselContainer>
          <Carousel autoplay={false} centerMode={true} arrows={false}>
            {tempPost.content.images.map((post, index) => (
              <>
                <CarouselItem key={index}>
                  <PostImage>{/* <Image src={post.ImageUrl} /> */}</PostImage>
                </CarouselItem>
              </>
            ))}
          </Carousel>
        </CarouselContainer>

        <PostInfoContainer>
          <div>
            <PostTitle>{tempPost.title}</PostTitle>
            <Tags>
              {tempPost.tags.map((tag, index) => (
                <Tag key={index}>#{tag}</Tag>
              ))}
            </Tags>
          </div>

          <PostLikeButtonContainer>
            <PostLikeButton>❤️</PostLikeButton>
            <PostLikeCount>
              {tempPost.likeCount.toLocaleString('ko-KR')}
            </PostLikeCount>
          </PostLikeButtonContainer>
        </PostInfoContainer>

        <UsedProductTitle>사용 상품</UsedProductTitle>
        {tempPost.usedProducts.map((product, index) => (
          <UsedProduct key={index}>
            <UsedProductContent>
              <UsedProductImage />
              <UsedProductInfo>
                <UsedProductName>{product.name}</UsedProductName>
                <UsedProductBrand>{product.brand}</UsedProductBrand>
                <UsedProductPrice>{product.sellingPrice}</UsedProductPrice>
              </UsedProductInfo>
            </UsedProductContent>

            <UsedProductLikeButtonContainer>
              <UsedProductLikeButton>❤️</UsedProductLikeButton>
            </UsedProductLikeButtonContainer>
          </UsedProduct>
        ))}
      </Container>
    )
  )
}

export default Posts
