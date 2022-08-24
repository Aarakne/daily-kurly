import { NextPage } from 'next'
import styled from '@emotion/styled'
import Header from '../../components/public/Header'
import { useRouter } from 'next/router'
import { useMutation, useQuery } from 'react-query'
import { fetchProduct, postPurchaseProduct } from '../../queries/products'
import Image from 'next/image'
import UnlikedIcon from '../../assets/heart-empty.svg'
import { commaPrice } from '../../lib/utils'

const IMAGE_WIDTH = 200
const IMAGE_HEIGHT = 150

const Wrapper = styled.div`
  position: relative;
`

const Content = styled.div`
  padding: 50px 10px 0;

  display: flex;
  flex-direction: column;

  color: #323232;
`

const Box = styled.div`
  padding-top: 10px;

  display: flex;

  cursor: pointer;
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
const RelatedProductInfo = styled.div`
  padding: 5px 12px;
  font-size: 15px;
`

const Name = styled.div`
  padding-bottom: 5px;

  font-weight: 600;
`

const BottomTab = styled.div`
  width: 100vw;
  height: 55px;

  padding: 3px 20px;

  position: fixed;
  bottom: 0;

  display: flex;
  align-items: center;
  gap: 5px;

  background-color: #fff;
`

const LikeButton = styled.button`
  height: 80%;

  display: flex;
  align-items: center;

  border: 1px solid #aaa;
  border-radius: 5px;
`

const PurchaseButton = styled.button`
  width: 100%;
  height: 80%;

  font-size: 16px;
  color: #fff;

  background-color: #5f0080;

  border-radius: 5px;

  cursor: pointer;
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

  const { mutate: purchaseProduct } = useMutation(
    ['purchase-product', productId],
    () => postPurchaseProduct(productId),
    {
      onSuccess: () => alert('구매 완료했습니다.'),
    },
  )

  const onPurchase = () => {
    purchaseProduct()
  }

  if (!product) return <div>로딩 중이에요</div>

  return (
    <Wrapper>
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
            <SellingPrice>{commaPrice(product.sellingPrice)}</SellingPrice>
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
            <Box onClick={() => router.push(`/products/${relatedProduct._id}`)}>
              <Image
                src={relatedProduct.image}
                width={100}
                height={100}
                alt={relatedProduct.name}
              />
              <RelatedProductInfo>
                <Name>{relatedProduct.name}</Name>
                <Price>{commaPrice(relatedProduct.sellingPrice)}</Price>
              </RelatedProductInfo>
            </Box>
          </ProductInfo>
        )}
      </Content>
      <BottomTab>
        <LikeButton>
          <UnlikedIcon />
        </LikeButton>
        <PurchaseButton onClick={onPurchase}>구매하기</PurchaseButton>
      </BottomTab>
    </Wrapper>
  )
}

export default Products
