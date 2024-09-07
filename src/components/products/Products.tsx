import React from 'react'
import { Text, TouchableOpacity, ScrollView } from 'react-native'
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
  PlusButton,
  PlusText,
  RatingContainer,
  RatingText,
} from '../../styles/productsStyle'
import { StarIcon } from '../SvgIcons/SvgIcons'
import { Product } from '../../Redux/types/products/productsTypes'

interface ProductsProps {
  products: Product[]
  onEdit?: (product: Product) => void
  onDelete?: (productId: string) => void
  isEditable?: boolean
}

const truncateText = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...'
  }
  return text
}

const getDynamicFontSize = (text: string, baseSize: number) => {
  const maxLength = 20
  if (text.length > maxLength) {
    return baseSize - (text.length - maxLength) * 0.5
  }
  return baseSize
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
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 10 }}
    >
      {products.map((product: Product) => (
        <TouchableOpacity
          key={product.product_id}
          onPress={() =>
            navigation.navigate('Item', { productId: product.product_id })
          }>
          <ProductItem>
            <RatingContainer>
              <StarIcon />
              <RatingText>4.7</RatingText>
            </RatingContainer>

            <ProductImage
              source={{ uri: product.image_url }}
              resizeMode="cover"
            />
            <ProductDetails>
              <ProductName
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{ fontSize: getDynamicFontSize(product.name, 18) }}>
                {product.name}
              </ProductName>
              <ProductDescription>
                {truncateText(product.description, 30)}
              </ProductDescription>
              <ProductFooter>
                <ProductPrice>${product.unit_price.toFixed(2)}</ProductPrice>
                <PlusButton onPress={() => {}}>
                  <PlusText>+</PlusText>
                </PlusButton>
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
    </ScrollView>
  )
}

export default Products
