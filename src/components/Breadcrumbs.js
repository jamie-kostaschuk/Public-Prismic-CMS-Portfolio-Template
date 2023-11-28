'use client'

import React, { ReactNode, useState, useEffect } from 'react'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { Bounded } from "@/components/Bounded";


const CustomBreadcrumbs = ({ homeElement, listClasses, capitalizeLinks }) => {
  const paths = usePathname();
  

  // -------------
  // 
  //To do 
  // - Add url id and what the preferred name is in english and japanese to prismic and pass that to this component. 
  //    (Example: "blockrockcasestudy" : Blockrock Case Study, ブロックロックケーススタディー)
  //
  //
  // -------------
  // List of valid language codes
  const validLanguageCodes = ['en-us', 'ja-jp']; // Add more language codes as needed

  // Create state for language 
  const [currentLanauge, setCurrentLanguage] = useState();

  // Convert paths into a list based on "/"
  const pathNames = paths.split('/').filter(path => path);
 
  // check for the language 
  useEffect(()=>{
    setCurrentLanguage(validLanguageCodes.includes(pathNames[0]) ? pathNames[0] : "");
  }, [])

  // Extract pathNames excluding the language code if it's not a valid language code
  const cleanPathNames = paths.split('/').filter((path, index) => {
    return path && (index === 0 || !validLanguageCodes.includes(path));
  });

  return (
    <Bounded as="div" collapsible={false} className="" yPadding="none">
      <ul className='flex pt-5'>
        <li className='hover:underline mx-2 font-bold'>
          <Link href={`/${currentLanauge}/`}>{homeElement}</Link>
        </li>
        {cleanPathNames.length > 0 && <div> | </div>}
        {cleanPathNames.map((link, index) => {
          let href = `/${currentLanauge ? currentLanauge + "/" : ""}${cleanPathNames.slice(0, index + 1).join('/')}`;
          let itemClasses = paths === href ? `hover:underline mx-2 font-bold text-amber-500` : `hover:underline mx-2 font-bold`;
          let itemLink = capitalizeLinks ? link[0].toUpperCase() + link.slice(1, link.length) : link;
          return (
            <div key={index} className='flex flex-row gap-0'>
              <li className={itemClasses}>
                <Link href={href}>{itemLink}</Link>
              </li>
              {cleanPathNames.length !== index + 1 && <div> | </div>}
            </div>
          );
        })}
      </ul>
    </Bounded>
  );
};

export default CustomBreadcrumbs;