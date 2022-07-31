import PropTypes from 'prop-types';
import { StyledNavLink } from "./NavbarTab.styled"

export const NavbarTab = ({ tabName, to }) => (
    <StyledNavLink
        to={to}
    >
        { tabName }
    </StyledNavLink>
);

NavbarTab.propTypes = {
    tabName: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
}

export default NavbarTab;