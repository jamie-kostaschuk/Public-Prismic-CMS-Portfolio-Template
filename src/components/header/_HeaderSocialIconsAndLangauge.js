//import React Stuff

// import nesting components 
import { HeaderSocialIcons } from "./_HeaderSocialIcons";
import { HeaderLanguage } from "./_HeaderLangauge";
import { COLORS } from '@/styles/colors';
import { SPACINGS } from '@/styles/spacing';

export function HeaderSocialIconsAndLangauge ({varient, locales = []}) {

  if (varient === 'desktop'){
      return (
      <div className="flex gap-8 py-1">
        <HeaderSocialIcons varient={varient}/>
        <HeaderLanguage varient={varient}  locales={locales}/> 
      </div>
    )} else if (varient === 'mobile') {
      return (
        <div className="flex flex-col items-center gap-6">
          <HeaderSocialIcons varient={varient}/>
          <HeaderLanguage varient={varient} locales={locales}/> 
        </div>
      )
    } else {
      return null;
    }
  }