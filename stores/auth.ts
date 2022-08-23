import { atom } from 'recoil'

interface UserStateType {
  name: string
  grade: string
}

export const loggedInState = atom<boolean>({
  key: 'logged-in',
  default: false,
})

export const userState = atom<UserStateType | null>({
  key: 'user',
  default: null,
})
