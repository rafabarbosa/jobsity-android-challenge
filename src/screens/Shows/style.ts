import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #000;
  padding: 0 15px;
`;

export const FlatList = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingVertical: 15,
  },
  keyboardShouldPersistTaps: "always",
})`
  width: 100%;
`;
