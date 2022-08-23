import { atom } from 'recoil'

// post/upload 바텀시트 상태
export const isOpenedSheetState = atom<boolean>({
  key: 'is-opened-option',
  default: false,
})
