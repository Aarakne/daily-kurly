import api from '../api'
import { QueryStringType } from '../types'

export const fetchProduct = async (productId: QueryStringType) => {
  const {
    data: { product },
  } = await api.get(`/product/details/${productId}`)

  return product
}
