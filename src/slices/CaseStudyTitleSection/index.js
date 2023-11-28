// import things that are related to prismic
import { Bounded } from "@/components/Bounded";
import { PrismicRichText } from "@/components/PrismicRichText";

// import components that I have made
import { Badge } from "@/components/Badge";

// import local styles, etc. 
import { Heading } from "@/components/Heading";


/**
 * @typedef {import("@prismicio/client").Content.CaseStudyTitleSectionSlice} CaseStudyTitleSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CaseStudyTitleSectionSlice>} CaseStudyTitleSectionProps
 * @param {CaseStudyTitleSectionProps}
 */

const CaseStudyTitleSection = ({ slice }) => {
  return (
    <Bounded as="div" collapsible={false} yPadding="sm" 
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex flex-col gap-4">
        <div 
          style={{'--image-url': `url(${slice.primary.background_image.url})`}} 
          className={`overflow-hidden rounded-xl flex h-120 bg-center bg-cover ${slice.primary.background_image.url ? "bg-[image:var(--image-url)]" : "bg-gradient-to-r from-cyan-200 to-blue-200"  } ` }
        >   
          <header className={`bg-case-study-title gap-4 py-4 px-4 flex flex-col-reverse h-full w-full`}>
            <p className="font-semibold text-2xl bg-white w-fit px-4 py-2 rounded-lg">{slice.primary.sub_title} </p>
            <Heading as="h1" size="4xl" weight="semibold" className="mb-0 bg-white w-fit px-4 py-2 rounded-lg">{slice.primary.main_title}</Heading>
          </header>
        </div>
      <PrismicRichText 
        field={slice.primary.description} 
        components={{
          paragraph: ({ children }) => (
            <p className="mb-0 last:mb-0">{children}</p>
          ),
          }}
        />
        <PrismicRichText 
        field={slice.primary.tags} 
        components={{
          paragraph: ({ children }) => (
            <p className="mb-0 last:mb-0">{children}</p>
          ),
          }}
        />
        <div className="flex flex-row flex-wrap gap-4">
          {slice.items.map((item, index) => {
            return (<Badge key={index} variant={item.tag}/>)
          })}
        </div>
        
      </div>

    </Bounded>
  );
};

export default CaseStudyTitleSection;
