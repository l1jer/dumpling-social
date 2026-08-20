import type { ReactNode } from "react";

interface PopupFrameProps {
  /** id applied to the popup's own heading, referenced by aria-labelledby. */
  titleId: string;
  title: string;
  children: ReactNode;
}

/**
 * Shared chrome for both Elementor popups: a brand-red lockup block stacked
 * above a near-black content block. Ported from post-207.css and post-223.css.
 */
export function PopupFrame({ titleId, title, children }: PopupFrameProps) {
  return (
    <div className="w-full">
      <section className="bg-brand flex justify-center p-[10px]">
        <h2 className="font-display text-light text-left text-[2.2rem] leading-none font-normal md:text-[2.5rem]">
          dumpling
          <br />
          social
        </h2>
      </section>

      <section className="bg-ink p-[2rem]">
        <h2
          id={titleId}
          className="font-display text-light mb-[30px] text-[1.5rem] leading-none font-bold"
        >
          {title}
        </h2>
        {children}
      </section>
    </div>
  );
}
