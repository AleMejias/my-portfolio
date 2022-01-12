import React , { useState , useEffect } from 'react';

import { GlobalStyles } from './components/GlobalStyles';
import { useWidth } from './hooks/useWidth';

import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';

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
      <Home 
        themeMode = { themeMode }
        mobileView = { mobileView }
        widthScreen = { widthScreen }
      />
      <About 
        themeMode = { themeMode }
      />
    </>
  );
}

export default App;
