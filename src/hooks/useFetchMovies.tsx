import { useState, useEffect } from "react";
import API from "../utils/api";

type MoviesState = {
  isLoading: boolean;
  data: any;
  error: Error;
};
const baseState = { isLoading: false, data: null, error: null };
const useFetchMovies = (type = ""): MoviesState => {
  const [state, setState] = useState(baseState);

  useEffect(() => {
    const fetchMovies = async () => {
      setState({ ...state, isLoading: true });
      try {
        const response = await API.get(type);
        setState({ ...state, isLoading: false, data: response.data });
      } catch (error) {
        setState({ ...state, isLoading: false, error });
      }
    };
    fetchMovies();
  }, [type]);
  return { ...state };
};

export default useFetchMovies;
