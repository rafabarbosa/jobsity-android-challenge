import styled from "styled-components/native";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  height: 200px;
  width: 150px;
  border-radius: 8px;
  overflow: hidden;
  margin-right: 15px;
`;

export const Image = styled.Image`
  height: 100%;
  width: 100%;
`;
