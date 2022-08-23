import styled from '@emotion/styled'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import api from '../../api'
import UnlikedIcon from '../../assets/heart-empty.svg'
import LikedIcon from '../../assets/heart-fill.svg'

interface FeedItemProps {
  id: string
  image: string
  liked: boolean
}

const Wrapper = styled.div`
  position: relative;

  flex-grow: 1;

  background-color: #f2f2f2;
`

const LikeButton = styled.button`
  position: absolute;
  top: 5px;
  right: 0px;

  cursor: pointer;
`

const FeedItem = ({ id, image, liked }: FeedItemProps) => {
  const router = useRouter()

  const queryClient = useQueryClient()

  const { mutate: likePostToggle } = useMutation(
    ['like-post'],
    async () => await api.patch(`/post/like/${id}`),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['liked-posts'])
      },
    },
  )

  const imageUrl = useMemo(
    () =>
      image?.replace(
        's3://daily-kurly/',
        `https://${process.env.NEXT_PUBLIC_AWS_S3_URL}/`,
      ),
    [image],
  )

  const onClickItem = (e: any) => {
    e.preventDefault()
    router.push(`/posts/${id}`)
  }

  const onLike = (e: any) => {
    e.stopPropagation()
    likePostToggle()
  }

  return (
    <Wrapper onClick={onClickItem}>
      <Image
        src={imageUrl}
        width={100}
        height={100}
        layout="responsive"
        alt="feed item"
      />
      <LikeButton onClick={onLike}>
        {liked ? <LikedIcon /> : <UnlikedIcon />}
      </LikeButton>
    </Wrapper>
  )
}

export default FeedItem
