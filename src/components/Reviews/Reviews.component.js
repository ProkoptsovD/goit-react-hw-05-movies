import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { movieService } from 'services';
import { ReviewsList, ReviewsListItem, UserName, CommentText } from './Reviews.styled';

const Reviews = () => {
    const [ reviews, setreviews ] = useState(() => []);
    const { movieId } = useParams();

    useEffect(() => {
        movieService.getReviews(movieId).then(({ data: { results } }) => {
            setreviews(results);
        });

    }, [movieId]);

    return (
        <>
            {
                reviews.length
                    ?   <ReviewsList>
                            {
                                reviews.map(({ author, content, id  }) => (
                                    <ReviewsListItem key={ id }>
                                        <UserName>{ author }</UserName>
                                        <CommentText>{ content }</CommentText>
                                    </ReviewsListItem>
                                ))
                            }
                        </ReviewsList>
                    : <p>We don't have any review for this film</p>
            }
        </>
    );
}

export default Reviews;