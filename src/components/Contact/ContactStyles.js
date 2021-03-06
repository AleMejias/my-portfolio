import styled from 'styled-components';

export const Footer = styled.footer.attrs(({className}) => ({
    className : className
}))`
    background-color: ${({theme , themeMode}) => 
        themeMode ? theme.colors.dark : theme.colors.light 
    };
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

`;

export const IconContainer = styled.div.attrs(({className}) => ({
    className : className
}))`
    display: flex;
    justify-content: center;
    padding: 10px;

    & > a{
        align-items: center;
        border : 1px solid ${({theme,themeMode}) =>
            themeMode ? theme.colors.light : theme.colors.darkBlue
        };
        border-radius: 50%;
        color : ${({theme,themeMode}) =>
            themeMode ? theme.colors.light : theme.colors.darkBlue
        };
        font-size: 1.2rem;
        height: 45px;
        line-height: 30px;
        margin: 0 0.5rem;
        padding: 4px;
        text-align: center;
        width: 45px;
    }

    a:hover{
        background: ${({theme,themeMode}) =>
            themeMode ? theme.colors.light : theme.colors.darkBlue
        };
        border-radius: 50%;
        color :${({theme,themeMode}) =>
            !themeMode ? theme.colors.light : theme.colors.darkBlue
        };
        transition: 0.3s all ease;
    }

    @media screen and (max-width: 576px){
        & > a{
        font-size: 1.4rem;
        height: 50px;
        line-height: 31px;
        width: 50px;
    }
    }
`;