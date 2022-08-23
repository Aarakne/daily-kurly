import styled from '@emotion/styled'
import { useEffect } from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import ArrowBackIcon from '../../assets/arrow-back-sm.svg'
import {
  category1sState,
  selectedCategory1State,
  selectedCategory2sState,
  selectedCategory2State,
} from '../../stores/categories'
import { isOpenedSheetState } from '../../stores/sheet'
import KoreanFoodIcon from '../../assets/korean-food.png'
import JapaneseFoodIcon from '../../assets/japanese-food.png'
import ItalianFoodIcon from '../../assets/italian-food.png'
import ChineseFoodIcon from '../../assets/chinese-food.png'
import OthersIcon from '../../assets/three-dots.svg'
import Image from 'next/image'

const IMAGE_SIZE = 80

const SelectCategory1 = styled.div`
  padding: 20px;

  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

const Category1 = styled.div`
  width: 30%;
  height: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;

  text-align: center;
  font-weight: 600;
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

  const category1s = useRecoilValue(category1sState)

  const setSelectedCategory2 = useSetRecoilState(selectedCategory2State)

  useEffect(() => {
    const category2s = category1s.find(
      (item) => item.tag === selectedCategory1,
    )?.category2
    if (category2s) setSelectedCategory2s(category2s)
  }, [category1s, selectedCategory1])

  const onSelectCategory1 = (category1: string) => {
    setSelectedCategory1(category1)
    setSelectedCategory2('')
  }

  const onSelectCategory2 = (category2: string) => {
    if (category2 === '') return
    setSelectedCategory2(category2)
    setIsOpendedSheet(false)
  }

  const getFoodIcon = (category: string) => {
    switch (category) {
      case '한식':
        return KoreanFoodIcon
      case '일식':
        return JapaneseFoodIcon
      case '중식':
        return ChineseFoodIcon
      case '양식':
        return ItalianFoodIcon
      default:
        return null
    }
  }

  return selectedCategory1 === '' ? (
    <SelectCategory1>
      {category1s?.map((category) => (
        <Category1
          key={category.tag}
          onClick={() => onSelectCategory1(category.tag)}
        >
          {getFoodIcon(category.tag) ? (
            <Image
              src={getFoodIcon(category.tag)}
              width={IMAGE_SIZE}
              height={IMAGE_SIZE}
              alt={category.tag}
            />
          ) : (
            <OthersIcon />
          )}
          {category.tag}
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
        {selectedCategory2s.map((category2) => (
          <Option
            key={category2.tag}
            onClick={() => onSelectCategory2(category2.tag)}
          >
            {category2.tag}
          </Option>
        ))}
      </Select>
    </SelectCategory2>
  )
}

export default CategorySelect
