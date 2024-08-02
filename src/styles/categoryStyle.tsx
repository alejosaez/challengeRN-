import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
interface CategoryButtonProps {
    active?: boolean;
   }
   

export const CategoriesContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0;
`;

export const CategoryButton= styled(TouchableOpacity) <CategoryButtonProps>`
  padding: 10px 20px;
  border-radius: 20px;
  background-color: ${({ active }) => (active ? '#FFD700' : '#E0E0E0')};
`;

export const CategoryButtonText = styled.Text <CategoryButtonProps>`
  color: ${({ active }) => (active ? '#FFFFFF' : '#000000')};
`;
