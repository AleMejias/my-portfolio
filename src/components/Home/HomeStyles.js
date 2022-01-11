import styled, { keyframes } from 'styled-components';

const opacity = keyframes`
    to{
        opacity: 1;
    }
    from{
        opacity: 0;
    }
`;
export const Wrapper = styled.section.attrs(({className}) => ({
    className : className
}))`
    display: ${({mobileView}) => 
        mobileView ? 'none' : 'flex'  
    };
    height: 100vh;
    width: 100%;
`;
export const Row = styled.div.attrs(({className}) => ({
    className : className
}))`
    padding: 3px 8px;
`;

export const TitleContainer = styled.div.attrs(({className}) => ({
    className: className
}))`
    display: flex;
    flex-direction: column;
    justify-content: center;
    & > div:nth-child(1){
        padding: 5px 5px;
        h4{
            font-family: 'Roboto';
            font-size: 1.4rem;
            font-weight: 500;
        }
        h1{
            font-weight: 600;
            font-family: 'Jockey One';
            font-size: 3.1rem;
            letter-spacing: 1px;
        }
    }
    & > div:nth-child(2){
        padding: 15px;
        a{
            background: linear-gradient(134deg, rgb(106, 152, 240) 0%, rgb(73, 97, 220) 99%);
            border: none;
            border-radius: 5px;
            color: ${({theme}) => theme.colors.light};
            cursor: pointer;
            font-size: .9rem;
            padding: 12px;
        }
    }

    @media screen and (max-width: 768px) {
        margin-bottom: 10px;
        & > div:nth-child(1),
        & > div:nth-child(2){
            text-align : center;
        }
    }
    @media screen and (max-width: 576px) {
        & > div:nth-child(1){
            h4{
                font-size: 1.2rem;
            }
            h1{
                font-size: 2.5rem;
            }
        }
    }
    @media screen and (max-width: 482px) {
        & > div:nth-child(1){
            h4{
                font-size: 1rem;
            }
            h1{
                font-size: 1.7rem;
            }
        }
        & > div:nth-child(2){
            a{
                font-size: .8rem;
            }
        }
    }

`;

export const ImageContainer = styled.div.attrs(({className}) => ({
    className: className
}))`
    display: flex;
    align-items: center;
    & > img{
        animation: ${opacity} .8s ease;
        filter: brightness(1.1);
        mix-blend-mode: multiply;
        width: 100%;
    }
`;