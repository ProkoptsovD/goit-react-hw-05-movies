import styled from 'styled-components';

export const NavigationBlock = styled.nav``;
export const TabList = styled.ul`
    display: flex;
    align-items: center;
`;
export const TabListItem = styled.li`
    &:not(:last-child) {
        margin-right: 15px;
    }
`;