import styled from '@emotion/styled'
import { useMemo } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import {
  category1sState,
  selectedCategory1sState,
} from '../../stores/categories'

interface Category2Props {
  categoryTitle: string
}

interface BoxStyledType {
  isSelected: boolean
}

const Box = styled.div<BoxStyledType>`
  height: 25px;
  padding: 0 12px;

  display: flex;
  align-items: center;
  flex-shrink: 0;

  font-size: 14px;
  color: #afabab;

  border: 1px solid #afabab;
  border-radius: 3px;

  ${({ isSelected }) => isSelected && `background-color: #5f0080; color: #fff;`}
`

const Category1 = ({ categoryTitle }: Category2Props) => {
  const [selectedCategory1s, setSelectedCategory1s] = useRecoilState(
    selectedCategory1sState,
  )
  const category1s = useRecoilValue(category1sState)

  const isSelected = useMemo(() => {
    return !!selectedCategory1s.find((item) => item === categoryTitle)
  }, [selectedCategory1s])

  const onSelect = () => {
    if (isSelected) {
      setSelectedCategory1s(
        selectedCategory1s.filter((item) => item !== categoryTitle),
      )
    } else {
      setSelectedCategory1s([...selectedCategory1s, categoryTitle])
    }
  }

  return (
    <Box isSelected={isSelected} onClick={onSelect}>
      {categoryTitle}
    </Box>
  )
}

export default Category1
