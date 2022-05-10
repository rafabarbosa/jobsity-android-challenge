import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "./RootStackParamList";

type FavoritesNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  "Favorites"
>;

export type FavoritesProps = {
  navigation: FavoritesNavigationProps;
};

export type FavoritesState = {
  id: number;
  name: string;
  image: {
    medium: string;
    original: string;
  };
};
