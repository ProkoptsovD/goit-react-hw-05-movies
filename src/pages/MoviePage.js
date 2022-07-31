    import { useEffect, useState } from "react";
    import { useLocation, useSearchParams } from "react-router-dom";
    import { movieService } from "services";
    import { toast } from 'react-toastify';
    import { notifications } from "constants/notifications";
    import Searchbar from "components/Searchbar";
    import MovieList from "components/MovieList";

    const MoviePage = () => {
        const [ movieList, setMovieList ] = useState(() => []);
        // const [ movie, setMovie ] = useState();
        const [ shouldClearInput, setShouldClearInput ] = useState(false);
        const location = useLocation();
        const [searchParams, setSearchParams] = useSearchParams();
        const movie = searchParams.get('query')
        console.log(movie);

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
            }).catch((error) => console.log(error));
        }, [movie])

        return (
            <main>
                <Searchbar
                    onSubmit={ (movie) => setSearchParams({ query: movie }) }
                    clearInput={ shouldClearInput }
                />
                {
                    movieList.length
                        ?   <MovieList
                                movies={ movieList }
                                location={location}
                            />
                        : null
                }
            </main>
        )
    }

export default MoviePage;