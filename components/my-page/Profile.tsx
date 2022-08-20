import styled from '@emotion/styled'
import useMe from '../../hooks/useMe'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 10px;

  background-color: gray;
`

const ProfileContainer = styled.div`
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
  background-color: lightcyan;
`

const Name = styled.div`
  background-color: lightcoral;
`
const PostInfo = styled.div`
  padding-top: 10px;

  background-color: lightgray;
`

const PostSetting = styled.div`
  display: flex;
  align-items: center;
  background-color: lightyellow;
`

const Profile = () => {
  const me = useMe()

  return (
    me && (
      <Wrapper>
        <ProfileContainer>
          <ProfileImageContainer>
            {/* <Image src={me.profileImage} /> */}
          </ProfileImageContainer>
          <Content>
            <Name>{me.name}</Name>
            <PostInfo>
              게시글 {me.posts}개 | 조회수 {me.view}회
            </PostInfo>
          </Content>
        </ProfileContainer>
        <PostSetting>게시물 관리 {'>'}</PostSetting>
      </Wrapper>
    )
  )
}

export default Profile
