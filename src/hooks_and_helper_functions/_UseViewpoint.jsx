import React, { useState, useEffect } from 'react';

export function useViewpoint() {
  // Declare a new state variable with the "useState" Hook
  const [width, setWidth] = useState(() => {
    // Check if the window object is available (only in the browser)
    if (typeof window !== 'undefined') {
      return window.innerWidth;
    }
    // Default value for server-side rendering or when window is not available
    return 0;
  });
  /* Inside of a "useEffect" hook add an event listener that updates
     the "width" state variable when the window size changes */
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  
  // Return the width so we can use it in our components
  return { width };
}