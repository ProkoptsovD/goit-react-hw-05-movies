import PropTypes from 'prop-types';
import { Genre, GenreList, MovieCard, OverviewText, Poster, Rate, Title, Wrapper } from "./MovieDetails.styled";

const MovieDetails = ({ title, rate, overview, genres, poster }) => {

    const percantageRateWithNoFloat = (rate * 100 / 10).toFixed(0);
    
    return (
        <MovieCard>
            <Poster src={ poster } alt={ title } />
            <Wrapper>
                <Title>{ title }</Title>
                <Rate>User score: { percantageRateWithNoFloat }%</Rate>
                <h2>Overview</h2>
                <OverviewText>{ overview }</OverviewText>
                <h2>Genres</h2>
                <GenreList>
                    {
                        genres.map(({ id, name }) => (
                            <Genre key={id}>
                                { name }
                            </Genre>
                        ))
                    }
                </GenreList>
            </Wrapper>
        </MovieCard>
    )
}

MovieCard.propTypes = {
    title: PropTypes.string,
    rate: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    poster: PropTypes.string
}

export default MovieDetails;