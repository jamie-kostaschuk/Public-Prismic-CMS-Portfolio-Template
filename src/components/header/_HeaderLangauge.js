import { PrismicNextLink } from "@prismicio/next";



export function HeaderLanguage ({varient, locales = []}) {
  // Global language, and convery to a string for easy handling
  
  const localeLabels = {
    "en-us": "EN",
    "ja-jp": "日本語",
  };

  if (varient === 'desktop'){
      return (
        <ul className="flex gap-3">
          {locales.map((locale) => (
            <li key={locale.lang} className="first:font-semibold flex">
              <PrismicNextLink
                href={locale.url}
                locale={locale.lang}
                aria-label={`Change language to ${locale.lang_name}`}
                className="whitespace-nowrap p-2 rounded hover:bg-gray-100"
              >
                {localeLabels[locale.lang] || locale.lang}
              </PrismicNextLink>
            </li>
          ))}
        </ul>
      )} else if (varient === 'mobile'){
        return (
        <ul className="flex gap-3">
          {locales.map((locale) => (
            <li key={locale.lang} className="first:font-semibold flex">
              <PrismicNextLink
                href={locale.url}
                locale={locale.lang}
                aria-label={`Change language to ${locale.lang_name}`}
                className="text-2xl p-2 rounded text-center hover:bg-gray-100"
              >
                {localeLabels[locale.lang] || locale.lang}
              </PrismicNextLink>
            </li>
          ))}
        </ul>
    )} else {
      return null;
    } 
  }