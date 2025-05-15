import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import style from "./MovieDetailsPage.module.css";
import { Suspense, useEffect, useRef, useState } from "react";
import { fetchImgMoviePath, fetchMovieById } from "../../api/api";
import clsx from "clsx";

const getActiveClassLink = ({ isActive }) => {
  return clsx(style.link, isActive && style.isActive);
};

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [movieImd, setMovieImg] = useState(null);
  const [posterUrl, setPosterUrl] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state ?? "/movies");

  useEffect(() => {
    if (!movieId) return;
    async function fetchDetailesMovie() {
      try {
        const [detailsMovie, movieImgPath] = await Promise.all([
          fetchMovieById(movieId),
          fetchImgMoviePath(),
        ]);
        setMovie(detailsMovie.data);
        setMovieImg(movieImgPath.data.images);
      } catch (error) {
        console.log(" error", error);
      }
    }
    fetchDetailesMovie();
  }, [movieId]);

  useEffect(() => {
    if (movie && movieImd) {
      const posterSize = "w500";
      const url = `${movieImd.secure_base_url}${posterSize}${movie.poster_path}`;

      return setPosterUrl(url);
    }
  }, [movie, movieImd]);

  console.log(" movie", movie);
  return (
    <div className={style.container}>
      <Link to={backLink.current} className={style.backBtn}>
        Go back
      </Link>
      <div className={style.blokInfo}>
        <div className={style.leftSide}>
          <img
            src={posterUrl}
            alt={movie?.title || "Movie Poster"}
            width={500}
            className={style.img}
          />
        </div>
        <div className={style.rightSide}>
          <h2 className={style.title}>{movie?.title}</h2>
          <h3 className={style.subTitle}>Overview</h3>
          <p className={style.subText}>{movie?.overview}</p>
          <h3 className={style.subTitle}>Gernes</h3>
          <ul className={style.subList}>
            {movie &&
              movie.genres.map((item) => {
                return (
                  <li key={item.id} className={style.subItem}>
                    {item.name}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
      <div className={style.infoBlock}>
        <ul>
          <li>
            <NavLink to="cast" className={getActiveClassLink}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" className={getActiveClassLink}>
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
