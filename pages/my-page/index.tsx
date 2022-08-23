import type { NextPage } from 'next'
import Container from '../../components/public/Container'
import Profile from '../../components/my-page/Profile'
import LikedProducts from '../../components/my-page/LikedProducts'
import Curation from '../../components/my-page/Curation'

const MyPage: NextPage = () => {
  return (
    <Container headerTitle="My Daily">
      <Profile />
      <LikedProducts />
      <Curation />
    </Container>
  )
}

export default MyPage
