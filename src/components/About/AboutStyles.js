import styled from 'styled-components';

export const Wrapper = styled.section.attrs(({className}) => ({
    className : className
}))`
    border-radius:90% 10% 91% 9% / 8% 82% 18% 92%;
    /* 94% 6% 100% 0% / 24% 47% 53% 76% 
         90% 10% 86% 14% / 20% 82% 18% 80% 
    */
    //background: red;
`;

export const Row = styled.div.attrs(({className}) => ({
    className : className
}))`
`;

export const TitleContainer = styled.div.attrs(({className}) => ({
    className : className
}))`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 10px;
    & > h2{
        color: ${({theme , themeMode}) => 
            themeMode ? theme.colors.light : theme.colors.lightBlue
        };
        font-family: 'Jockey One';
        font-size: 1.8rem;
        letter-spacing: 1px;
    }
`;
export const PictureContainer = styled.div.attrs(({className}) => ({
    className : className
}))`
    & > div{
        display: flex;
        justify-content: center;
        //border: 1px solid green;
        padding: 5px;
        img{
            width: 80%;
            object-fit: contain;
            filter: brightness(1.1);
            mix-blend-mode: multiply;
            border-radius: 50%;
        }
    }
`;
export const CoverLetterContainer = styled.div.attrs(({className}) => ({
    className : className
}))`
    height: 200px;
`;