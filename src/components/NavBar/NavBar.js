import React , { useEffect, useState } from "react";

import { 
Header, 
LogoContainer, 
Menu, 
MenuItem, 
MenuItemLink, 
MobileButtonColor,
MobileIcon, 
Wrapper } from "./NavBarStyles";


import { useWidth } from "../../hooks/useWidth";
import { handleMobileView } from "../../handlers/handleMobileView";

import Logo from "../../assets/logotype.png";
import { /* FaAlignJustify , */FaPlus , FaSun , FaMoon } from "react-icons/fa";

const NavBar = () => {

    const [ mobileView , setMobileView ] = useState( false );
    const [ widthScreen , setWidthScreen ] = useWidth();



    useEffect( () => {
        window.addEventListener("resize", () =>{
            setWidthScreen(window.innerWidth);
            if(widthScreen > 767){
                setMobileView( false )
            }
        })
    },[ widthScreen ,setWidthScreen] )

    return (
        <Header>
            <Wrapper>
                <LogoContainer>
                    <img src={ Logo } alt="Alejandro Mejias" title="Volver al incio"/>
                </LogoContainer>
                <MobileIcon
                    onClick={ () =>  handleMobileView( setMobileView , mobileView ) }
                    mobileView = {mobileView}
                    title="Desplegar Menu"
                >
                    <FaPlus/>
                </MobileIcon>
                <Menu mobileView = {mobileView}>
                    <MenuItem>
                        <MenuItemLink>
                            Inicio
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink>
                            Sobre mí
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink>
                            Proyectos
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink>
                            Contacto
                        </MenuItemLink>
                    </MenuItem>
                    {/* <MenuItem> */}
                        <MobileButtonColor>
                            <span></span>
                            {/* <span> */}
                                <FaSun />
                            {/* </span> */}
                            {/* <span> */}
                                <FaMoon />
                            {/* </span> */}
                        </MobileButtonColor>
                    {/* </MenuItem> */}


                </Menu>
            </Wrapper>
        </Header>
    );
}

export default NavBar;