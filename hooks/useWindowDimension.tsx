import React from 'react'
import { useState, useEffect } from 'react'

interface WindowDimentions {
    width: number | undefined;
    height: number | undefined;
}

function getWindowDimensions():WindowDimentions {

    if(typeof window === 'undefined'){
        return {
            width : undefined,
            height : undefined,
        }
    }
    return{
        width : (window as any).innerWidth,
        height : (window as any).innerHeight,
    }
}

const useWindowDimension = () => {
 const [windowDimensions, setWindowDimensions] = useState<WindowDimentions>(
    getWindowDimensions()
 );
 useEffect(()=>{
    function handleResize(): void {
        setWindowDimensions(getWindowDimensions())
    }
    window.addEventListener('resize',handleResize);
    
    return (): void => window.removeEventListener('resize',handleResize);
 },[])

 return windowDimensions;

}

export default useWindowDimension
