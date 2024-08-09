import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Products = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 20px;
`;

export const Product = styled.View`
  width: 45%;
  align-items: center;
`;

export const ProductImage = styled.Image`
  width: 150px;
  height: 150px;
`;

export const ProductName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0;
`;

export const ProductPrice = styled.Text`
  font-size: 14px;
  color: #999;
`;

export const AddButton = styled(TouchableOpacity)`
  padding: 5px 10px;
  background-color: #000;
  border-radius: 5px;
  margin-top: 10px;
`;
