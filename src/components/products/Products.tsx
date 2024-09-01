import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { useAppSelector } from '../../Redux/reduxHook'
import { RootState } from '../../Redux/store/store'
import { useNavigation, NavigationProp } from '@react-navigation/native'
import { RootStackParamList } from '../../../App'
import {
  Products as ProductsContainer,
  Product as ProductItem,
  ProductImage,
  ProductName,
  ProductDescription,
  ProductPrice,
  AddButton,
  ProductDetails,
  ProductFooter,
} from '../../styles/productsStyle'
import { Product } from '../../Redux/types/products/productsTypes'

interface ProductsProps {
  products: Product[]
  onEdit?: (product: Product) => void
  onDelete?: (productId: string) => void
  isEditable?: boolean
}

const Products: React.FC<ProductsProps> = ({
  products,
  onEdit,
  onDelete,
  isEditable,
}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  const { loading, error } = useAppSelector((state: RootState) => state.product)

  if (loading) {
    return <Text>Loading...</Text>
  }

  if (error) {
    return <Text>Error: {error}</Text>
  }

  return (
    <>
      {products.map((product: Product) => (
        <TouchableOpacity
          key={product.product_id}
          onPress={() =>
            navigation.navigate('Item', { productId: product.product_id })
          }>
          <ProductItem>
            <ProductImage
              source={{ uri: product.image_url }}
              resizeMode="cover"
            />
            <ProductDetails>
              <ProductName>{product.name}</ProductName>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductFooter>
                <ProductPrice>${product.unit_price.toFixed(2)}</ProductPrice>
                {isEditable && (
                  <>
                    <AddButton onPress={() => onEdit && onEdit(product)}>
                      <Text>Edit</Text>
                    </AddButton>
                    <AddButton
                      onPress={() => onDelete && onDelete(product.product_id)}>
                      <Text>Delete</Text>
                    </AddButton>
                  </>
                )}
              </ProductFooter>
            </ProductDetails>
          </ProductItem>
        </TouchableOpacity>
      ))}
    </>
  )
}

export default Products
