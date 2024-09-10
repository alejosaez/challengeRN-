import React, { useState } from 'react';
import { Alert, ScrollView, Text } from 'react-native';
import styled from 'styled-components/native';
import CreateProduct from '../../components/products/CreateProduct';
import EditProducts from '../../components/products/EditeProducts';
import Products from '../../components/products/Products';
import { Product, CreateProductData } from '../../Redux/types/products/productsTypes';
import { useAppSelector, useAppDispatch } from '../../Redux/reduxHook';
import { updateProduct, deleteProduct, createProduct } from '../../Redux/actions/productsAction';
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
      // Si se hace clic por segunda vez, restablece el estado
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

  const saveProduct = (product: Product) => {
    if (isEditing && selectedProduct) {
      dispatch(updateProduct(product))
        .unwrap()
        .then(() => {
          Alert.alert('Success', 'Product updated successfully!');
          setShowForm(false);
          setShowProducts(true);
        })
        .catch(() => {
          Alert.alert('Error', 'Failed to update product.');
        });
    }
  };

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

      {/* Mostrar lista de productos con tarjetas completas al editar */}
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

      {/* Renderiza el botón "Create Product" solo si no se está editando */}
      {!isEditing && (
        <RoundedButton onPress={handleCreateProduct}>
          <ButtonText>Create Product</ButtonText>
        </RoundedButton>
      )}
      
      {/* Formulario de Edición con Scroll */}
      {showForm && isEditing && selectedProduct && (
        <StyledScrollView keyboardShouldPersistTaps="handled">
          <EditProducts
            productId={selectedProduct.product_id}
            onSave={saveProduct}
            onDelete={() => deleteProductHandler(selectedProduct.product_id)}
          />
        </StyledScrollView>
      )}
    
      {/* Formulario de Creación con Scroll */}
      {showForm && !isEditing && (
        <StyledScrollView keyboardShouldPersistTaps="handled">
          <CreateProduct onSave={createNewProduct} />
        </StyledScrollView>
      )}
    </Container>
  );
};

// Define estilos utilizando styled-components para aislarlos
const Container = styled.View`
  padding: 20px;
  flex: 1;
  background-color: #fff;
`;

const StyledScrollView = styled(ScrollView)`
  flex-grow: 1;
  padding: 20px;
`;

// Botón con borde redondeado
const RoundedButton = styled.TouchableOpacity`
  background-color: #007AFF; /* Color de fondo del botón */
  padding: 15px 20px;
  border-radius: 25px; /* Borde redondeado */
  margin: 10px 0;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export default PersonScreen;
