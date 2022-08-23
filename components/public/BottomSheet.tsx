import styled from '@emotion/styled'
import { ReactNode } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import {
  selectedCategory1State,
  selectedCategory2State,
} from '../../stores/categories'
import { isOpenedSheetState } from '../../stores/sheet'

interface BottomSheetProps {
  children: ReactNode
}

interface WrapperStyledType {
  isOpened: boolean
}

const Wrapper = styled.div<WrapperStyledType>`
  width: 100%;
  position: fixed;
  bottom: ${({ isOpened }) => (isOpened ? '0px' : '-100vh')};
  z-index: 200;

  background-color: #fff;

  box-shadow: 0px 0px 12px rgba(30, 30, 30, 0.13);

  border-radius: 30px 30px 0px 0px;

  transition: all 0.5s;
`
const Header = styled.div`
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 600;
  letter-spacing: 0.05em;

  border-bottom: 2px solid #eee;
`

const Body = styled.div`
  min-height: 30vh;

  font-size: 15px;
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.15);
`

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

const BottomSheet = ({ children }: BottomSheetProps) => {
  const [isOpenedSheet, setIsOpendedSheet] =
    useRecoilState<boolean>(isOpenedSheetState)
  const setSelectedCategory1 = useSetRecoilState(selectedCategory1State)
  const setSelectedCategory2 = useSetRecoilState(selectedCategory2State)

  const onCloseSheet = () => {
    setIsOpendedSheet(false)
    setSelectedCategory1('')
    setSelectedCategory2('')
  }

  return (
    <>
      {isOpenedSheet && <Overlay onClick={onCloseSheet} />}
      <Wrapper isOpened={isOpenedSheet}>
        <Header>요리 분류</Header>
        <Body>{children}</Body>
      </Wrapper>
    </>
  )
}

export default BottomSheet
