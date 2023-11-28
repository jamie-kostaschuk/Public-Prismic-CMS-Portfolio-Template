
import { PrismicRichText } from "@/components/PrismicRichText";
import { Bounded } from "@/components/Bounded";
import { PrismicNextImage } from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.TextBlockWithImageSlice} TextBlockWithImageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextBlockWithImageSlice>} TextBlockWithImageProps
 * @param {TextBlockWithImageProps}
 */
const TextBlockWithCode = ({ slice }) => {
  return (
    <Bounded 
      as="div" 
      collapsible={false}  
      yPadding="sm"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex flex-col gap-4">
        <div><PrismicRichText field={slice.primary.text} /></div>
        <div dangerouslySetInnerHTML={{ __html: slice.primary.code }} />
      </div>
    </Bounded>
  );
};

export default TextBlockWithCode;
