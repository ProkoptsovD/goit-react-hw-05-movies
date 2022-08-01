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

const getTrendingMovies = async () => {
    try {
        const response = await axios.get(END_POINTS.TRENDING + appendToken());
        if(response.status === 200) {
            return response;
        }

        throw new Error(response)
    } catch (error) {
        console.log(error);
    }
};
const searchMovie = async (movie) => {
    try {
        const response = await axios.get(END_POINTS.SEARCH + appendToken() + '&query=' + movie);
        if(response.status === 200) {
            return response;
        }

        throw new Error(response)
    } catch (error) {
        console.log(error);
    }
}

const getMovieDetails = async (movieId) => {
    try {
        const response = await axios.get(END_POINTS.MOVIE_DETAILS + movieId + appendToken());
        console.log(response);
        if(response.status === 200) {
            return response;
        }

        throw new Error(response)
    } catch (error) {
        console.log(error);
    }
}
const getCast = async (movieId) => {
    try {
        const response = await axios.get(END_POINTS.MOVIE_DETAILS + movieId + END_POINTS.CAST + appendToken());
        if(response.status === 200) {
            return response;
        }

        throw new Error(response)
    } catch (error) {
        console.log(error);
    }
}
const getReviews = async (movieId) => {
    try {
        const response = await axios.get(END_POINTS.MOVIE_DETAILS + movieId + END_POINTS.REVIEWS + appendToken());
        if(response.status === 200) {
            return response;
        }

        throw new Error(response)
    } catch (error) {
        console.log(error);
    }
}

export const movieService = {
    getTrendingMovies,
    searchMovie,
    getMovieDetails,
    getCast,
    getReviews,
    POSTER_URL
}