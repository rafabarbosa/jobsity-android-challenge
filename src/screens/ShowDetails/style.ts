import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #000;
`;

export const ImageContainer = styled.ImageBackground.attrs({
  resizeMode: "cover",
  resizeMethod: "scale",
})<{
  children?: React.ReactNode;
}>`
  width: 100%;
  height: 400px;
  position: relative;
`;

export const BackButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  position: absolute;
  top: 50px;
  left: 15px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50px;
  padding: 8px;
`;

export const FavoriteButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  position: absolute;
  top: 50px;
  right: 15px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50px;
  padding: 8px;
`;

export const Content = styled.View`
  flex: 1;
  background-color: #000;
  margin-top: -20px;
  position: relative;
  padding: 15px;
`;

export const TitleContainer = styled.View`
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

export const Genres = styled.Text`
  margin: 10px 0;
  color: #fff;
`;

export const Description = styled.Text`
  font-size: 16px;
  color: #fff;
  text-align: left;
`;
