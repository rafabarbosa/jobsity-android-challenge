import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "./RootStackParamList";

type EpisodeDetailsRouteProp = RouteProp<RootStackParamList, "EpisodeDetails">;

type EpisodeDetailsNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  "EpisodeDetails"
>;

export type EpisodeDetailsProps = {
  route: EpisodeDetailsRouteProp;
  navigation: EpisodeDetailsNavigationProps;
};

export type EpisodeState = {
  id: number;
  name: string;
  image: {
    medium: string;
  };
  rating: {
    average: number;
  };
  summary: string;
};
