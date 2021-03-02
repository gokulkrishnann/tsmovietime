import { BASE_URL } from "../../utils/endpoints";
import { ReactComponent as MovieSvg } from "../../resources/images/card.svg";
import "./styles.css";

const Card = ({ movie, id }) => {
  const imageUrl = `${BASE_URL}${movie.backdrop_path || movie.poster_path}`;
  return (
    <div className="card" key={id}>
      <img
        src={imageUrl}
        alt={movie.title || movie.original_name}
        loading="lazy"
      />
      <p className="overview">{movie.overview}</p>
      <h2>{movie.title || movie.original_name}</h2>
      <p className="card__stats">
        {movie.release_date}
        <MovieSvg />
        {movie.vote_count}
      </p>
    </div>
  );
};

export default Card;
