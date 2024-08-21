import React from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../App'; 
import {
  Container,
  Header,
  Avatar,
  Greeting,
  NotificationButton,
  SpecialOffer,
  Offer,
  OfferText,
  OfferTitle,
} from '../../styles/homeStyle';
import NavButton from '../../components/NavButton/NavButton';
import SearchBar from '../../components/SearchBar/SearchBar';
import Categories from '../../components/Category/Category';
import Products from '../../components/products/Products';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleProductPress = (productId: string) => {
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
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Products />
        <TouchableOpacity onPress={() => handleProductPress('1')}>
          <SpecialOffer>
            <OfferTitle>Special Offer 🔥</OfferTitle>
            <Offer>
              <OfferText>
                Get two ice flowered cappuccinos for the price of one
              </OfferText>
            </Offer>
          </SpecialOffer>
        </TouchableOpacity>
      </ScrollView>
      <NavButton />
    </Container>
  );
};

export default HomeScreen;
