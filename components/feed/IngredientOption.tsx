import styled from '@emotion/styled'

const INGREDIENTS = [
  '곡류',
  '서류',
  '두류',
  '견과류',
  '과일류',
  '채소류',
  '향신류',
  '조류',
  '축산물',
  '수산물',
  '기타',
]

const Wrapper = styled.div`
  height: 100%;

  padding: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const RadioButtonWrapper = styled.div`
  width: 100%;

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
  width: 20px;
  height: 20px;

  border: 2px solid #e7e6e6;
  border-radius: 100%;
`

const SetButton = styled.button`
  width: 200px;
  height: 32px;

  position: absolute;
  bottom: 20px;

  color: #fff;

  background-color: #5f0080;

  border-radius: 8px;
`

const IngredientOption = () => {
  return (
    <Wrapper>
      <RadioButtonWrapper>
        {INGREDIENTS.map((name) => (
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

export default IngredientOption
