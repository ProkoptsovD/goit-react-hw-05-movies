import PropTypes from 'prop-types';
import { Title, List, ListItem, StyledNavLink } from './Additional.styled';

const Additional = ({ tabs, title }) => {
    return (
        <>
            <Title>
                { title }
            </Title>
            <List>
                {tabs.map(({ tabName, to }, index) => (
                    <ListItem key={ index }>
                        <StyledNavLink
                            to={ to }
                        >
                            { tabName }
                        </StyledNavLink>
                    </ListItem>
                ))}
            </List>
        </>
    )
}

Additional.propTypes = {
    title: PropTypes.string.isRequired,
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            tabName: PropTypes.string,
            to: PropTypes.string,
        })
    )
}

export default Additional;