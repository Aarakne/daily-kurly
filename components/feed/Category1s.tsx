import styled from '@emotion/styled'
import { useRecoilValue } from 'recoil'
import FilterIcon from '../../assets/filter.svg'
import { category1sState } from '../../stores/categories'
import Category1 from './Category1'

const Wrapper = styled.div`
  width: 100vw;
  padding: 4vw;

  display: flex;
  justify-content: center;
`

const Box = styled.div`
  width: 100%;
  max-width: 340px;

  display: flex;
  justify-content: center;
  gap: 15px;
`

const Category1s = () => {
  const category1s = useRecoilValue(category1sState)

  return (
    <Wrapper>
      <Box>
        {category1s?.map((category) => (
          <Category1 key={category.tag} categoryTitle={category.tag} />
        ))}
      </Box>
    </Wrapper>
  )
}

export default Category1s
