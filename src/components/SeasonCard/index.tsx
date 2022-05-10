import React from "react";
import * as S from "./style";

type Props = {
  image: string;
  onPress: () => void;
};

export default function SeasonCard({ image, onPress }: Props) {
  return (
    <S.Container onPress={onPress}>
      <S.Image
        source={{ uri: image }}
        resizeMethod="scale"
        resizeMode="cover"
      />
    </S.Container>
  );
}
