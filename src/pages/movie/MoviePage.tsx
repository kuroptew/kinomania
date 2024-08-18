import { getMovieById } from "@/api/apiMovies";
import { MoviesApiResponse } from "@/types";
import { useFetch } from "@/utils/hooks/useFetch";
import { useParams } from "react-router-dom";

import defaultPoster from "@assets/img/defaultPoster.jpg";

import styles from "./styles.module.scss";

const MoviePage = () => {
  const { id } = useParams();

  const { data, isLoading } = useFetch<MoviesApiResponse, { id?: string }>(getMovieById, {
    id
  })

  let movie;
  let title;
  let alternativeTitle;
  let year;
  let genres;
  let countries;
  let description;
  let imgSrc;
  let ratingKP;
  let ageRating;

  if (data?.docs[0]) {
    movie = data.docs[0];

    title = movie.name;
    alternativeTitle = movie.alternativeName ? ` (${movie.alternativeName})` : "";
    year = movie.year;
    genres = movie.countries.map((g) => g.name).join(",");
    countries = movie.countries.map((c) => c.name).join(",");
    ratingKP = movie.rating.kp.toFixed(1)
    ageRating = movie.ageRating
    description = movie.description;
    imgSrc = data?.docs[0].poster
      ? data.docs[0].poster.previewUrl ? data.docs[0].poster.previewUrl : defaultPoster
      : defaultPoster;
  }

  return (
    <main className={styles.main}>
      {isLoading ? <div>Идет загрузка...</div>
        : (data?.status === "error" ? <div>Информация о фильме не найдена или произошла ошибка на сервере</div> : <section className={styles["movie-info"]}>
          <img src={imgSrc} alt="Poster" className={styles.poster} />
          <div className={styles.text}>
            <h2 className={styles.title}>Название: <span>{title}{alternativeTitle}</span></h2>
            <div className={styles.year}>Год выпуска: <span>{year}</span></div>
            <div className={styles.genres}>Жанры: <span>{genres}</span></div>
            <div className={styles.countries}>Производство: <span>{countries}</span></div>
            <div className={styles["rating"]}>Рейтинг кинопоиска: <span>{ratingKP}</span></div>
            <div className={styles["age-rating"]}>Возрастной рейтинг: <span>{ageRating}</span></div>
            <p className={styles.description}>Описание: <span>{description}</span></p>
          </div>
        </section>)
      }
    </main>
  )
}

export default MoviePage;