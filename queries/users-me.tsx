import api from '../api'

export interface Me {
  id: number
  name: string
  profileImage: string
  likedPosts: object
  posts: number
  view: number
}

export const fetchMe = async (): Promise<Me> => {
  const {
    data: { me },
  } = await api.get('/users/me')

  return me
}
