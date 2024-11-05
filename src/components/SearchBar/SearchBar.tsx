import React, { useState, useEffect } from 'react'
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  ActivityIndicator,
} from 'react-native'
import { useAppSelector } from '../../Redux/reduxHook'
import { useNavigation, NavigationProp } from '@react-navigation/native'
import { RootStackParamList } from '../../../App'
import {
  Product,
  ProductSearchResponse,
  Category,
} from '../../Redux/types/products/productsTypes'
import SearchIcon from '../../assets/icons/SearchIcon.svg'
import FilterIcon from '../../assets/icons/FilterIcon.svg'

const SearchComponent: React.FC = () => {
  const [searchText, setSearchText] = useState('')
  const [debouncedSearchText, setDebouncedSearchText] = useState(searchText)
  const [filteredProducts, setFilteredProducts] = useState<
    ProductSearchResponse[]
  >([])
  const [isSearching, setIsSearching] = useState(false) // Nuevo estado para manejar la búsqueda

  // Obtén el estado de los productos y el estado de carga desde Redux
  const products = useAppSelector(
    state => state.product.allProducts,
  ) as Product[]
  const loading = useAppSelector(state => state.product.loading) // Obtener el estado de carga

  const navigation = useNavigation<NavigationProp<RootStackParamList>>()

  // Debounce para optimizar la búsqueda
  useEffect(() => {
    setIsSearching(true) // Inicia el estado de búsqueda cuando se escribe

    const handler = setTimeout(() => {
      setDebouncedSearchText(searchText)
      setIsSearching(false) // Detiene el estado de búsqueda después del debounce
    }, 300)

    return () => {
      clearTimeout(handler)
    }
  }, [searchText])

  // Filtrado de productos basado en el texto de búsqueda
  useEffect(() => {
    if (debouncedSearchText.trim()) {
      const filtered: ProductSearchResponse[] = products
        .filter(product =>
          product.name
            .toLowerCase()
            .includes(debouncedSearchText.toLowerCase()),
        )
        .map(product => ({
          ...product,
          Category: {
            category_id: product.category_id,
            name: 'Unknown', // Valor por defecto, cambia esto según tus necesidades
          } as Category,
        }))

      setFilteredProducts(filtered)
    } else {
      setFilteredProducts([])
    }
  }, [debouncedSearchText, products])

  // Manejar la selección de un producto
  const handleSelectProduct = (productId: string) => {
    setSearchText('')
    setDebouncedSearchText('')
    setFilteredProducts([])
    navigation.navigate('Item', { productId, isEditable: false })
  }

  return (
    <View>
      {/* Barra de búsqueda */}
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

      {/* Contenedor de resultados y cargando */}
      {searchText.trim() && (
        <View style={styles.resultsContainer}>
          {/* Mostrar el indicador de carga durante la búsqueda */}
          {loading || isSearching ? (
            <ActivityIndicator
              size="large"
              color="#CF9F69"
              style={styles.loadingIndicator}
            />
          ) : (
            <FlatList
              data={filteredProducts}
              keyExtractor={item => item.product_id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => handleSelectProduct(item.product_id)}>
                  <View style={styles.resultItem}>
                    <Image
                      source={{ uri: item.image_url }}
                      style={styles.productImage}
                    />
                    <View style={styles.textContainer}>
                      <Text style={styles.productName}>{item.name}</Text>
                      <Text style={styles.productCategory}>
                        {item.Category.name}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
              // Muestra el mensaje de "No related products found" solo si la búsqueda ha terminado y no hay resultados
              ListEmptyComponent={
                !loading &&
                !isSearching &&
                debouncedSearchText.trim() &&
                filteredProducts.length === 0 ? (
                  <Text style={styles.emptyText}>
                    No related products found
                  </Text>
                ) : null
              }
            />
          )}
        </View>
      )}
    </View>
  )
}

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
    padding: 10, // Asegura un padding para el contenido
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
  loadingIndicator: {
    alignSelf: 'center', // Centra el indicador de carga
    marginVertical: 20,
  },
})

export default SearchComponent
