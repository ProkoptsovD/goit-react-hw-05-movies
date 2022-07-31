import styled from "styled-components";

export const Movies = styled.ul`
    padding: 2px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
export const Movie = styled.li`
    padding: 10px 15px;

    &:not(:last-child) {
        margin-bottom: 5px;
        border-bottom: 1px solid #dadada;
    }
`;