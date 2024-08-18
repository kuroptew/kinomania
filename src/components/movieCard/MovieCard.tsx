import { IMovie } from "@/types";
import defaultPoster from "@assets/img/defaultPoster.jpg";

import styles from "./styles.module.scss";

interface Props {
  movie: IMovie;
}

const MovieCard = ({ movie }: Props) => {
  const imgSrc = movie.poster
    ? movie.poster.previewUrl ? movie.poster.previewUrl : defaultPoster
    : defaultPoster

  return (
    <div className={styles.card}>
      <img src={imgSrc} alt="preview" className={styles.poster} />
      <div className={styles.info}>
        <h3 className={styles.title}>{movie.name || movie.alternativeName} ({movie.year})</h3>
      </div>
    </div>
  )
};

export default MovieCard;