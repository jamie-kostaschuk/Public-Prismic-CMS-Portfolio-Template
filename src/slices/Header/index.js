import { Bounded } from "@/components/Bounded";
import { PrismicRichText } from "@/components/PrismicRichText";

// import local styles, etc. 
import { Heading } from "@/components/Heading";



/**
 * @typedef {import("@prismicio/client").Content.AboutMeSectionTitleSlice} AboutMeSectionTitleSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AboutMeSectionTitleSlice>} AboutMeSectionTitleProps
 * @param {AboutMeSectionTitleProps}
 */
const AboutMeSectionTitle = ({ slice }) => {
  const textSizes = {
    "h2(4xl)": "4xl",
    "h3(3xl)": "3xl",
    null: "4xl", // to fig bug that older headings do not have these assinged
  };
  return (
    <Bounded 
      as="div" 
      collapsible={false}  
      yPadding="sm-top-only"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex flex-col gap-4">
        <Heading 
          as={slice.primary.title_html_tag ? slice.primary.title_html_tag : "h2"} // Checking if null and if so make h2 by default - to fig bug that older headings do not have these assinged
          size={textSizes[slice.primary.title_display_size]} 
          className="mb-0">{slice.primary.title}
        </Heading>
        <PrismicRichText 
              field={slice.primary.description}
              components={{
              paragraph: ({ children }) => (
                <p className="mb-0 last:mb-0">{children}</p>
              ),
              }} 
          />
      </div>

      

    </Bounded>
  );
};

export default AboutMeSectionTitle;
