import styled from 'styled-components';

export const Footer = styled.footer.attrs(({className}) => ({
    className : className
}))`
    background-color: ${({theme , themeMode}) => 
        themeMode ? theme.colors.dark : theme.colors.light 
    };
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
`;