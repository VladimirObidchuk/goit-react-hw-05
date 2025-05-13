import axios from "axios";

axios.defaults.baseURL = `https://api.themoviedb.org/3`;
const apiKey = import.meta.env.VITE_API_KEY;

export const fetchMoviesPerDay = async () => {
  const fethMoviesFavoriteDay = axios.get("/trending/movie/day", {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  });
  return fethMoviesFavoriteDay;
};
