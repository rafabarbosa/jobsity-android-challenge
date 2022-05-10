import styled from "styled-components/native";

export const Wrapper = styled.View`
  width: 100%;
  height: 100px;
  padding: 10px 0;
`;

export const Container = styled.View`
  flex: 1;
  height: 25px;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  padding: 0 10px 0 0;
  border-radius: 5px;
`;

export const Label = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#666",
})`
  flex: 1;
  font-size: 16px;
  border-radius: 4px;
  margin: 0 10px;
`;

export const ButtonClose = styled.TouchableOpacity.attrs({
  hitSlop: { top: 10, bottom: 10, left: 10, right: 10 },
})`
  width: 25px;
  height: 25px;
`;
