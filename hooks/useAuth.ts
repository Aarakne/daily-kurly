import { useSetRecoilState } from 'recoil'
import api from '../api'
import { userState } from '../stores/auth'

const useAuth = () => {
  const setUserState = useSetRecoilState(userState)

  const signUp = async () => {
    const res = await api.post('/auth/signup', {
      username: process.env.NEXT_PUBLIC_USER_NAME,
      password: process.env.NEXT_PUBLIC_PASSWORD,
    })
    return res.status === 200
  }

  const login = async () => {
    const res = await api.post('/auth/login', {
      username: process.env.NEXT_PUBLIC_USER_NAME,
      password: process.env.NEXT_PUBLIC_PASSWORD,
    })

    if (res.status === 200) {
      const { name, grade } = res.data
      setUserState({
        name,
        grade,
      })
    }

    // login success || already logged in
    return res.status === 200 || res.status === 403
  }

  return { signUp, login }
}

export default useAuth
