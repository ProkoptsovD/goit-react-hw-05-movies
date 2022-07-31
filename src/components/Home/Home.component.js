import { useEffect, useState } from "react";
import { movieService } from "services";
import { ROUTES } from "constants/routes";
import MovieList from "components/MovieList";

const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState(() => []);

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
                        />
                    : null
            }
        </>
    )
}

export default Home;