import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, Alert } from 'react-native'; // Importar Alert desde react-native
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
import { useRoute, RouteProp, useNavigation, NavigationProp } from '@react-navigation/native'; // Importar NavigationProp
import { useAppSelector, useAppDispatch } from '../../Redux/reduxHook';
import { RootStackParamList } from '../../../App';
import { getProductsById, deleteProduct } from '../../Redux/actions/productsAction';
import { RootState } from '../../Redux/store/store';
import SizeSelector from '../../components/SizeSelector/SizeSelector';
import IconButton from '../../components/botton/IconButton/IconButton';
import { EditIcon, DeleteIcon } from '../../components/SvgIcons/SvgIcons';

const ItemScreen: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Item'>>();
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>(); 
  const { productId, isEditable = false } = route.params 
  console.log("isEditable received in ItemScreen:", isEditable)

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

  const handleDelete = () => {
    dispatch(deleteProduct(productId))
      .unwrap()
      .then(() => {
        navigation.goBack(); // Volver a la pantalla anterior después de eliminar
      })
      .catch(() => {
        Alert.alert('Error', 'Failed to delete the product.');
      });
  };

  const handleEdit = () => {
    navigation.navigate('EditProduct', { productId }); 
  };

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

          {/* Botones de Editar y Eliminar visibles solo si isEditable es true */}
          {isEditable && (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 10,
              }}>
                <IconButton onPress={handleEdit}>
                <EditIcon width={24} height={24} color="#007AFF" />
              </IconButton>
              <IconButton onPress={handleDelete}>
                <DeleteIcon width={24} height={24} color="red" />
              </IconButton>
            </View>
          )}

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
