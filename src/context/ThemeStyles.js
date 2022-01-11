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
    },
    shadows:{
        lightShadow: 'rgba(0 , 0  ,0 , 0.05) 0px 5px 10px;',
        darkShadow: 'rgb(25, 25 ,25 , 1) 0px 5px 10px',
    }
};

export const Theme = ( { children } ) => (
    <ThemeProvider theme= { theme}>
        { children }
    </ThemeProvider>
)


