// import React Stuff

import { TopLink } from './_TopLink';



// export function 
export function BasicHeader ({navigation}) {
  return (
      <div 
      className="py-5 px-8 bg-white mx-auto max-w-screen-xl self-center"
       >  
        <TopLink topLinkName={navigation.data.top_link_name}/> 
      </div>
   
  );
}