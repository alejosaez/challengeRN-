import React, { useState, useEffect } from 'react';
import { Alert, Text } from 'react-native';
import styled from 'styled-components/native';
import { Picker } from '@react-native-picker/picker';
import { useAppDispatch, useAppSelector } from '../../Redux/reduxHook';
import {
  updateProduct,
  deleteProduct,
} from '../../Redux/actions/productsAction';
import {
  Product,
  CreateProductData,
} from '../../Redux/types/products/productsTypes';

interface EditProductProps {
  productId: string;
  onSave: (product: Product) => void;
  onDelete: () => void;
}

const EditProduct: React.FC<EditProductProps> = ({
  productId,
  onSave,
  onDelete,
}) => {
  const dispatch = useAppDispatch();
  const product = useAppSelector(state =>
    state.product.allProducts.find((p: Product) => p.product_id === productId),
  );

  const categories = useAppSelector(state => state.categories.allCategories);
  const sizesList = useAppSelector(state => state.sizes.allSizes);
  const combinationsList = useAppSelector(
    state => state.combination.allCombinations,
  );

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedCombinations, setSelectedCombinations] = useState<string[]>([]);

  useEffect(() => {
    if (product) {
      setName(product.name);
      setPrice(product.unit_price.toString());
      setDescription(product.description);
      setImageUrl(product.image_url);
      setCategoryId(product.category_id);
      setSelectedSizes(product.Sizes.map(size => size.size_id));
      setSelectedCombinations(
        product.Combinations.map(combination => combination.combination_id),
      );
    }
  }, [product]);

  const toggleSizeSelection = (sizeId: string) => {
    if (selectedSizes.includes(sizeId)) {
      setSelectedSizes(selectedSizes.filter(id => id !== sizeId));
    } else {
      setSelectedSizes([...selectedSizes, sizeId]);
    }
  };

  const handleAddCombination = (combinationId: string) => {
    if (combinationId && !selectedCombinations.includes(combinationId)) {
      setSelectedCombinations([...selectedCombinations, combinationId]);
    }
  };

  const handleSave = () => {
    if (!name || !price || !productId) {
      Alert.alert('Error', 'Please fill out all fields.');
      return;
    }

    const updatedProduct: CreateProductData = {
      product_id: productId,
      name,
      unit_price: parseFloat(price),
      description,
      image_url: imageUrl,
      category_id: categoryId,
      sizes: selectedSizes,
      combinations: selectedCombinations,
    };

    dispatch(updateProduct(updatedProduct))
      .unwrap()
      .then(updatedProduct => {
        Alert.alert('Success', 'Product updated successfully!');
        onSave(updatedProduct);
      })
      .catch(() => {
        Alert.alert('Error', 'Failed to update product.');
      });
  };

  return (
    <StyledScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled">
      <Container>
        <StyledInput
          value={name}
          onChangeText={setName}
          placeholder="Product Name"
        />
        <StyledInput
          value={price}
          onChangeText={setPrice}
          placeholder="Unit Price"
          keyboardType="numeric"
        />
        <StyledInput
          value={description}
          onChangeText={setDescription}
          placeholder="Description"
        />
        <StyledInput
          value={imageUrl}
          onChangeText={setImageUrl}
          placeholder="Image URL"
        />

        <PickerWrapper>
          <Picker
            selectedValue={categoryId}
            onValueChange={itemValue => setCategoryId(itemValue)}>
            <Picker.Item label="Select Category" value="" />
            {categories.map(category => (
              <Picker.Item
                key={category.category_id}
                label={category.name}
                value={category.category_id}
              />
            ))}
          </Picker>
        </PickerWrapper>

        <SizeContainer>
          <Text>Select Sizes:</Text>
          {sizesList.map(size => (
            <SizeButton
              key={size.size_id}
              onPress={() => toggleSizeSelection(size.size_id)}
              selected={selectedSizes.includes(size.size_id)}>
              <Text>{size.name}</Text>
            </SizeButton>
          ))}
        </SizeContainer>

        <PickerWrapper>
          <Picker
            selectedValue=""
            onValueChange={itemValue => handleAddCombination(itemValue)}>
            <Picker.Item label="Select Combination" value="" />
            {combinationsList.map(combination => (
              <Picker.Item
                key={combination.combination_id}
                label={combination.name}
                value={combination.combination_id}
              />
            ))}
          </Picker>
        </PickerWrapper>

        {/* Botones personalizados con borde redondeado */}
        <ButtonContainer>
          <RoundedButton onPress={handleSave}>
            <ButtonText>Save Changes</ButtonText>
          </RoundedButton>
          <RoundedButtonDelete onPress={onDelete}>
            <ButtonText>Delete Product</ButtonText>
          </RoundedButtonDelete>
        </ButtonContainer>
      </Container>
    </StyledScrollView>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

const StyledScrollView = styled.ScrollView`
  padding: 5px 10px;
`;

const StyledInput = styled.TextInput`
  border: 1px solid #ccc;
  border-radius: 10px;
  color: #000;
  margin-bottom: 10px;
  padding: 10px;
`;

const PickerWrapper = styled.View`
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const SizeContainer = styled.View`
  margin: 10px 0;
`;

const SizeButton = styled.TouchableOpacity<{ selected: boolean }>`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 5px;
  background-color: ${({ selected }) => (selected ? '#ddd' : 'transparent')};
`;

const ButtonContainer = styled.View`
  margin-top: 20px;
  width: 100%;
`;

// Botón personalizado con borde redondeado
const RoundedButton = styled.TouchableOpacity`
  background-color: #007AFF;
  padding: 15px 20px;
  border-radius: 25px;
  align-items: center;
  margin-bottom: 10px;
`;

const RoundedButtonDelete = styled.TouchableOpacity`
  background-color: red;
  padding: 15px 20px;
  border-radius: 25px;
  align-items: center;
  margin-bottom: 10px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export default EditProduct;
