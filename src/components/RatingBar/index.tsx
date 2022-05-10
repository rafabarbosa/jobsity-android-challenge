import React from "react";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import * as S from "./style";

interface RatingBarProps {
  rating: number;
  stars: number;
}

const RatingBar: React.FC<RatingBarProps> = ({ stars, rating }) => {
  return (
    <S.Container>
      {Array(stars)
        .fill(0)
        .map((_, index) => {
          return (
            <Icon
              key={index}
              name={index < rating ? "star" : "star-outline"}
              color="#f0c410"
              size={20}
            />
          );
        })}
    </S.Container>
  );
};

export default RatingBar;
