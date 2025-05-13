import { useLocation, useNavigate } from "react-router-dom";
import style from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const location = useLocation();
  const navigation = useNavigate();
  const backLink = location.state?.from || "/movies";
  return (
    <div className={style}>
      <button type="button" onClick={() => navigation(backLink)}>
        Go back
      </button>
    </div>
  );
};

export default MovieDetailsPage;
