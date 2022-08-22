import styled from '@emotion/styled'
import { ReactNode } from 'react'
import FeedItem from './FeedItem'

interface FeedItemsProps {
  children: ReactNode[]
}

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

const FeedItems = ({ children }: FeedItemsProps) => {
  return (
    <Wrapper>
      <Box>{children}</Box>
    </Wrapper>
  )
}

export default FeedItems
