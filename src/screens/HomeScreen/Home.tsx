import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { 
  Container, 
  Header, 
  Avatar, 
  Greeting, 
  NotificationButton, 
  SpecialOffer, 
  CategoryButton, 
  Product, 
  ProductImage, 
  ProductName, 
  ProductPrice, 
  Products, 
  AddButton, 
  Offer, 
  OfferText, 
  OfferTitle, 
  Footer 
} from '../../styles/homeStyle';
import NavButton from '../../components/NavButton/NavButton';
import SearchBar from '../../components/SearchBar/SearchBar';
import Categories from '../../components/Category/Category';
const HomeScreen: React.FC = () => {
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
          <Product>
            <ProductImage source={{ uri: 'https://perfectdailygrind.com/es/wp-content/uploads/sites/2/2019/11/cofee.jpg' }} />
            <ProductName>Cappuccino with chocolate</ProductName>
            <ProductPrice>$4.16</ProductPrice>
            <AddButton>
              <Text>+</Text>
            </AddButton>
          </Product>
          <Product>
            <ProductImage source={{ uri: 'https://via.placeholder.com/150' }} />
            <ProductName>Cappuccino with chocolate and milk</ProductName>
            <ProductPrice>$5.42</ProductPrice>
            <AddButton>
              <Text>+</Text>
            </AddButton>
          </Product>
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
    <NavButton/>
    </Container>
  );
};

export default HomeScreen;
