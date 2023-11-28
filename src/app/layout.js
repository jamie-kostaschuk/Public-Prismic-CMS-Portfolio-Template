import "./globals.css";

import { PrismicPreview } from "@prismicio/next";

import { repositoryName } from "@/prismicio";

/**
 * @param {{ children: React.ReactNode }}
 */
export default function RootLayout({ children }) {
  
  return (
    <html
      lang="en"
    >
      <body className="overflow-x-hidden antialiased">
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
