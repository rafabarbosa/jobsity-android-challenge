import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../interfaces/RootStackParamList";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { removeHtmlTags } from "../../utils/helpers";
import * as S from "./style";

type Props = {
  data: any;
};

type PropsNavigation = NativeStackScreenProps<RootStackParamList>;

export default function SectionSeason({ data }: Props) {
  const navigation = useNavigation<PropsNavigation["navigation"]>();
  function navigateToEpisode(episodeId: number) {
    navigation.navigate("EpisodeDetails", { id: episodeId });
  }

  return (
    <S.Container>
      {data.map((season) => {
        return (
          <S.SeasonContainer key={season.number}>
            <S.SeasonTitle>Season #{season.number}</S.SeasonTitle>
            <View>
              {season.episodes.map((episode) => {
                return (
                  <S.EpisodeContainer
                    key={episode.id}
                    onPress={() => navigateToEpisode(episode.id)}
                  >
                    {episode.image ? (
                      <S.Image source={{ uri: episode.image }} />
                    ) : (
                      <S.NoImage>
                        <S.NoImageText>NO IMAGE</S.NoImageText>
                      </S.NoImage>
                    )}
                    <S.EpisodeContent>
                      <S.EpisodeTitle>{episode.name}</S.EpisodeTitle>
                      <S.EpisodeInfo>
                        <Icon name="star" size={20} color="yellow" />
                        <S.EpisodeAverage>{episode.average}</S.EpisodeAverage>
                      </S.EpisodeInfo>
                      <S.EpisodeSummary>
                        {removeHtmlTags(episode.summary)}
                      </S.EpisodeSummary>
                    </S.EpisodeContent>
                  </S.EpisodeContainer>
                );
              })}
            </View>
          </S.SeasonContainer>
        );
      })}
    </S.Container>
  );
}
