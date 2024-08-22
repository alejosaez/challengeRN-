import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Text, TouchableOpacity } from 'react-native';
import { useAppSelector } from '../../Redux/reduxHook';
import { RootState, AppDispatch } from '../../Redux/store/store';
import { getProducts } from '../../Redux/actions/productsAction';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../App'; 
import {
  Products as ProductsContainer,
  Product,
  ProductImage,
  ProductName,
  ProductDescription,
  ProductPrice,
  AddButton,
  ProductDetails,
  ProductFooter
} from '../../styles/productsStyle';

const Products: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>(); 
  const { allProducts, loading, error } = useAppSelector((state: RootState) => state.product);

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
      {allProducts.map(product => (
        <TouchableOpacity
          key={product.product_id}
          onPress={() => navigation.navigate('Item', { productId: product.product_id })} 
        >
          <Product>
            <ProductImage 
              source={{ uri: product.image_url }} 
              resizeMode="cover"
            />
            <ProductDetails>
              <ProductName>{product.name}</ProductName>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductFooter>
                <ProductPrice>${product.unit_price.toFixed(2)}</ProductPrice>
                <AddButton>
                  <Text>+</Text>
                </AddButton>
              </ProductFooter>
            </ProductDetails>
          </Product>
        </TouchableOpacity>
      ))}
    </>
  );
};

export default Products;
