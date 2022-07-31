import { imageFallback } from 'constants/image-fallback';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { movieService } from 'services';
import { Actor, CastList, CastListItem, Photo, Role } from "./Cast.styled";

const Cast = () => {
    const [ castList, setCastList ] = useState(() => []);
    const { movieId } = useParams();

    useEffect(() => {
        movieService.getCast(movieId).then(({ data: { cast } }) => {
            setCastList(cast);
        });

    }, [movieId]);

    return (
        <>
            {
                castList.length
                    ?   <CastList>
                            {
                                castList.map(({ original_name, character, profile_path, id  }) => (
                                    <CastListItem key={ id }>
                                        <Photo src={ profile_path ? movieService.POSTER_URL + profile_path : imageFallback } />
                                        <Actor>{ original_name }</Actor>
                                        <Role>{ character }</Role>
                                    </CastListItem>
                                ))
                            }
                        </CastList>
                    : null
            }
        </>
    );
}

export default Cast;