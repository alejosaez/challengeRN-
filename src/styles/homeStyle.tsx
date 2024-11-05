import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #fcfcfc;
`

export const Header = styled.View`
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 15px;
  width: 100%;
  padding: 0 20px;
`

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`

export const Greeting = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: #382e1e;
  margin-top: 10px;
  text-align: left;
  justify-content: left;
  margin-bottom: '10px';
`

export const NotificationButton = styled(TouchableOpacity)`
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
`

export const SearchBar = styled.View`
  flex-direction: row;
  margin: 20px 0;
  background-color: #f2f2f2;
  border-radius: 40px;
  height: 60px;
  align-items: center;
  padding: 0 10px;
  margin-bottom: 20px;
`

export const CategoriesTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #382e1e;
  margin-bottom: 5px;
  margin-top: 20px;
`

export const SearchInput = styled.TextInput`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  color: #777;
`

export const SearchButton = styled(TouchableOpacity)`
  margin-left: 10px;
  padding: 10px;
  background-color: #ccc;
  border-radius: 10px;
`

export const Categories = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 20px;
`

interface CategoryButtonProps {
  active?: boolean
}

export const CategoryButton = styled(TouchableOpacity)<CategoryButtonProps>`
  padding: 10px 20px;
  border-radius: 20px;
  background-color: ${({ active }) => (active ? '#000' : '#ccc')};
`

export const SpecialOffer = styled.View`
  margin: 20px 0;
`

export const OfferTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`

export const Offer = styled.View`
  background-color: #f7f7f7;
  padding: 20px;
  border-radius: 10px;
`

export const OfferText = styled.Text`
  font-size: 16px;
`

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding: 10px 0;
  border-top-width: 1px;
  border-color: #ccc;
`
