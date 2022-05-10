import React from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import ShowCard from "../../components/ShowCard";
import SearchInput from "../../components/SearchInput";
import { useGlobalContext } from "../../contexts/GlobalContext";
import { ShowsProps, ShowsState } from "../../interfaces/IShows";
import * as S from "./style";

export default function ShowsScreen({ navigation }: ShowsProps): JSX.Element {
  const { shows } = useGlobalContext();

  function navigateToDetail(id: number) {
    navigation.navigate("ShowDetails", { id });
  }

  return (
    <S.Container>
      <SearchInput />
      <FlatList
        key={"#"}
        data={shows}
        numColumns={3}
        keyExtractor={(item: ShowsState) => item.id.toString()}
        renderItem={({ item }: ListRenderItemInfo<ShowsState>) => (
          <ShowCard
            title={item?.name}
            image={item?.image?.medium}
            onClick={() => navigateToDetail(item?.id)}
          />
        )}
        style={{ width: "100%" }}
        contentContainerStyle={{
          paddingVertical: 15,
        }}
      />
    </S.Container>
  );
}
