import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

type Product = {
  product_id: string;
  name: string;
  description: string;
  image_url: string;
  unit_price: number;
};

type SpecialOfferCardProps = {
  product: Product;
};

const SpecialOfferCard: React.FC<SpecialOfferCardProps> = ({ product }) => {
  return (
    <View style={styles.card}>
      {/* Imagen del producto */}
      <Image source={{ uri: product.image_url }} style={styles.image} />
      
      {/* Contenedor de detalles del producto */}
      <View style={styles.detailsContainer}>
        {/* Etiqueta de venta */}
        <Text style={styles.saleLabel}>Discount Sales</Text>
        
        {/* Nombre del producto */}
        <Text style={styles.title}>{product.name}</Text>
        
        {/* Precio del producto */}
        <Text style={styles.price}>${product.unit_price.toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    padding: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  detailsContainer: {
    flex: 1,
  },
  saleLabel: {
    backgroundColor: '#E5B27F',
    color: '#fff',
    borderRadius: 5,
    paddingVertical: 2,
    paddingHorizontal: 8,
    alignSelf: 'flex-start',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  price: {
    fontSize: 14,
    fontWeight: '600',
    color: '#004D40',
    marginTop: 5,
  },
});

export default SpecialOfferCard;
