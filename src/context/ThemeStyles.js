import React from "react";
import { ThemeProvider } from "styled-components";

const theme= {
    colors:{
        light: '#f8f8f8',
        dark: '#232323',
        darkBlue: '#1D1D4C',
        lightBlue : '#6E73F2',
        yellow:'#ffff18'
    },
    
    position:{
        lightLocation : '35px',
        darkLocation : '0px'
    }
};

export const Theme = ( { children } ) => (
    <ThemeProvider theme= { theme}>
        { children }
    </ThemeProvider>
)


