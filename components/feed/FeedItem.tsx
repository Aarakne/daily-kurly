import styled from '@emotion/styled'
import Image from 'next/image'

interface FeedItemProps {
  feedItem: string
}

const Wrapper = styled.div`
  flex-grow: 1;
  background-color: #f2f2f2;
`

const FeedItem = ({ feedItem }: FeedItemProps) => {
  const url = feedItem.replace(
    's3://daily-kurly/',
    'https://daily-kurly.s3.ap-northeast-2.amazonaws.com/',
  )

  return (
    <Wrapper>
      <Image
        src={url}
        width={100}
        height={100}
        layout="responsive"
        alt="feed item"
      />
    </Wrapper>
  )
}

export default FeedItem
