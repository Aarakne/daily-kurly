import styled from '@emotion/styled'
import { useSetRecoilState } from 'recoil'
import { isOpenedSheetState, selectedCategory1State } from '../../stores/sheet'

interface Category1Props {
  categoryTitle: string
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`

const Box = styled.div`
  width: 70px;
  height: 70px;

  background-color: #f2f2f2;

  border-radius: 8px;
`

const Title = styled.p`
  font-size: 13.5px;
`

const Category1 = ({ categoryTitle }: Category1Props) => {
  const setIsOpendedSheet = useSetRecoilState(isOpenedSheetState)
  const setSelectedCategory1 = useSetRecoilState(selectedCategory1State)

  const onClickCategory = () => {
    console.log('clicked', categoryTitle)
    setIsOpendedSheet(true)
    setSelectedCategory1(categoryTitle)
  }

  return (
    <Wrapper onClick={onClickCategory}>
      <Box />
      <Title>{categoryTitle}</Title>
    </Wrapper>
  )
}

export default Category1
