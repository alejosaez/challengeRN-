import React, { useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import CreateProduct from '../../components/products/CreateProduct'
import EditProducts from '../../components/products/EditeProducts'
import Products from '../../components/products/Products' // Importa el componente Products
import {
  Product,
  CreateProductData,
} from '../../Redux/types/products/productsTypes'
import { useAppSelector, useAppDispatch } from '../../Redux/reduxHook'
import {
  updateProduct,
  createProduct,
  deleteProduct,
} from '../../Redux/actions/productsAction'
import { useNavigation, NavigationProp } from '@react-navigation/native' // Importar useNavigation
import { RootStackParamList } from '../../../App' // Asegúrate de importar el tipo correcto para las rutas
import {setEditable} from "../../Redux/reducer/productReducer"
const PersonScreen: React.FC = () => {
  const dispatch = useAppDispatch()
  const navigation = useNavigation<NavigationProp<RootStackParamList>>() // Utiliza useNavigation para obtener la navegación
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [showProducts, setShowProducts] = useState(false)
  

  // Obtener todos los productos del estado de Redux
  const products = useAppSelector(state => state.product.allProducts)

  const handleEditProducts = () => {
    setShowProducts(!showProducts)
    setShowForm(false)
  }

  const handleProductClick = (product: Product) => {
    dispatch(setEditable(true))
    console.log("productClick: ")
    navigation.navigate('Item', {
      productId: product.product_id,
      isEditable: true,
    })
  }
  const handleCreateProduct = () => {
    setSelectedProduct(null)
    setShowForm(true)
    setIsEditing(false)
    setShowProducts(false)
  }

  const saveProduct = (product: Product | CreateProductData) => {
    if (isEditing && selectedProduct) {
      // Actualizar el producto existente
      dispatch(updateProduct(product as Product))
        .unwrap()
        .then(() => {
          setShowForm(false)
          setShowProducts(true)
        })
    } else {
      // Crear un nuevo producto
      dispatch(createProduct(product as CreateProductData))
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
      {/* Aquí iría la info del usuario */}

      <Button title="Edit Product" onPress={handleEditProducts} />
      {showProducts && (
        <Products
          products={products}
          onEdit={handleProductClick} // Pasar la función de edición
          onDelete={deleteProductHandler} // Pasar la función de eliminación
          isEditable={showProducts} // Mostrar botones solo si showProducts es true
        />
      )}

      <Button title="Create Product" onPress={handleCreateProduct} />
      {showForm && isEditing && selectedProduct && (
        <EditProducts
          productId={selectedProduct.product_id}
          onSave={saveProduct}
          onDelete={() => deleteProductHandler(selectedProduct.product_id)}
        />
      )}
      {showForm && !isEditing && <CreateProduct onSave={saveProduct} />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
})

export default PersonScreen
