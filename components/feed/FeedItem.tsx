import styled from '@emotion/styled'

const Wrapper = styled.div`
  max-width: 200px;

  // 임시
  height: 200px;

  flex-grow: 1;
  background-color: #f2f2f2;
`

const FeedItem = ({ feedItem }) => {
  return <Wrapper>{feedItem}</Wrapper>
}

export default FeedItem
