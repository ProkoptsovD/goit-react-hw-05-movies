    import { useEffect, useState } from "react";
    import { useLocation, useSearchParams } from "react-router-dom";
    import { movieService } from "services";
    import { toast } from 'react-toastify';
    import { notifications } from "constants/notifications";
    import Searchbar from "components/Searchbar";
    import MovieList from "components/MovieList";
import Section from "components/common/Section";

    const MoviePage = () => {
        const [ movieList, setMovieList ] = useState(() => []);
        const [ shouldClearInput, setShouldClearInput ] = useState(false);
        const [ searchParams, setSearchParams ] = useSearchParams();
        const location = useLocation();

        const movie = searchParams.get('query')

        useEffect(() => {
            if(movie === null) {
                return;
            };

            if(movie === '') {
                toast.warn(notifications.emptyQuery);
                
                return;
            }

            movieService.searchMovie(movie).then(({ data: { results } }) => {
                if (!results.length) {
                    toast.error(notifications.invalidQuery);
                    
                    return;
                }

                setShouldClearInput(true);
                setMovieList(results);
            }).catch(console.log);
        }, [movie])

        return (
            <main>
                <Searchbar
                    onSubmit={ (movie) => setSearchParams({ query: movie }) }
                    clearInput={ shouldClearInput }
                />
                <Section>
                    {
                        movieList.length
                            ?   <MovieList
                                    movies={ movieList }
                                    location={location}
                                />
                            : null
                    }
                </Section>
            </main>
        )
    }

export default MoviePage;