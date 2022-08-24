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
import { getCdnUrl } from '../../lib/utils'
import LikeIcon from '../../assets/heart-fill-white.svg'

const ProfileContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  padding: 20px;
`

const ProfileImageContainer = styled.div`
  padding: 5px;

  border: 2px solid lightgray;
  border-radius: 50px;
`

const Content = styled.div`
  flex: 1;

  margin-left: 10px;
`

const Name = styled.div`
  font-size: 16px;
  font-weight: bold;

  display: flex;
  align-items: center;
  gap: 5px;
`

const PostInfo = styled.div`
  padding-top: 5px;

  font-size: 13px;
`

const Grade = styled.span`
  font-size: 14px;
  color: #5f0080;
`

const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;

  padding: 20px;
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

  padding: 20px;
`

const PostTitle = styled.div`
  font-size: 25px;
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
  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #5f0080;

  border-radius: 50px;
`

const PostLikeCount = styled.div`
  color: #5f0080;
  font-size: 14px;
  padding-top: 5px;
`

const UsedProductTitle = styled.div`
  font-size: 20px;
  font-weight: bold;

  padding: 20px 20px 0;
`

const UsedProductContainer = styled.div`
  display: flex;
  align-items: center;
  overflow: auto;

  padding-top: 10px;

  &::-webkit-scrollbar {
    display: none;
  }
`

const UsedProductWrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Posts: NextPage = () => {
  const router = useRouter()
  const {
    query: { id: postId },
  } = router

  const me = useRecoilValue(userState)
  const queryClient = useQueryClient()

  const { mutate: likePostToggle } = useMutation(
    ['fetctPostDetail', postId],
    async () => await api.patch(`/post/like/${postId}`),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['fetctPostDetail', postId])
      },
    },
  )

  const { data: post, isSuccess } = useQuery(
    ['fetctPostDetail', postId],
    () => fetchPostDetail(postId),
    { enabled: !!postId, staleTime: 60 * 1000 },
  )

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
                {me?.name || '닉네임'} <Grade>{me?.grade}</Grade>
              </Name>
              <PostInfo>{moment(moment(post.createdAt)).fromNow()}</PostInfo>
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
              <PostLikeButton onClick={onLike}>
                <LikeIcon />
              </PostLikeButton>
              <PostLikeCount>
                {post.likeCount.toLocaleString('ko-KR')}
              </PostLikeCount>
            </PostLikeButtonContainer>
          </PostInfoContainer>

          <UsedProductTitle>사용 상품</UsedProductTitle>
          <UsedProductWrapper>
            {post.products.map((product, index) => (
              <UsedProductContainer key={index}>
                <UsedProduct product={product} />
                <UsedProduct
                  product={product.relatedProduct}
                  isRelated={true}
                />
              </UsedProductContainer>
            ))}
          </UsedProductWrapper>
        </>
      )}
    </Container>
  )
}

export default Posts
