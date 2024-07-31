import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { 
  Container, 
  Header, 
  Avatar, 
  Greeting, 
  NotificationButton, 
  SearchBar, 
  SearchButton, 
  SearchInput, 
  SpecialOffer, 
  Categories, 
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
      <SearchBar>
        <SearchInput placeholder="Search Coffee..." />
        <SearchButton>
          <Text>🔍</Text>
        </SearchButton>
      </SearchBar>
      <Categories>
        <CategoryButton active={true}>
          <Text>Cappuccino</Text>
        </CategoryButton>
        <CategoryButton>
          <Text>Cold Brew</Text>
        </CategoryButton>
        <CategoryButton>
          <Text>Espresso</Text>
        </CategoryButton>
      </Categories>
      <ScrollView>
        <Products>
          <Product>
            <ProductImage source={{ uri: 'https://via.placeholder.com/150' }} />
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
