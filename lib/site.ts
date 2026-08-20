export const SITE_URL = "https://dumplingsocial.com.au";

/** Shared across both venues. */
export const EMAIL = "eat@dumplingsocial.com.au";
export const EMAIL_HREF = `mailto:${EMAIL}`;

export type LocationId = "woden" | "braddon";

/**
 * How a venue takes bookings. Woden is listed on Google Reserve; Braddon opened
 * in August 2026 and takes bookings by phone until it has an online system.
 */
export type BookingMethod =
  | { readonly kind: "online"; readonly label: string; readonly href: string }
  | { readonly kind: "phone"; readonly label: string; readonly href: string };

export type Weekday =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

export const ALL_WEEKDAYS: readonly Weekday[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

/** A block of days sharing the same trading hours, in 24-hour time. */
export interface OpeningHours {
  readonly days: readonly Weekday[];
  readonly opens: string;
  readonly closes: string;
}

export interface RestaurantLocation {
  readonly id: LocationId;
  /** Short name used on the location picker buttons. */
  readonly name: string;
  readonly address: string;
  readonly addressHref: string;
  readonly phoneDisplay: string;
  readonly phoneHref: string;
  /** Human-readable trading hours, one line per distinct block of days. */
  readonly hours: readonly string[];
  /** The same hours in a machine-readable form, used for schema.org. */
  readonly openingHours: readonly OpeningHours[];
  /** me&u ordering page for pickup and takeaway. */
  readonly orderHref: string;
  readonly reviewHref: string;
  readonly booking: BookingMethod;
}

/** Google Business place ID for the Woden venue. */
export const WODEN_PLACE_ID = "ChIJAULvWvK1F2sRAj_GEL9vYTw";

const WODEN: RestaurantLocation = {
  id: "woden",
  name: "Woden",
  address: "Shop R02/9 Bradley St, Phillip ACT 2606",
  addressHref: "https://goo.gl/maps/cXqHtVi2N8Q1jedHA",
  phoneDisplay: "0409 246 888",
  phoneHref: "tel:0409246888",
  hours: ["7 days a week, 11:30am \u2013 9pm"],
  openingHours: [{ days: ALL_WEEKDAYS, opens: "11:30", closes: "21:00" }],
  /**
   * Mr Yum was acquired by me&u; this URL 302s to meandu.app. Kept as-is so
   * ordering keeps working if either domain is retired.
   */
  orderHref: "https://www.mryum.com/dumpling-social/pickup",
  reviewHref: `https://search.google.com/local/writereview?placeid=${WODEN_PLACE_ID}`,
  booking: {
    kind: "online",
    label: "Reserve a table",
    href: "https://www.google.com/maps/reserve/v/dine/c/aVnn5WHzLEM?source=pa&hl=en-AU&gei=5PQZYo6kNYaQseMPpKOU8Ao&sourceurl=https://www.google.com/search?q%3Ddumplingsocial%26oq%3Ddumplingsocial%26aqs%3Dchrome.0.69i59j69i60.5124j0j7%26sourceid%3Dchrome%26ie%3DUTF-8",
  },
};

/**
 * Braddon's Google listing, addressed by its CID because the venue is too new
 * to have a published `ChIJ...` place ID. Verified to resolve to
 * "Dumpling Social Braddon".
 */
const BRADDON_MAPS_URL = "https://www.google.com/maps?cid=16323252553008857283";

const BRADDON: RestaurantLocation = {
  id: "braddon",
  name: "Braddon",
  address: "Unit 61/10 Lonsdale St, Braddon ACT 2612",
  addressHref: BRADDON_MAPS_URL,
  phoneDisplay: "0477 974 804",
  phoneHref: "tel:0477974804",
  hours: [
    "Sun \u2013 Thu, 11:30am \u2013 9:30pm",
    "Fri & Sat, 11:30am \u2013 10pm",
  ],
  openingHours: [
    {
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "11:30",
      closes: "21:30",
    },
    { days: ["Friday", "Saturday"], opens: "11:30", closes: "22:00" },
  ],
  orderHref: "https://www.meandu.app/dumpling-sc/pickup",
  /**
   * No `ChIJ...` place ID is published for Braddon yet, so the one-click
   * `writereview` deep link cannot be built. This opens the listing itself,
   * where the customer can use Google's own "Write a review" control. Swap in
   * `https://search.google.com/local/writereview?placeid=...` once available.
   */
  reviewHref: BRADDON_MAPS_URL,
  booking: {
    kind: "phone",
    label: "Call 0477 974 804",
    href: "tel:0477974804",
  },
};

export const LOCATIONS: readonly RestaurantLocation[] = [WODEN, BRADDON];

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
