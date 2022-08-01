import styled from 'styled-components';

export const SearchBar = styled.header`
    top: 0;
    left: 0;
    position: sticky;
    z-index: 1100;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 64px;
    padding-right: 24px;
    padding-left: 24px;
    padding-top: 12px;
    padding-bottom: 12px;
    color: #fff;
    background-color: #3f51b5;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
        0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchForm = styled.form`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    background-color: #fff;
    border-radius: 3px;
    overflow: hidden;
`;

export const Input = styled.input`
    display: block;
    width: 100%;
    height: 100%;
    font: inherit;
    font-size: 20px;
    border: none;
    outline: none;
    padding-left: 12px;
    padding-right: 4px;
`;

export const SerchButton = styled.button`
    display: inline-block;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 30px;
    margin: 0 auto;
    font: inherit;
    border: none;
    background-color: skyblue;
    color: #ffffff;
    opacity: 0.6;
    outline: none;
    
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;

    &:active {
        box-shadow: inset 0px 0px 4px 0px #fafafa;
    }
    &:disabled {
        background-color: #cacaca;
        cursor: not-allowed;
    }

    &:hover {
        opacity: 1;
    }
`;