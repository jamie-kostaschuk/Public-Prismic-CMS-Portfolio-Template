// import prismic stuff
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText as BasePrismicRichText } from "@prismicio/react";

// import local styles, etc. 
import { Heading } from "@/components/Heading";


/** @type {import("@prismicio/react").JSXMapSerializer} */
const defaultComponents = {
  paragraph: ({ children }) => <p className="mb-4 last:mb-0">{children}</p>,
  heading1: ({ children }) => (
    <Heading as="h1" size="5xl" className="mb-6 last:mb-0">{children}</Heading>
  ),
  heading2: ({ children }) => (
    <Heading as="h2" size="4xl" className="mb-6 last:mb-0">{children}</Heading>
  ),
  heading3: ({ children }) => (
    <Heading as="h3" size="3xl" className="mb-6 last:mb-0">{children}</Heading>
  ),
  heading4: ({ children }) => (
    <Heading as="h4" size="2xl" className="mb-6 last:mb-0">{children}</Heading>
  ),
  heading5: ({ children }) => (
    <Heading as="h5" size="base" className="mb-0">{children}</Heading>
  ),
  oList: ({ children }) => (
    <ol className="mb-7 pl-4 last:mb-0 md:pl-6">{children}</ol>
  ),
  oListItem: ({ children }) => (
    <li className="mb-1 list-decimal pl-1 last:mb-0 md:pl-2">{children}</li>
  ),
  list: ({ children }) => (
    <ul className="mb-7 pl-4 last:mb-0 md:pl-6">{children}</ul>
  ),
  listItem: ({ children }) => (
    <li className="mb-1 list-disc pl-1 last:mb-0 md:pl-2">{children}</li>
  ),
  preformatted: ({ children }) => (
    <pre className="mb-7 rounded bg-slate-100 p-4 text-sm last:mb-0 md:p-8 md:text-lg">
      <code>{children}</code>
    </pre>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold">{children}</strong>
  ),
  hyperlink: ({ children, node }) => (
    <PrismicNextLink
      field={node.data}
      className="underline decoration-1 underline-offset-2"
    >
      {children}
    </PrismicNextLink>
  ),
};

export function PrismicRichText({ components, ...props }) {
  return (
    <BasePrismicRichText
      components={{ ...defaultComponents, ...components }}
      {...props}
    />
  );
}
