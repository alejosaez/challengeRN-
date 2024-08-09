// Categories.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { CategoriesContainer, CategoryButton, CategoryButtonText } from '../../styles/categoryStyle';

const Categories = () => {
  return (
    <CategoriesContainer>
      <CategoryButton active={true}>
        <CategoryButtonText active={true}>Cappuccino</CategoryButtonText>
      </CategoryButton>
      <CategoryButton>
        <CategoryButtonText>Cold Brew</CategoryButtonText>
      </CategoryButton>
      <CategoryButton>
        <CategoryButtonText>Espresso</CategoryButtonText>
      </CategoryButton>
    </CategoriesContainer>
  );
};

export default Categories;
