import api from '../api'

export interface Post {
  _id: string
  title: string
}

export const fetchPostDetail = async (
  postId: string | string[] | undefined,
): Promise<Post> => {
  const {
    data: { post },
  } = await api.get(`/posts/${postId}`)

  return post
}

export const fetchMyPosts = async (
  userId: number | undefined,
): Promise<Post[]> => {
  const {
    data: { myPosts },
  } = await api.get(`/posts/${userId}`)

  return myPosts
}
