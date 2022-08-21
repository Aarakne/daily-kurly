import { atom } from 'recoil'

export const isOpenedSheetState = atom<boolean>({
  key: 'is-opened-option',
  default: true,
})

export const selectedCategory1State = atom<string>({
  key: 'selected-category-1',
  default: '',
})

export const selectedCategory2sState = atom<Array<string>>({
  key: 'selected-category-2s',
  default: [],
})
