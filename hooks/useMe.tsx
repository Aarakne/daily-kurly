import { useQuery } from 'react-query'
import { fetchMe, Me } from '../queries/users-me'
// import { useTokenValue } from './useToken'

const useMe = (): Me | null => {
  //   const token = useTokenValue()
  const token = 'token'

  const { data, isSuccess } = useQuery(['fetchMe', token], fetchMe, {
    enabled: Boolean(token),
  })

  // return isSuccess ? data : null
  return {
    id: 394662,
    name: '전인화아',
    profileImage: 'ImageLink',
    likedPosts: [
      { title: 'postId_1' },
      { title: 'postId_2' },
      { title: 'postId_3' },
    ],
    posts: 13,
    view: 1343,
  }
}

export default useMe
