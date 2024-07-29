import axios from "axios";

import { MoviesApiResponse, ParamsType } from "@/types";

const API_KEY = import.meta.env.VITE_KINOPOISK_API_KEY;
const BASE_URL = import.meta.env.VITE_KINOPOISK_BASE_API_URL;

export async function getMovies(params?: ParamsType): Promise<MoviesApiResponse> {
  try {
    const { page= 1, limit = 10 } = params || {};

    const response = await axios.get<MoviesApiResponse>(`${BASE_URL}movie`, {
      headers: {
        "X-API-KEY": API_KEY,
      },
      params: {
        page,
        limit,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
    return { docs: [], page: 1, status: "error", limit: 10 };
  }
}