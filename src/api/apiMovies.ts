import axios from "axios";

import { MoviesApiResponse, ParamsTypeMovies, ParamsTypeSearch } from "@/types";

const API_KEY = import.meta.env.VITE_KINOPOISK_API_KEY;
const BASE_URL = import.meta.env.VITE_KINOPOISK_BASE_API_URL;

export async function getMovies(params?: ParamsTypeMovies): Promise<MoviesApiResponse> {
  try {
    const { page = 1, limit = 10, country, year, ageRating } = params || {};

    const response = await axios.get<MoviesApiResponse>(`${BASE_URL}movie`, {
      headers: {
        "X-API-KEY": API_KEY,
      },
      params: {
        page,
        limit,
        "countries.name":country,
        year,
        ageRating
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
    return { docs: [], page: 1, status: "error", limit: 10, total: 0 };
  }
}

export async function getMoviesBySearch(params?: ParamsTypeSearch): Promise<MoviesApiResponse> {
  try {
    const { query } = params || {};

    const response = await axios.get<MoviesApiResponse>(`${BASE_URL}movie/search`, {
      headers: {
        "X-API-KEY": API_KEY,
      },
      params: {
        query
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
    return { docs: [], page: 1, status: "error", limit: 10, total: 0 };
  }
}

export async function getMovieById(params?: {id?: string}): Promise<MoviesApiResponse> {
  try {
    const { id } = params || {id: "1"};

    const response = await axios.get<MoviesApiResponse>(`${BASE_URL}movie`, {
      headers: {
        "X-API-KEY": API_KEY,
      },
      params: {
        id,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
    return { docs: [], page: 1, status: "error", limit: 10, total: 0 };
  }
}