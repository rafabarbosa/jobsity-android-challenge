import React, {
  useState,
  createContext,
  useContext,
  useCallback,
  useEffect,
} from "react";
import useDebounce from "../hooks/useDebounce";
import { ShowsState } from "../interfaces/IShows";
import { getSearchShows, getShows } from "../services/tvmaze";

type ProviderProps = {
  children: React.ReactNode;
};

type ContextProps = {
  search: string;
  setSearch: (value: string) => void;
  handleChangeSearch: (text: string) => void;
  shows: Array<ShowsState>;
  clearSearch: () => void;
};

const GlobalContext = createContext({} as ContextProps);

export function GlobalProvider({ children }: ProviderProps) {
  const [shows, setShows] = useState<Array<ShowsState>>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchShows = useCallback(async () => {
    try {
      setLoading(true);
      const response = await getShows();
      setShows(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const fetchSearch = useCallback(async (value: string) => {
    if (value.length > 0) {
      const response = await getSearchShows(value);
      setShows(response);
    } else {
      fetchShows();
    }
  }, []);

  const debouncedChange = useDebounce(fetchSearch, 500);

  useEffect(() => {
    fetchShows();
  }, []);

  async function handleChangeSearch(text: string) {
    setSearch(text);
    debouncedChange(text);
  }

  function clearSearch() {
    handleChangeSearch("");
  }

  return (
    <GlobalContext.Provider
      value={{
        shows,
        search,
        setSearch,
        handleChangeSearch,
        clearSearch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => useContext(GlobalContext);
