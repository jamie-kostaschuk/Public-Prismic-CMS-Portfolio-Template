import { SliceZone } from "@prismicio/react";
import { notFound } from "next/navigation";

import { getLocales } from "@/lib/getLocales";
import { createClient } from "@/prismicio";

import { Layout } from "@/components/Layout";
import { components } from "@/slices";

/**
 * @returns {Promise<import("next").Metadata>}
 */
export async function generateMetadata({ params }) {
  const client = createClient();
  const page = await client
    .getByUID("casestudy", params.uid, { lang: params.lang })
    .catch(() => notFound());

  return {
    title: page.data.title,
  };
}

export default async function Page({ params }) {
  const client = createClient();

  const page = await client
    .getByUID("casestudy", params.uid, { lang: params.lang })
    .catch(() => notFound());
  const navigation = await client.getSingle("navigation", {
    lang: params.lang,
  });

  const locales = await getLocales(page, client);

  return (
    <Layout locales={locales} navigation={navigation}>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
}

export async function generateStaticParams() {
  const client = createClient();

  const pages = await client.getAllByType("casestudy", { lang: "*" });

  return pages.map((page) => {
    return {
      uid: page.uid,
      lang: page.lang,
    };
  });
}
