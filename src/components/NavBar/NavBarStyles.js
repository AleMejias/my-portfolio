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

        svg{
            font-size: 1.1rem;
            color:#6E73F2;
            cursor:pointer;
            transition: 0.5s all ease;
            transform:${ ({mobileView}) => mobileView ? 'rotate(45deg)' : 'rotate(0deg)'};
        }
        span{
        background-color: #6E73F2;
        padding: 15px;
        left: 0;
        position: absolute;
        border-radius: 100px;

    }
    }
`;

export const MobileButtonColor = styled.button`
    border: 1px solid blue;
    border-radius: 90px;
    background-color: #131313;
    outline: none;
    position: relative;
    display: flex;
    justify-content: space-evenly;
    width: 4rem;
    height: 2rem;
    align-self: flex-end;
    opacity: .8 ;

/*     & > span{
        display: flex;
        background-color: none;
        color: white;
        height: 1.9rem;
        line-height: 1.9rem;
        width: 1.9rem;
    } */
    svg{
        align-self: center;
        margin: 0 4px;
        color: #ffff18;
        font-size: 1.1rem;
        cursor: pointer;

    }
    span{
        background-color: #6E73F2;
        padding: 15px;
        left: 0;
        position: absolute;
        border-radius: 100px;

    }

    @media screen and ( max-width: 768px ) {
    position: absolute;
    display: flex;
    top: 15px;
    right: 5px;
    }
`;
