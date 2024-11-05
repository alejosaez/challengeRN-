import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'

interface CategoryButtonProps {
  active?: boolean
}

export const CategoriesContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const CategoryButton = styled(TouchableOpacity)<CategoryButtonProps>`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  border-radius: 20px;
  background-color: ${({ active }) => (active ? '#00512D' : '#E0E0E0')};
  width: 110px;
  margin-right: 10px;
`

export const CategoryButtonText = styled.Text<CategoryButtonProps>`
  color: ${({ active }) => (active ? '#FFFFFF' : '#000000')};
  margin-left: 2px;
  font-weight: 500;
`

export const CategoryIconContainer = styled.View`
  margin-right: 2px;
`
