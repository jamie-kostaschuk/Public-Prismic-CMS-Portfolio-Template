// make server component 

// import React stuff
import Button from '@mui/material/Button';
import { COLORS } from '@/styles/colors';
import { SPACINGS } from '@/styles/spacing';
import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { usePathname } from 'next/navigation';



// export component
export function HeaderMenuPages ({variant, navigation}) {
  const pathname = usePathname();
  // Styles  
  const desktopMenuButtons = {
    width: "max-content",
    height: "min-content",
    alignItems: "flex-start",
    gap: SPACINGS.spacing_4,
    display: "flex",
    listStyleType: "none",

  };

  const mobileMenuButtons = {
    gap: SPACINGS.spacing_8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    listStyleType: "none",

  };

  if (variant === 'desktop') {
    return (
      <div style={desktopMenuButtons}>
      {navigation.data?.links.map((item) => (
        <li
          key={prismic.asText(item.label)}
        >
          <PrismicNextLink 
          field={item.link}
          className={`${pathname === item.link.url ? "font-semibold" : ""} tracking-tight text-slate-800 text-lg px-4 py-2 text-center	rounded hover:bg-gray-100`}
          >
            <PrismicText field={item.label} />
          </PrismicNextLink>
          </li> 
          ))}
      </div>
      )
    } else if (variant === 'mobile') {
      return (
        <div style={mobileMenuButtons}>
          {navigation.data?.links.map((item) => (
              <li
                key={prismic.asText(item.label)}
              >
                
                <PrismicNextLink 
                field={item.link}
                className="tracking-tight text-slate-800 text-3xl	px-4 py-2 text-center	rounded hover:bg-gray-100"
                >
                  <PrismicText field={item.label} />
                </PrismicNextLink>
                </li> 
            ))}
        </div>
      )
    }
    return null;
  }