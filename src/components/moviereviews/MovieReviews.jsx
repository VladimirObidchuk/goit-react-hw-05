import { useEffect, useState } from "react";
import style from "./MovieReviews.module.css";
import { useParams } from "react-router-dom";
import { fetchMovieReviewsById } from "../../api/api";
import MovieList from "../movilist/MovieList";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchMovieReviews() {
      try {
        setLoading(true);
        const res = await fetchMovieReviewsById(movieId);
        setReviews(res.data.results);
      } catch (error) {
        console.log(" error", error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovieReviews();
  }, [movieId]);
  console.log(" reviews", reviews);
  return (
    <div className={style.container}>
      {loading && <strong>Loading posts...</strong>}
      <ul className={style.list}>
        {reviews ? (
          reviews.map(({ id, author, author_details, content }) => {
            return (
              <li key={id} className={style.item}>
                <div className={style.blockImage}>
                  <img src={author_details.avatar_path} alt={author} />
                </div>
                <h3 className={style.title}>{author}</h3>
                <p className={style.text}>{content}</p>
              </li>
            );
          })
        ) : (
          <strong>We don't have any reviews for this movie</strong>
        )}
      </ul>
    </div>
  );
};

export default MovieReviews;
