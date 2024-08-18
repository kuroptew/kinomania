import Header from "@components/header/Header.tsx";
import MovieList from "./components/movieList/MovieList";

import { useFetch } from "./utils/hooks/useFetch";
import { MoviesApiResponse, ParamsType } from "./types";
import { getMovies } from "./api/apiMovies";


function App() {
  const { data, isLoading } = useFetch<MoviesApiResponse, ParamsType>(getMovies)

  return (
    <>
      <Header />
      <main>
        <div className="container">
          {isLoading
            ? <div>Loading...</div>
            : <MovieList movies={data && data.docs} />
          }
        </div>
      </main>
    </>
  )
}

export default App;