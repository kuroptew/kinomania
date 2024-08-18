import { Link } from "react-router-dom";
import MovieCard from "@components/movieCard/MovieCard";

import { IMovie } from "@/types";

import styles from "./styles.module.scss";

interface Props {
  movies?: IMovie[] | null;
}

const MovieList = ({ movies }: Props) => {
  return (
    <ul className={styles.list}>
      {movies?.map((movie) => {
        return <Link to={`/movie/${movie.id}`} key={movie.id}><MovieCard movie={movie} /></Link>;
      })}
    </ul>
  )
}

export default MovieList;