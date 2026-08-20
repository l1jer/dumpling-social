export interface Review {
  readonly name: string;
  /** Display date copied from the Google review card. */
  readonly date: string;
  readonly rating: 1 | 2 | 3 | 4 | 5;
  readonly body: string;
  readonly avatar?: string;
  readonly avatarColour?: string;
}

export interface RatingSummary {
  readonly score: string;
  readonly outOf: number;
  readonly count: number;
}

/**
 * Snapshot of the current Google reviews supplied from listing screenshots on
 * 21 August 2026. See README for how to refresh.
 */
export const REVIEWS: readonly Review[] = [
  {
    name: "Daniel Da Silva Robertson",
    date: "a month ago",
    rating: 5,
    body: "Very good dumplings excellent service would recommend. Favourite dumplings in Canberra. Price could be a little bit better.",
    avatarColour: "#2f6f2a",
  },
  {
    name: "J jens",
    date: "7 months ago",
    rating: 5,
    body: "10/10 experience. We will definitely be coming back! The food was incredibly fresh and delicious; each dish we ordered was cooked and seasoned perfectly. We were amazed with how fast the food came out. Attentive service. Outdoor seating available. The menu had a great selection. Overall, great spot. Highly recommend.",
    avatarColour: "#5f6fcf",
  },
  {
    name: "Jhon Mariano",
    date: "8 months ago",
    rating: 5,
    body: "Amazing experience at Dumpling Social! The food was delicious, but what really stood out was the service. Audrey was incredibly friendly, attentive, and made us feel very welcome. She checked on us throughout the meal and made sure everything was perfect. Thank you, Audrey, for the wonderful service!",
    avatarColour: "#366d8f",
  },
  {
    name: "Chi Chu",
    date: "11 months ago",
    rating: 5,
    body: "Located at Westfield Woden, you will find Dumplings Social under the multi story carpark. You need to try the cheeseburger spring rolls. They taste like cheeseburger. The cauliflower puffs are also a great starter. They have such a great variety of dishes. I normally get the slow cooked beef cheeks but went the sezchuan chicken wings. I know it looks hot with those big chilli's but to me it was only a small kick. If you are not good with chilli, please don't go by my rating because I can eat pretty hot. Can't wait to go again for the beef cheeks!!!!!",
    avatarColour: "#2f6f2a",
  },
  {
    name: "Liz Ann N",
    date: "9 months ago",
    rating: 5,
    body: `Tucked away in a bustling corner, this charming little spot is like a delightful secret waiting to be uncovered! I absolutely loved my experience here. We rolled in a bit after 3 PM, so our menu options were limited, but no worries-what we tried was a knockout! We went for the pork dumplings and the shredded pork noodles, and let me tell you, they were both the epitome of fresh, simple goodness. Every bite was absolutely delicious!

If you're in the area, Dumpling Social is an absolute MUST TRY. The atmosphere is friendly, the place is spotless, and the food is a flavour explosion! Can't wait to return and dive into more of their menu!`,
    avatarColour: "#6f6b2a",
  },
  {
    name: "Jen Kalman",
    date: "5 months ago",
    rating: 5,
    body: "Will definitely return! The food was delicious especially the pork and prawn dumplings. Great atmosphere as well!",
    avatarColour: "#069bad",
  },
  {
    name: "Sian Rinaldi",
    date: "3 months ago",
    rating: 5,
    body: "Holy cow this place is INCREDIBLE! The flavours are sensational. We have had takeaway twice and ate in once and every single time, it's been exceptional. No notes. Do yourself a favour and get amongst the flavour!",
    avatarColour: "#7a5a45",
  },
  {
    name: "tana ong",
    date: "3 months ago",
    rating: 5,
    body: "best chinese food in the state. duck fried rice has amazing wokhey, dumplings taste so fresh. even as delivery",
    avatarColour: "#2f6f2a",
  },
  {
    name: "Nadroj 3",
    date: "4 months ago",
    rating: 5,
    body: "Rare the food looks like what it does in the pictures but this place wow amazing super delicious",
    avatarColour: "#6da84f",
  },
  {
    name: "Julius Lacasandile",
    date: "4 months ago",
    rating: 5,
    body: "This place is awesome and the staff is superb! It was a busy night but they served us very well! Food was amazing especially the vegetable fried rice, would definitely come back and recommend this place to my friends and family!",
    avatarColour: "#1f1f1f",
  },
];

/** Woden's Google rating, confirmed against the listing on 20 August 2026. */
export const RATING_SUMMARY: RatingSummary = {
  score: "4.5",
  outOf: 5,
  count: 531,
};
