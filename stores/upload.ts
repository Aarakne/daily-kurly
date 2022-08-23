import { atom } from 'recoil'

interface SelectedProductType {
  id: string
  image: string
}

export const selectedProductsState = atom<SelectedProductType[]>({
  key: 'selected-products',
  default: [],
})
