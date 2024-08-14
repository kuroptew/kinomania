import { useRef, useEffect, useState } from "react"
import classnames from 'classnames';
import { useDebounce } from "@/utils/hooks/useDebounce"
import { getMoviesBySearch } from "@/api/apiMovies"
import { IMovie } from "@/types"

import styles from "./styles.module.scss"

const SearchMovies = () => {
  const [search, setSearch] = useState("")
  const debounceSearch = useDebounce(search, 1000)
  const [isOpen, setIsOpen] = useState(false)
  const refList = useRef<HTMLUListElement | null>(null)
  const refInput = useRef<HTMLInputElement | null>(null)
  const [findedMovies, setFindedMovies] = useState<IMovie[] | null>(null)

  const handleClickOutside = (event: MouseEvent | TouchEvent) => {
    if (refList.current && !refList.current.contains(event.target as Node) && refInput.current && !refInput.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
    setIsOpen(true)
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const fetchMovies = async () => {
      if (debounceSearch.trim() === '') {
        // Если инпут пустой, возвращаемся и не выполняем запрос
        return;
      }

      const data = await getMoviesBySearch({
        query: debounceSearch === "" ? null : debounceSearch
      })

      setFindedMovies(data.docs)
    };

    fetchMovies();
  }, [debounceSearch]);


  //Вычисление того, что должно показываться в листе поиска
  let list;

  if (findedMovies === null || isOpen) {
    list = <></>
  }

  if (findedMovies !== null && findedMovies?.length > 0 && isOpen) {
    list = <ul className={styles.list} ref={refList}>
      {findedMovies.map((movie) => {
        return (
          <li key={movie.id} className={styles.item} > {movie.name ? movie.name : movie.alternativeName} <span>({movie.year})</span></li>)
      })
      }
    </ul >
  }

  if (findedMovies !== null && findedMovies.length === 0 && isOpen && debounceSearch) {
    list = <ul className={styles.list} ref={refList}>
      <li className={classnames(styles.item, styles["not-found"])}>Ничего не найдено</li>
    </ul >
  }

  return (
    <div className={styles.wrapper}>
      <input
        ref={refInput}
        type="text"
        placeholder="Найти фильм или сериал"
        className={styles.search}
        value={search}
        onChange={handleChange}
        onFocus={() => setIsOpen(true)}
      />
      {
        list
      }
    </div >
  )
}

export default SearchMovies;