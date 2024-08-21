import { getMovieById } from "@/api/apiMovies";
import { MoviesApiResponse } from "@/types";
import { useFetch } from "@/utils/hooks/useFetch";
import { useParams } from "react-router-dom";

import defaultPoster from "@assets/img/defaultPoster.jpg";

import styles from "./styles.module.scss";
import { useMemo } from "react";

interface IMovieInfo {
  title:string | null,
  alternativeTitle: string,
  year:number,
  genresMovie: string,
  countriesMovie:string,
  ageRating:string | null | undefined,
  description:string | null,
  ratingKP: number,
  imgSrc:string,

}

const MoviePage = () => {
  const { id } = useParams();

  const { data, isLoading } = useFetch<MoviesApiResponse, { id?: string }>(getMovieById, {
    id
  })

  const movie = useMemo<IMovieInfo | null>(() => {
    if (!data?.docs[0]) {
      return null
    }

    const { name, alternativeName, year, genres, countries, rating, ageRating, description, poster } = data.docs[0]

    const alternativeTitle = alternativeName ? alternativeName : "";
    const genresMovie = genres.map((g) => g.name).join(",");
    const countriesMovie = countries.map((c) => c.name).join(",");
    const ratingKP = +rating.kp.toFixed(1)
    const imgSrc = poster
      ? poster.previewUrl ? poster.previewUrl : defaultPoster
      : defaultPoster;

    return {
      title: name,
      alternativeTitle,
      year,
      genresMovie,
      countriesMovie,
      ageRating,
      description, 
      ratingKP,
      imgSrc
    }
  }, [data?.docs])

  console.log(movie?.description);
  

  return (
    <main className={styles.main}>
      {isLoading ? <div>Идет загрузка...</div>
        : (data?.status === "error" || movie === null ? <div>Информация о фильме не найдена или произошла ошибка на сервере</div> : <section className={styles["movie-info"]}>
          <img src={movie.imgSrc} alt="Poster" className={styles.poster} />
          <div className={styles.text}>
            <h2 className={styles.title}>
              Название:  
              {movie.title && movie.alternativeTitle ? 
              <span> {movie.title} / ({movie.alternativeTitle})</span>
              : movie.title ? <span> {movie.title}</span>
              : <span> {movie.alternativeTitle}</span>}</h2>
            <div className={styles.year}>Год выпуска: <span>{movie.year}</span></div>
            <div className={styles.genres}>Жанры: <span>{movie.genresMovie}</span></div>
            <div className={styles.countries}>Производство: <span>{movie.countriesMovie}</span></div>
            {movie.ratingKP > 0 && <div className={styles["rating"]}>Рейтинг кинопоиска: <span>{movie.ratingKP}</span></div>}
            {movie.ageRating  && <div className={styles["age-rating"]}>Возрастной рейтинг: <span>{movie?.ageRating}</span></div>}
            {movie.description ? <p className={styles.description}>Описание: <span>{movie.description}</span></p> : <p className={styles.description}>Описание отсутствует</p>}
          </div>
        </section>)
      }
    </main>
  )
}

export default MoviePage;