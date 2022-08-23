import { atom } from 'recoil'
import { Post } from '../queries/posts'

export const likedPostsState = atom<Post[]>({
  key: 'liked-posts',
  default: [],
})
