import React, { useEffect, useState } from 'react';
import { ScrollView, TouchableOpacity, Text } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../Redux/reduxHook';
import { RootState } from '../../Redux/store/store';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { getCategory } from '../../Redux/actions/categoriesAction';
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
import { RootStackParamList } from '../../../App'
import { LoginButton } from '../../auth0/loginButton';
import { getSizes } from '../../Redux/actions/sizeAction';
import { getCombination } from '../../Redux/actions/combinationsAction';

const HomeScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const categories = useAppSelector((state: RootState) => state.categories.allCategories);
  const products = useAppSelector((state: RootState) => state.product.allProducts);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  useEffect(() => {
    dispatch(getCategory());
    dispatch(getSizes());
    dispatch(getCombination());
    
  }, [dispatch]);

  const handleSelectCategory = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
  };

  const handleProductPress = (productId: string) => {
    navigation.navigate('Item', { productId });
  };

  const filteredProducts = selectedCategoryId
    ? products.filter((product) => product.category_id === selectedCategoryId)
    : products;

  return (
    <Container>
      <Header>
        <Avatar source={{ uri: 'https://via.placeholder.com/40' }} />
        <Greeting>Good evening, Monica</Greeting>
        <LoginButton/>
        <NotificationButton>
          <Text>🔔</Text>
        </NotificationButton>
      </Header>
      <SearchBar />
      <Categories categories={categories} onSelectCategory={handleSelectCategory} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Products products={filteredProducts} />
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
