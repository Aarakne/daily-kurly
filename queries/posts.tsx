import api from '../api'

export interface Post {
  _id: string
  title: string
  likeCount: number
  content: Content
  images: string[]
  tags: string[]
  products: Product[]
  createdAt: string
}

interface Content {
  text: string
  images: string[]
}

interface Product {
  _id: string
  name: string
  brand: string
  image: string
  relatedProduct: Product
}

export const fetchPostDetail = async (
  postId: string | string[] | undefined,
): Promise<Post> => {
  const { data: post } = await api.get(`/post/${postId}`)

  return post
}

export const fetchMyPosts = async (): Promise<Post[]> => {
  const {
    data: { posts },
  } = await api.get(`/me/posts`)

  return posts
}

export const fetchLikedPosts = async (): Promise<Post[]> => {
  const {
    data: { likedPosts },
  } = await api.get(`/me/likedPosts`)

  return likedPosts
}
