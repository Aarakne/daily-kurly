import styled from '@emotion/styled'
import Image from 'next/image'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import CheckedIcon from '../../assets/circle-checked.svg'
import UncheckedIcon from '../../assets/circle-empty.svg'
import { selectedProductsState } from '../../stores/upload'

const IMAGE_SIZE = 100

export interface ProductType {
  _id: string
  name: string
  brand: string
  image: string
}

interface ProductProps {
  product: ProductType
}

const Wrapper = styled.div`
  padding: 10px;
  position: relative;

  display: flex;

  border-bottom: 1px solid #eee;
`
const Info = styled.div`
  max-width: 210px;
  padding: 10px;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  display: flex;
  flex-direction: column;
  gap: 8px;
`

const Name = styled.div`
  font-size: 15px;
  font-weight: 500;
`

const Brand = styled.div`
  color: #aaa;
  font-size: 15px;
`

const Button = styled.button`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  padding: 10px;
`

const Product = ({ product }: ProductProps) => {
  const [selectedProducts, setSelectedProducts] = useRecoilState(
    selectedProductsState,
  )
  const [checked, setChecked] = useState<boolean>(
    !!selectedProducts.find((item) => item.id === product._id),
  )

  const onCheck = () => {
    if (!checked) {
      setSelectedProducts([
        ...selectedProducts,
        { id: product._id, image: product.image },
      ])
    } else {
      setSelectedProducts(
        selectedProducts.filter((item) => item.id !== product._id),
      )
    }
    setChecked((prev) => !prev)
  }

  return (
    <Wrapper onClick={onCheck}>
      <Image
        src={product.image}
        alt={product.name}
        width={IMAGE_SIZE}
        height={IMAGE_SIZE}
        style={{ borderRadius: 5 }}
      />
      <Info>
        <Name>{product.name}</Name>
        <Brand>{product.brand}</Brand>
      </Info>
      <Button>{checked ? <CheckedIcon /> : <UncheckedIcon />}</Button>
    </Wrapper>
  )
}

export default Product
