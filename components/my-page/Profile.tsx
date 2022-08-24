import styled from '@emotion/styled'
import { useRecoilValue } from 'recoil'
import ProfileIcon from '../../assets/profile.svg'
import { userState } from '../../stores/auth'

interface ProfileProps {
  postCounts: number
  likeCounts?: number
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 10px 20px 20px;

  border-bottom: 3px solid #e5e5e5;
`

const ProfileContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
`

const ProfileImageContainer = styled.div`
  padding: 7px;
  border: 2px solid #e5e5e5;
  border-radius: 50px;
`

const Content = styled.div`
  width: 70vw;
  margin-left: 20px;
`

const Name = styled.div`
  font-size: 16px;
  font-weight: bold;
`

const PostInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 5px;

  font-size: 14px;
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
          <Name>{me?.name || '닉네임'}</Name>
          <PostInfo>
            <div>게시글 {postCounts}</div>
            <div>좋아요 {likeCounts}</div>
            <div>팔로우 2 </div>
          </PostInfo>
        </Content>
      </ProfileContainer>
    </Wrapper>
  )
}

export default Profile
