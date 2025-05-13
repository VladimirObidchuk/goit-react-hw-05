import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={style.blokNav}>
      <NavLink to="/" className={style.link}>
        Home
      </NavLink>
      <NavLink to="/movies" className={style.link}>
        Movies
      </NavLink>
    </div>
  );
};

export default Navigation;
