// import things that are related to prismic
import { PrismicRichText } from "@/components/PrismicRichText";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { Bounded } from "@/components/Bounded";
import QRCode from 'react-qr-code';

// import local styles, etc. 
import { Heading } from "@/components/Heading";

// import local components 
import { LinkCard } from "@/components/LinkCard";

/**
 * @typedef {import("@prismicio/client").Content.StyledLinkSlice} StyledLinkSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<StyledLinkSlice>} StyledLinkProps
 * @param {StyledLinkProps}
 */
const StyledLink = ({ slice }) => {
  return (
    <Bounded as="div" collapsible={false} className="" yPadding="sm"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 justify-center"> 
          {
          slice.items.map((item, index) => {  
            return (
              <LinkCard 
              key={index} 
              prismicLink={item.url} 
              coverImage={item.cover_image} 
              title={item.title} 
              richTextDescription={item.description} 
              hasqr={item.hasqr} 
              cardHeadingTag={"p"}
              horizontalContent={true}/>
            )})}   
        </div>
      </div>
    </Bounded>
  );
};

export default StyledLink;
