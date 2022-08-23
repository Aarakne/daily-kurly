import { atom } from 'recoil'

// feed 페이지에서 사용
export const category1sState = atom<string[]>({
  key: 'category-1s',
  default: [],
})

// feed, post/upload 페이지에서 사용
export const category2sState = atom<string[]>({
  key: 'category-2s',
  default: [],
})

// feed 페이지에서 사용
export const selectedCategory1sState = atom<string[]>({
  key: 'selected-category-1s',
  default: [],
})

// post/upload 페이지에서 사용
export const selectedCategory2sState = atom<string[]>({
  key: 'selected-category-2s',
  default: [],
})

// post/upload 페이지에서 사용
export const selectedCategory1State = atom<string>({
  key: 'selected-category-1',
  default: '',
})

// post/upload 페이지에서 사용
export const selectedCategory2State = atom<string>({
  key: 'selected-category-2',
  default: '',
})
