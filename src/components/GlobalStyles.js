import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body{
        background-color: ${({theme , themeMode}) => 
            themeMode ? theme.colors.dark : theme.colors.light 
        };
        transition: ${({themeMode}) => 
            !themeMode ? '0.5s all ease' : "" 
        };
    }
    p,h1,h4{
            color: ${({theme , themeMode}) =>
            themeMode ? theme.colors.light : theme.colors.dark
        };
    }
    header{
        box-shadow: ${({theme , themeMode}) => 
            themeMode ? theme.shadows.darkShadow : theme.shadows.lightShadow 
        };
    }
`;