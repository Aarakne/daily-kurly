import styled from '@emotion/styled'
import Image from 'next/image'
import { useState } from 'react'
import CheckedIcon from '../../assets/circle-checked.svg'
import UncheckedIcon from '../../assets/circle-empty.svg'

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
  const [checked, setChecked] = useState<boolean>(false)

  const onCheck = () => {
    setChecked(true)
  }

  const onUncheck = () => {
    setChecked(false)
  }

  return (
    <Wrapper>
      <Image
        src={product.image}
        alt={product.name}
        width={IMAGE_SIZE}
        height={IMAGE_SIZE}
      />
      <Info>
        <Name>{product.name}</Name>
        <Brand>{product.brand}</Brand>
      </Info>
      <Button>
        {checked ? (
          <CheckedIcon onClick={onUncheck} />
        ) : (
          <UncheckedIcon onClick={onCheck} />
        )}
      </Button>
    </Wrapper>
  )
}

export default Product
