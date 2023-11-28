// import React Stuff
import { COLORS } from '@/styles/colors';
import { SPACINGS } from '@/styles/spacing';

import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';


//export component

export function TopLink({topLinkName}) {

    const currentPath = usePathname();
    const locale = useMemo( () => (currentPath.split('/')[1] === "ja-jp") ? "ja-jp" : "",([currentPath]))


    // Styles
    const link = {
        color: COLORS.grey900,
        fontSize: "24px",
        fontWeight: 500,
        fontFamily: "Helvetica Neue, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif",
        width: "min-content",
        height: "40px",
        whiteSpace: "nowrap",
        flexDirection: "column",
        maxWidth: "271px",
        lineHeight: "40px",
        textDecoration: "none",
      };
    
    const linkWrapper = {
        textDecoration: "none",

    }
    return (
        <a href={'/' + locale} style={linkWrapper}>
            <div style={link}>
            {topLinkName}
            </div>
        </a>
    );
  }