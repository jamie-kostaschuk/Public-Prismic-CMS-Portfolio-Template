// import React Stuff

import { COLORS } from '@/styles/colors';
import { SPACINGS } from '@/styles/spacing';


// import others 
import { HeaderSocialIconsAndLangauge } from './_HeaderSocialIconsAndLangauge';
import { HeaderMenuPages } from './_HeaderMenuPages';
import { TopLink } from './_TopLink';


//export component

export function DesktopHeader ({navigation, locales = []}) {
  return (
      <div className="flex w-full min-h-min-content bg-white items-center gap-8 z-10 flex-col">
        <div className="flex w-full max-w-screen-xl justify-between self-center py-4 px-8 box-border">
          <div className="w-fit-content h-min-content gap-8 flex flex-wrap items-center">
            <TopLink  topLinkName={navigation.data.top_link_name}/>
            <HeaderMenuPages variant='desktop' navigation={navigation} />
          </div>
            <HeaderSocialIconsAndLangauge varient={'desktop'} locales={locales}/>
        </div>
      </div>      
    );
  }