"use client"
// Header nesting components
import { MobileHeader } from './_MobileHeader';
import { DesktopHeader } from './_DesktopHeader';
import { BasicHeader } from './_BasicHeader';


// import Helper functions
import { useViewpoint } from '../../hooks_and_helper_functions/_UseViewpoint';
import { useScrollDirection } from '../../hooks_and_helper_functions/_UseScrollDirection';


// Client hooks 
import {useState, useEffect} from 'react'




export function ConstantHeader ({ locales = [], navigation }) {

  // Styles 
  const headerContainer = {
    display: "flex",
    width: "100%",
    boxSizing: "border-box",
    position: "sticky",
    transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDuration: "500ms",
    zIndex: 1,
    top:"0px",
    
  }

  const headerContainerHidden = {
    display: "flex",
    width: "100%",
    boxSizing: "border-box",
    position: "sticky",
    transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDuration: "500ms",
    zIndex: 1,
    top:"-128px",
    opacity: 0,
  }

  // Variables 
  const scrollDirection = useScrollDirection();
 

  // Check that the client has loaded 
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
      setMounted(true)
  }, [])

  // The curent width of the screen through a Hook 
  const { width } = useViewpoint();
  // The width below which the mobile view should be rendered
  const breakpoint = 1000;
  
  return mounted ? (
    <div style={scrollDirection === "down" ? headerContainerHidden : headerContainer}>
      {width < breakpoint ? <MobileHeader navigation={navigation} locales={locales}/> : <DesktopHeader navigation={navigation} locales={locales}/>}
    </div>
  ) : (<BasicHeader navigation={navigation}/> )
};