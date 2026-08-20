import Image from "next/image";
import Link from "next/link";

import { BRAND_LOGO } from "@/lib/site";

/**
 * The banner lockup at the top of the hero. The original Raven image widget
 * capped the logo at 35% of the column on desktop and 70% on mobile, centred
 * by the widget's text alignment.
 */
export function BrandLogo() {
  return (
    <div className="my-[2rem] w-full p-[10px]">
      <Link
        href="/"
        // Centred as a block rather than an inline-block, so no stray
        // descender space creeps in below the image.
        className="relative mx-auto block max-w-[70%] md:max-w-[35%]"
        aria-label="Dumpling Social home"
      >
        <Image
          src={BRAND_LOGO.src}
          alt={BRAND_LOGO.alt}
          width={BRAND_LOGO.width}
          height={BRAND_LOGO.height}
          sizes="(max-width: 767px) 70vw, 280px"
          // `block` avoids the inline descender gap below the image, which
          // would otherwise push everything after it down a few pixels.
          className="block h-auto w-full"
          preload
        />
      </Link>
    </div>
  );
}
