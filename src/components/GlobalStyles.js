import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body,ul{
        background-color: ${({theme , themeMode}) => 
            themeMode ? theme.colors.dark : theme.colors.light 
        };

        section,footer{
            z-index : -1;
        }
    }
    p,
    h1,
    h2,
    h4,
    span{
            color: ${({theme , themeMode}) =>
            themeMode ? theme.colors.light : theme.colors.dark
        };
    }
    header,footer{
        box-shadow: ${({theme , themeMode}) => 
            themeMode ? theme.shadows.darkShadow : theme.shadows.lightShadow 
        };
    }
`;