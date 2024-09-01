
import React from 'react';
import { TouchableOpacity } from 'react-native';

interface IconButtonProps {
  onPress: () => void;
  children: React.ReactNode; 
}

const IconButton: React.FC<IconButtonProps> = ({ onPress, children }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ padding: 5, marginLeft: 5 }}>
      {children}
    </TouchableOpacity>
  );
};

export default IconButton;
