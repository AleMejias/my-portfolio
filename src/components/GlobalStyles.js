import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body{
        background-color: ${({theme , themeMode}) => 
            themeMode ? theme.colors.dark : theme.colors.light 
        };
        transition: ${({themeMode}) => 
            !themeMode ? '0.5s all ease' : "" 
        };
        section{
            display: ${({mobileView}) => 
                mobileView ? 'none' : 'block'  
            };
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
    header{
        box-shadow: ${({theme , themeMode}) => 
            themeMode ? theme.shadows.darkShadow : theme.shadows.lightShadow 
        };
    }
`;