import styled from '@emotion/styled'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import ArrowBackIcon from '../../assets/arrow-back.svg'
import {
  category1sState,
  selectedCategory1State,
  selectedCategory2State,
} from '../../stores/sheet'

const SelectCategory1 = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

const Category1 = styled.div`
  width: 30%;
  height: 100px;
  flex-grow: 1;

  text-align: center;

  border: 1px solid grey;
`

const SelectCategory2 = styled.div``

const Title = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  gap: 5px;
  padding-left: 5px;

  border-bottom: 1px solid #eee;
`

const CategorySelect = () => {
  const [selectedCategory1, setSelectedCategory1] = useRecoilState(
    selectedCategory1State,
  )
  const category1s = useRecoilValue(category1sState)
  const setSelectedCategory2 = useSetRecoilState(selectedCategory2State)

  return selectedCategory1 === '' ? (
    <SelectCategory1>
      {category1s?.map((category) => (
        <Category1
          key={category}
          onClick={() => setSelectedCategory1(category)}
        >
          {category}
        </Category1>
      ))}
    </SelectCategory1>
  ) : (
    <SelectCategory2>
      <Title>
        <ArrowBackIcon onClick={() => setSelectedCategory1('')} />
        {selectedCategory1}
      </Title>
    </SelectCategory2>
  )
}

export default CategorySelect
