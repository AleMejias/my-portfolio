import styled from 'styled-components';


export const Wrapper = styled.section`
    background-color: ${ ({theme , themeMode}) =>
        themeMode ? theme.colors.dark : theme.colors.light 
    } ;
    height: 100vh;
    transition: ${({themeMode}) => !themeMode ? '0.5s all ease' : 'none'};
    width: 100%;
`;