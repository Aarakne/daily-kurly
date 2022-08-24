import styled from '@emotion/styled'
import Image from 'next/image'
import { useRouter } from 'next/router'

const IMAGE_SIZE = 100

export interface ProductType {
  _id: string
  name: string
  brand: string
  image: string
  sellingPrice: number
}

interface UsedProductProps {
  product: ProductType
  isRelated?: boolean
}

const Wrapper = styled.div`
  position: relative;
  width: 300px;

  display: flex;
  flex-shrink: 0;

  justify-content: space-between;

  margin-right: 10px;
  padding: 10px;

  border: 1px solid gray;
  border-radius: 10px;
`

const Content = styled.div`
  display: flex;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-left: 10px;
`

const Name = styled.div`
  font-size: 18px;
  font-weight: bold;
`

const Brand = styled.div`
  padding-top: 10px;
`

const Price = styled.div`
  color: red;
`

const LikeButtonContainer = styled.div`
  display: flex;
  align-items: center;

  padding-left: 10px;
`

const LikeButton = styled.div``

const RelatedTag = styled.div`
  position: absolute;
  top: -10px;
  left: -5px;

  font-size: 12px;
  color: white;

  padding: 5px 10px;

  background-color: black;

  border-radius: 5px;

  z-index: 1;
`

const UsedProduct = ({ product, isRelated }: UsedProductProps) => {
  const router = useRouter()

  return (
    <Wrapper
      onClick={() => {
        router.push(`/products/${product._id}`)
      }}
    >
      {isRelated && <RelatedTag>비슷한</RelatedTag>}
      <Content>
        <Image
          src={product.image}
          alt={product.name}
          width={IMAGE_SIZE}
          height={IMAGE_SIZE}
        />
        <Info>
          <Name>{product.name}</Name>
          <Brand>{product.brand}</Brand>
          <Price>{product.sellingPrice.toLocaleString('ko-KR')}</Price>
        </Info>
      </Content>

      <LikeButtonContainer>
        <LikeButton>❤️</LikeButton>
      </LikeButtonContainer>
    </Wrapper>
  )
}

export default UsedProduct
