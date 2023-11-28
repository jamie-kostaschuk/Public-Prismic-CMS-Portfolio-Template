import type { FC } from 'react';


// Theme



// Greys
const white = '#fff';
const grey100 = '#F3F4F8';
const grey200 = '#D2D4DA';
const grey300 = '#B3B5BD';
const grey400 = '#9496A1';
const grey500 = '#777986';
const grey600 = '#5B5D6B';
const grey700 = '#404252';
const grey800 = '#282A3A';
const grey900 = '#101223';


// Additional Colors
const secondaryColor = '#2196f3';
const secondaryColorLight = '#EFFAFE';
const secondaryColorMedium = '#B6D8E9';



// Turn colors to object

export const COLORS = {
    white,
    grey100,
    grey200,
    grey300,
    grey400,
    grey500,
    grey600,
    grey700,
    grey800,
    grey900,
    secondaryColor,
    secondaryColorLight,
    secondaryColorMedium,
} as const;



/*
// create color map 
const colorVarMap = { 
    white: { name: '--site-color-white', value: white },
    testerGrey: {name: '--site-color-testerGrey', value: testerGrey},
}


// export colors

export function getColorVar(key: keyof typeof colorVarMap): string {
    //return `var(${(colorVarMap[key] || {}).name})`;   
    return (colorVarMap[key] || {}).value;   
}


  

// export default - why?
export default colors;

*/