// NavButton.tsx

import React from 'react';
import { SvgProps } from 'react-native-svg';
import HomeIcon from '../../assets/icons/HomeIcon.svg';
import FavoriteIcon from '../../assets/icons/FavoriteIcon.svg';
import CartIcon from '../../assets/icons/CartIcon.svg';
import ProfileIcon from '../../assets/icons/ProfileIcon.svg';

import { 
  NavContainer, 
  NavButtonContainer, 
  NavButtonText
} from '../../styles/navButtonStyle';

interface NavButtonProps {
  active?: boolean;
  children: React.ReactNode;
  icon: React.FC<SvgProps>;
}

const NavButton: React.FC<NavButtonProps> = ({ active, children, icon: Icon }) => {
  return (
    <NavButtonContainer active={active}>
      <Icon width={24} height={24} fill={active ? '#000' : '#888'} />
      <NavButtonText active={active}>{children}</NavButtonText>
    </NavButtonContainer>
  );
};

const NavigationBar: React.FC = () => {
  return (
    <NavContainer>
      <NavButton active icon={HomeIcon}>Home</NavButton>
      <NavButton icon={FavoriteIcon}>Favorite</NavButton>
      <NavButton icon={CartIcon}>Cart</NavButton>
      <NavButton icon={ProfileIcon}>Profile</NavButton>
    </NavContainer>
  );
};

export default NavigationBar;
