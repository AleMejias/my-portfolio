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
    &.figure{
        background-color: ${({theme,themeMode}) =>
            themeMode ? theme.figure.dark : theme.figure.light
        };
        border-radius:96% 4% 97% 3% / 8% 90% 10% 92%;
        position: relative;
        z-index: 100;
    }

    &.certification{
        display: flex;
        justify-content: space-evenly;
    }

    @media screen  and (max-width:768px) {
        &.certification{
            flex-direction: column;
            align-items: center;
        }
    }
`;

export const TitleContainer = styled.div.attrs(({className}) => ({
    className : className
}))`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 10px;
    position: absolute;
    z-index: 1;
`;
export const PictureContainer = styled.div.attrs(({className}) => ({
    className : className
}))`
    & > div{
        display: flex;
        justify-content: center;
        padding: 5px;
        position: absolute;
        z-index: 1;

        img{
            border-radius: 50%;
            box-shadow : 0px 0px 2px 2px #f8f8f8;
            filter: brightness(1.1);
            mix-blend-mode: multiply;
            object-fit: contain;
            width: 200px;
        }
    }
    @media screen and (max-width: 768px){
        & > div{
            left: 0;
            right: 10%;
            img{
                width: 150px;
            }
        }
    }
`;
export const CoverLetterContainer = styled.div.attrs(({className}) => ({
    className : className
}))`
    padding : 10px 25px;
    & > p{
        font-family: 'Roboto';
        font-size: .9rem;
    }

    @media screen and (max-width: 768px){
        margin-top: 200px;
        & > p{
            font-size: 1rem;
        }
    }
`;

export const SkillsCard = styled.div.attrs(({className}) => ({
    className : className
}))`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    span{
        margin: 5px 0;
        font-family: 'Jockey One';
        font-size: 1rem;
    }
    img{
        width: 4rem;
    }
`;

export const CertificationContainer = styled.div.attrs(({className}) => ({
    className : className
}))`
    background-color: ${({theme,themeMode}) => 
        themeMode ? theme.figure.dark : theme.figure.light 
    };
    border-radius: 5%;
    margin: 10px;
    padding: 15px;
    text-align: center;
    box-shadow: 8px 9px 6px -8px ${({theme , themeMode}) =>
        themeMode ? theme.colors.light : theme.colors.dark
    };
    & > p{
        font-family: 'Jockey One';
        font-size: 1.1rem;
        font-weight: 500;
    }
    & > a{
        color: #f8f8f8;
        font-size: 1rem;
    }
    a:hover{
        color: ${({theme,themeMode}) => 
            themeMode ? theme.colors.lightBlue : theme.colors.dark 
        };
        font-size: 1rem;
        transition: 0.3s all ease;
        
    }
`;