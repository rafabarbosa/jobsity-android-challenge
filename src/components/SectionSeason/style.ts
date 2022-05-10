import styled from "styled-components/native";

export const Container = styled.View``;

export const SeasonContainer = styled.View``;

export const SeasonTitle = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const EpisodeContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  flex-direction: row;
  margin-bottom: 10px;
  background-color: #111;
  border-radius: 10px;
  padding: 10px;
`;

export const EpisodeContent = styled.View`
  margin-left: 10px;
  flex: 1;
`;

export const Image = styled.Image`
  width: 100px;
  height: 150px;
  border-radius: 10px;
`;

export const NoImage = styled.View`
  width: 100px;
  height: 150px;
  border-radius: 10px;
  background-color: #666;
  justify-content: center;
  align-items: center;
`;

export const NoImageText = styled.Text``;

export const EpisodeTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const EpisodeInfo = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 5px;
`;

export const EpisodeAverage = styled.Text`
  color: #fff;
  font-size: 14px;
  margin-left: 5px;
`;

export const EpisodeSummary = styled.Text.attrs({
  numberOfLines: 5,
})`
  color: #fff;
  margin-top: 5px;
`;
