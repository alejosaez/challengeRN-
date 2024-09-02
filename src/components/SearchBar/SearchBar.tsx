import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import { useAppDispatch, useAppSelector } from '../../Redux/reduxHook';
import { searchProducts } from '../../Redux/actions/productsAction';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../App';
import { Product, ProductSearchResponse } from '../../Redux/types/products/productsTypes';

const SearchComponent: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [debouncedSearchText, setDebouncedSearchText] = useState(searchText);
  const [showResults, setShowResults] = useState(false);
  const dispatch = useAppDispatch();
  const products = useAppSelector(
    (state) => state.product.filteredProducts
  ) as ProductSearchResponse[];
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  // Debounce para retrasar la búsqueda
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchText(searchText);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchText]);

  // Realizar la búsqueda cuando debouncedSearchText cambia
  useEffect(() => {
    if (debouncedSearchText.trim()) {
      dispatch(searchProducts(debouncedSearchText));
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  }, [debouncedSearchText, dispatch]);

  // Manejar la selección de un producto
  const handleSelectProduct = (productId: string) => {
    setShowResults(false);
    navigation.navigate('Item', { productId, isEditable: false });
  };

  return (
    <View>
      <View style={styles.searchBarContainer}>
        <TouchableOpacity style={styles.searchIconContainer}>
          <Text style={styles.searchIconText}>🔍</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Coffee..."
          value={searchText}
          onChangeText={(text: string) => setSearchText(text)}
        />
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => console.log('Filter clicked')}>
          <Text style={styles.filterIconText}>⚙️</Text>
        </TouchableOpacity>
      </View>

      {/* Mostrar las sugerencias de productos solo si hay texto de búsqueda y showResults es true */}
      {showResults && (
        <View style={styles.resultsContainer}>
          <FlatList
            data={products}
            keyExtractor={(item) => item.product_id}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleSelectProduct(item.product_id)}>
                <View style={styles.resultItem}>
                  <Image source={{ uri: item.image_url }} style={styles.productImage} />
                  <View style={styles.textContainer}>
                    <Text style={styles.productName}>{item.name}</Text>
                    <Text style={styles.productCategory}>{item.Category.name}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            ListEmptyComponent={
              <Text style={styles.emptyText}>No related products found</Text>
            }
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    borderRadius: 40,
    height: 67,
    paddingHorizontal: 10,
    margin: 10,
  },
  searchInput: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    color: '#777',
  },
  searchIconContainer: {
    backgroundColor: '#382E1E',
    width: 25.51,
    height: 25.51,
    borderRadius: 12.75,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  searchIconText: {
    color: '#fff',
  },
  filterButton: {
    backgroundColor: '#CF9F69',
    width: 49,
    height: 49,
    borderRadius: 24.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterIconText: {
    color: '#fff',
    fontSize: 18,
  },
  resultsContainer: {
    position: 'absolute',
    top: 67,
    width: '100%',
    backgroundColor: 'white',
    zIndex: 1000,
    maxHeight: 200,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    overflow: 'hidden',
  },
  resultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  productImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  productCategory: {
    fontSize: 14,
    color: '#777',
  },
  emptyText: {
    padding: 10,
    textAlign: 'center',
    color: '#777',
  },
});

export default SearchComponent;
