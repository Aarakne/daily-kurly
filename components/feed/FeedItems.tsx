import styled from '@emotion/styled'
import { useRouter } from 'next/router'

const FEED_ITEMS_MOCKUP = Array(30)
  .fill(0)
  .map((_, i) => i)

const Wrapper = styled.div`
  padding: 4.5vw;
  display: flex;
  justify-content: center;

  overflow: hidden;
`

const Box = styled.div`
  width: 100%;
  max-width: 768px;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(141px, 1fr));
  gap: 15px;
`

const FeedItem = styled.div`
  // 임시
  height: 200px;

  flex-grow: 1;
  background-color: #f2f2f2;
`

const FeedItems = () => {
  const router = useRouter()

  return (
    <Wrapper>
      <Box>
        {FEED_ITEMS_MOCKUP.map((feedItem, index) => (
          <FeedItem
            onClick={() => {
              router.push(`./posts/${feedItem}`)
            }}
            key={index}
          >
            {feedItem}
          </FeedItem>
        ))}
      </Box>
    </Wrapper>
  )
}

export default FeedItems
