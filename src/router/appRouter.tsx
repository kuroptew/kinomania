import { createBrowserRouter } from "react-router-dom";

import BaseLayout from "@/layouts/BaseLayout";
import MainPage from "@/pages/main/MainPage";
import MoviePage from "@/pages/movie/MoviePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        path: "/", 
        element: <MainPage/>
      },
      {
        path: "/movie/:id",
        element: <MoviePage />
      }
    ]
  },
]);

export default router;