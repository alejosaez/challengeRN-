import React, { useEffect } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useAppSelector, useAppDispatch } from '../../Redux/reduxHook';
import { RootState, AppDispatch } from '../../Redux/store/store';
import { getProducts } from '../../Redux/actions/productsAction';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../App'; 
import {
  Products as ProductsContainer,
  Product as ProductItem,
  ProductImage,
  ProductName,
  ProductDescription,
  ProductPrice,
  AddButton,
  ProductDetails,
  ProductFooter
} from '../../styles/productsStyle';
import { Product } from '../../Redux/types/products/productsTypes'; 

interface ProductsProps {
  products: Product[]; // Define la prop para recibir productos filtrados
}

const Products: React.FC<ProductsProps> = ({ products }) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>(); 
  const { loading, error } = useAppSelector((state: RootState) => state.product);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <>
      {products.map((product: Product) => (
        <TouchableOpacity
          key={product.product_id}
          onPress={() => navigation.navigate('Item', { productId: product.product_id })} 
        >
          <ProductItem>
            <ProductImage 
              source={{ uri: product.image_url }} 
              resizeMode="cover"
            />
            <ProductDetails>
              <ProductName>{product.name}</ProductName>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductFooter>
                <ProductPrice>${product.unit_price.toFixed(2)}</ProductPrice>
                <AddButton onPress={() => {/* Agregar funcionalidad aquí */}}>
                  <Text>+</Text>
                </AddButton>
              </ProductFooter>
            </ProductDetails>
          </ProductItem>
        </TouchableOpacity>
      ))}
    </>
  );
};

export default Products;
