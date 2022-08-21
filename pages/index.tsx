import styled from '@emotion/styled'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import Category1s from '../components/feed/Category1s'
import Category2s from '../components/feed/Category2s'
import FeedItems from '../components/feed/FeedItems'
import IngredientOption from '../components/feed/IngredientOption'
import BottomSheet from '../components/public/BottomSheet'
import FloatingButtons from '../components/public/FloatingButtons'
import { isOpenedSheetState, selectedCategory1State } from '../stores/sheet'

const CATEGORY_1S = ['재료별', '상황/난이도별', '음식분류별']

const Wrapper = styled.div`
  position: relative;
`

const Home: NextPage = () => {
  const isOpenedSheet = useRecoilValue(isOpenedSheetState)

  useEffect(() => {
    if (isOpenedSheet) document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpenedSheet])

  return (
    <Wrapper>
      <Category1s />
      <Category2s />
      <FeedItems />
      <FloatingButtons />
      <BottomSheet />
    </Wrapper>
  )
}

export default Home
