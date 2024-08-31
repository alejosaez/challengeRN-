// PersonScreen.tsx
import React, { useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import CreateProduct from '../../components/products/CreateProduct';
import EditProducts from '../../components/products/EditeProducts';
import { Product, CreateProductData } from '../../Redux/types/products/productsTypes';

const PersonScreen: React.FC = () => {
  const [showProducts, setShowProducts] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditProducts = () => {
    setShowProducts(!showProducts);
    setShowForm(false);
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setShowForm(true);
    setIsEditing(true);
  };

  const handleCreateProduct = () => {
    setSelectedProduct(null);
    setShowForm(true);
    setIsEditing(false);
    setShowProducts(false);
  };

  const saveProduct = (product: Product | CreateProductData) => {
    if (isEditing && selectedProduct) {
      setProducts((prevProducts) =>
        prevProducts.map((p) => (p.product_id === selectedProduct.product_id ? { ...p, ...product } : p))
      );
    } else {
      const newProduct: Product = {
        product_id: String(products.length + 1), // Genera un nuevo ID
        ...product,
        Sizes: [],
        Combinations: [],
      };
      setProducts((prevProducts) => [...prevProducts, newProduct]);
    }
    setShowForm(false);
    setShowProducts(true);
  };

  const deleteProduct = () => {
    if (selectedProduct) {
      setProducts((prevProducts) =>
        prevProducts.filter((p) => p.product_id !== selectedProduct.product_id)
      );
      setShowForm(false);
      setShowProducts(true);
    }
  };

  return (
    <View style={styles.container}>
      <Text>User Information</Text>
      {/* Aquí iría la info del usuario */}

      <Button title="Edit Product" onPress={handleEditProducts} />
      {showProducts && (
        <FlatList
          data={products}
          keyExtractor={(item) => item.product_id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleProductClick(item)}>
              <Text>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      )}

      <Button title="Create Product" onPress={handleCreateProduct} />

      {showForm && isEditing && selectedProduct && (
        <EditProducts
          product={selectedProduct}
          onSave={saveProduct}
          onDelete={deleteProduct}
        />
      )}
      {showForm && !isEditing && <CreateProduct onSave={saveProduct} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default PersonScreen;
