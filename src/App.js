import React , { useState , useEffect } from 'react';

import { GlobalStyles } from './components/GlobalStyles';
import { useWidth } from './hooks/useWidth';

import { Element  } from 'react-scroll';

import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';


const  App = () => {
  const [ themeMode , setThemeMode] = useState( false );
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
    <>
      <GlobalStyles 
        themeMode = { themeMode }
        mobileView = { mobileView }
      />
      <NavBar 
        themeMode = { themeMode }
        setThemeMode = { setThemeMode }
        mobileView = { mobileView }
        setMobileView = { setMobileView }
      />
      <Element name='home'>
        <Home 
          themeMode = { themeMode }
          mobileView = { mobileView }
          widthScreen = { widthScreen }
        />
      </Element>
      <Element name = 'sobre-mi'>
        <About 
          themeMode = { themeMode }
        />
      </Element>
      <Element name='proyectos'>
        <Projects
          themeMode = { themeMode }
        />
      </Element>
      <Element name='contacto'>
        <Contact
          themeMode = { themeMode }
        />
      </Element>
    </>
  );
}

export default App;
