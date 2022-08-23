import styled from '@emotion/styled'
import Image from 'next/image'
import { useMemo } from 'react'
import { useRouter } from 'next/router'

interface FeedItemProps {
  id: string
  image: string
}

const Wrapper = styled.div`
  flex-grow: 1;
  background-color: #f2f2f2;
`

const FeedItem = ({ id, image }: FeedItemProps) => {
  const router = useRouter()

  const imageUrl = useMemo(
    () =>
      image.replace(
        's3://daily-kurly/',
        'https://daily-kurly.s3.ap-northeast-2.amazonaws.com/',
      ),
    [image],
  )

  const onClickItem = () => {
    router.push(`/posts/${id}`)
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
    </Wrapper>
  )
}

export default FeedItem
