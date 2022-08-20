import type { NextPage } from 'next'
import styled from '@emotion/styled'
import Container from '../../components/public/Container'
import { useRouter } from 'next/router'
// import { fetchMyPosts } from '../../queries/posts'
import useMe from '../../hooks/useMe'
// import { useQuery } from 'react-query'

const Wrapper = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-row-gap: 10px;
  place-items: center;

  background-color: lightsteelblue;
`

const PostContainer = styled.div`
  width: 100px;
  height: 100px;

  background-color: lightblue;
`

const PostSetting: NextPage = () => {
  const router = useRouter()
  const me = useMe()

  //   const { data: myPosts } = useQuery(
  //     ['fetchMyPosts', me?.id],
  //     () => fetchMyPosts(me?.id),
  //     { enabled: Boolean(me?.id), staleTime: 60 * 60 * 1000 },
  //   )

  // 임시
  const tempMyPosts = [
    { _id: '1', title: 'postId_1' },
    { _id: '2', title: 'postId_2' },
    { _id: '3', title: 'postId_3' },
    { _id: '4', title: 'postId_4' },
    { _id: '5', title: 'postId_5' },
    { _id: '6', title: 'postId_6' },
    { _id: '7', title: 'postId_7' },
    { _id: '8', title: 'postId_8' },
    { _id: '9', title: 'postId_9' },
    { _id: '10', title: 'postId_10' },
  ]

  return (
    <Container headerLeft="<" headerTitle="게시물 관리" headerRight="">
      <Wrapper>
        {tempMyPosts.map((post, index) => (
          <PostContainer
            key={index}
            onClick={() => router.push(`/posts/edit/${post._id}`)}
          >
            {/* <Image src={post.ImageUrl}/> */}
          </PostContainer>
        ))}
      </Wrapper>
    </Container>
  )
}

export default PostSetting
