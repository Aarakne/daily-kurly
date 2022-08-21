import type { NextPage } from 'next'
import Category1s from '../components/feed/category1s'
import Category2s from '../components/feed/category2s'
import FeedItems from '../components/feed/FeedItems'
import FloatingButton from '../components/public/FloatingButton'

const Home: NextPage = () => {
  return (
    <div>
      <Category1s />
      <Category2s />
      <FeedItems />
      <FloatingButton />
    </div>
  )
}

export default Home
