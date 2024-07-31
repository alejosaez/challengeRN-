import styled from 'styled-components/native';

export const SearchBarContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  margin: 10px 0;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const SearchButton = styled.TouchableOpacity`
  padding: 10px;
  background-color: #000;
  border-radius: 5px;
  margin-left: 10px;
`;
