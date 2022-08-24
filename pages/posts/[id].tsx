import styled from '@emotion/styled'
import moment from 'moment'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useRecoilValue } from 'recoil'
import Carousel from '../../components/public/Carousel'
import Container from '../../components/public/Container'
import UsedProduct from '../../components/posts/UsedProduct'
import { fetchPostDetail } from '../../queries/posts'
import { userState } from '../../stores/auth'
import Image from 'next/image'
import ProfileIcon from '../../assets/profile.svg'
import api from '../../api'

const ProfileContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  padding: 10px;
`

const ProfileImageContainer = styled.div`
  padding: 20px;

  border: 2px solid lightgray;
  border-radius: 50px;
`

const Content = styled.div`
  flex: 1;

  margin-left: 10px;
`

const Name = styled.div`
  font-size: 20px;
  font-weight: bold;
`

const PostInfo = styled.div`
  padding-top: 5px;
`

const Grade = styled.span`
  font-size: 15px;
  color: #5f0080;
`

const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;

  padding: 0;
`

const CarouselItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const PostImage = styled.div`
  width: 280px;
  height: 280px;

  background-color: lightblue;
`
const PostInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 10px;
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
  color: #5f0080;
`

const UsedProductTitle = styled.div`
  font-size: 20px;
  font-weight: bold;

  padding-left: 10px;
`

const UsedProductContainer = styled.div`
  display: flex;
  overflow: auto;

  padding: 10px;

  &::-webkit-scrollbar {
    display: none;
  }
`

const Posts: NextPage = () => {
  const router = useRouter()
  const {
    query: { id: postId },
  } = router

  const me = useRecoilValue(userState)
  const queryClient = useQueryClient()

  const { mutate: likePostToggle } = useMutation(
    ['like-post'],
    async () => await api.patch(`/post/like/${postId}`),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['liked-posts'])
      },
    },
  )

  const { data: post, isSuccess } = useQuery(
    ['fetctPostDetail', postId],
    () => fetchPostDetail(postId),
    { enabled: !!postId, staleTime: 60 * 1000 },
  )

  const getCdnUrl = (imageUrl: string) => {
    return imageUrl.replace(
      's3://daily-kurly/',
      `https://${process.env.NEXT_PUBLIC_AWS_S3_URL}/`,
    )
  }

  const onLike = (e: any) => {
    e.stopPropagation()
    likePostToggle()
  }

  return (
    <Container headerTitle="Daily Kurly">
      {isSuccess && (
        <>
          <ProfileContainer>
            <ProfileImageContainer>
              <ProfileIcon />
            </ProfileImageContainer>
            <Content>
              <Name>
                {me?.name} <Grade>{me?.grade}</Grade>
              </Name>
              <PostInfo>{moment(moment('20220823')).fromNow()}</PostInfo>
            </Content>
          </ProfileContainer>

          <CarouselContainer>
            <Carousel autoplay={false} centerMode={true} arrows={false}>
              {post.images.map((image, index) => (
                <>
                  <CarouselItem key={index}>
                    <Image
                      src={getCdnUrl(image)}
                      width={280}
                      height={280}
                      alt="detail post"
                    />
                  </CarouselItem>
                </>
              ))}
            </Carousel>
          </CarouselContainer>

          <PostInfoContainer>
            <div>
              <PostTitle>{post.title}</PostTitle>
              <Tags>
                {post.tags.map((tag, index) => (
                  <Tag key={index}>#{tag}</Tag>
                ))}
              </Tags>
            </div>

            <PostLikeButtonContainer>
              <PostLikeButton onClick={onLike}>❤️</PostLikeButton>
              <PostLikeCount>
                {post.likeCount.toLocaleString('ko-KR')}
              </PostLikeCount>
            </PostLikeButtonContainer>
          </PostInfoContainer>

          <UsedProductTitle>사용 상품</UsedProductTitle>
          {post.products.map((product, index) => (
            <UsedProductContainer key={index}>
              <UsedProduct product={product} />
              <UsedProduct product={product.relatedProduct} isRelated={true} />
            </UsedProductContainer>
          ))}
        </>
      )}
    </Container>
  )
}

export default Posts
