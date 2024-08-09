import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

interface NavButtonProps {
  active?: boolean;
}

export const NavButtonContainer = styled(TouchableOpacity)<NavButtonProps>`
  padding: 10px;
  align-items: center;
  ${({ active }) => active && `
    border-bottom-width: 2px; 
    border-color: #000;
  `}
`;

export const NavButtonText = styled.Text<NavButtonProps>`
  font-size: 12px;
  color: ${({ active }) => (active ? '#000' : '#888')};
  margin-top: 5px;
`;

export const NavContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  background-color: #f8f8f8;
  padding: 10px 0;
  border-top-width: 1px;
  border-color: #e0e0e0;
`;
