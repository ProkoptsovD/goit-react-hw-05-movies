import { ROUTES } from "constants/routes";
import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SharedLayout from "./SharedLayout";

const Home = lazy(() => import('../pages/HomePage'));
const MoviePage = lazy(() => import('../pages/MoviePage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path={ ROUTES.home } element={ <SharedLayout /> }>
        <Route index element={ <Home /> } />
        <Route path={ ROUTES.movies } element={ <MoviePage /> } />
        <Route path={ ROUTES.movies + '/:movieId' } element={ <MovieDetailsPage /> } >
          <Route path="cast" element={ <Cast /> } />
          <Route path="reviews" element={ <Reviews /> } />
        </Route>
      </Route>
      <Route path="*" element={ <Navigate to="/" /> } />
    </Routes>
  );
};
