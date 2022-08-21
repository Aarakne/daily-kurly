import styled from '@emotion/styled'

const RECIPES_SORT = [
  [
    '고기',
    '구이',
    '국,탕',
    '국수',
    '기타',
    '만두',
    '면',
    '밥',
    '볶음',
    '전,적,튀김',
    '조림',
    '죽',
    '찌개',
    '찜',
    '탕',
    '패스트푸드',
    '회',
  ],
  ['나물', '마른찬', '젓갈'],
  ['베이커리', '음청류'],
]

const Wrapper = styled.div`
  height: 100%;

  padding: 20px 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const Header = styled.div`
  width: 100%;
  height: 25px;

  text-align: left;
  font-weight: 600;
`

const RadioButtonWrapper = styled.div`
  width: 100%;

  margin-bottom: 20px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 20vw;
`

const Box = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

const RadioButton = styled.div`
  width: 18px;
  height: 18px;

  border: 2px solid #e7e6e6;
  border-radius: 100%;
`

const SetButton = styled.button`
  width: 200px;
  height: 32px;

  margin-top: 20px;

  color: #fff;

  background-color: #5f0080;

  border-radius: 8px;
`

const RecipeOption = () => {
  return (
    <Wrapper>
      <Header>식사류</Header>
      <RadioButtonWrapper>
        {RECIPES_SORT[0].map((name) => (
          <Box key={name}>
            {name}
            <RadioButton />
          </Box>
        ))}
      </RadioButtonWrapper>

      <Header>반찬류</Header>
      <RadioButtonWrapper>
        {RECIPES_SORT[1].map((name) => (
          <Box key={name}>
            {name}
            <RadioButton />
          </Box>
        ))}
      </RadioButtonWrapper>

      <Header>간식류</Header>
      <RadioButtonWrapper>
        {RECIPES_SORT[2].map((name) => (
          <Box key={name}>
            {name}
            <RadioButton />
          </Box>
        ))}
      </RadioButtonWrapper>

      <SetButton>적용</SetButton>
    </Wrapper>
  )
}

export default RecipeOption
