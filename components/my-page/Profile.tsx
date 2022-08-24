import styled from '@emotion/styled'
import { useMemo } from 'react'
import { useQuery } from 'react-query'
import { useRecoilValue } from 'recoil'
import { fetchMyPosts } from '../../queries/posts'
import { userState } from '../../stores/auth'
import ProfileIcon from '../../assets/profile.svg'

interface ProfileProps {
  postCounts: number
  likeCounts?: number
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 10px;

  border-bottom: 3px solid gray;
`

const ProfileContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
`

const ProfileImageContainer = styled.div`
  padding: 20px;

  border: 2px solid lightgray;
  border-radius: 50px;
`

const Content = styled.div`
  width: 70vw;
  margin-left: 20px;
`

const Name = styled.div`
  font-size: 20px;
  font-weight: bold;
`

const PostInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
`

const Profile = ({ postCounts, likeCounts }: ProfileProps) => {
  const me = useRecoilValue(userState)

  return (
    <Wrapper>
      <ProfileContainer>
        <ProfileImageContainer>
          <ProfileIcon />
        </ProfileImageContainer>
        <Content>
          <Name>{me?.name}</Name>
          <PostInfo>
            <div>게시글 {postCounts}</div>
            <div>❤️ {likeCounts}</div>
            <div>팔로우 ?? </div>
          </PostInfo>
        </Content>
      </ProfileContainer>
    </Wrapper>
  )
}

export default Profile
