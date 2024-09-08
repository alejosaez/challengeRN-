// src/styles/SearchBarStyles.ts
import styled from 'styled-components/native';

export const SearchBarContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #F2F2F2;
  border-radius: 40px;
  height: 60px;
  padding: 0 10px;
  margin: 10px;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  padding: 5px;
  font-size: 16px;
  color: #777;
`;

export const IconContainer = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

export const SearchIconWrapper = styled(IconContainer)`
  background-color: #382E1E;
`;

export const FilterIconWrapper = styled(IconContainer)`
  background-color: #CF9F69;
`;
