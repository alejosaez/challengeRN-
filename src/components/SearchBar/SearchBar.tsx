import React from 'react';
import { Text } from 'react-native';
import { SearchBarContainer, SearchInput, SearchButton } from '../../styles/SearchBarStyles';

const SearchBar: React.FC = () => {
  return (
    <SearchBarContainer>
      <SearchInput placeholder="Search Coffee..." />
      <SearchButton>
        <Text>🔍</Text>
      </SearchButton>
    </SearchBarContainer>
  );
};

export default SearchBar;
