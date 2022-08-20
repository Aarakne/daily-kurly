import type { NextPage } from 'next'
import Container from '../components/public/Container'

const MyPage: NextPage = () => {
  return (
    <Container
      headerLeft="<"
      headerTitle="My Kurly"
      headerRight=""
      //   headerBackgroundColor="#5f0080"
    >
      마이페이지
    </Container>
  )
}

export default MyPage
