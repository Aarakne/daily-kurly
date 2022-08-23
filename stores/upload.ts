import { atom } from 'recoil'

export interface ProductType {
  _id: string
  name: string
  brand: string
  image: string
}

export const selectedProductsState = atom<ProductType[]>({
  key: 'selected-products',
  default: [],
})
