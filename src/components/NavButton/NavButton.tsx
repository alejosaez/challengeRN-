import React from 'react';
import { NavContainer, NavButtonContainer, NavButtonText } from '../../styles/navButtonStyle';

interface NavButtonProps {
  active?: boolean;
  children: React.ReactNode;
}

const NavButton: React.FC<NavButtonProps> = ({ active, children }) => {
  return (
    <NavButtonContainer active={active}>
      <NavButtonText>{children}</NavButtonText>
    </NavButtonContainer>
  );
};

const NavigationBar: React.FC = () => {
  return (
    <NavContainer>
      <NavButton active>Home</NavButton>
      <NavButton>Favorite</NavButton>
      <NavButton>Cart</NavButton>
      <NavButton>Profile</NavButton>
    </NavContainer>
  );
};

export default NavigationBar;
