import React from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
// import { useNavigation, NavigationProp } from '@react-navigation/native';
// import { RootStackParamList } from '../../../App'; // Asegúrate de importar RootStackParamList desde tu App.tsx
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
// import { fetchProductDetails } from '../../Redux/reducer/productReducer/productReducer';
// import { useAppDispatch } from '../../Redux/reduxHook';

const HomeScreen: React.FC = () => {
  // const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  // const dispatch = useAppDispatch();

  // const handleProductPress = (productId: string) => {
  //   // dispatch(fetchProductDetails(productId));
  //   navigation.navigate('Item', { productId });
  // };

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
          {/* <TouchableOpacity onPress={() => handleProductPress('1')}> */}
          <TouchableOpacity>
            <Product>
              <ProductImage source={{ uri: 'https://s3-alpha-sig.figma.com/img/3865/1810/52240331021247c5e63abe065c4907e7?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W2xCdQG6MgNe3JZ5VoQgg6bc7Py27Y-XbbXqbLrEktrdmfsYp0UL4gcWimasHx30JGcDexvAiswy3gzIFeJgt52HEuG696F7-ZDONY8t6qk-W138t4ziEma6TWvvAC4KjTel6b6mnMcIbJSoJEzDor-a-zsBFnGxAb4zkGtjnUXd-zO07hel9WAl7hV5acyZjeYAOiOw5hKuQCAofoBqwI3sAKKor-IkXzVnf1hxYTN-MufU6MyhR0MNshjaG7RMjAYNwxhKoB98ZL1nChwTzUzoC~uDua97OVD3LdE6hf7kW214OHD908YRuYFeQAvHWvxpbt4MhMZeDsXLKGXOeA__' }} />
              <ProductName>Cappuccino with chocolate</ProductName>
              <ProductPrice>$4.16</ProductPrice>
              <AddButton>
                <Text>+</Text>
              </AddButton>
            </Product>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={() => handleProductPress('2')}> */}
          <TouchableOpacity>
            <Product>
              <ProductImage source={{ uri: 'https://s3-alpha-sig.figma.com/img/fcf7/d5cf/a03d93d08461628ba2b0ea2d070a2a8e?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f-nCWCSgNgjMPJbaMTZRuvLtoI-iruCmMTv40~kjQSKpck~QHyVw7vnEQgK4TDOu7Ieetqa-kgzuRYFHPGjMqRLCxiCKor6ZDSL~dqPIqDUGf3gZm8j2cyWRCPNJwLL4d9EnJgvEMZkJ5tKJ9o94w-urulLGcIHEgVUOMeHpnAp-r70HQuTkzCydqduKeP5I7Xq9TqohL2KnGIn8WQyYY1WtMelk~JCs3AYm9wg99pe0Sc3ct-UPPTXuun-zbK~X1bx5md7mq3e48Ve2pxZZ8-DJ2Z1hdM2faJ-BLj2jvymGiRs1aWtgWSan8pMhywcvxLoWz-yE85bLBosisHdnhw__' }} />
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
