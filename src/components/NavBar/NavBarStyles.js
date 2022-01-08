import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    justify-content: center;
    background: ${({theme,themeMode}) => 
    themeMode ? theme.colors.dark : theme.colors.light};
    box-shadow: rgba(0 , 0  ,0 , 0.05) 0px 5px 10px;
    color: ${({theme}) => theme.colors.lightBlue};
    font-family: 'Jockey One';
    height: 5rem;
    padding: 11px;
    width: 100%;
`;

export const Wrapper = styled.div`
    display: flex;
    width: 90%;
`;

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    transition: 0.5s all ease;
    width: 20%;
    img{
        cursor: pointer;  
        width: 3rem;
    }
    img:hover{
        transform: scale(1.1,1.1);
        transition: 0.5s all ease-in-out;
    }

    @media screen and ( max-width: 481px ) {
        img{
            width: 2.5rem;
            height: 3rem;
        }
    }
`;

export const Menu = styled.ul`
    display: flex;
    background-color: ${({theme , themeMode}) => 
        themeMode ? theme.colors.dark : theme.colors.light
    };
    justify-content: space-between;
    font-size: 1rem;
    list-style: none;
    position: relative;
    width: 80%;
    @media screen and ( max-width: 768px ) {
        flex-direction: column;
        position: absolute;
        top: 5rem;
        left: ${ ({mobileView}) => mobileView ? '0' : '-100%' };
        width: 100%;
        height: 80vh;
        justify-content: space-evenly;
        transition: 0.5s all ease;
    }

    @media screen and ( max-width : 481px ){
        font-size: 1rem;
        height: 50vh;
    }
`;

export const MenuItem = styled.li`
    align-self: flex-end;
    text-align: center;
    width: 20%;

    @media screen and ( max-width: 768px ) {
        align-self: center;
    }
    @media screen and ( max-width : 481px ){
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
    }
`;

export const MenuItemLink = styled.a`
    cursor: pointer;
    transition: .5s all ease;
    position: relative;

    &:before{
        content: "";
        display: block;
        background-color: ${({theme}) => theme.colors.darkBlue};
        bottom: 0;
        height: 2px;
        left: 0;
        margin-bottom: -6px;
        position: absolute;
        transition: .5s all ease;
        width: 0;
    }
    &:hover::before{
        width: 100%;
    }
    &:hover{
        color: ${({theme}) => theme.colors.darkBlue};
        font-size: 1.1rem;
    }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and ( max-width: 768px ) {
        display: flex;
        align-self: center;
        justify-content: flex-end;
        width: 80%;

        svg{
            font-size: 1.1rem;
            color:${({theme}) => theme.colors.lightBlue};
            cursor:pointer;
            transition: 0.5s all ease;
            transform:${ ({mobileView}) => mobileView ? 'rotate(45deg)' : 'rotate(0deg)'};
        }
        span{
        background-color: ${({theme}) => theme.colors.lightBlue};
        padding: 15px;
        left: ${({themeMode}) => 
            themeMode ? '32px' : '0'
        };
        position: absolute;
        border-radius: 100px;

    }
    }
`;

export const MobileButtonColor = styled.button`
    border: none;
    border-radius: 90px;
    background-color: ${({theme , themeMode}) => 
        !themeMode ? theme.colors.dark : theme.colors.light
    };
    outline: none;
    position: relative;
    display: flex;
    justify-content: space-evenly;
    width: 4rem;
    height: 2rem;
    align-self: flex-end;
    opacity:${({themeMode}) => 
        !themeMode ? .8 : 1
    };

    svg{
        align-self: center;
        margin: 0 4px;
        color: ${({theme}) => theme.colors.yellow};
        font-size: 1.1rem;
        cursor: pointer;

    }
    span{
        background-color: ${({theme}) => theme.colors.lightBlue};
        padding: 15px;
        right: ${({theme,themeMode}) => 
            themeMode ? theme.position.darkLocation : theme.position.lightLocation
        };
        transition: 0.5s all ease;
        position: absolute;
        border-radius: 100px;
        box-shadow: 0.5px 0px 1.5px 0.5px ${({theme}) => theme.colors.light};

    }

    @media screen and ( max-width: 768px ) {
    position: absolute;
    display: flex;
    top: 15px;
    right: 5px;
    }
`;
