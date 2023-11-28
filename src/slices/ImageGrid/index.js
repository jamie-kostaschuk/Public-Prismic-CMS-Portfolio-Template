import { Bounded } from "@/components/Bounded";
import { PrismicNextImage } from "@prismicio/next";

import { Image } from 'antd';


/**
 * @typedef {import("@prismicio/client").Content.ImageGridSlice} ImageGridSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageGridSlice>} ImageGridProps
 * @param {ImageGridProps}
 */
const ImageGrid = ({ slice }) => {
  return (
    <Bounded 
      as="div" 
      collapsible={false}  
      yPadding="sm"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"> 
        {
          slice.items.map((item, index) => {       
            return (
              <div className="overflow-hidden rounded-lg aspect-1"> 
              {/* When loading the Image "preview" text changes the layout - so have everything in a overflow-hidden Div */}
                <Image
                  src={item.image.url}
                  alt={item.image.alt}
                />
              </div>            
            )
          })
        } 
      </div>
    </Bounded>
  );
};

export default ImageGrid;
