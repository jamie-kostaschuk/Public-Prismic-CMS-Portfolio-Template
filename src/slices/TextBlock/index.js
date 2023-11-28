import { PrismicRichText } from "@/components/PrismicRichText";
import { Bounded } from "@/components/Bounded";


/**
 * @typedef {import("@prismicio/client").Content.InformationAreaSlice} InformationAreaSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<InformationAreaSlice>} InformationAreaProps
 * @param {InformationAreaProps}
 */
const TextBlock = ({ slice }) => {
  return (
    <Bounded 
      as="div" 
      collapsible={false}  
      yPadding="sm"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.text} />
    </Bounded>
  );
};

export default TextBlock;