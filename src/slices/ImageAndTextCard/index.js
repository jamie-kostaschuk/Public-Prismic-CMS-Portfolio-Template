import { PrismicRichText } from "@/components/PrismicRichText";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { Bounded } from "@/components/Bounded";

// import local styles, etc. 
import { Heading } from "@/components/Heading";

/**
 * @typedef {import("@prismicio/client").Content.ImageAndDescriptionCardSlice} ImageAndDescriptionCardSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageAndDescriptionCardSlice>} ImageAndDescriptionCardProps
 * @param {ImageAndDescriptionCardProps}
 */
const ImageAndDescriptionCard = ({ slice }) => {
  return (
    <Bounded as="div" collapsible={false} yPadding="sm" 
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div>    
        {slice.primary.title && <Heading as="h2" className="h-0 overflow-hidden">{slice.primary.title}</Heading>} 
  
        
        <div className="drop-shadow-white-bg-xl ">
          <div className="overflow-hidden gap-8 rounded-lg bg-white flex flex-col md:flex-row " >
            <div 
              style={{'--image-url': `url(${slice.primary.image.url})`}} 
              className={`flex-shrink-0 bg-top bg-cover ${slice.primary.image.url ? "bg-[image:var(--image-url)]" : "bg-gradient-to-r from-cyan-200 to-blue-200"  } h-96 md:w-72 md:h-auto`}
            />
            <div className="pb-8 px-8 md:pr-8 md:pt-4 md:pb-4 md:pl-0">
              <PrismicRichText field={slice.primary.text} />
            </div>
          </div>
        </div>
      </div>
      
            


    </Bounded>
  );
};

export default ImageAndDescriptionCard;
