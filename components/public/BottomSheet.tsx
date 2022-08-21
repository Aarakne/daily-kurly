import styled from '@emotion/styled'
import { useState, ReactNode } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { isOpenedSheetState, selectedCategory1State } from '../../stores/sheet'
import IngredientOption from '../feed/IngredientOption'
import SituationOption from '../feed/SituationOption'
import DifficultyOption from '../feed/DifficultyOption'
import RecipeOption from '../feed/RecipeOption'

interface BottomSheetProps {
  title: string
  children: ReactNode
}

interface WrapperStyledType {
  isOpened: boolean
}

const Wrapper = styled.div<WrapperStyledType>`
  width: 100%;
  position: fixed;
  bottom: ${({ isOpened }) => (isOpened ? '0px' : '-100vh')};

  background-color: #fff;

  box-shadow: 0px 0px 12px rgba(30, 30, 30, 0.13);

  border-radius: 30px 30px 0px 0px;

  transition: all 0.5s;
`
const SheetHeader = styled.div`
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 600;
  letter-spacing: 0.05em;

  border-bottom: 2px solid #eee;
`

const Tab = styled.div`
  width: 40%;
  text-align: center;
`

const SheetBody = styled.div`
  min-height: 50vh;

  font-size: 15px;
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.15);
`

const BottomSheet = () => {
  const [isOpenedSheet, setIsOpendedSheet] =
    useRecoilState<boolean>(isOpenedSheetState)
  const selectedCategory1 = useRecoilValue(selectedCategory1State)

  const [selectedTab, setSelectedTab] = useState<string>('상황')

  return (
    <>
      {isOpenedSheet && <Overlay onClick={() => setIsOpendedSheet(false)} />}
      <Wrapper isOpened={isOpenedSheet}>
        <SheetHeader>
          {selectedCategory1 === '상황/난이도별' ? (
            <>
              <Tab onClick={() => setSelectedTab('상황')}>상황</Tab>
              <Tab onClick={() => setSelectedTab('난이도')}>난이도</Tab>
            </>
          ) : (
            selectedCategory1
          )}
        </SheetHeader>
        <SheetBody>
          {selectedCategory1 === '재료별' && <IngredientOption />}
          {selectedCategory1 === '상황/난이도별' &&
            (selectedTab === '상황' ? (
              <SituationOption />
            ) : (
              <DifficultyOption />
            ))}
          {selectedCategory1 === '음식분류별' && <RecipeOption />}
        </SheetBody>
      </Wrapper>
    </>
  )
}

export default BottomSheet
