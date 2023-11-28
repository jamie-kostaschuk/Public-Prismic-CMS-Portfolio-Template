
import { PrismicRichText } from "@/components/PrismicRichText";
import { Bounded } from "@/components/Bounded";
import { PrismicNextImage } from "@prismicio/next";

import { Image } from 'antd';

/**
 * @typedef {import("@prismicio/client").Content.TextBlockWithImageSlice} TextBlockWithImageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextBlockWithImageSlice>} TextBlockWithImageProps
 * @param {TextBlockWithImageProps}
 */
const TextBlockWithImage = ({ slice }) => {
  return (
    <Bounded 
      as="div" 
      collapsible={false}  
      yPadding="sm"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className={`${slice.variation == "twoColumn" ? "grid md:grid-cols-2" : "flex flex-col"} gap-20`}>
        {slice.items.map((item, index) => {
          return (
            <div 
            key={index} 
            className={`flex flex-col gap-4 ${slice.variation === "imageOnRight" && "md:grid md:grid-cols-2  md:items-center"}`}>
              <div><PrismicRichText field={item.text} /></div>
                <Image
                  src={item.image.url}
                  alt={item.image.alt}
                  className="rounded-xl overflow-hidden"
                />
            </div>
          )
        })}
      </div>
    </Bounded>
  );
};

export default TextBlockWithImage;
