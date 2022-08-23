import { atom } from 'recoil'

export const isOpenedSheetState = atom<boolean>({
  key: 'is-opened-option',
  default: false,
})

export const category1sState = atom({
  key: 'category-1s',
  default: null,
})

export const category2sState = atom({
  key: 'category-2s',
  default: null,
})

export const selectedCategory1State = atom<string>({
  key: 'selected-category-1',
  default: '',
})

export const selectedCategory2State = atom<string>({
  key: 'selected-category-2',
  default: '',
})
