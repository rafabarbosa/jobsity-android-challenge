import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "./RootStackParamList";

type ShowsNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  "Shows"
>;

export type ShowsProps = {
  navigation: ShowsNavigationProps;
};

export type ShowsState = {
  id: number;
  name: string;
  image: {
    medium: string;
    original: string;
  };
};
