import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

interface NavButtonProps {
  active?: boolean;
}

export const NavButtonContainer = styled(TouchableOpacity)<NavButtonProps>`
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const NavButtonText = styled.Text<NavButtonProps>`
  font-size: 14px;
  color: ${({ active }) => (active ? '#00512D' : '#A5A5A5')}; /* Verde cuando activo, gris cuando inactivo */
  font-weight: bold;
  margin-top: 5px;
`;

export const NavIcon = styled.View<NavButtonProps>`
  margin-bottom: 3px;
  justify-content: center;
  align-items: center;
  width: 24px; /* Ajusta según el tamaño del ícono */
  height: 24px; /* Ajusta según el tamaño del ícono */
`;
export const NavContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  background-color: #ffffff;
`;
