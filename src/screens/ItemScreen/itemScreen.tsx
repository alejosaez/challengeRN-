import React, { useEffect, useState } from 'react';
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
import SizeSelector from '../../components/SizeSelector/SizeSelector';  

const ItemScreen: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Item'>>();
  const { productId } = route.params;
  const dispatch = useAppDispatch();

  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);

  useEffect(() => {
    dispatch(getProductsById(productId));
  }, [dispatch, productId]);

  const productDetails = useAppSelector((state: RootState) => state.product.product);

  if (!productDetails) {
    return (
      <Container>
        <Text>Loading...</Text>
      </Container>
    );
  }

  const selectedSize = productDetails.Sizes[selectedSizeIndex];
  const totalPrice = productDetails.unit_price + selectedSize.additional_price;

  return (
    <Container>
      <ScrollView>
        <ProductImage
          source={{
            uri: productDetails.image_url,
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
            <SizeSelector 
              sizes={productDetails.Sizes} 
              selectedSizeIndex={selectedSizeIndex} 
              onSizeSelect={setSelectedSizeIndex} 
            />
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
            <PriceText>${totalPrice.toFixed(2)}</PriceText>
          </AddToCartButton>
        </ProductInfo>
      </ScrollView>
    </Container>
  );
};

export default ItemScreen;
