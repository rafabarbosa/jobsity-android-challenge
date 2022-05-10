import React from "react";
import * as S from "./style";
import { useGlobalContext } from "../../contexts/GlobalContext";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function SearchInput() {
  const { search, handleChangeSearch, clearSearch } = useGlobalContext();

  return (
    <S.Wrapper>
      <S.Label>What are you looking for?</S.Label>
      <S.Container>
        <S.Input
          value={search}
          onChangeText={handleChangeSearch}
          placeholder="Search for TV Shows"
        />
        {!!search && (
          <S.ButtonClose onPress={clearSearch}>
            <Icon name="close" size={25} color="#000" />
          </S.ButtonClose>
        )}
      </S.Container>
    </S.Wrapper>
  );
}
