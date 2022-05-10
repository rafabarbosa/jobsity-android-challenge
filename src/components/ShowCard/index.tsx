import React from "react";
import * as S from "./style";

type Props = {
  title: string;
  image: string;
  onClick: () => void;
};

export default function Card({ title, image, onClick }: Props) {
  return (
    <S.Container onPress={onClick}>
      <S.Image source={{ uri: image }} />
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
