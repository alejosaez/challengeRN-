import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`

export const ProductImage = styled.Image`
  width: 100%;
  height: 300px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`

export const ProductInfo = styled.View`
  padding: 20px;
`

export const ProductTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
`

export const ProductSubtitle = styled.Text`
  font-size: 16px;
  color: #777;
`

export const Rating = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`

export const RatingText = styled.Text`
  margin-left: 5px;
  color: #777;
`

export const Section = styled.View`
  margin-top: 20px;
`

export const SectionTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
`

export const SizeOptions = styled.View`
  flex-direction: row;
  margin-top: 10px;
`

export const SizeButton = styled.TouchableOpacity<{ selected: boolean }>`
  padding: 10px 20px;
  border-radius: 20px;
  background-color: ${({ selected }) => (selected ? '#004D40' : '#E0E0E0')};
  margin-right: 10px;
`

export const SizeButtonText = styled.Text<{ selected?: boolean }>`
  color: ${({ selected }) => (selected ? '#fff' : '#000')};
`

export const AboutText = styled.Text`
  margin-top: 10px;
  color: #777;
`

export const AddToCartButton = styled.TouchableOpacity`
  background-color: #004d40;
  padding: 15px;
  border-radius: 20px;
  align-items: center;
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
`

export const AddToCartText = styled.Text`
  color: #fff;
  font-size: 18px;
`

export const PriceText = styled.Text`
  color: #fff;
  font-size: 18px;
`
