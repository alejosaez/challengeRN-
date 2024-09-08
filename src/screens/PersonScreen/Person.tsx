import React, { useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import CreateProduct from '../../components/products/CreateProduct'
import EditProducts from '../../components/products/EditeProducts'
import Products from '../../components/products/Products'
import { Product } from '../../Redux/types/products/productsTypes'
import { useAppSelector, useAppDispatch } from '../../Redux/reduxHook'
import { updateProduct, deleteProduct } from '../../Redux/actions/productsAction'
import { useNavigation, NavigationProp } from '@react-navigation/native'
import { RootStackParamList } from '../../../App'

const PersonScreen: React.FC = () => {
  const dispatch = useAppDispatch()
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [showProducts, setShowProducts] = useState(false)

  const products = useAppSelector(state => state.product.allProducts)

  const handleEditProducts = () => {
    setShowProducts(!showProducts)
    setShowForm(false)
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

  const saveProduct = (product: Product) => {
    if (isEditing && selectedProduct) {
      dispatch(updateProduct(product))
        .unwrap()
        .then(() => {
          setShowForm(false)
          setShowProducts(true)
        })
    }
  }

  const deleteProductHandler = (productId: string) => {
    dispatch(deleteProduct(productId))
      .unwrap()
      .then(() => {
        setShowForm(false)
        setShowProducts(true)
      })
  }

  return (
    <View style={styles.container}>
      <Text>User Information</Text>
      <Button title="Edit Product" onPress={handleEditProducts} />
      {showProducts && (
        <Products
          products={products}
          onEdit={handleProductClick}
          onDelete={deleteProductHandler}
          isEditable={showProducts}
        />
      )}
      <Button title="Create Product" onPress={handleCreateProduct} />
      
      {/* Formulario de Edición */}
      {showForm && isEditing && selectedProduct && (
        <EditProducts
          productId={selectedProduct.product_id}
          onSave={saveProduct}
          onDelete={() => deleteProductHandler(selectedProduct.product_id)}
        />
      )}
      
      {/* Formulario de Creación */}
      {/* {showForm && !isEditing && (
        <CreateProduct onSave={() => setShowForm(false)} />
      )} */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
})

export default PersonScreen
