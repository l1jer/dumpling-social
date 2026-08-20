import { getImageProps } from "next/image";
import type { ReactNode } from "react";

import { HERO_IMAGES } from "@/lib/site";

/**
 * Full-viewport hero with the restaurant photography behind a 70% black
 * overlay, reproducing section 789c2c7 from the WordPress build.
 *
 * The two crops are art-directed with <picture> so exactly one is fetched.
 * Desktop and mobile size the photo differently, matching the original:
 * mobile was authored as `background-size: cover; background-position: center
 * center`, while desktop was left at the CSS defaults, which render the image
 * at its natural size anchored to the top-left corner.
 */
export function Hero({ children }: { children: ReactNode }) {
  const shared = { alt: "", quality: 75 } as const;

  const {
    props: { srcSet: mobileSrcSet },
  } = getImageProps({
    ...shared,
    ...HERO_IMAGES.mobile,
    sizes: "100vw",
  });

  const {
    props: { srcSet: desktopSrcSet, ...imgProps },
  } = getImageProps({
    ...shared,
    ...HERO_IMAGES.desktop,
    sizes: `${HERO_IMAGES.desktop.width}px`,
  });

  return (
    // Elementor scoped its full-height rule to `min-width: 768px`, so the
    // section grows with its content on mobile instead of being pinned to
    // 100vh.
    <section className="relative bg-black md:h-screen">
      {/* Clipping lives here rather than on the section, so content that
          outgrows the viewport still overflows and scrolls as it did before. */}
      <div className="absolute inset-0 overflow-hidden">
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet={mobileSrcSet}
            sizes="100vw"
          />
          <img
            {...imgProps}
            alt=""
            srcSet={desktopSrcSet}
            // Safe to load eagerly despite the two sources: the media query on
            // <source> guarantees the browser only ever fetches one of them.
            loading="eager"
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover object-center md:inset-auto md:top-0 md:left-0 md:h-[1707px] md:w-[2560px] md:max-w-none"
          />
        </picture>
      </div>

      <div className="absolute inset-0 bg-black opacity-70" />

      <div className="relative mx-auto flex h-full max-w-[800px] items-center">
        <div className="flex w-full flex-wrap content-center items-center justify-center p-[10px]">
          {children}
        </div>
      </div>
    </section>
  );
}
