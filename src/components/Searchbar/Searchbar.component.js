import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { SearchBar, SearchForm, Input, SerchButton } from './Searchbar.styled';
import Container from 'components/common/Container';

export const Searchbar = ({ onSubmit, clearInput }) => {
    const [ inputValue, setInputValue ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const sanitizedQuery = inputValue.trim().toLowerCase();
        onSubmit(sanitizedQuery);
    }

    useEffect(() => {     
        if(clearInput) setInputValue('');
        
    }, [clearInput]);


    return (
        <SearchBar>
            <Container>
                <SearchForm 
                    onSubmit={handleSubmit}
                >
                    <SerchButton type="submit">
                        Search
                    </SerchButton>
    
                    <Input
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </SearchForm>
            </Container>
        </SearchBar>
    )
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    clearInput: PropTypes.bool,
}

export default Searchbar;