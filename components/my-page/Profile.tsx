import styled from '@emotion/styled'
import { useMemo } from 'react'
import { useQuery } from 'react-query'
import { useRecoilValue } from 'recoil'
import { fetchMyPosts } from '../../queries/posts'
import { userState } from '../../stores/auth'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 10px;

  background-color: gray;
`

const ProfileContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  background-color: black;
`

const ProfileImageContainer = styled.div`
  width: 70px;
  height: 70px;

  background-color: lightblue;

  border-radius: 50px;
`

const Content = styled.div`
  flex: 1;

  margin-left: 20px;
  background-color: lightcyan;
`

const Name = styled.div`
  font-size: 18px;
  font-weight: bold;
`

const PostInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;

  background-color: lightgray;
`

const Profile = () => {
  const me = useRecoilValue(userState)
  // {grade: "purple"
  // name: "lee123"}

  const { data: posts } = useQuery(['fetchMyPost'], fetchMyPosts, {
    staleTime: 60 * 1000,
  })

  const likeCounts = useMemo(
    () => posts?.reduce((sum, curPost) => sum + curPost.likeCount, 0),
    [posts],
  )

  return (
    <Wrapper>
      <ProfileContainer>
        <ProfileImageContainer>
          {/* <Image src={me.profileImage} /> */}
        </ProfileImageContainer>
        <Content>
          <Name>{me?.name}</Name>
          <PostInfo>
            <div>게시글 {posts?.length}</div>
            <div>❤️ {likeCounts}</div>
            <div>팔로우 ?? </div>
          </PostInfo>
        </Content>
      </ProfileContainer>
    </Wrapper>
  )
}

export default Profile
