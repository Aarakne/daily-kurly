import api from '../api'
import { Post } from './posts'
export interface Me {
  id: number
  name: string
  profileImage: string
  likedPosts: Post[]
  posts: number
  view: number
}

export const fetchMe = async (): Promise<Me> => {
  const {
    data: { me },
  } = await api.get('/users/me')

  return me
}
