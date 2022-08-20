import styled from '@emotion/styled'

interface Category2Props {
  categoryTitle: string
}

const Box = styled.div`
  height: 22px;
  padding: 0 10px;

  display: flex;
  align-items: center;
  flex-shrink: 0;

  font-size: 12px;
  color: #afabab;

  border: 1px solid #afabab;
  border-radius: 3px;
`

const Category2 = ({ categoryTitle }: Category2Props) => {
  return <Box>{categoryTitle}</Box>
}

export default Category2
