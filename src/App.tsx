import { useState } from "react";
import { useFetch } from "./utils/hooks/useFetch";

import Header from "@components/header/Header.tsx";
import MovieList from "./components/movieList/MovieList";
import Pagination from "./components/pagination/Pagination";

import { MoviesApiResponse, ParamsType } from "./types";
import { getMovies } from "./api/apiMovies";




function App() {
  //Пришлось ввести эту константу, для правильной работы пагианции, поскольку АПИ не отдает указанное кол-во фильмов, если брать из ответа total
  const correctTotal = 60

  const limit = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = useFetch<MoviesApiResponse, ParamsType>(getMovies, {
    page: currentPage
  })


  return (
    <>
      <Header />
      <main>
        <div className="container">
          {isLoading
            ? <div>Loading...</div>
            : <div>
              <Pagination
                currentPage={currentPage}
                totalCount={data!.total - correctTotal}
                pageSize={limit}
                onPageChange={page => setCurrentPage(page)} />
              <MovieList movies={data && data.docs} />
            </div>
          }
        </div>
      </main>
    </>
  )
}

export default App;