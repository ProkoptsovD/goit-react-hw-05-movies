import styled from "styled-components";

export const MovieCard = styled.article`
    padding-top: 30px;
    margin-bottom: 30px;
`;
export const Poster = styled.img`
    display: block;
    max-width: 400px;
    max-height: 600px;
    margin-inline: auto;
    margin-bottom: 20px;
`;
export const Wrapper = styled.div`
    & > :not(:last-child) {
        margin-bottom: 10px;
    }
`;
export const Title = styled.h1``;
export const Rate = styled.p``;
export const OverviewText = styled.p``;
export const GenreList = styled.ul``;
export const Genre = styled.li``;



