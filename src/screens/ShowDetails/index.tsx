import React, { useEffect, useState } from "react";
import RatingBar from "../../components/RatingBar";
import SectionSeason from "../../components/SectionSeason";
import { removeHtmlTags } from "../../utils/helpers";
import { ShowDetailsProps } from "../../interfaces/IShowDetails";
import {
  getEpisodesBySeason,
  getSeasons,
  getShowById,
} from "../../services/tvmaze";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useFavoritesContext } from "../../contexts/FavoritesContext";
import * as S from "./style";

export default function ShowDetailsScreen({
  route,
  navigation,
}: ShowDetailsProps) {
  const showId = route.params.id;
  const [details, setDetails] = useState<any | null>(null);
  const [seasons, setSeasons] = useState<any[]>([]);

  const { addFavorite, removeFavorite, hasFavorite } = useFavoritesContext();

  useEffect(() => {
    (async () => {
      const fetchDetails = await getShowById(showId);
      setDetails(fetchDetails);

      const fetchSeasons = await getSeasons(showId);
      const seasonsWithEpisodes = fetchSeasons.map(async (season) => {
        const episodes = await getEpisodesBySeason(season.id);
        return {
          number: season.number,
          episodes: episodes.map((episode) => ({
            id: episode.id,
            name: episode.name,
            image: episode.image?.medium,
            average: episode.rating?.average,
            summary: episode.summary,
          })),
        };
      });

      const response = await Promise.all(seasonsWithEpisodes);
      setSeasons(response);
    })();
  }, [showId]);

  function goBack() {
    navigation.goBack();
  }

  return (
    <S.Container>
      <S.ImageContainer source={{ uri: details?.image?.original }}>
        <S.BackButton onPress={goBack}>
          <Icon name="chevron-left" size={30} color="#fff" />
        </S.BackButton>

        {hasFavorite(details) ? (
          <S.FavoriteButton onPress={() => removeFavorite(details)}>
            <Icon name="heart" size={30} color="#f00" />
          </S.FavoriteButton>
        ) : (
          <S.FavoriteButton onPress={() => addFavorite(details)}>
            <Icon name="heart" size={30} color="#fff" />
          </S.FavoriteButton>
        )}
      </S.ImageContainer>
      <S.Content>
        <S.TitleContainer>
          <S.Title>{details?.name}</S.Title>
          <S.Genres>{details?.genres?.join(", ")}</S.Genres>
          <RatingBar rating={details?.rating?.average ?? 0 / 2} stars={5} />
        </S.TitleContainer>
        <S.Description numberOfLines={seasons.length > 0 ? 5 : 20}>
          {removeHtmlTags(details?.summary)}
        </S.Description>
        <SectionSeason data={seasons} />
      </S.Content>
    </S.Container>
  );
}
