import styled from "styled-components";


export const Header = styled.header`
    display: flex;
    justify-content: center;
    background-color: #f8f8f8;
    box-shadow: rgba(0 , 0  ,0 , 0.05) 0px 5px 10px;
    color: #6E73F2;
    font-family: 'Jockey One';
    height: 5rem;
    padding: 11px;
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
    justify-content: space-between;
    font-size: 1rem;
    list-style: none;
    width: 80%;
    @media screen and ( max-width: 768px ) {
        flex-direction: column;
        position: absolute;
        top: 5rem;
        left: ${ ({mobileView}) => mobileView ? '0' : '-100%' };
        width: 100%;
        height: 80vh;
        justify-content: space-evenly;
        cursor:pointer;
        transition: 0.5s all ease;
    }

    @media screen and ( max-width : 481px ){
        font-size: .9rem;
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
        height: 100%;
        justify-content: center;
        align-items: center;
    }
`;

export const MenuItemLink = styled.a`
    cursor: pointer;
    transition: .5s all ease;
    position: relative;

    &:before{
        content: "";
        display: block;
        background-color: #1D1D4C;
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
        color: #1D1D4C;
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
        cursor:pointer;

        svg{
            font-size: 1.1rem;
            color:#6E73F2;
            transition: 0.5s all ease;
            transform:${ ({mobileView}) => mobileView ? 'rotate(45deg)' : 'rotate(0deg)'};
        }
    }
    @media screen and ( max-width: 481px ){
        font-size: 1rem;
    }
`;