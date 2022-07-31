    import { useEffect, useState } from "react";
    import { movieService } from "services";
    import { toast } from 'react-toastify';
    import { notifications } from "constants/notifications";
    import Searchbar from "components/Searchbar";
    import MovieList from "components/MovieList";

    const MoviePage = () => {
        const [ movieList, setMovieList ] = useState(() => []);
        const [ movie, setMovie ] = useState();
        const [ shouldClearInput, setShouldClearInput ] = useState(false);

        useEffect(() => {
            if(movie === undefined) {
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
                    onSubmit={ (movie) => setMovie(movie) }
                    clearInput={ shouldClearInput }
                />
                {
                    movieList.length
                        ?   <MovieList
                                movies={ movieList }
                            />
                        : null
                }
            </main>
        )
    }

export default MoviePage;