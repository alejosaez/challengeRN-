import React, { useState } from 'react'
import { Alert, ScrollView, Text } from 'react-native'
import styled from 'styled-components/native'
import { useAuth0 } from 'react-native-auth0'
import CreateProduct from '../../components/products/CreateProduct'
import EditProducts from '../../components/products/EditeProducts'
import Products from '../../components/products/Products'
import {
  Product,
  CreateProductData,
} from '../../Redux/types/products/productsTypes'
import { useAppSelector, useAppDispatch } from '../../Redux/reduxHook'
import { deleteProduct } from '../../Redux/actions/productsAction'
import { useNavigation, NavigationProp } from '@react-navigation/native'
import { RootStackParamList } from '../../../App'

const PersonScreen: React.FC = () => {
  const dispatch = useAppDispatch()
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  const { user, authorize, clearSession } = useAuth0() // Cambia a authorize y clearSession
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [showProducts, setShowProducts] = useState(false)
  const [products, setProducts] = useState<Product[]>(
    useAppSelector(state => state.product.allProducts),
  )

  const handleEditProducts = () => {
    if (showProducts) {
      setIsEditing(false)
      setShowForm(false)
    }
    setShowProducts(!showProducts)
  }

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product)
    setIsEditing(true)
    setShowForm(true)
  }

  const handleCreateProduct = () => {
    setSelectedProduct(null)
    setIsEditing(false)
    setShowForm(true)
    setShowProducts(false)
  }

  const handleSaveProduct = (newProductData: CreateProductData) => {
    const newProduct: Product = {
      ...newProductData,
      product_id: Math.random().toString(),
      Sizes: [],
      Combinations: [],
    }
    setProducts([...products, newProduct])
    Alert.alert('Success', 'Product created successfully!')
    setShowForm(false)
    setShowProducts(true)
  }

  const deleteProductHandler = (productId: string) => {
    dispatch(deleteProduct(productId))
      .unwrap()
      .then(() => {
        Alert.alert('Success', 'Product deleted successfully!')
        setProducts(
          products.filter(product => product.product_id !== productId),
        )
        setShowForm(false)
        setShowProducts(true)
      })
      .catch(() => {
        Alert.alert('Error', 'Failed to delete product.')
      })
  }

  // Funciones para iniciar sesión y cerrar sesión
  const handleLogin = async () => {
    try {
      await authorize()
    } catch (error) {
      console.error('Login failed', error)
    }
  }

  const handleLogout = async () => {
    try {
      await clearSession()
    } catch (error) {
      console.error('Logout failed', error)
    }
  }

  return (
    <Container>
      <Text>User Information</Text>

      {user && (
        <>
          <RoundedButton onPress={handleEditProducts}>
            <ButtonText>Edit Products</ButtonText>
          </RoundedButton>

          {!isEditing && (
            <RoundedButton onPress={handleCreateProduct}>
              <ButtonText>Create Product</ButtonText>
            </RoundedButton>
          )}
        </>
      )}

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

      {showForm && isEditing && selectedProduct && (
        <StyledScrollView keyboardShouldPersistTaps="handled">
          <EditProducts
            productId={selectedProduct.product_id}
            onSave={() => {
              Alert.alert('Success', 'Product updated successfully!')
              setShowForm(false)
              setShowProducts(true)
            }}
            onDelete={() => deleteProductHandler(selectedProduct.product_id)}
          />
        </StyledScrollView>
      )}

      {showForm && !isEditing && (
        <StyledScrollView keyboardShouldPersistTaps="handled">
          <CreateProduct onSave={handleSaveProduct} />
        </StyledScrollView>
      )}

      {user ? (
        <LogoutStyledButton onPress={handleLogout}>
          <ButtonText>Logout</ButtonText>
        </LogoutStyledButton>
      ) : (
        <LoginStyledButton onPress={handleLogin}>
          <ButtonText>Login</ButtonText>
        </LoginStyledButton>
      )}
    </Container>
  )
}

// Estilos
const Container = styled.View`
  padding: 20px;
  flex: 1;
  background-color: #fff;
`

const StyledScrollView = styled(ScrollView)`
  flex-grow: 1;
  padding: 20px;
`

const RoundedButton = styled.TouchableOpacity`
  background-color: #007aff;
  padding: 15px 20px;
  border-radius: 25px;
  align-items: center;
  margin: 10px 0;
`

const LoginStyledButton = styled(RoundedButton)`
  background-color: #28a745; /* Verde */
`

const LogoutStyledButton = styled(RoundedButton)`
  background-color: #dc3545; /* Rojo */
`

const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`

export default PersonScreen
