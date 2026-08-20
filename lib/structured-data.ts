import { BRAND_LOGO, SITE_URL } from "@/lib/site";

const SITE_NAME = "Dumpling Social";
const PAGE_TITLE = "Dumpling Social | Westfield Woden | Canberra";
const LOGO_URL = `${SITE_URL}${BRAND_LOGO.src}`;

export const PAGE_DESCRIPTION =
  "Dumpling Social at Westfield Woden in Canberra. A contemporary Chinese restaurant and cocktail bar serving authentic Chinese cuisine in a stylish setting.";

/**
 * Schema.org graph carried over from the WordPress build so the structured
 * data Google already has on file stays stable through the migration.
 */
export const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      sameAs: [],
      logo: {
        "@type": "ImageObject",
        "@id": `${SITE_URL}/#logo`,
        inLanguage: "en-AU",
        url: LOGO_URL,
        width: BRAND_LOGO.width,
        height: BRAND_LOGO.height,
        caption: SITE_NAME,
      },
      image: { "@id": `${SITE_URL}/#logo` },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      description: "",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-AU",
    },
    {
      "@type": "ImageObject",
      "@id": `${SITE_URL}/#primaryimage`,
      inLanguage: "en-AU",
      url: LOGO_URL,
      width: BRAND_LOGO.width,
      height: BRAND_LOGO.height,
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: `${SITE_URL}/`,
      name: PAGE_TITLE,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      primaryImageOfPage: { "@id": `${SITE_URL}/#primaryimage` },
      datePublished: "2021-08-09T14:01:03+00:00",
      dateModified: "2022-02-26T12:58:36+00:00",
      description: PAGE_DESCRIPTION,
      inLanguage: "en-AU",
      potentialAction: [{ "@type": "ReadAction", target: [`${SITE_URL}/`] }],
    },
  ],
} as const;
