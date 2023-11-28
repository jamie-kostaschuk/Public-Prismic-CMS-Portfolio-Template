import { PrismicRichText } from "@/components/PrismicRichText";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { Bounded } from "@/components/Bounded";

// import local styles, etc. 
import { Heading } from "@/components/Heading";

/**
 * @typedef {import("@prismicio/client").Content.InformationAreaSlice} InformationAreaSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<InformationAreaSlice>} InformationAreaProps
 * @param {InformationAreaProps}
 */
const InformationArea = ({ slice }) => {
  return (
    <Bounded 
      as="div" 
      collapsible={false}  
      yPadding="sm"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex flex-col gap-4">
        {slice.variation !== "repeatableListOnly" ? 
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-4">
              {slice.variation == "default" ? <PrismicNextImage field={slice.primary.title_image} className=" w-16 h-16" /> : undefined}
              <div className="flex flex-col gap-0">
                <Heading as="h3" size="2xl" className="mb-0">{slice.primary.title}</Heading>
                <div className=" text-xl font-bold	">{slice.primary.sub_title}</div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <PrismicRichText 
                field={slice.primary.description}
                components={{
                paragraph: ({ children }) => (
                  <p className="mb-0 last:mb-0">{children}</p>
                ),
                }} 
              />
            </div>
            
          </div>
          : undefined   
        }
      {slice.variation !== "simple" ? 
        <div 
        className={`gap-6 grid grid-cols-1 ${slice.items.length > 1 ? "md:grid-cols-2" : ""}`}>
        {
        slice.items.map((item, index) => {       
          return (
            
            <div className="flex flex-col">
              <PrismicRichText 
              field={item.text_area} 
              key={index}
              components={{
              paragraph: ({ children }) => (
                <p className="mb-0 last:mb-0">{children}</p>
              ),
              }} 
              />
            </div>
          )
        })}  
      </div>   
      : undefined        
      }     
    </div>
    </Bounded>
  );
};

export default InformationArea;