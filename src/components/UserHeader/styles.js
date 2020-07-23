import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media(max-width: 640px) {
        display: ${({ isHome }) => (isHome ? 'none' : 'flex')};
        flex-direction : column;        
    }
`

export const Header = styled.div`
    display: flex;

    @media(max-width: 640px) {
        flex-direction: column;
    }
`

export const Image = styled.img`
    width: 200px;
    margin-right: 1rem;
    border-radius : 2px;
`

export const ViewResumeLink = styled.button`
    display: flex;
    text-decoration: none;
    padding: 0.75rem 1.5rem;
    font-weight: bold;
    align-items: center;        
    background-color: #24A148;
    transition: background-color 250ms ease;  
    color: #fff;
    outline: none;
    cursor: pointer;
    text-transform: uppercase;
    transform: scale(0.95); 
    border: none;
    transition: all .2s;

    &:hover {        
        transform: scale(1);
    }

    svg {
        fill: white;
        margin-left: 8px;
    }

    @media(max-width: 640px) {
        margin-top: 1rem;
        justify-content: center;        
    }
`