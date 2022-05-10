import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "./RootStackParamList";

type ShowDetailRouteProp = RouteProp<RootStackParamList, "ShowDetails">;

type ShowDetailsNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  "ShowDetails"
>;

export type ShowDetailsProps = {
  route: ShowDetailRouteProp;
  navigation: ShowDetailsNavigationProps;
};
