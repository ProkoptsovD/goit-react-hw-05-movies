import styled from "styled-components";

export const CastList = styled.ul``;
export const CastListItem = styled.li`
    display: flex;

    & > :not(:last-child) {
        margin-bottom: 5px;
    }
`;
export const Actor = styled.p``;
export const Photo = styled.img`
    width: 200px;
    height: 300px;
`;
export const Role = styled.p``;
export const Wrapper = styled.div`
    padding-top: 20px;
    padding-left: 40px;

    & > :not(:last-child) {
        margin-bottom: 5px;
    }
`;
export const StyledSpan = styled.span`
    font-weight: 700;
`;
export const NoCast = styled.p`
    margin-bottom: 20px;
`;