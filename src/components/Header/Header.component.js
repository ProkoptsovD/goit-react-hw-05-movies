import PropTypes from 'prop-types';
import Container from 'components/common/Container';
import { StyledHeader } from './Header.styled';

const Header = ({ children }) => {
    return (
        <StyledHeader>
            <Container>
                { children }
            </Container>
        </StyledHeader>
    );
}

Header.propTypes = {
    children: PropTypes.any
}

export default Header;