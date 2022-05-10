import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #000;
  padding: 0 20px;
`;

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const BackButtonContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  flex-direction: row;
  align-items: center;
  width: 100px;
`;

export const BackButtonText = styled.Text`
  font-size: 12px;
  color: #fff;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const BlankSpace = styled.View`
  width: 100px;
  height: 30px;
  background-color: transparent;
`;

export const FavoriteContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  flex-direction: row;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: #111;
`;

export const Image = styled.Image`
  width: 90px;
  height: 120px;
  border-radius: 10px;
`;

export const FavoriteInfo = styled.View`
  flex: 1;
  margin-left: 10px;
`;

export const ShowName = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Genres = styled.Text`
  color: #fff;
  font-size: 12px;
  margin-bottom: 10px;
`;

export const Description = styled.Text.attrs({
  numberOfLines: 3,
})`
  color: #fff;
  font-size: 12px;
`;

export const RemoveButton = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  background-color: #f00;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const EmptyContainer = styled.View`
  background-color: #111;
  width: 100%;
  height: 60px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const EmptyText = styled.Text`
  color: #fff;
  font-size: 16px;
`;
