import React, { useState } from 'react'
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { useAppDispatch, useAppSelector } from '../../Redux/reduxHook'
import { createProduct } from '../../Redux/actions/productsAction'
import { CreateProductData } from '../../Redux/types/products/productsTypes'

interface CreateProductProps {
  onSave: (product: CreateProductData) => void
}

const CreateProduct: React.FC<CreateProductProps> = ({ onSave }) => {
  const dispatch = useAppDispatch()

  // Obtener categorías, tamaños y combinaciones del estado de Redux
  const categories = useAppSelector(state => state.categories.allCategories)
  const sizesList = useAppSelector(state => state.sizes.allSizes)
  const combinationsList = useAppSelector(
    state => state.combination.allCombinations,
  )

  const [name, setName] = useState('')
  const [unitPrice, setUnitPrice] = useState('')
  const [description, setDescription] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [categoryId, setCategoryId] = useState('')
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [combinations, setCombinations] = useState<string[]>([])
  const [selectedCombination, setSelectedCombination] = useState<string>('')
  const handleAddProduct = async () => {
    if (!name || !unitPrice) {
      Alert.alert('Error', 'Please provide both name and unit price.')
      return
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
      }
      await dispatch(createProduct(newProduct)).unwrap()
      Alert.alert('Success', 'Product added successfully!')
      onSave(newProduct)
      setName('')
      setUnitPrice('')
      setDescription('')
      setImageUrl('')
      setCategoryId('')
      setSelectedSizes([])
      setCombinations([])
      setSelectedCombination('')
    } catch (error) {
      Alert.alert('Error', 'Failed to add product')
    }
  }

  const handleAddCombination = (combinationId: string) => {
    if (combinationId && !combinations.includes(combinationId)) {
      setCombinations([...combinations, combinationId])
    }
  }

  const toggleSizeSelection = (sizeId: string) => {
    if (selectedSizes.includes(sizeId)) {
      setSelectedSizes(selectedSizes.filter(id => id !== sizeId))
    } else {
      setSelectedSizes([...selectedSizes, sizeId])
    }
  }

  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContent}
      keyboardShouldPersistTaps="handled">
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Product Name"
        />
        <TextInput
          style={styles.input}
          value={unitPrice}
          onChangeText={setUnitPrice}
          placeholder="Unit Price"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          value={description}
          onChangeText={setDescription}
          placeholder="Description"
        />
        <TextInput
          style={styles.input}
          value={imageUrl}
          onChangeText={setImageUrl}
          placeholder="Image URL"
        />

        <Picker
          selectedValue={categoryId}
          onValueChange={itemValue => setCategoryId(itemValue)}
          style={styles.input}>
          <Picker.Item label="Select Category" value="" />
          {categories.map(category => (
            <Picker.Item
              key={category.category_id}
              label={category.name}
              value={category.category_id}
            />
          ))}
        </Picker>

        <View style={styles.sizeContainer}>
          <Text>Select Sizes:</Text>
          {sizesList.map(size => (
            <TouchableOpacity
              key={size.size_id}
              style={[
                styles.sizeItem,
                selectedSizes.includes(size.size_id) && styles.selectedSizeItem,
              ]}
              onPress={() => toggleSizeSelection(size.size_id)}>
              <Text>{size.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Picker
          selectedValue={selectedCombination}
          onValueChange={itemValue => {
            setSelectedCombination(itemValue)
            handleAddCombination(itemValue)
          }}
          style={styles.input}
          mode="dropdown">
          <Picker.Item label="Select Combination" value="" />
          {combinationsList.map(combination => (
            <Picker.Item
              key={combination.combination_id}
              label={combination.name}
              value={combination.combination_id}
            />
          ))}
        </Picker>

        <View>
          {combinations.map(combinationId => {
            const combination = combinationsList.find(
              c => c.combination_id === combinationId,
            )
            return (
              <Text key={combinationId}>
                {combination?.name} - Additional Price:{' '}
                {combination?.additional_price}
              </Text>
            )
          })}
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Add Product" onPress={handleAddProduct} />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  scrollViewContent: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexGrow: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    color: '#000',
    marginBottom: 10,
    padding: 10,
  },
  sizeContainer: {
    marginVertical: 10,
  },
  sizeItem: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 5,
  },
  selectedSizeItem: {
    backgroundColor: '#ddd',
    borderRadius: 10,
  },
  buttonContainer: {
    marginVertical: 80,
    borderTopWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
})

export default CreateProduct
