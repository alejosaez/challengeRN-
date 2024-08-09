import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Products = styled.View`
  flex-direction: row;
  justify-content: space-between; /* Asegura que las tarjetas se distribuyan equitativamente */
  flex-wrap: wrap;       /* Permite que las tarjetas pasen a la siguiente fila si no caben en una */
  padding: 10px 15px;
`;

export const Product = styled.View`
  width: 48%;             /* Asegura que dos productos quepan en una fila */
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  elevation: 3;
`;

export const ProductImage = styled.Image`
  width: 100%;
  height: 150px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
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
  background-color: #00a680;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  width: 50px;
  height: 50px;
`;
