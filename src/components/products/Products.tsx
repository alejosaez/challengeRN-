import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Text } from 'react-native';
import { useAppSelector } from '../../Redux/reduxHook'; // Asegúrate de importar useAppSelector correctamente
import { RootState, AppDispatch } from '../../Redux/store/store'
import { getProducts } from '../../Redux/actions/productsAction'; 
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
  const { allProducts, loading, error } = useAppSelector((state: RootState) => state.product);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  console.log(allProducts); 
  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <ProductsContainer>
      {allProducts.map(product => (
        <Product key={product.product_id}>
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
      ))}
    </ProductsContainer>
  );
};

export default Products;
