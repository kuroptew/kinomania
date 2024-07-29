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
        return <MovieCard key={movie.id} movie={movie} />;
      })}
    </ul>
  )
}

export default MovieList;