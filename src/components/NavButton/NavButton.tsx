import React from 'react';
import { SvgProps } from 'react-native-svg';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../App'; 
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
import { Alert } from 'react-native'; 

interface NavButtonProps {
  active?: boolean;
  icon: React.FC<SvgProps>;
  children: React.ReactNode;
  onPress: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ active, icon: Icon, children, onPress }) => {
  const color = active ? '#00512D' : '#A5A5A5';

  return (
    <NavButtonContainer active={active} onPress={onPress}>
      <NavIcon>
        <Icon width={24} height={24} fill={color} />
      </NavIcon>
      <NavButtonText active={active}>{children}</NavButtonText>
    </NavButtonContainer>
  );
};

const NavigationBar: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>(); // Usa los tipos correctos

  return (
    <NavContainer>
      <NavButton active icon={HomeIcon} onPress={() => navigation.navigate('Home')}>Home</NavButton>
      <NavButton 
        icon={FavoriteIcon} 
        onPress={() => Alert.alert('Feature not implemented', 'This feature is not available yet.')}
      >
        Favorite
      </NavButton> 
      <NavButton 
        icon={CartIcon} 
        onPress={() => Alert.alert('Feature not implemented', 'This feature is not available yet.')}
      >
        Cart
      </NavButton>
      <NavButton icon={ProfileIcon} onPress={() => navigation.navigate('Person')}>Person</NavButton>
    </NavContainer>
  );
};

export default NavigationBar;
