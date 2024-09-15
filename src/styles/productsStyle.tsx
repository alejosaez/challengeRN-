import styled from 'styled-components/native';
import { TouchableOpacity, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width; // Obtener el ancho de la pantalla

export const Products = styled.View`
  flex-wrap: wrap;       
`;

export const PlusButton = styled(TouchableOpacity)`
  background-color: #00512D; 
  width: 38px;
  height: 38px;
  border-radius: 19px;
  justify-content: center;
  align-items: center;
`;

export const PlusText = styled.Text`
  color: white;  
  font-size: 24px; 
  font-weight: bold;
`;

export const Product = styled.View`
  width: ${(screenWidth / 2) - 30}px; /* Ancho ajustado para mostrar dos tarjetas con margen */
  align-items: center;
  padding: 10px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  margin-right: 10px; /* Espacio entre las tarjetas */
  elevation: 6;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.3;
  shadow-radius: 6px;
`;

export const ProductImage = styled.Image`
  width: 100%;
  height: 150px;
  border-radius: 20px;  
  overflow: hidden;     
`;

export const ProductDetails = styled.View`
  flex: 1;
  width: 100%;              
  padding: 10px;
  justify-content: center;  
`;

export const ProductName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 5px;
`;

export const ProductDescription = styled.Text`
  font-size: 14px;
  color: #999;
  text-align: center;
  margin-bottom: 10px;
`;

export const ProductFooter = styled.View`
  flex-direction: row;        
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 10px;
`;

export const ProductPrice = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export const AddButton = styled(TouchableOpacity)`
  padding: 5px;            
  background-color: #00a680;
  border-radius: 15px;     
  justify-content: center;
  align-items: center;
  width: 30px;             
  height: 30px;            
`;

// Botón "Eliminar" extendido del estilo de "Agregar"
export const DeleteButton = styled(AddButton)`
  background-color: red; /* Cambia solo el color de fondo */
`;

export const RatingContainer = styled.View`
  background-color: #CF9F69;
  width: 50px;
  height: 20px;
  border-radius: 11px 0px 0px 0px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 1;
`;

export const StarIcon = styled.View`
  width: 13.13px;
  height: 13.23px;
  margin-right: 3px;
  background-color: #FFFFFF;
`;

export const RatingText = styled.Text`
  font-family: 'Cera Round Pro';
  font-size: 12px;
  font-weight: 700;
  line-height: 12px;
  color: #FFFFFF;
`;
