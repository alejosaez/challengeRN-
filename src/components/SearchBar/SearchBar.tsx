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
import { ProductSearchResponse } from '../../Redux/types/products/productsTypes';
import SearchIcon from '../../assets/icons/SearchIcon.svg';
import FilterIcon from '../../assets/icons/FilterIcon.svg';


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
        <View style={styles.filterIcon}>
        <SearchIcon width={20} height={20} />
        </View>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Coffee..."
          value={searchText}
          onChangeText={(text: string) => setSearchText(text)}
        />
        <View style={styles.searchIconContainer}>

        <FilterIcon width={24} height={24} />
        </View>
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
    height: 60,
    paddingHorizontal: 10,
    margin: 10,
  },
  searchInput: {
    flex: 1,
    padding: 5,
    fontSize: 16,
    color: '#777',
  },
  searchIconContainer: {
    backgroundColor: '#CF9F69',
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterIcon: {
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterButton: {
    backgroundColor: '#CF9F69',
    width: 45,
    height: 45,
    borderRadius: 50,
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
    marginTop: 10,
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
