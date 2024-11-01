import React, { useState } from 'react';
import { CategoriesContainer, CategoryButton, CategoryButtonText, CategoryIconContainer } from '../../styles/categoryStyle';
import CappuccinoIcon from '../../assets/icons/CappuccinoIcon.svg';
import ColdBrewIcon from '../../assets/icons/ColdBrewIcon.svg';
import EspressoIcon from '../../assets/icons/EspressoIcon.svg';

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

  const renderCategoryIcon = (name: string, active: boolean) => {
    const iconColor = active ? '#fff' : '#382E1E';
    
    switch (name.toLowerCase()) {
      case 'coffee':
        return <CappuccinoIcon width={15} height={15} fill={iconColor} />;
      case 'cold brew':
        return <ColdBrewIcon width={15} height={15} fill={iconColor} />;
      case 'espresso':
        return <EspressoIcon width={15} height={15} fill={iconColor} />;
      default:
        return null;
    }
  };

  const capitalizeFirstLetter = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };

  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <CategoryButton
          key={category.category_id}
          active={selectedCategoryId === category.category_id}
          onPress={() => handleCategoryPress(category.category_id)}
        >
          <CategoryIconContainer>
            {renderCategoryIcon(category.name, selectedCategoryId === category.category_id)}
          </CategoryIconContainer>
          <CategoryButtonText active={selectedCategoryId === category.category_id}>
            {capitalizeFirstLetter(category.name)}
          </CategoryButtonText>
        </CategoryButton>
      ))}
    </CategoriesContainer>
  );
};

export default Categories;
