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
    grade: 'purple',
    profileImage: 'ImageLink',
    likedPosts: [
      { _id: '1', title: 'postId_1' },
      { _id: '2', title: 'postId_2' },
      { _id: '3', title: 'postId_3' },
      { _id: '4', title: 'postId_4' },
      { _id: '5', title: 'postId_5' },
      { _id: '6', title: 'postId_6' },
      { _id: '7', title: 'postId_7' },
      { _id: '8', title: 'postId_8' },
      { _id: '9', title: 'postId_9' },
      { _id: '10', title: 'postId_10' },
    ],
    posts: 13,
    view: 1343,
  }
}

export default useMe
