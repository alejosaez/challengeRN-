import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
interface NavButtonProps {
 active?: boolean;
}

export const NavButtonContainer = styled(TouchableOpacity) <NavButtonProps>`
  padding: 10px;
  ${({ active }) => active && 'border-bottom-width: 2px; border-color: #000;'}
`;

export const NavButtonText = styled.Text`
  font-size: 16px;
`;

export const NavContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  background-color: #f8f8f8;
  padding: 10px 0;
`;
