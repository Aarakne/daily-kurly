import { atom } from 'recoil'

export const loggedInState = atom<boolean>({
  key: 'logged-in',
  default: false,
})
