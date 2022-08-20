import type { NextPage } from 'next'
import Category1s from '../components/feed/category1s'
import Category2s from '../components/feed/category2s'

const Home: NextPage = () => {
  return (
    <div>
      피드
      <Category1s />
      <Category2s />
    </div>
  )
}

export default Home
