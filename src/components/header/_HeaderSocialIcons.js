
import { IconButton } from '@mui/material';

import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import {  MdLink } from 'react-icons/md';
import { COLORS } from '@/styles/colors';
import { SPACINGS } from '@/styles/spacing';

export function HeaderSocialIcons ({varient}) {
  
  // Styles 
  const icons = {
    width: "100%",
    height: "min-content",
    alignItems: "center",
    gap: SPACINGS.spacing_4,
    display: "flex",
    flexWrap: "wrap",
  };

  // Variables
  let size = 0;
  
  if (varient === 'desktop'){
    size = 24 
  } else if (varient === 'mobile'){
    size = 32 
  } else {
    return null;
  }

  return (
    <div style={icons}>
      <IconButton target="_blank" href='https://bento.me/jamiekost'><MdLink color={COLORS.grey900} size={size} /></IconButton>
      <IconButton target="_blank" href='https://www.instagram.com/jamie_uxui/'><FaInstagram color={COLORS.grey900} size={size} /></IconButton>
      <IconButton target="_blank" href='https://www.linkedin.com/in/jamie-kostaschuk/'><FaLinkedinIn color={COLORS.grey900} size={size} /></IconButton>
      <IconButton target="_blank" href='https://twitter.com/JamieUXUI'><FaTwitter color={COLORS.grey900} size={size} /></IconButton>
    </div>
  )
}