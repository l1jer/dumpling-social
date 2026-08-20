import { Roboto_Slab } from "next/font/google";
import localFont from "next/font/local";

/**
 * "town 50" (Jason Vandenberg, Town 50 Chic) is the brand display face, used
 * for the logo lockup, buttons and headings. The original theme only shipped a
 * webfont for the bold cut, so the normal weight falls back to the TTF.
 */
export const town50 = localFont({
  src: [
    {
      path: "./fonts/Jason-Vandenberg-Town-50-Chic-Medium.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/jason_vandenberg_-_town_50_chic_bold-webfont.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-town-50",
  display: "swap",
});

export const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto-slab",
  display: "swap",
});
