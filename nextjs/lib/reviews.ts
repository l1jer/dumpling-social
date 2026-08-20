export interface Review {
  readonly name: string;
  /** Formatted dd/mm/yyyy, exactly as the original widget rendered it. */
  readonly date: string;
  readonly rating: 1 | 2 | 3 | 4 | 5;
  readonly body: string;
  readonly avatar: string;
}

export interface RatingSummary {
  readonly score: string;
  readonly outOf: number;
  readonly count: number;
}

/**
 * Snapshot of the Google reviews the Trustindex widget was serving on
 * 26 February 2022, captured from the WordPress build so the carousel no
 * longer depends on a third-party script. See README for how to refresh.
 */
export const REVIEWS: readonly Review[] = [
  {
    name: "Rose Schmedding",
    date: "25/02/2022",
    rating: 5,
    body: "Love it. Food is delicious and the staff are efficient and friendly",
    avatar: "/reviews/rose-schmedding.png",
  },
  {
    name: "Megan Thompson",
    date: "23/02/2022",
    rating: 5,
    body: "Fantastic food!",
    avatar: "/reviews/megan-thompson.png",
  },
  {
    name: "Ginny Davies",
    date: "13/02/2022",
    rating: 5,
    body: "Delicious food and excellent service.",
    avatar: "/reviews/ginny-davies.png",
  },
  {
    name: "Soniqbuoy",
    date: "12/02/2022",
    rating: 4,
    body: `Modern take on tradition dumplings and Asian cuisine. Dishes have more of a modern fusion bent and creativeness to them. Menu consists of small tasters, dumplings, large tasters, and rice and noodles. On the reverse side of the menu is an extensive range of drinks, including wine, cocktails and temperance drinks/mocktails.

The star dishes on this occasion was the Lightly fried chicken and kimchi dumplings, as well as the Szechuan dan dan noodles. The typhoon shelter squid was tasty and had great texture, though there was a lot of cumin salt on it. Similar with the Truffle Chips, a tad salty though the aioli was nicely balanced.

Dumpling social can be busy and with all the chatter from diners combined with the trendy and decorative hard flooring and wood panelling, it creates a lively and loud atmosphere.

Located in the dining precinct on the east side of Westfield Woden mall.

Interestingly the Mango Panna Cotta listed in the desert section of the menu doest list any mango in it. Perhaps I\u2019ve missed something there.`,
    avatar: "/reviews/soniqbuoy.png",
  },
  {
    name: "Luna H",
    date: "09/02/2022",
    rating: 4,
    body: "Nice food! I will definitely visit again to try other dishes.",
    avatar: "/reviews/luna-h.png",
  },
  {
    name: "Rowan McKeever",
    date: "28/01/2022",
    rating: 5,
    body: "So delicious \u{1F60B} Cheeseburger spring rolls are a must! \u{1F95F}",
    avatar: "/reviews/rowan-mckeever.png",
  },
];

export const RATING_SUMMARY: RatingSummary = {
  score: "4.4",
  outOf: 5,
  count: 216,
};
