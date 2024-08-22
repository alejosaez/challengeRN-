// Categories.js
import React, { useState } from 'react';
import { CategoriesContainer, CategoryButton, CategoryButtonText } from '../../styles/categoryStyle';

interface CategoriesProps {
  categories: { category_id: string; name: string }[];
  onSelectCategory: (categoryId: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({ categories, onSelectCategory }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);

  const handleCategoryPress = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
    onSelectCategory(categoryId);
  };

  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <CategoryButton
          key={category.category_id}
          active={selectedCategoryId === category.category_id}
          onPress={() => handleCategoryPress(category.category_id)}
        >
          <CategoryButtonText active={selectedCategoryId === category.category_id}>
            {category.name}
          </CategoryButtonText>
        </CategoryButton>
      ))}
    </CategoriesContainer>
  );
};

export default Categories;
