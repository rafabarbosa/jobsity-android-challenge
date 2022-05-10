import React, { useEffect, useState } from "react";
import RatingBar from "../../components/RatingBar";
import { getEpisodeById } from "../../services/tvmaze";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { addZero, removeHtmlTags } from "../../utils/helpers";
import { EpisodeDetailsProps } from "../../interfaces/IEpisodes";
import * as S from "./style";

export default function EpisodeDetailsScreen({
  route,
  navigation,
}: EpisodeDetailsProps) {
  const episodeId = route.params.id;
  const [details, setDetails] = useState<any | null>(null);

  useEffect(() => {
    (async () => {
      const fetchEpisode = await getEpisodeById(episodeId);
      setDetails(fetchEpisode);
    })();
  }, [episodeId]);

  function goBack() {
    navigation.goBack();
  }

  return (
    <S.Container>
      <S.ImageContainer>
        {details?.image?.original ? (
          <S.Image
            resizeMethod="scale"
            resizeMode="cover"
            source={{ uri: details?.image?.original }}
          />
        ) : (
          <S.NoImage>
            <S.NoImageText>NO IMAGE</S.NoImageText>
          </S.NoImage>
        )}

        <S.BackButton onPress={goBack}>
          <Icon name="chevron-left" size={30} color="#fff" />
        </S.BackButton>
      </S.ImageContainer>
      <S.Content>
        <S.TitleContainer>
          <S.Season>
            S{addZero(details?.season)} E{addZero(details?.number)}
          </S.Season>
          <S.Title>{details?.name}</S.Title>
          <RatingBar rating={details?.rating?.average ?? 0 / 2} stars={5} />
        </S.TitleContainer>
        <S.Description>
          {details?.summary
            ? removeHtmlTags(details?.summary)
            : "No description available"}
        </S.Description>
      </S.Content>
    </S.Container>
  );
}
