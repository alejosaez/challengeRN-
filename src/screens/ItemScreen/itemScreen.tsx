import React, { useEffect, useMemo, useState } from 'react'
import { ScrollView, Text, View, Alert, TouchableOpacity } from 'react-native'
import {
  Container,
  ProductImage,
  ProductInfo,
  ProductTitle,
  CombinationText,
  Section,
  SectionTitle,
  AboutText,
  AddToCartButton,
  AddToCartText,
  PriceText,
  TitleRowContainer,
  TitleRatingContainer,
  FeedbackContainer,
} from '../../styles/itemStyle'
import {
  useRoute,
  RouteProp,
  useNavigation,
  NavigationProp,
} from '@react-navigation/native'
import { useAppSelector, useAppDispatch } from '../../Redux/reduxHook'
import { RootStackParamList } from '../../../App'
import {
  getProductsById,
  deleteProduct,
} from '../../Redux/actions/productsAction'
import { RootState } from '../../Redux/store/store'
import SizeSelector from '../../components/SizeSelector/SizeSelector'
import { Product } from '../../Redux/types/products/productsTypes'
import { FeedbackIcon } from '../../components/SvgIcons/SvgIcons' // Importar el nuevo ícono

const ItemScreen: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Item'>>()
  const dispatch = useAppDispatch()
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  const { productId, isEditable = false } = route.params
  console.log('isEditable received in ItemScreen:', isEditable)

  const [isEditFormVisible, setIsEditFormVisible] = useState(false)
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0)
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false)

  const allProducts = useAppSelector(
    (state: RootState) => state.product.allProducts,
  )

  // Buscar el producto específico en allProducts usando productId
  const productDetails = useMemo(() => {
    const product = allProducts.find(p => p.product_id === productId)
    console.log('Detalles del producto seleccionado:', product)
    return product
  }, [allProducts, productId])

  useEffect(() => {
    if (!productDetails) {
      dispatch(getProductsById(productId))
    }
  }, [dispatch, productId, productDetails])

  if (!productDetails) {
    return (
      <Container>
        <Text>Loading...</Text>
      </Container>
    )
  }

  const selectedSize = productDetails.Sizes[selectedSizeIndex]
  const totalPrice = productDetails.unit_price + selectedSize.additional_price

  // Obtener los nombres de las combinaciones
  const combinationNames = productDetails.Combinations.map(
    combination => combination.name,
  ).join(', ')

  const handleDelete = () => {
    dispatch(deleteProduct(productId))
      .unwrap()
      .then(() => {
        navigation.goBack()
      })
      .catch(() => {
        Alert.alert('Error', 'Failed to delete the product.')
      })
  }

  const handleEdit = () => {
    setIsEditFormVisible(!isEditFormVisible)
  }

  const handleSave = (updatedProduct: Product) => {
    setIsEditFormVisible(false)
  }

  const handleCancel = () => {
    setIsEditFormVisible(false)
  }

  const toggleDescription = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded)
  }

  return (
    <Container>
      <ScrollView>
        <View>
          <ProductImage
            source={{
              uri: productDetails.image_url,
            }}
          />
          {/* Contenedor para el título y la combinación */}
          <TitleRowContainer>
            {/* Fila para el título y el rating */}
            <TitleRatingContainer>
              <ProductTitle>{productDetails.name}</ProductTitle>
              <FeedbackContainer>
                <FeedbackIcon />
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontWeight: 'bold',
                    marginLeft: 4,
                  }}>
                  4.9
                </Text>
              </FeedbackContainer>
            </TitleRatingContainer>

            {/* Descripción debajo de la fila del título y el rating */}
            <CombinationText>{combinationNames}</CombinationText>
          </TitleRowContainer>
        </View>

        <ProductInfo>
          <Section>
            <SectionTitle>
              <Text>Coffee Size</Text>
            </SectionTitle>
            <SizeSelector
              sizes={productDetails.Sizes}
              selectedSizeIndex={selectedSizeIndex}
              onSizeSelect={setSelectedSizeIndex}
            />
          </Section>
          <Section>
            <SectionTitle>
              <Text>About</Text>
            </SectionTitle>
            <AboutText>
              {isDescriptionExpanded
                ? productDetails.description
                : `${productDetails.description.substring(0, 25)}...`}{' '}
              <TouchableOpacity onPress={toggleDescription}>
                <Text style={{ color: '#004D40' }}>
                  {isDescriptionExpanded ? ' Show less' : ' Read more'}
                </Text>
              </TouchableOpacity>
            </AboutText>
          </Section>
          <AddToCartButton>
            <AddToCartText>
              <Text>Add to cart</Text>
            </AddToCartText>
            <PriceText>
              <Text>|</Text>
            </PriceText>
            <PriceText>
              <Text>${totalPrice.toFixed(2)}</Text>
            </PriceText>
          </AddToCartButton>
        </ProductInfo>
      </ScrollView>
    </Container>
  )
}

export default ItemScreen
