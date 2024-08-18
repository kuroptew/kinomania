interface IRating {
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number;
}

interface IVotes {
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number;
}

interface IPoster {
  url: string;
  previewUrl: string;
}

interface IGenre {
  name: string;
}

interface ICountry {
  name: string;
}

interface ReleaseYear {
  start: number;
  end: number | null;
}

export interface IMovie {
  id: number;
  name: string | null;
  alternativeName: string | null;
  type: "movie" | "tv-series" | "cartoon" | "animated-series" | "anime";
  typeNumber: number;
  year: number;
  description: string | null;
  shortDescription: string | null;
  status: string | null;
  rating: IRating;
  votes: IVotes;
  movieLength: number | null;
  totalSeriesLength: number | null;
  seriesLength: number;
  ratingMpaa: string | null;
  ageRating: string | null;
  poster?: IPoster;
  genres: IGenre[];
  countries: ICountry[];
  releaseYears: ReleaseYear[];
  top10: boolean | null;
  top250: boolean | null;
  isSeries: boolean;
  ticketsOnSale: boolean;
}

interface IPerson {
  id: number;
  photo: string;
  name: string;
  enName: string;
  description: string;
  profession: string;
  enProfession: string;
}

type ISimilarMovie = Pick<IMovie, "id" | "name" | "alternativeName" | "poster">;

export interface IMovieByID extends IMovie {
  persons: IPerson[];
  similarMovies: ISimilarMovie[];
}

export interface MoviesApiResponse {
  docs: IMovie[];
  limit: number;
  page: number;
  total: number;
  status: string;
}

export type ParamsTypeMovies = {
  limit?: number;
  page?: number;
  country?: string | null;
  year?: string | null;
  ageRating?: string | null;
};

export type ParamsTypeSearch = {
  query: string | null;
};

export interface ISelectObj {
  value: string;
  label: string;
}
