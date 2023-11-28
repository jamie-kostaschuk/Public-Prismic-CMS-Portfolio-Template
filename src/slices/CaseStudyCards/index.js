// import things that are related to prismic
import { PrismicRichText } from "@/components/PrismicRichText";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { Bounded } from "@/components/Bounded";

// import components that I have made
import { Badge } from "@/components/Badge";

// import local styles, etc. 
import { Heading } from "@/components/Heading";

// import local components 
import { LinkCard } from "@/components/LinkCard";


/**
 * @typedef {import("@prismicio/client").Content.CaseStudyCardSlice} CaseStudyCardSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CaseStudyCardSlice>} CaseStudyCardProps
 * @param {CaseStudyCardProps}
 */
const CaseStudyCard = ({ slice }) => {
  
  return (
    <Bounded as="div" collapsible={false} className="" yPadding="sm"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div>
        {slice.primary.title && <Heading as="h1" className="h-0 overflow-hidden">{slice.primary.title}</Heading>} 
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center">
          {
          slice.items.map((item, index) => {   
            return (
            <LinkCard key={index} prismicLink={item.page_link} coverImage={item.cover_image} title={item.title} richTextDescription={item.description} type={item.type} cardHeadingTag={"p"} />
            )
          })}       
        </div>
      </div>
    </Bounded>
  );
};

export default CaseStudyCard;
