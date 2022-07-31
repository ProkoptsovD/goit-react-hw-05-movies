import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { movieService } from "services";
import { ROUTES } from "constants/routes";
import MovieList from "components/MovieList";

const Home = () => {
    const [ trendingMovies, setTrendingMovies ] = useState(() => []);
    const location = useLocation();

    useEffect(() => {
        movieService.getTrendingMovies().then(({ data: { results } }) => setTrendingMovies(results));
    }, [])

    return (
        <>
            {
                trendingMovies.length
                    ?  <MovieList
                            movies={ trendingMovies }
                            path={ ROUTES.movies }
                            location={location}
                        />
                    : null
            }
        </>
    )
}

export default Home;