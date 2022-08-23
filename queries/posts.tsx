import api from '../api'

export interface Post {
  _id: string
  title: string
  likeCount: number
}

export const fetchPostDetail = async (
  postId: string | string[] | undefined,
): Promise<Post> => {
  const {
    data: { post },
  } = await api.get(`/posts/${postId}`)

  return post
}

export const fetchMyPosts = async (): Promise<Post[]> => {
  const {
    data: { posts },
  } = await api.get(`/me/posts`)

  console.log(posts)
  return posts
}
