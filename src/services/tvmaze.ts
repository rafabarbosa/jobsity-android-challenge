import api from "./api";

export const getShows = async () => {
  const { data } = await api.get("/shows");
  return data;
};

export const getShowById = async (id: number) => {
  const { data } = await api.get(`/shows/${id}`);
  return data;
};

export const getSearchShows = async (query: string) => {
  const { data } = await api.get(`/search/shows?q=${query}`);

  return data.map((item) => item.show);
};

export const getCasts = async (id: number) => {
  const { data } = await api.get(`/shows/${id}/cast`);
  return data;
};

export const getSeasons = async (id: number) => {
  const { data } = await api.get(`/shows/${id}/seasons`);
  return data;
};

export const getEpisodesBySeason = async (serieId: number) => {
  const { data } = await api.get(`/seasons/${serieId}/episodes`);
  return data;
};

export const getEpisodeById = async (episodeId: number) => {
  const { data } = await api.get(`/episodes/${episodeId}?embed=show`);
  return data;
};
