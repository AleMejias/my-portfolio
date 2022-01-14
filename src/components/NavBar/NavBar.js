import React  from "react";

import { 
Header, 
LogoContainer, 
Menu, 
MenuItem, 
MenuItemLink, 
MobileButtonColor,
MobileIcon, 
Wrapper } from "./NavBarStyles";

import { handleMobileView } from "../../handlers/handleMobileView";
import { handleThemeMode  } from "../../handlers/handleThemeMode";
import { handleScroll } from "../../handlers/handleScroll";

import Logo from "../../assets/logotype.png";
import { FaPlus , FaMoon } from "react-icons/fa";
import {FiSun} from "react-icons/fi";

const NavBar = ( {themeMode,setThemeMode,mobileView,setMobileView} ) => {

    return (
        <Header 
        themeMode = {themeMode}
        >
            <Wrapper>
                <LogoContainer>
                    <img 
                        src={ Logo } alt="Alejandro Mejias" title="Volver al incio"
                        onClick={ () => {
                            handleScroll("home");
                            setMobileView(!mobileView);
                        } 
                    }
                    />
                </LogoContainer>
                <MobileIcon
                    onClick={ () =>  handleMobileView( setMobileView , mobileView ) }
                    mobileView = {mobileView}
                    title="Desplegar Menu"
                >
                    <FaPlus/>
                </MobileIcon>
                <Menu 
                    mobileView = {mobileView}
                    themeMode = { themeMode }
                >
                    <MenuItem>
                        <MenuItemLink
                            id="home"
                            themeMode = { themeMode }
                            onClick={ () => {
                                handleScroll("home");
                                setMobileView(!mobileView);
                            } 
                        }
                        >
                            Inicio
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink
                            themeMode = { themeMode }
                            onClick={ () => {
                                handleScroll("sobre-mi");
                                setMobileView(!mobileView);
                            } 
                        }
                        >
                            Sobre mí
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink
                            themeMode = { themeMode }
                            onClick={ () => {
                                handleScroll("proyectos");
                                setMobileView(!mobileView);
                            } 
                        }
                        >
                            Proyectos
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink
                            themeMode = { themeMode }
                            onClick={ () => {
                                handleScroll("contacto");
                                setMobileView(!mobileView);
                            } 
                        }
                        >
                            Contacto
                        </MenuItemLink>
                    </MenuItem>
                    {/* <MenuItem> */}
                        <MobileButtonColor
                            themeMode = { themeMode }
                        >
                            <span></span>
                            {/* <span> */}
                                <FiSun 
                                    onClick={ () => handleThemeMode( setThemeMode , themeMode )}
                                />
                            {/* </span> */}
                            {/* <span> */}
                                <FaMoon 
                                    onClick={ () => handleThemeMode( setThemeMode , themeMode )}
                                />
                            {/* </span> */}
                        </MobileButtonColor>
                    {/* </MenuItem> */}


                </Menu>
            </Wrapper>
        </Header>
    );
}

export default NavBar;