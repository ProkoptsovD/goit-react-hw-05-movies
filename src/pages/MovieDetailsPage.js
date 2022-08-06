import { Suspense, useEffect, useRef, useState } from "react";
import { Outlet } from 'react-router-dom';
import { useParams, useLocation } from "react-router-dom";
import { ROUTES } from "constants/routes";
import { movieService } from "services";
import { addtionalTabs } from "constants/addtional-tabs";
import { imageFallback } from '../constants/image-fallback';

import MovieDetails from "components/MovieDetails";
import BackLink from "components/BackLink";
import Section from "components/common/Section";
import Divider from "components/common/Divider";
import Additional from "components/Additional";
import Loader from "components/common/Loader";

export const MovieDetailsPage = () => {
    const [ movie, setMovie ] = useState();
    const { movieId } = useParams();

    const location = useLocation();
    const backLinkHref = useRef(location.state?.from ?? ROUTES.movies).current;

    useEffect(() => {
        movieService.getMovieDetails(movieId).then(({ data }) => {
            const { vote_average, title, overview, genres, poster_path } = data;
            const poster = poster_path ? movieService.POSTER_URL + poster_path : imageFallback;

            setMovie({
                rate: vote_average,
                poster,
                genres,
                title,
                overview,
            })
        }).catch(console.log);
    
    }, [movieId]);

    return (
        <main>
            <BackLink to={ backLinkHref }>
                Go back
            </BackLink>
            <Section>
                {
                    movie && <MovieDetails {...movie} />
                }
                <Divider />
                <Additional
                    title="Additional information"
                    tabs={ addtionalTabs }
                />
                <Divider />
                <Suspense fallback={ <Loader type="dual-rings" /> }>
                    <Outlet />
                </Suspense>
            </Section>
        </main>
    )
}

export default MovieDetailsPage;