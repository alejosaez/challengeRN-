import React from 'react';
import { SizeOptions, SizeButton, SizeButtonText } from '../../styles/itemStyle';
import { Size } from '../../Redux/types/size/sizeType';

interface SizeSelectorProps {
  sizes: Size[];
  selectedSizeIndex: number;
  onSizeSelect: (index: number) => void;
}

const SizeSelector: React.FC<SizeSelectorProps> = ({ sizes, selectedSizeIndex, onSizeSelect }) => {
  return (
    <SizeOptions>
      {sizes.map((size, index) => (
        <SizeButton 
          key={index} 
          selected={index === selectedSizeIndex}
          onPress={() => onSizeSelect(index)}  // Actualizar el tamaño seleccionado
        >
          <SizeButtonText selected={index === selectedSizeIndex}>
            {size.name}
          </SizeButtonText>
        </SizeButton>
      ))}
    </SizeOptions>
  );
};

export default SizeSelector;
