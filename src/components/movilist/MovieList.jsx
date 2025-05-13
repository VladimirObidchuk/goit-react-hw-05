import { NavLink, useLocation } from "react-router-dom";
import style from "./MovieList.module.css";

const MovieList = ({ film }) => {
  const { id, title } = film;
  const location = useLocation();

  return (
    <li className={style.item}>
      <NavLink to={`/movies/${id}`} state={{ location }} className={style.link}>
        {title}
      </NavLink>
    </li>
  );
};

export default MovieList;
