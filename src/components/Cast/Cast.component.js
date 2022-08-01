import Section from 'components/common/Section';
import { imageFallback } from 'constants/image-fallback';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { movieService } from 'services';
import { Actor, CastList, CastListItem, Photo, Role, Wrapper, StyledSpan, NoCast } from "./Cast.styled";

const Cast = () => {
    const [ castList, setCastList ] = useState(() => []);
    const { movieId } = useParams();

    useEffect(() => {
        movieService.getCast(movieId).then(({ data: { cast } }) => {
            setCastList(cast);
        });

    }, [movieId]);

    return (
        <Section title='Cast'>
            {
                castList.length
                    ?   <CastList>
                            {
                                castList.map(({ original_name, character, profile_path, id  }) => (
                                    <CastListItem key={ id }>
                                        <Photo src={ profile_path ? movieService.POSTER_URL + profile_path : imageFallback } />
                                        <Wrapper>
                                            <Actor>Actor: 
                                                <StyledSpan> { original_name }</StyledSpan>
                                            </Actor>
                                            <Role>Character: 
                                                <StyledSpan> { character }</StyledSpan>
                                            </Role>
                                        </Wrapper>
                                    </CastListItem>
                                ))
                            }
                        </CastList>
                    : <NoCast>We don't have information about the cast for this movie</NoCast>
            }
        </Section>
    );
}

export default Cast;