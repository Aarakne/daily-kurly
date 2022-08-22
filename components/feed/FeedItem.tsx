import styled from '@emotion/styled'

const Wrapper = styled.div`
  // 임시
  height: 200px;

  flex-grow: 1;
  background-color: #f2f2f2;
`

const FeedItem = ({ feedItem }) => {
  return <Wrapper>{feedItem}</Wrapper>
}

export default FeedItem
