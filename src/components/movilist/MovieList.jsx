import { Link } from "react-router-dom";
import style from "./MovieList.module.css";

const MovieList = ({ collection }) => {
  return (
    <ul className={style.content}>
      {collection.map(({ id, title }, index) => (
        <li className={style.item} key={index}>
          <Link to={`/movies/${id}`} className={style.link} state="/">
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
