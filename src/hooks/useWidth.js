import { useState } from "react";

export const useWidth = () => {
    const [ widthScreen , setWidthScreen ] = useState( window.innerWidth );

    return [ widthScreen , setWidthScreen ];
}