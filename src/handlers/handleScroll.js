
import { scroller } from 'react-scroll';

const scrollType = {
    duration: 150,
    smooth: "easeOutQuint",
    activeClass:"active",
    offset: -115
 };

export const handleScroll = ( section) => {
    section === "contacto" 
    ? scroller.scrollTo(section,{offset:100} )
    : scroller.scrollTo(section , scrollType);
}