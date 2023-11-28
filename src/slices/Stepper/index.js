import { Bounded } from "@/components/Bounded";

// import components that I have made
import { Badge } from "@/components/Badge";

// import local styles, etc. 
import { Heading } from "@/components/Heading";


/**
 * @typedef {import("@prismicio/client").Content.StepperSlice} StepperSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<StepperSlice>} StepperProps
 * @param {StepperProps}
 */

const Item = ({ index, listLength, title, description }) => (
  <div className={`flex flex-col h-full md:flex-row gap-1 ${index + 1 === listLength ? 'md:w-min' : 'md:w-full'}`}>
    <div className={`flex flex-row gap-2`}>
      <div className="self-center h-8 min-w-8 rounded-full flex text-white bg-slate-800 items-center justify-center">
        {index + 1}
      </div>
      <div className="h-min self-center whitespace-nowrap	">
        {title && <p className="font-bold text-lg">{title}</p>}
        {description && <p>{description}</p>}
      </div>
    </div>
    {index + 1 !== listLength && (
      <div className="border-slate-900 border-solid ml-4 h-8 border-l-2 md:w-full md:border-t-2 md:border-l-0 md:self-center md:h-0 md:ml-2"></div>
    )}
  </div>
);

const Stepper = ({ slice }) => {
  return (
    <Bounded as="div" collapsible={false} yPadding="sm" 
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex flex-col gap-1 md:flex-row w-full md:gap-2 md:px-4 md:items-center">
        {slice.items.map((item, index) => (
          <Item key={index} index={index} listLength={slice.items.length} title={item.title} description={item.description} />
        ))}
      </div>         
    </Bounded>
  );
};

export default Stepper;
