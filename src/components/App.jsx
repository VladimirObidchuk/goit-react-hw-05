import "modern-normalize";
import "./App.module.css";
import { NavLink, Route, Routes } from "react-router-dom";
import MoviesPage from "../page/movies/MoviesPage";
import HomePage from "../page/home/HomePage";
import NotFound from "../page/notfound/NotFound";
import Navigation from "./navigation/Navigation";

export default function App() {
  return (
    <div className="main">
      <nav>
        <Navigation />
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
    </div>
  );
}
