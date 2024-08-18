import { useState } from "react";
import { useFetch } from "@/utils/hooks/useFetch";
import { createSelectObj } from "@/utils/createSelectObj";
import { agesOrdinary, countries } from "@/constants/constants";
import { generateYearIntervals } from "@/utils/generateYearIntervals";
import { generateAgesIntervals } from "@/utils/generateAgesIntervals";

import MovieList from "@/components/movieList/MovieList";
import Pagination from "@/components/pagination/Pagination";
import SelectLimit from "@/components/selectLimit/SelectLimit";
import MovieFilters from "@/components/movieFilters/MovieFilters";
import SelectFilter from "@/components/selectFilter/selectFilter";

import { getMovies } from "@/api/apiMovies";
import { MoviesApiResponse, ParamsTypeMovies } from "@/types";

import styles from "./styles.module.scss";

const MainPage = () => {
  //Пришлось ввести эту константу, для правильной работы пагианции, поскольку АПИ не отдает указанное кол-во фильмов, если брать из ответа total
  const correctTotal = 100;

  const countriesObj = createSelectObj(countries);

  //Годы
  //Для выбора года фильма
  const startYear = 1890;
  const currentYear = new Date().getFullYear();

  const yearsOrdinary = [];

  for (let y = Number(currentYear) - 5; y < Number(currentYear) + 4; y++) {
    yearsOrdinary.push(String(y));
  }

  //Заполянем периодам с первого фильма по 10 лет
  const intervalsYearsObj = createSelectObj(generateYearIntervals(startYear, currentYear));
  const yearsOrdinaryObj = createSelectObj(yearsOrdinary);
  const yearsObj = [...yearsOrdinaryObj, ...intervalsYearsObj];

  //Возрастной рейтинг
  const agesOrdinaryObj = createSelectObj(agesOrdinary);
  const intervalsAgesObj = createSelectObj(generateAgesIntervals(agesOrdinary));
  const agesObj = [...agesOrdinaryObj, ...intervalsAgesObj];

  const [limit, setLimit] = useState(10)
  const [currentPage, setCurrentPage] = useState(1);
  const [country, setCountry] = useState<string | null>(null);
  const [year, setYear] = useState<string | null>(null);
  const [ageRating, setAgeRating] = useState<string | null>(null)

  const { data, isLoading } = useFetch<MoviesApiResponse, ParamsTypeMovies>(getMovies, {
    page: currentPage,
    limit: limit,
    country: country === "Все страны" ? null : country,
    year: country === "Все годы" ? null : year,
    ageRating: ageRating === "Все возраста" ? null : ageRating,
  })

  const handleLimitChange = (newLimit: number) => {
    setCurrentPage(1)
    setLimit(newLimit);
  };

  const handleCountryChange = (newCountry: string) => {
    setCurrentPage(1)
    setCountry(newCountry);
  };

  const handleYearChange = (newYear: string) => {
    setCurrentPage(1)
    setYear(newYear);
  };

  const handleAgeRatingChange = (newAgeRating: string) => {
    setCurrentPage(1)
    setAgeRating(newAgeRating);
  };

  const optionsCountries = [{ value: "Все страны", label: "Все страны" }, ...countriesObj]
  const optionsYears = [{ value: "Все годы", label: "Все годы" }, ...yearsObj]
  const optionsAges = [{ value: "Все возраста", label: "Все возраста" }, ...agesObj]

  return (
    <main className={styles.main}>
      <aside>
        < MovieFilters >
          <SelectFilter
            title={"Страна"}
            options={optionsCountries}
            handleChange={handleCountryChange}
          />
          <SelectFilter
            title={"Год"}
            options={optionsYears}
            handleChange={handleYearChange}
          />
          <SelectFilter
            title={"Возрастной рейтинг"}
            options={optionsAges}
            handleChange={handleAgeRatingChange}
          />
        </ MovieFilters>
      </aside>
      {isLoading
        ? <div>Идет загрузка...</div>
        : <section><div className="wrapper-row">
          <SelectLimit
            label={"Показывать фильмов на странице:"}
            limit={limit}
            onLimitChange={handleLimitChange}
            options={[4, 10, 20]} />
          <Pagination
            currentPage={currentPage}
            totalCount={data!.total - correctTotal}
            pageSize={limit}
            onPageChange={page => setCurrentPage(page)} />
        </div>
          {data!.docs.length > 0 ? <MovieList movies={data && data.docs} /> : <div>Нет фильмов</div>}
        </section>
      }
    </main>
  )
}

export default MainPage;
