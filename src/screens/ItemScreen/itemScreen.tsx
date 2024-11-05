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
import { FeedbackIcon } from '../../components/SvgIcons/SvgIcons'

const ItemScreen: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Item'>>()
  const dispatch = useAppDispatch()
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  const { productId, isEditable = false } = route.params
  console.log('isEditable received in ItemScreen:', isEditable)

  const [isEditFormVisible, setIsEditFormVisible] = useState(false)
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0)
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false)
  const [loading, setLoading] = useState(true)

  const allProducts = useAppSelector(
    (state: RootState) => state.product.allProducts,
  )
  const allSizes = useAppSelector((state: RootState) => state.sizes.allSizes)
  const allCombinations = useAppSelector(
    (state: RootState) => state.combination.allCombinations,
  )

  const productDetails = useMemo(() => {
    const product = allProducts.find(p => p.product_id === productId)
    if (!product) return null

    return {
      ...product,
      Sizes:
        product.Sizes && product.Sizes.length > 0 ? product.Sizes : allSizes,
      Combinations:
        product.Combinations && product.Combinations.length > 0
          ? product.Combinations
          : allCombinations,
    }
  }, [allProducts, productId, allSizes, allCombinations])

  useEffect(() => {
    if (!productDetails) {
      setLoading(true)
      dispatch(getProductsById(productId))
        .unwrap()
        .finally(() => setLoading(false))
    } else {
      setLoading(false)
    }
  }, [dispatch, productId, productDetails])

  if (loading) {
    return (
      <Container>
        <Text>Loading...</Text>
      </Container>
    )
  }

  if (
    !productDetails ||
    !productDetails.Sizes ||
    !productDetails.Combinations
  ) {
    return (
      <Container>
        <Text>Error: Product details could not be loaded.</Text>
      </Container>
    )
  }

  const selectedSize = productDetails.Sizes[selectedSizeIndex]
  const totalPrice = productDetails.unit_price + selectedSize.additional_price

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
          <TitleRowContainer>
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
