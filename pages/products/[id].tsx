import { NextPage } from 'next'
import styled from '@emotion/styled'
import Header from '../../components/public/Header'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { fetchProduct } from '../../queries/products'
import Image from 'next/image'

const IMAGE_WIDTH = 200
const IMAGE_HEIGHT = 150

const Content = styled.div`
  padding: 50px 10px 0;

  display: flex;
  flex-direction: column;

  color: #323232;
`

const Box = styled.div`
  padding-top: 10px;
`

const ProductInfo = styled.div`
  padding: 15px;

  border-bottom: 1px solid #f5f5f5;
`

const InfoHeader = styled.div`
  font-weight: 600;
  padding-bottom: 10px;
`

const Info = styled.div`
  display: flex;
  font-size: 14.5px;
  line-height: 30px;
`

const Label = styled.div`
  width: 120px;

  flex-shrink: 0;

  color: #6c6c6c;
`

const Title = styled.p`
  padding: 10px 0;
  font-size: 17px;
  font-weight: 600;
`

const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 800;
`

const DiscountRate = styled.div`
  color: #fb622d;
`

const SellingPrice = styled.div`
  font-size: 17px;
  font-weight: 700;
`

const Products: NextPage = () => {
  const router = useRouter()

  const {
    query: { id: productId },
  } = router

  const { data: product } = useQuery(['product', productId], () =>
    fetchProduct(productId),
  )

  const { data: relatedProduct } = useQuery(
    ['related-product', product?.relatedProduct],
    () => fetchProduct(product?.relatedProduct),
  )

  console.log(product)

  if (!product) return <div>로딩 중이에요</div>

  return (
    <div>
      <Header title={product.name} />
      <Content>
        <Image
          src={product.image}
          width={IMAGE_WIDTH}
          height={IMAGE_HEIGHT}
          layout="responsive"
          alt={product.name}
        />
        <ProductInfo>
          <Title>{product.name}</Title>
          <Price>
            <DiscountRate>{product.discountRate}%</DiscountRate>
            <SellingPrice>{product.sellingPrice}</SellingPrice>
          </Price>
        </ProductInfo>
        <ProductInfo>
          <Info>
            <Label>배송</Label>
            {product.delivery ? '샛별배송' : '판매자배송'}
          </Info>
          <Info>
            <Label>판매자</Label>
            {product.brand}
          </Info>
        </ProductInfo>
        <ProductInfo>
          <InfoHeader>상품정보</InfoHeader>
          <Info>
            <Label>포장타입</Label>
            {product.packingType}
          </Info>
          <Info>
            <Label>판매단위</Label>
            {product.sellingUnit}
          </Info>
          <Info>
            <Label>중량/용량</Label>
            {product.quantity}
          </Info>
          <Info>
            <Label>알레르기정보</Label>
            {product.allergy}
          </Info>
          <Info>
            <Label>유통기한정보</Label>
            {product.expiration}
          </Info>
        </ProductInfo>
        {relatedProduct && (
          <ProductInfo>
            <InfoHeader>이 상품은 어때요?</InfoHeader>
            <Box>
              <Image
                src={relatedProduct.image}
                width={80}
                height={80}
                alt={relatedProduct.name}
              />
            </Box>
          </ProductInfo>
        )}
      </Content>
    </div>
  )
}

export default Products
