import React, { useState } from 'react';
import {
  Alert,
  Text,
  TouchableOpacity,
  ScrollView,
  View,
} from 'react-native';
import styled from 'styled-components/native';
import { Picker } from '@react-native-picker/picker';
import { useAppDispatch, useAppSelector } from '../../Redux/reduxHook';
import { createProduct } from '../../Redux/actions/productsAction';
import { CreateProductData } from '../../Redux/types/products/productsTypes';

interface CreateProductProps {
  onSave: (product: CreateProductData) => void;
}

const CreateProduct: React.FC<CreateProductProps> = ({ onSave }) => {
  const dispatch = useAppDispatch();

  const categories = useAppSelector(state => state.categories.allCategories);
  const sizesList = useAppSelector(state => state.sizes.allSizes);
  const combinationsList = useAppSelector(
    state => state.combination.allCombinations,
  );

  const [name, setName] = useState('');
  const [unitPrice, setUnitPrice] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [combinations, setCombinations] = useState<string[]>([]);
  const [selectedCombination, setSelectedCombination] = useState<string>('');

  const handleAddProduct = async () => {
    if (!name || !unitPrice) {
      Alert.alert('Error', 'Please provide both name and unit price.');
      return;
    }
    try {
      const newProduct: CreateProductData = {
        name,
        unit_price: parseFloat(unitPrice),
        description,
        image_url: imageUrl,
        category_id: categoryId,
        sizes: selectedSizes,
        combinations,
      };
      await dispatch(createProduct(newProduct)).unwrap();
      Alert.alert('Success', 'Product added successfully!');
      onSave(newProduct);
      setName('');
      setUnitPrice('');
      setDescription('');
      setImageUrl('');
      setCategoryId('');
      setSelectedSizes([]);
      setCombinations([]);
      setSelectedCombination('');
    } catch (error) {
      Alert.alert('Error', 'Failed to add product');
    }
  };

  const handleAddCombination = (combinationId: string) => {
    if (combinationId && !combinations.includes(combinationId)) {
      setCombinations([...combinations, combinationId]);
    }
  };

  const toggleSizeSelection = (sizeId: string) => {
    if (selectedSizes.includes(sizeId)) {
      setSelectedSizes(selectedSizes.filter(id => id !== sizeId));
    } else {
      setSelectedSizes([...selectedSizes, sizeId]);
    }
  };

  return (
    <StyledScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
      <Container>
        <StyledInput
          value={name}
          onChangeText={setName}
          placeholder="Product Name"
        />
        <StyledInput
          value={unitPrice}
          onChangeText={setUnitPrice}
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
            selectedValue={selectedCombination}
            onValueChange={itemValue => {
              setSelectedCombination(itemValue);
              handleAddCombination(itemValue);
            }}>
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

        <View>
          {combinations.map(combinationId => {
            const combination = combinationsList.find(
              c => c.combination_id === combinationId,
            );
            return (
              <Text key={combinationId}>
                {combination?.name} - Additional Price: {combination?.additional_price}
              </Text>
            );
          })}
        </View>
        <ButtonContainer>
          {/* Botón personalizado con borde redondeado */}
          <RoundedButton onPress={handleAddProduct}>
            <ButtonText>Add Product</ButtonText>
          </RoundedButton>
        </ButtonContainer>
      </Container>
    </StyledScrollView>
  );
};

const StyledScrollView = styled.ScrollView`
  padding: 10px;
`;

const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

const StyledInput = styled.TextInput`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 15px;
  font-size: 16px;
  color: #000;
  width: 100%; 
`;

const PickerWrapper = styled.View`
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 15px;
  padding: 5px;
  width: 100%; 
`;

const SizeContainer = styled.View`
  margin-bottom: 15px;
  width: 100%;
`;

const SizeButton = styled.TouchableOpacity<{ selected: boolean }>`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 5px;
  background-color: ${({ selected }) => (selected ? '#ddd' : 'transparent')};
`;

const ButtonContainer = styled.View`
  margin-top: 20px;
  width: 100%;
`;

const RoundedButton = styled.TouchableOpacity`
  background-color: #007AFF; 
  padding: 15px 20px;
  border-radius: 25px; 
  align-items: center;
  margin-top: 10px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export default CreateProduct;
