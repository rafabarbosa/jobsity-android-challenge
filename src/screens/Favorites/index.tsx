import React from "react";
import { useFavoritesContext } from "../../contexts/FavoritesContext";
import { removeHtmlTags } from "../../utils/helpers";
import { FavoritesProps } from "../../interfaces/IFavorites";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import * as S from "./style";

export default function FavoritesScreen({ navigation }: FavoritesProps) {
  const { favorites, removeFavorite } = useFavoritesContext();

  function handleGoBack() {
    navigation.goBack();
  }

  function navigateToShow(id: number) {
    navigation.navigate("ShowDetails", { id });
  }

  return (
    <S.Container>
      <S.SafeArea>
        <S.Header>
          <S.BackButtonContainer onPress={handleGoBack}>
            <Icon name="chevron-left" size={30} color="#fff" />
            <S.BackButtonText>Back</S.BackButtonText>
          </S.BackButtonContainer>
          <S.Title>Favorites's List</S.Title>
          <S.BlankSpace />
        </S.Header>
        {favorites && favorites.length > 0 ? (
          <>
            {favorites
              .sort((a, b) => (a.name > b.name ? 1 : -1))
              .map((show) => (
                <S.FavoriteContainer
                  key={show.id}
                  onPress={() => navigateToShow(show.id)}
                >
                  <S.Image source={{ uri: show.image.medium }} />
                  <S.FavoriteInfo>
                    <S.ShowName>{show.name}</S.ShowName>
                    <S.Genres>{show.genres.join(", ")}</S.Genres>
                    <S.Description>
                      {removeHtmlTags(show.summary)}
                    </S.Description>
                  </S.FavoriteInfo>

                  <S.RemoveButton onPress={() => removeFavorite(show)}>
                    <Icon name="close" size={20} color="#fff" />
                  </S.RemoveButton>
                </S.FavoriteContainer>
              ))}
          </>
        ) : (
          <S.EmptyContainer>
            <S.EmptyText>Favorite list is empty</S.EmptyText>
          </S.EmptyContainer>
        )}
      </S.SafeArea>
    </S.Container>
  );
}
