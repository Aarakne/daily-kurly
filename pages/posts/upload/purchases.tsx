import styled from '@emotion/styled'
import { NextPage } from 'next'
import { useQuery } from 'react-query'
import api from '../../../api'
import Product, { ProductType } from '../../../components/posts/Product'
import Header from '../../../components/public/Header'

const Wrapper = styled.div`
  padding-top: 50px;
`

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Box = styled.div`
  width: 100%;
`

const Description = styled.div`
  width: 100%;
  padding: 10px;

  display: flex;
  justify-content: space-between;

  font-size: 14px;
  line-height: 20px;
  color: #aaa;
`

const AddButton = styled.button`
  width: 70px;

  font-weight: 600;
  color: #5f0080;
  background-color: #f5f5f5;

  border-radius: 5px;
`

const SubmitButton = styled.button`
  width: 230px;
  height: 40px;

  position: absolute;
  bottom: 60px;

  font-size: 16px;
  color: #fff;

  background-color: #5f0080;

  border-radius: 5px;
`

const Purchases: NextPage = () => {
  const { data, isSuccess } = useQuery(
    ['fetch-products'],
    async () => await api.get('/me/products'),
  )

  return (
    <Wrapper>
      <Header title="구매 내역" />
      <Form>
        <Description>
          <p>
            요리에 사용된 재료들을 구매내역에서 선택해주세요.
            <br />
            (최대 10개까지 선택 가능)
          </p>
        </Description>
        <Box>
          {isSuccess &&
            data.data.products?.map((product: ProductType) => (
              <Product key={product._id} product={product} />
            ))}
        </Box>
        <Description>
          <p>
            구매목록에 사용한 재료가 없나요?
            <br />
            검색을 통해 직접 추가해주세요.
          </p>
          <AddButton>추가</AddButton>
        </Description>
        <SubmitButton>선택 완료</SubmitButton>
      </Form>
    </Wrapper>
  )
}

export default Purchases
