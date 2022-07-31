import axios from 'axios';

const AUTH_TOKEN = '5ce599886a4c0703a030654068991e03';
const BASE_URL = 'https://api.themoviedb.org/3/';
const POSTER_URL = 'https://image.tmdb.org/t/p/original'
const END_POINTS = {
    TRENDING: 'trending/all/day',
    SEARCH: 'search/movie',
    MOVIE_DETAILS: 'movie/',
    CAST: '/credits',
    REVIEWS: '/reviews'
}

axios.defaults.baseURL = BASE_URL;
const appendToken = () => '?api_key=' + AUTH_TOKEN;

const getTrendingMovies = () => axios.get(END_POINTS.TRENDING + appendToken());
const searchMovie = (movie) => axios.get(END_POINTS.SEARCH + appendToken() + '&query=' + movie);
const getMovieDetails = (movieId) => axios.get(END_POINTS.MOVIE_DETAILS + movieId + appendToken());
const getCast = (movieId) => axios.get(END_POINTS.MOVIE_DETAILS + movieId + END_POINTS.CAST + appendToken());
const getReviews = (movieId) => axios.get(END_POINTS.MOVIE_DETAILS + movieId + END_POINTS.REVIEWS + appendToken());

export const movieService = {
    getTrendingMovies,
    searchMovie,
    getMovieDetails,
    getCast,
    getReviews,
    POSTER_URL
}