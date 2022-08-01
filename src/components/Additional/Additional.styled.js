import styled from "styled-components";
import { NavLink } from 'react-router-dom';


export const Title = styled.p`
    margin-bottom: 20px;
`;
export const List = styled.ul`
`;
export const ListItem = styled.li`
    padding: 15px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;
export const StyledNavLink = styled(NavLink)`
    display: block;
    width: 100%;
    height: 100%;

    cursor: pointer;
`;