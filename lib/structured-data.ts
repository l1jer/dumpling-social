import { BRAND_LOGO, EMAIL, LOCATIONS, SITE_URL } from "@/lib/site";

const SITE_NAME = "Dumpling Social";

export const PAGE_TITLE =
  "Dumpling Social | Westfield Woden | Braddon | Canberra";

export const PAGE_DESCRIPTION =
  "Dumpling Social in Westfield Woden and Braddon, Canberra. A contemporary Asian restaurant and cocktail bar serving modern Chinese and Japanese cuisine, handcrafted dumplings, and signature cocktails in a stylish setting.";

const LOGO_URL = `${SITE_URL}${BRAND_LOGO.src}`;

/** Suburb and postcode parsed out so each venue gets a proper PostalAddress. */
const ADDRESS_PARTS: Record<
  string,
  { street: string; suburb: string; postcode: string }
> = {
  woden: {
    street: "Shop R02/9 Bradley St",
    suburb: "Phillip",
    postcode: "2606",
  },
  braddon: {
    street: "Unit 61/10 Lonsdale St",
    suburb: "Braddon",
    postcode: "2612",
  },
};

const restaurantNodes = LOCATIONS.map((location) => {
  const parts = ADDRESS_PARTS[location.id];
  return {
    "@type": "Restaurant",
    "@id": `${SITE_URL}/#restaurant-${location.id}`,
    name: `${SITE_NAME} ${location.name}`,
    url: `${SITE_URL}/`,
    image: LOGO_URL,
    email: EMAIL,
    telephone: location.phoneDisplay,
    servesCuisine: ["Chinese", "Japanese", "Asian"],
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
    address: {
      "@type": "PostalAddress",
      streetAddress: parts.street,
      addressLocality: parts.suburb,
      addressRegion: "ACT",
      postalCode: parts.postcode,
      addressCountry: "AU",
    },
    openingHoursSpecification: location.openingHours.map((block) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [...block.days],
      opens: block.opens,
      closes: block.closes,
    })),
  };
});

/**
 * Schema.org graph carried over from the WordPress build so the structured
 * data Google already has on file stays stable, extended with a Restaurant
 * node per venue now that there are two.
 */
export const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      email: EMAIL,
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
    ...restaurantNodes,
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
      dateModified: "2026-08-20T00:00:00+00:00",
      description: PAGE_DESCRIPTION,
      inLanguage: "en-AU",
      potentialAction: [{ "@type": "ReadAction", target: [`${SITE_URL}/`] }],
    },
  ],
};
