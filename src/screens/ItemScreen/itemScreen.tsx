import React, { useEffect } from 'react';
import { ScrollView, Text } from 'react-native';
import {
  Container,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductSubtitle,
  Rating,
  RatingText,
  Section,
  SectionTitle,
  SizeOptions,
  SizeButton,
  SizeButtonText,
  AboutText,
  AddToCartButton,
  AddToCartText,
  PriceText,
} from '../../styles/itemStyle';
import { useRoute, RouteProp } from '@react-navigation/native';
import { useAppSelector, useAppDispatch } from '../../Redux/reduxHook';
import { RootStackParamList } from '../../../App';
import { getProductsById } from '../../Redux/actions/productsAction';
import { RootState } from '../../Redux/store/store';

const ItemScreen: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Item'>>();
  const { productId } = route.params;
  const dispatch = useAppDispatch();

  // Despacha la acción para obtener los detalles del producto
  useEffect(() => {
    dispatch(getProductsById(productId));
  }, [dispatch, productId]);

  // Obtiene los detalles del producto desde el store
  const productDetails = useAppSelector((state: RootState) => state.product.product);

  // Si los detalles del producto están cargando o no están disponibles, muestra un mensaje
  if (!productDetails) {
    return (
      <Container>
        <Text>Loading...</Text>
      </Container>
    );
  }

  return (
    <Container>
      <ScrollView>
        <ProductImage
          source={{
            uri: productDetails.image_url, // Usa la URL de la imagen del producto
          }}
        />
        <ProductInfo>
          <ProductTitle>{productDetails.name}</ProductTitle>
          <ProductSubtitle>{productDetails.description}</ProductSubtitle>
          <Rating>
            <Text>⭐</Text>
            <RatingText>4.9</RatingText>
          </Rating>
          <Section>
            <SectionTitle>Coffee Size</SectionTitle>
            <SizeOptions>
              {productDetails.Sizes.map((size, index) => (
                <SizeButton key={index} selected={index === 0}>
                  <SizeButtonText selected={index === 0}>{size.name}</SizeButtonText>
                </SizeButton>
              ))}
            </SizeOptions>
          </Section>
          <Section>
            <SectionTitle>About</SectionTitle>
            <AboutText>
              {productDetails.description} 
              {' '}
              <Text style={{ color: '#004D40' }}>Read more</Text>
            </AboutText>
          </Section>
          <AddToCartButton>
            <AddToCartText>Add to cart</AddToCartText>
            <PriceText>${productDetails.unit_price}</PriceText>
          </AddToCartButton>
        </ProductInfo>
      </ScrollView>
    </Container>
  );
};

export default ItemScreen;
