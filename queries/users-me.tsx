import api from '../api'

export interface Me {
  id: number
  name: string
  profileImage: string
  likedPosts: Post[]
  posts: number
  view: number
}

interface Post {
  title: string
}

export const fetchMe = async (): Promise<Me> => {
  const {
    data: { me },
  } = await api.get('/users/me')

  return me
}
