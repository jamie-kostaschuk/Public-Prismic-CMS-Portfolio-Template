// import React Stuff
import Drawer from '@mui/material/Drawer';
import { IconButton } from '@mui/material';
import { MdMenu, MdClose } from 'react-icons/md';
import { TopLink } from './_TopLink';

import React, { useRef, useState } from 'react'; // Import useState from React


// import Helper functions
import { useViewpoint } from '../../hooks_and_helper_functions/_UseViewpoint';

// import nesting components
import { HeaderMenuPages } from './_HeaderMenuPages';
import { COLORS } from '@/styles/colors';
import { SPACINGS } from '@/styles/spacing';
import { HeaderLanguage } from './_HeaderLangauge';


// export function 
export function MobileHeader ({navigation, locales = []}) {

  // Stles 

const mobileHeaderSmallScreen = {
  display: "flex",
  boxSizing: "border-box",
  width: "100%",
  height: "min-content",
  backgroundColor: COLORS.white,
  placeContent: "space-between",
  flexDirection: "row",
  padding: SPACINGS.spacing_4 + "px " + SPACINGS.spacing_4 + "px",
  alignItems: "center",
  flexWrap: "wrap",
};

const mobileHeader = {
  display: "flex",
  boxSizing: "border-box",
  width: "100%",
  height: "min-content",
  backgroundColor: COLORS.white,
  placeContent: "space-between",
  flexDirection: "row",
  padding: SPACINGS.spacing_4 + "px " + SPACINGS.spacing_8 + "px",
  alignItems: "center",
  flexWrap: "wrap",
};

const iconAndLinks = {
  height: "min-content",
  alignItems: "flex-end",
  gap: SPACINGS.spacing_8,
  display: "flex",
  flexWrap: "wrap",
};

const mobileHeaderIcon = {
  width: "min-content",
  height: "min-content",
  alignItems: "center",
  gap: SPACINGS.spacing_4,
  display: "flex",
};

const drawerContent = {
  display: "flex",
  flexDirection: "column",
  gap: SPACINGS.spacing_16,
  padding: SPACINGS.spacing_16,
  alignItems: "center",
};

  // Variables
  const headerRef = useRef(null);

  const headerHeight = headerRef?.current?.clientHeight;

  const breakpoint = 450;

  const { width } = useViewpoint();

  const [drawerState, setState] = useState({
    toggleDrawer: false,
  });

  const toggleDrawer = () => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
  
    setState({ ...drawerState, toggleDrawer: !drawerState.toggleDrawer });
  };

  return (
      <div 
      style={width < breakpoint ? mobileHeaderSmallScreen : mobileHeader}
      ref={headerRef}
       >
        <div style={iconAndLinks}>
          <TopLink  topLinkName={navigation.data.top_link_name}/>
        </div>
        <div style={mobileHeaderIcon}>
          
          <IconButton onClick={toggleDrawer()}>
            {drawerState.toggleDrawer ? (
              <MdClose color={COLORS.grey900} size={32} />
            ) : (
              <MdMenu color={COLORS.grey900} size={32} />
            )}
          </IconButton>
        </div>
        <Drawer 
        anchor='top'
        open={drawerState.toggleDrawer}
        onClose={toggleDrawer()}
        sx={{
          
          zIndex: 0,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { 
            height: '100%', 
            },
        }}
        >
        
        <div>
          {/* have a Div to offset comtent */}
          <div style ={{height: headerHeight}} ></div>
          {/* Actual Content */}
          <div style={drawerContent}>
          <HeaderMenuPages variant='mobile' navigation={navigation} />
          <HeaderLanguage varient={'mobile'} locales={locales}/> 
          </div>
          
        </div>
      </Drawer>   
      </div>
   
  );
}