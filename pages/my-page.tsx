import type { NextPage } from 'next'
import Container from '../components/public/Container'
import Profile from '../components/my-page/Profile'
import LikedProducts from '../components/my-page/LikedProducts'

const MyPage: NextPage = () => {
  return (
    <Container
      headerLeft="<"
      headerTitle="My Daily"
      headerRight=""
      //   headerBackgroundColor="#5f0080"
    >
      <Profile />
      <LikedProducts />
      {/* <Curation/> */}
    </Container>
  )
}

export default MyPage
