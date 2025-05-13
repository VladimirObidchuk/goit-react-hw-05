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

export const fetchMovieById = async (movieId) => {
  const fetchMovie = axios.get(`/movie/${movieId}`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  });
  return fetchMovie;
};
export const fetchMovieReviewsById = async (movieId) => {
  const fetchMovie = axios.get(`/movie/${movieId}/reviews`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  });
  return fetchMovie;
};
export const fetchImgMoviePath = async () => {
  const fetchImgMovie = axios.get("/configuration", {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  });
  return fetchImgMovie;
};
