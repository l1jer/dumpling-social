import type { Metadata } from "next";

import { robotoSlab, town50 } from "@/app/fonts";
import { BRAND_LOGO, SITE_URL } from "@/lib/site";
import {
  PAGE_DESCRIPTION,
  PAGE_TITLE,
  STRUCTURED_DATA,
} from "@/lib/structured-data";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: `${SITE_URL}/`,
    siteName: "Dumpling Social",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [
      {
        url: BRAND_LOGO.src,
        width: BRAND_LOGO.width,
        height: BRAND_LOGO.height,
        alt: "Dumpling Social",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
  icons: {
    icon: [
      {
        url: "/wp-content/uploads/2020/09/cropped-DS_Round_Logo-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/wp-content/uploads/2020/09/cropped-DS_Round_Logo-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/wp-content/uploads/2020/09/cropped-DS_Round_Logo-180x180.png",
        sizes: "180x180",
      },
    ],
  },
  other: {
    "msapplication-TileImage":
      "/wp-content/uploads/2020/09/cropped-DS_Round_Logo-270x270.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU" className={`${town50.variable} ${robotoSlab.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          // Serialised from a local constant, so there is no untrusted input.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
        />
      </body>
    </html>
  );
}
