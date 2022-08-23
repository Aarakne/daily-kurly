import { useSetRecoilState } from 'recoil'
import { category1sState } from '../stores/categories'
import api from '../api'

const useCategories = () => {
  const setCategory1s = useSetRecoilState(category1sState)

  const getCategories = async () => {
    const {
      data: { categories },
    } = await api.get('/meta/posts/categories')

    setCategory1s(categories)
  }

  return getCategories
}

export default useCategories
