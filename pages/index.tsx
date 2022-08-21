import type { NextPage } from 'next'
import { useRouter } from 'next/router'
const Home: NextPage = () => {
  const router = useRouter()
  return (
    <>
      <div>피드</div>
      <div
        onClick={() => {
          router.push('/my-page')
        }}
      >
        My Daily
      </div>
    </>
  )
}

export default Home
