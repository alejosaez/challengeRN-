import React from 'react';
import { SvgProps } from 'react-native-svg';
import HomeIcon from '../../assets/icons/HomeIcon.svg';
import FavoriteIcon from '../../assets/icons/FavoriteIcon.svg';
import CartIcon from '../../assets/icons/CartIcon.svg';
import ProfileIcon from '../../assets/icons/ProfileIcon.svg';

import { 
  NavContainer, 
  NavButtonContainer, 
  NavButtonText, 
  NavIcon 
} from '../../styles/navButtonStyle';

interface NavButtonProps {
  active?: boolean;
  icon: React.FC<SvgProps>;
  children: React.ReactNode;
}

const NavButton: React.FC<NavButtonProps> = ({ active, icon: Icon, children }) => {
  return (
    <NavButtonContainer active={active}>
      <NavIcon>
        <Icon width={24} height={24} fill={active ? '#00512D' : '#A5A5A5'} />
      </NavIcon>
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
      <NavButton icon={ProfileIcon}>Person</NavButton>
    </NavContainer>
  );
};

export default NavigationBar;
