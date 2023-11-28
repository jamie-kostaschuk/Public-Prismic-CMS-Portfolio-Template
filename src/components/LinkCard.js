import { PrismicRichText } from "@/components/PrismicRichText";
import { PrismicNextLink } from "@prismicio/next";

//import QR Code stuff
import QRCode from 'react-qr-code';

// import local styles, etc. 
import { Heading } from "@/components/Heading";

// import components that I have made
import { Badge } from "@/components/Badge";

export function LinkCard ({ prismicLink, coverImage, title, richTextDescription, hasqr, type, cardHeadingTag, horizontalContent }) {
  return (
    <div className="flex h-full drop-shadow-white-bg-lg">
      <PrismicNextLink className=
      {`group overflow-hidden w-full rounded-lg outline outline-transparent  bg-white hover:outline-slate-300 hover:outline-2 flex ${horizontalContent ? "flex-row" : " flex-col"}`}
      field={prismicLink}
      >
      <div 
        className={`${horizontalContent ? "w-full max-w-72 h-full" : "h-72 min-h-72"}  overflow-hidden`}
      >
        <div
        style={{'--image-url': `url(${coverImage.url})`}} 
        className={`bg-cover h-full  bg-center ${coverImage.url ? "bg-[image:var(--image-url)]" : "bg-gradient-to-r from-cyan-200 to-blue-200"} group-hover:scale-110 transition duration-500`}
        ></div>
      </div>              
      <div className={`flex flex-col gap-4 h-full  ${horizontalContent ? "py-4 pl-4 pr-8" : "pb-8 pt-4 px-8"} `}>
        {/* Tite / description and type area*/}
        <div className="flex flex-col gap-2 h-full">
          {/* Tite and description area */}
          <Heading as={cardHeadingTag} size="base" weight="bold" className="underline underline-offset-2">{title}</Heading>
          <PrismicRichText 
            field={richTextDescription} 
            components={{
              paragraph: ({ children }) => (
                <p className="mb-0 last:mb-0">{children}</p>
              ),
              }}
          />
          {hasqr && (
            <QRCode
              className=""
              title="QR Code"
              value={prismicLink.url}
              //size={256}
              style={{ height: "auto", maxWidth: "64%", width: "64%" }}
            />
          )}
        </div>                            
        {type && <Badge variant={type} />}
      </div>
    </PrismicNextLink>
  </div>
  )
};