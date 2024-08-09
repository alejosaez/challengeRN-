import React from 'react';
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
import { useAppSelector } from '../../Redux/reduxHook';
import { RootStackParamList } from '../../../App'; 
import { RootState } from '../../Redux/store/store';

const ItemScreen: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Item'>>();
  const { productId } = route.params;
  // const productDetails = useAppSelector((state: RootState) => state.product.productDetails);

  return (
    <Container>
      <ScrollView>
        <ProductImage
          source={{
            uri: 'https://perfectdailygrind.com/es/wp-content/uploads/sites/2/2019/11/cofee.jpghttps://s3-alpha-sig.figma.com/img/0da9/69de/7f374b562ec85dbfc735d7f3a67b7e14?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VCMbkXaV4uDOs8BSOUx5Sm3dARFgxvLt2VSS4MHw-3V6dsg28SY5ADXH0O7UiLn3IE81c4bkpYO9MCzwApg5mBrmi6kerdQXYta5SrciThJ7vsj9lEZM1BOBuB0Sig07PbW6jOdopWD2Ih6WQwFlsKYQLmCYaxrUkaL-bkwMg8RvTQ6qMrv73Huw0iPEucPFJ9yCvIK8s5XR-D8HN6M-nSDQGwHuclaQSnRVp5M4B2S2U4hLk8-RPgRE8pnPipRYNG2UDuABIumqKa-6tuhmRjFIbb6LCXubTH54~7uBQi6mCPa2abxsyNXKgeOZeBmwVN4rE86Fi4OC~jJvglmJqA__',
          }}
        />
        <ProductInfo>
          <ProductTitle>Cappuccino</ProductTitle>
          <ProductSubtitle>with chocolate and milk</ProductSubtitle>
          <Rating>
            <Text>⭐</Text>
            <RatingText>4.9</RatingText>
          </Rating>
          <Section>
            <SectionTitle>Coffee Size</SectionTitle>
            <SizeOptions>
              <SizeButton selected={true}>
                <SizeButtonText selected={true}>Small</SizeButtonText>
              </SizeButton>
              <SizeButton selected={false}>
                <SizeButtonText selected={false}>Medium</SizeButtonText>
              </SizeButton>
              <SizeButton selected={false}>
                <SizeButtonText selected={false}>Large</SizeButtonText>
              </SizeButton>
            </SizeOptions>
          </Section>
          <Section>
            <SectionTitle>About</SectionTitle>
            <AboutText>
              Cappuccino is a coffee-based drink made primarily from espresso
              and milk. It consists of one-third espresso, one-third heated milk
              and one-third milk foam and is generally served in...{' '}
              <Text style={{ color: '#004D40' }}>Read more</Text>
            </AboutText>
          </Section>
          <AddToCartButton>
            <AddToCartText>Add to cart</AddToCartText>
            <PriceText>$5.42</PriceText>
          </AddToCartButton>
        </ProductInfo>
      </ScrollView>
    </Container>
  );
};

export default ItemScreen;
