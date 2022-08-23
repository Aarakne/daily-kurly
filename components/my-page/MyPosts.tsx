import styled from '@emotion/styled'
import { Post } from '../../queries/posts'
import FeedItem from '../feed/FeedItem'
import FeedItems from '../feed/FeedItems'

const Wrapper = styled.div``

const Title = styled.div`
  padding: 20px;

  font-size: 18px;
  font-weight: bold;
`

const MyPosts = ({ posts }: { posts: Post[] }) => {
  return (
    <Wrapper>
      <Title>내 게시글 🥘</Title>
      <FeedItems>
        {posts.map((post, index) => (
          <FeedItem
            key={post._id}
            id={post._id}
            image={post.content.images[0]}
          />
        ))}
      </FeedItems>
    </Wrapper>
  )
}

export default MyPosts
