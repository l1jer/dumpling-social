export const SITE_URL = "https://dumplingsocial.com.au";

export const CONTACT = {
  phoneDisplay: "0409 246 888",
  phoneHref: "tel:0409246888",
  email: "eat@dumplingsocial.com.au",
  emailHref: "mailto:eat@dumplingsocial.com.au",
  address: "Shop R02/9 Bradley St, Phillip ACT 2606",
  addressHref: "https://goo.gl/maps/cXqHtVi2N8Q1jedHA",
} as const;

/**
 * Google Business place ID, used for the "review us on google" deep link and
 * referenced by the reviews the carousel displays.
 */
export const GOOGLE_PLACE_ID = "ChIJAULvWvK1F2sRAj_GEL9vYTw";

export const EXTERNAL_LINKS = {
  /**
   * Mr Yum was acquired by me&u; this URL currently 302s to
   * https://meandu.app/dumpling-social/pickup. Kept as-is to match the live
   * site, so ordering keeps working if either domain is retired.
   */
  order: "https://www.mryum.com/dumpling-social/pickup",
  reserve:
    "https://www.google.com/maps/reserve/v/dine/c/aVnn5WHzLEM?source=pa&hl=en-AU&gei=5PQZYo6kNYaQseMPpKOU8Ao&sourceurl=https://www.google.com/search?q%3Ddumplingsocial%26oq%3Ddumplingsocial%26aqs%3Dchrome.0.69i59j69i60.5124j0j7%26sourceid%3Dchrome%26ie%3DUTF-8",
  writeReview: `https://search.google.com/local/writereview?placeid=${GOOGLE_PLACE_ID}`,
} as const;

export const HERO_IMAGES = {
  desktop: {
    src: "/wp-content/uploads/2021/08/JL5A1082-scaled.jpg",
    width: 2560,
    height: 1707,
  },
  mobile: {
    src: "/wp-content/uploads/2021/08/JL5A1062-scaled.jpg",
    width: 2560,
    height: 2077,
  },
} as const;

export const BRAND_LOGO = {
  src: "/wp-content/uploads/2020/09/Dumpling-social_Banner_Logo-copy.png",
  width: 2501,
  height: 899,
  alt: "Dumpling Social",
} as const;
