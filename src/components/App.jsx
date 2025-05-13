import "modern-normalize";
import style from "./App.module.css";

import { Route, Routes } from "react-router-dom";

import MoviesPage from "../page/movies/MoviesPage";
import HomePage from "../page/home/HomePage";
import NotFound from "../page/notfound/NotFound";
import MovieDetailsPage from "../page/moviedetails/MovieDetailsPage";
import Navigation from "./navigation/Navigation";
import MovieCast from "../components/moviecast/MovieCast";
import MovieReviews from "../components/moviereviews/MovieReviews";

export default function App() {
  return (
    <div className={style.container}>
      <Navigation />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
