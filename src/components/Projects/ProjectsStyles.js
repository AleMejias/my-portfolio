import styled from 'styled-components';

export const Wrapper = styled.section.attrs(({className}) => ({
    className : className
}))`
    & > h2{
        color: ${({theme , themeMode}) => 
            themeMode ? theme.colors.light : theme.colors.lightBlue
        };
        font-family: 'Jockey One';
        font-size: 1.8rem;
        letter-spacing: 1px;
        margin: 50px 0;
        text-align: center;
    }
`;
export const Row = styled.div.attrs(({className}) => ({
    className : className
}))`
    display: flex;
    justify-content: space-between;
    padding: 25px;
`;
export const CardContainer = styled.div.attrs(({className}) => ({
    className : className
}))`
    display: flex;
    justify-content: center;
    background: ${({theme,themeMode}) =>
            themeMode ? theme.figure.dark : ""  
    };
    & > div {
        width: 90%;
    }
`;
export const CardBody = styled.div.attrs(({className}) => ({
    className : className
}))`
    & > h5{
        color: ${({theme,themeMode}) =>
            themeMode ? theme.colors.light : theme.colors.dark 
        };
        font-family: 'Jockey One';
        font-size: 1.4rem;
    }
    & > p{
        font-family: 'Roboto';
        font-size: 1rem;
        font-weight: 500;
    }
`;

export const LinksContainer = styled.div.attrs(({className}) => ({
    className : className
}))`
    display: flex;
    justify-content: space-evenly;
    padding: 5px;
    & > a{
        color: ${({theme,themeMode}) =>
            themeMode ? theme.colors.light : theme.colors.dark 
        };
        font-size: 1.5rem;
    }
    a:hover{
        color: ${({theme}) => theme.colors.lightBlue };
        transition: 0.4s all ease;
    }
    @media screen and (max-width: 576px){
        & > a{
            color: ${({theme,themeMode}) =>
                themeMode ? theme.colors.light : theme.colors.dark 
            };
            font-size: 1.6rem;
        }
    }
`;