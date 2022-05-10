import styled from "styled-components/native";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  width: 31%;
  height: 180px;
  margin: 5px;
  margin-bottom: 40px;
`;

export const Image = styled.Image.attrs({
  resizeMethod: "scale",
  resizeMode: "cover",
})`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  margin-top: 5px;
  font-size: 12px;
  color: #fff;
`;
