import { useSetRecoilState } from 'recoil'
import { category1sState, category2sState } from '../stores/sheet'
import api from '../api'

interface CategoryType {
  _id: string
  tag: string
}

const useCategories = () => {
  const setCategory1s = useSetRecoilState(category1sState)
  const setCategory2s = useSetRecoilState(category2sState)

  const getCategories = async () => {
    const {
      data: { category1s, category2s },
    } = await api.get('/meta/posts/categories')

    setCategory1s(category1s.map((item: CategoryType) => item.tag))
    setCategory2s(category2s.map((item: CategoryType) => item.tag))
  }

  return getCategories
}

export default useCategories
