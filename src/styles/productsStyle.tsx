import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Products = styled.View`
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;       /* Permite múltiples filas si hay más productos */
  margin-bottom: 20px;
`;

export const Product = styled.View`
  width: 214px;          /* Ancho especificado */
  height: 317px;         /* Alto especificado */
  align-items: center;
  justify-content: space-between;  /* Distribuye los elementos dentro del contenedor */
  padding: 10px;
  background-color: #fff;  /* Fondo blanco para la tarjeta */
  border-radius: 20px;     /* Bordes redondeados para la tarjeta */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra para darle efecto de elevación */
  margin-bottom: 20px;   /* Espaciado entre los productos en las filas */
  elevation: 3;           /* Sombra en Android */
`;

export const ProductImage = styled.Image`
  width: 100%;
  height: 150px;
  border-top-left-radius: 20px;  /* Bordes redondeados superiores */
  border-top-right-radius: 20px; /* Bordes redondeados superiores */
`;

export const ProductDetails = styled.View`
  padding: 10px;
  align-items: center;
  flex: 1;
`;

export const ProductName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
`;

export const ProductDescription = styled.Text`
  font-size: 14px;
  color: #999;
  text-align: center;
  margin: 5px 0;
`;

export const ProductPrice = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export const AddButton = styled(TouchableOpacity)`
  padding: 10px 15px;
  background-color: #00a680; /* Color del botón */
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  width: 50px;
  height: 50px;
`;
