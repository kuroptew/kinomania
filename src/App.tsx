import { useState } from "react";
import { useFetch } from "./utils/hooks/useFetch";

import Header from "@components/header/Header.tsx";
import MovieList from "@/components/movieList/MovieList";
import Pagination from "@/components/pagination/Pagination";
import SelectLimit from "@/components/selectInput/SelectLimit";

import { MoviesApiResponse, ParamsType } from "./types";
import { getMovies } from "./api/apiMovies";

function App() {
  //Пришлось ввести эту константу, для правильной работы пагианции, поскольку АПИ не отдает указанное кол-во фильмов, если брать из ответа total
  const correctTotal = 60

  const [limit, setLimit] = useState(10)
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = useFetch<MoviesApiResponse, ParamsType>(getMovies, {
    page: currentPage,
    limit: limit
  })


  const handleLimitChange = (newLimit: number) => {
    setCurrentPage(1)
    setLimit(newLimit);
  };

  return (
    <>
      <Header />
      <main>
        <div className="container">
          {isLoading
            ? <div>Loading...</div>
            : <div>
              <div className="wrapper-row">
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
              <MovieList movies={data && data.docs} />
            </div>
          }
        </div>
      </main>
    </>
  )
}

export default App;