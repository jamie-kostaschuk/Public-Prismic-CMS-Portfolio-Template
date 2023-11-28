import { Bounded } from "@/components/Bounded";

/**
 * @typedef {import("@prismicio/client").Content.SectionBreakSlice} SectionBreakSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SectionBreakSlice>} SectionBreakProps
 * @param {SectionBreakProps}
 */
const SectionBreak = ({ slice }) => {
  return (
     <Bounded 
      as="div" 
      collapsible={false}  
      yPadding="md"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex place-content-center">
        <div className="bg-slate-300 h-0.5 w-4/5" />
      </div>
      
    </Bounded>
  );
};

export default SectionBreak;
