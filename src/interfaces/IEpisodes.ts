import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "./RootStackParamList";

type EpisodeNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  "EpisodeDetails"
>;

export type EpisodesProps = {
  navigation: EpisodeNavigationProps;
};
