import PropTypes from 'prop-types';
import NavbarTab from './NavbarTab';
import { NavigationBlock, TabListItem, TabList } from "./Navbar.styled";

export const Navbar = ({ tabs }) => {
    return (
        <NavigationBlock>
            {
                tabs.length
                    ? <TabList>
                        {
                            tabs.map((tab, index) => (
                                    <TabListItem key={ index }>
                                        <NavbarTab { ...tab }/>
                                    </TabListItem>)
                                )
                            }
                        </TabList>
                    : null
            }
        </NavigationBlock>
    )
}

Navbar.propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.shape({
        tabName: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired
    })).isRequired
}

export default Navbar;