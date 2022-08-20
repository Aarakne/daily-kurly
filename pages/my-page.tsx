import type { NextPage } from 'next'
import Container from '../components/public/Container'
import Profile from '../components/my-page/Profile'

const MyPage: NextPage = () => {
  return (
    <Container
      headerLeft="<"
      headerTitle="My Kurly"
      headerRight=""
      //   headerBackgroundColor="#5f0080"
    >
      <Profile />
      {/* <LikedProducts/> */}
      {/* <Curation/> */}
    </Container>
  )
}

export default MyPage
