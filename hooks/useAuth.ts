import api from '../api'

const useAuth = () => {
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

    // login success || already logged in
    return res.status === 200 || res.status === 403
  }

  return { signUp, login }
}

export default useAuth
