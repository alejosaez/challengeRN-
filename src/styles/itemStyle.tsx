import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const ProductImage = styled.Image`
  width: 100%;
  height: 300px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const ProductInfo = styled.View`
  padding: 20px;
  background-color: #fff;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  margin-top: -20px;
  elevation: 6; /* Sombra para Android */
`;

export const Rating = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const RatingText = styled.Text`
  margin-left: 5px;
  color: #777;
  font-size: 14px;
`;

export const Section = styled.View`
  margin-top: 20px;
`;

export const SectionTitle = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #000;
  margin-bottom: 10px;
`;

export const SizeOptions = styled.View`
  flex-direction: row;
  margin-top: 12px;
`;

export const SizeButton = styled.TouchableOpacity<{ selected: boolean }>`
  width: 100px;
  height: 50px;
  border-radius: 48px;
  background-color: ${({ selected }) => (selected ? '#004D40' : '#FFFFFF')};
  /* border: 1px solid #004D40; */
  margin-right: 10px;
  align-items: center;
  justify-content: center;
`;

export const SizeButtonText = styled.Text<{ selected?: boolean }>`
  font-family: 'Cera Round Pro';
  font-size: 17px;
  font-weight: 700;
  color: ${({ selected }) => (selected ? '#FFFFFF' : '#000')};
`;

export const AboutText = styled.Text`
  margin-top: 10px;
  color: #000000;
  font-size: 18px;
  line-height: 20px;
`;

export const AddToCartButton = styled.TouchableOpacity`
  background-color: #004D40;
  padding: 30px;
  border-radius: 51px;
  align-items: center;
  margin-top: 30px;
  flex-direction: row;
  justify-content: center;
`;

export const AddToCartText = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export const PriceText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  margin-left: 20px;
`;

export const TitleRowContainer = styled.View`
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  flex-direction: column; /* Organizar en columna */
  align-items: flex-start;
  z-index: 2;
`;

export const TitleRatingContainer = styled.View`
  flex-direction: row; /* Título y rating en la misma fila */
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const TitleColumnContainer = styled.View`
  flex-direction: column;
`;

export const FeedbackContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center; /* Centrado horizontalmente */
  background-color: #CF9F69;
  border-radius: 20px;
  padding: 5px;
`;

export const ProductTitle = styled.Text`
  font-size: 42px;
  font-weight: bold;
  color: #fff;
`;

export const CombinationText = styled.Text`
  font-size: 16px;
  color: #fff; /* Color blanco para que se vea sobre la imagen */
  margin-top: 5px;
  margin-bottom: 20px;
`;

export const AboutContainer = styled.View`
  width: 485px;
  height: 155px;
  position: absolute;
  top: 687px;
  left: 38px;
  gap: 0px;
  opacity: 0;
`;

export const FeedbackText = styled.Text`
  font-family: 'Cera Round Pro';
  font-size: 18px;
  font-weight: 700;
  line-height: 18px;
  color: #FFFFFF;
  margin-left: 5px;
`;

export const Header = styled.View`
  width: 292px;
  height: 81px;
  position: absolute;
  top: 362px;
  left: 38px;
  gap: 0px;
  opacity: 0; /* Para hacer invisible inicialmente */
`;

export const CartContainer = styled.View`
  width: 485px;
  height: 109px;
  position: absolute;
  top: 911px;
  left: 38px;
  border-radius: 51px 0px 0px 0px;
  gap: 0px;
  opacity: 0;
`;

export const HeaderContainer = styled.View`
  position: absolute;
  bottom: 20px;
  left: 20px;
  z-index: 2;
`;
