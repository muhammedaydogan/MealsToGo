import React, { useContext, useState } from "react";
import { Searchbar } from "react-native-paper";
import { useEffect } from "react/cjs/react.development";
import styled from "styled-components/native";
import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  const onChangeSearch = (query) => {
    setSearchKeyword(query);
  };

  useEffect(() => {
    search(searchKeyword);
  }, []);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={(text) => {
          search(searchKeyword);
        }}
        onChangeText={onChangeSearch}
      />
    </SearchContainer>
  );
};
