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

export interface MoviesApiResponse {
  docs: IMovie[];
  limit: number;
  page: number;
  status: string;
}


export type ParamsType = {
  limit?: number;
  page?: number;
}