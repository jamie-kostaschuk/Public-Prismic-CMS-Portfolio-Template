import * as prismic from "@prismicio/client";
import * as prismicNext from "@prismicio/next";

import sm from "../slicemachine.config.json";

/**
 * The project's Prismic repository name.
 */
export const { repositoryName } = sm;

/**
 * A list of Route Resolver objects that define how a document's \`url\` field
 * is resolved.
 *
 * {@link https://prismic.io/docs/route-resolver#route-resolver}
 *
 * @type {prismic.ClientConfig["routes"]}
 */
export const routes = [
  {
    type: "page",
    uid: "casestudies",
    path: "/:lang?",
  },
  {
    type: "page",
    path: "/:lang?/:uid",
  },
  {
    type: "casestudy",
    path: "/:lang?/casestudies/:uid",
  },
];

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config {prismicNext.CreateClientConfig} - A configuration object to
 */
export const createClient = ({ previewData, req, ...config } = {}) => {
  const client = prismic.createClient(repositoryName, {
    routes,
    fetchOptions:
      process.env.NODE_ENV === "production"
       ? { next: { tags: ["prismic"] }, cache: "force-cache" }
       : { next: { revalidate: 5 } },
    ...config,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,

  });

  prismicNext.enableAutoPreviews({ client, previewData, req });

  return client;
};
