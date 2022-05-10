import React, {
  useState,
  createContext,
  useContext,
  useEffect,
  useCallback,
} from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { ShowsState } from "../interfaces/IShows";

type ProviderProps = {
  children: React.ReactNode;
};

type ContextProps = {
  favorites: Array<any>;
  addFavorite: (show: ShowsState) => void;
  removeFavorite: (show: ShowsState) => void;
  hasFavorite: (show: ShowsState) => boolean;
};

const FavoritesContext = createContext({} as ContextProps);

export function FavoritesProvider({ children }: ProviderProps) {
  const { getItem, setItem } = useAsyncStorage("@storage::favorites");
  const [favorites, setFavorites] = useState<Array<ShowsState>>([]);

  useEffect(() => {
    (async () => {
      const items = await getItem();
      const itemsParsed = JSON.parse(items);
      if (itemsParsed) {
        setFavorites(itemsParsed);
      } else {
        setFavorites([]);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      await setItem(JSON.stringify(favorites));
    })();
  }, [favorites]);

  const addFavorite = useCallback(async (show: ShowsState) => {
    await setFavorites((current) => [...current, show]);
  }, []);

  const removeFavorite = useCallback(async (show: ShowsState) => {
    await setFavorites((favorites) =>
      favorites.filter((favorite) => favorite.id !== show.id)
    );
  }, []);

  const hasFavorite = (show: ShowsState) => {
    if (show) {
      const finded = favorites.filter((favorite) => favorite.id === show.id);
      if (finded.length > 0) {
        return true;
      }
      return false;
    }
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        hasFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavoritesContext = () => useContext(FavoritesContext);
