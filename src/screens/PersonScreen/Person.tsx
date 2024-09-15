import React, { useState } from 'react';
import { Alert, ScrollView, Text } from 'react-native';
import styled from 'styled-components/native';
import CreateProduct from '../../components/products/CreateProduct';
import EditProducts from '../../components/products/EditeProducts';
import Products from '../../components/products/Products';
import { Product, CreateProductData } from '../../Redux/types/products/productsTypes';
import { useAppSelector, useAppDispatch } from '../../Redux/reduxHook';
import { deleteProduct, createProduct } from '../../Redux/actions/productsAction'; // Removed updateProduct
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../App';

const PersonScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

  const products = useAppSelector((state) => state.product.allProducts);

  const handleEditProducts = () => {
    if (showProducts) {
      setIsEditing(false);
      setShowForm(false);
    }
    setShowProducts(!showProducts);
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsEditing(true);
    setShowForm(true);
  };

  const handleCreateProduct = () => {
    setSelectedProduct(null);
    setIsEditing(false);
    setShowForm(true);
    setShowProducts(false);
  };

  // Remover lógica de actualización desde aquí
  const createNewProduct = (productData: CreateProductData) => {
    dispatch(createProduct(productData))
      .unwrap()
      .then(() => {
        Alert.alert('Success', 'Product created successfully!');
        setShowForm(false);
        setShowProducts(true);
      })
      .catch(() => {
        Alert.alert('Error', 'Failed to create product.');
      });
  };

  const deleteProductHandler = (productId: string) => {
    dispatch(deleteProduct(productId))
      .unwrap()
      .then(() => {
        Alert.alert('Success', 'Product deleted successfully!');
        setShowForm(false);
        setShowProducts(true);
      })
      .catch(() => {
        Alert.alert('Error', 'Failed to delete product.');
      });
  };

  return (
    <Container>
      <Text>User Information</Text>
      <RoundedButton onPress={handleEditProducts}>
        <ButtonText>Edit Products</ButtonText>
      </RoundedButton>

      {showProducts && (
        <StyledScrollView>
          <Products
            products={products}
            onEdit={handleProductClick}
            onDelete={deleteProductHandler}
            isEditable={showProducts}
          />
        </StyledScrollView>
      )}

      {!isEditing && (
        <RoundedButton onPress={handleCreateProduct}>
          <ButtonText>Create Product</ButtonText>
        </RoundedButton>
      )}
      
      {showForm && isEditing && selectedProduct && (
        <StyledScrollView keyboardShouldPersistTaps="handled">
          <EditProducts
            productId={selectedProduct.product_id}
            onSave={() => {
              Alert.alert('Success', 'Product updated successfully!');
              setShowForm(false);
              setShowProducts(true);
            }}
            onDelete={() => deleteProductHandler(selectedProduct.product_id)}
          />
        </StyledScrollView>
      )}
    
      {showForm && !isEditing && (
        <StyledScrollView keyboardShouldPersistTaps="handled">
          <CreateProduct onSave={createNewProduct} />
        </StyledScrollView>
      )}
    </Container>
  );
};

const Container = styled.View`
  padding: 20px;
  flex: 1;
  background-color: #fff;
`;

const StyledScrollView = styled(ScrollView)`
  flex-grow: 1;
  padding: 20px;
`;

const RoundedButton = styled.TouchableOpacity`
  background-color: #007AFF;
  padding: 15px 20px;
  border-radius: 25px;
  align-items: center;
  margin: 10px 0;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export default PersonScreen;
