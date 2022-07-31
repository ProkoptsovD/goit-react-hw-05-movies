import { Suspense, useEffect, useState } from "react";
import { Link, Outlet } from 'react-router-dom';
import { useParams, useNavigate } from "react-router-dom";
import { ROUTES } from "constants/routes";
import { movieService } from "services";

import MovieDetails from "components/MovieDetails";
import BackLink from "components/BackLink";

export const MovieDetailsPage = () => {
    const [ movie, setMovie ] = useState();
    const { movieId } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        movieService.getMovieDetails(movieId).then(({ data }) => {
            const { vote_average, title, overview, genres, poster_path } = data;

            setMovie({
                rate: vote_average,
                poster: movieService.POSTER_URL + poster_path,
                genres,
                title,
                overview,
            })
        });
    
    }, [movieId]);

    return (
        <main>
            {/* <BackLink to={ backLinkHref }>Go back</BackLink> */}
            <button onClick={() => navigate(-1)}>Go back</button>
            {
                movie && <MovieDetails {...movie} />
            }
            <p>Additional information</p>
            <ul>
                <li>
                    <Link to={ ROUTES.cast }>Cast</Link>
                </li>
                <li>
                    <Link to={ ROUTES.reviews }>Reviews</Link>
                </li>
            </ul>
            <Suspense fallback="Loading...">
                <Outlet />
            </Suspense>
        </main>
    )
}

export default MovieDetailsPage;