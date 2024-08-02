import React from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../App'; // Asegúrate de importar RootStackParamList desde tu App.tsx
import {
  Container,
  Header,
  Avatar,
  Greeting,
  NotificationButton,
  SpecialOffer,
  Products,
  Product,
  ProductImage,
  ProductName,
  ProductPrice,
  AddButton,
  Offer,
  OfferText,
  OfferTitle,
} from '../../styles/homeStyle';
import NavButton from '../../components/NavButton/NavButton';
import SearchBar from '../../components/SearchBar/SearchBar';
import Categories from '../../components/Category/Category';
import { fetchProductDetails } from '../../Redux/reducer/productReducer/productReducer';
import { useAppDispatch } from '../../Redux/reduxHook';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const dispatch = useAppDispatch();

  const handleProductPress = (productId: string) => {
    dispatch(fetchProductDetails(productId));
    navigation.navigate('Item', { productId });
  };

  return (
    <Container>
      <Header>
        <Avatar source={{ uri: 'https://via.placeholder.com/40' }} />
        <Greeting>Good evening, Monica</Greeting>
        <NotificationButton>
          <Text>🔔</Text>
        </NotificationButton>
      </Header>
      <SearchBar />
      <Categories />
      <ScrollView>
        <Products>
          <TouchableOpacity onPress={() => handleProductPress('1')}>
            <Product>
              <ProductImage source={{ uri: 'https://via.placeholder.com/150' }} />
              <ProductName>Cappuccino with chocolate</ProductName>
              <ProductPrice>$4.16</ProductPrice>
              <AddButton>
                <Text>+</Text>
              </AddButton>
            </Product>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleProductPress('2')}>
            <Product>
              <ProductImage source={{ uri: 'https://via.placeholder.com/150' }} />
              <ProductName>Cappuccino with chocolate and milk</ProductName>
              <ProductPrice>$5.42</ProductPrice>
              <AddButton>
                <Text>+</Text>
              </AddButton>
            </Product>
          </TouchableOpacity>
        </Products>
        <SpecialOffer>
          <OfferTitle>Special Offer 🔥</OfferTitle>
          <Offer>
            <OfferText>
              Get two ice flowered cappuccinos for the price of one
            </OfferText>
          </Offer>
        </SpecialOffer>
      </ScrollView>
      <NavButton />
    </Container>
  );
};

export default HomeScreen;
