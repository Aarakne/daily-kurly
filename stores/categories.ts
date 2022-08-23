import { atom, selector } from 'recoil'

interface CategoryType {
  tag: string
}

interface Category1Type {
  tag: string
  category2: CategoryType[]
}

// feed 페이지에서 사용
export const category1sState = atom<Category1Type[]>({
  key: 'category-1s',
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

// feed, post/upload 페이지에서 사용
export const category2sState = selector<CategoryType[]>({
  key: 'category-2s',
  get: ({ get }) => {
    const category1Tag = get(selectedCategory1State)
    const category1s = get(category1sState)

    const category1 = category1s.find((item) => item.tag === category1Tag)

    return category1?.category2 || []
  },
})
