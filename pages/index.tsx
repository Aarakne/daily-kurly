import type { NextPage } from 'next'
import Container from '../components/public/Container'

const Home: NextPage = () => {
  return (
    <Container
      headerLeft=""
      headerTitle="Daily Kurly"
      headerRight="My"
      headerBackgroundColor="#5f0080"
    >
      피드
    </Container>
  )
}

export default Home
