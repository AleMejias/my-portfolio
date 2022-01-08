import React , { useState , useEffect } from 'react';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import { useWidth } from './hooks/useWidth';

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
      <NavBar 
        themeMode = { themeMode }
        setThemeMode = { setThemeMode }
        mobileView = { mobileView }
        setMobileView = { setMobileView }
      />
      <Home 
        themeMode = { themeMode }
      />
    </>
  );
}

export default App;
