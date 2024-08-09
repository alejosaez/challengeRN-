import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Products = styled.View`
  flex-direction: row;
  justify-content: space-between; 
  flex-wrap: wrap;       
  padding: 10px 15px;
`;

export const Product = styled.View`
  width: 48%;             
  align-items: center;
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
