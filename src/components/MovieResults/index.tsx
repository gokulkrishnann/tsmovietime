import Card from "../Card";
import useFetchMovies from "../../hooks/useFetchMovies";
import { useType } from "../../contexts/AppContext";
import { endpoints } from "../../utils/endpoints";
import "./styles.css";

const MovieResults = () => {
  const { type } = useType();
  const { isLoading, data, error } = useFetchMovies(endpoints[type]);

  if (error)
    return <code className="error">{JSON.stringify(error, null, 4)}</code>;
  return (
    <section className="results">
      {isLoading
        ? "..."
        : data?.results?.map((movie) => (
            <Card movie={movie} key={movie.id} id={movie.id} />
          ))}
    </section>
  );
};

export default MovieResults;
