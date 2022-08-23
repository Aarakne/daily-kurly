import styled from '@emotion/styled'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import ArrowBackIcon from '../../assets/arrow-back-sm.svg'
import { isOpenedSheetState } from '../../stores/sheet'
import {
  category1sState,
  selectedCategory1State,
  selectedCategory2sState,
  selectedCategory2State,
} from '../../stores/categories'

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
  gap: 10px;
  padding-left: 10px;

  font-weight: 600;

  border-bottom: 1px solid #eee;
`

const Select = styled.div`
  text-align: center;
`

const Option = styled.div`
  height: 30px;
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom: 1px solid #eee;

  &:hover {
    background-color: #f5f5f5;
    color: #5f0080;
  }
`

const CategorySelect = () => {
  const setIsOpendedSheet = useSetRecoilState(isOpenedSheetState)
  const [selectedCategory1, setSelectedCategory1] = useRecoilState(
    selectedCategory1State,
  )
  const [selectedCategory2s, setSelectedCategory2s] = useRecoilState(
    selectedCategory2sState,
  )

  const setSelectedCategory2 = useSetRecoilState(selectedCategory2State)

  const category1s = useRecoilValue(category1sState)

  const category2s =
    selectedCategory2s.length > 0 ? selectedCategory2s : ['베이커리', '음청류']

  const onSelectCategory1 = (category1: string) => {
    setSelectedCategory1(category1)
    setSelectedCategory2('')
  }

  const onSelectCategory2 = (category2: string) => {
    if (category2 === '') return
    setSelectedCategory2(category2)
    setIsOpendedSheet(false)
  }

  return selectedCategory1 === '' ? (
    <SelectCategory1>
      {category1s?.map((category) => (
        <Category1 key={category} onClick={() => onSelectCategory1(category)}>
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
      <Select>
        {category2s.map((category2) => (
          <Option key={category2} onClick={() => onSelectCategory2(category2)}>
            {category2}
          </Option>
        ))}
      </Select>
    </SelectCategory2>
  )
}

export default CategorySelect
