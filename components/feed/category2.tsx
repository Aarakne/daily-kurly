import styled from '@emotion/styled'

interface Category2Props {
  categoryTitle: string
}

const Box = styled.div``

const Category2 = ({ categoryTitle }: Category2Props) => {
  return <Box>{categoryTitle}</Box>
}

export default Category2
