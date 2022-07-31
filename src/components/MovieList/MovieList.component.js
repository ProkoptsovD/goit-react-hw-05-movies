import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Movie, Movies } from './MovieList.styled';

const MovieList = ({ movies, path }) => {
    return (
        <Movies>
            {
                movies.map(({ id, original_title }) => (
                    <Movie key={ id }>
                        <Link to={path ? `${path}/${id}` : id.toString() }>
                            { original_title }
                        </Link>
                    </Movie>
                ))
            }
        </Movies>
    )
}

MovieList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            id: PropTypes.number
        })
    ),
    path: PropTypes.string
}

export default MovieList;