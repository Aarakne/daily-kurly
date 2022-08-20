import api from '../api'

export interface Post {
  title: string
}

export const fetchMyPosts = async (
  userId: number | undefined,
): Promise<Post> => {
  const {
    data: { myPosts },
  } = await api.get(`/posts/${userId}`)

  return myPosts
}
