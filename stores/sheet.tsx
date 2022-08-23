import { atom } from 'recoil'

export const isOpenedSheetState = atom<boolean>({
  key: 'is-opened-option',
  default: false,
})

export const category1sState = atom<string[]>({
  key: 'category-1s',
  default: [],
})

export const category2sState = atom<string[]>({
  key: 'category-2s',
  default: [],
})

export const selectedCategory1sState = atom<string[]>({
  key: 'selected-category-1s',
  default: [],
})

export const selectedCategory1State = atom<string>({
  key: 'selected-category-1',
  default: '',
})

export const selectedCategory2State = atom<string>({
  key: 'selected-category-2',
  default: '',
})
