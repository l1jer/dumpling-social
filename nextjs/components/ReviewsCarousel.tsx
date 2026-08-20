"use client";

import { useCallback, useEffect, useState } from "react";

import { RATING_SUMMARY, REVIEWS, type Review } from "@/lib/reviews";

const AUTOPLAY_MS = 6000;

/**
 * Visible cards per page.
 *
 * The Trustindex markup carried a `ti-col-3` class, but its script sized the
 * carousel from the widget's own width rather than the viewport, and the
 * widget never got wide enough for three cards: measured against the live site
 * it resolved to two columns at every desktop width and one below 768px, where
 * the section's 3rem mobile padding narrows it further.
 */
const DESKTOP_QUERY = "(min-width: 768px)";
const DESKTOP_COLUMNS = 2;

function useColumns(): number {
  const [columns, setColumns] = useState(DESKTOP_COLUMNS);

  useEffect(() => {
    const list = window.matchMedia(DESKTOP_QUERY);
    const sync = () => setColumns(list.matches ? DESKTOP_COLUMNS : 1);

    sync();
    list.addEventListener("change", sync);
    return () => list.removeEventListener("change", sync);
  }, []);

  return columns;
}

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const list = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(list.matches);
    sync();
    list.addEventListener("change", sync);
    return () => list.removeEventListener("change", sync);
  }, []);

  return reduced;
}

function Stars({ rating }: { rating: number }) {
  return (
    <div
      className="mt-[15px] mb-[6px] text-center whitespace-nowrap"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          aria-hidden="true"
          className={`review-star ${
            index < rating ? "review-star-full" : "review-star-empty"
          }`}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="bg-card rounded-[4px] border-2 border-[#222222] p-[15px]">
      <header className="relative flex flex-nowrap">
        <div className="mr-[15px]">
          {/* Avatars are 40px squares served straight from public/, so the
              optimiser would add a round trip for no saving. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={review.avatar}
            alt=""
            width={40}
            height={40}
            loading="lazy"
            decoding="async"
            className="block h-[40px] w-[40px] rounded-[30px] object-cover object-top"
          />
        </div>
        <div className="flex-1 overflow-hidden text-left">
          <div className="mb-[2px] overflow-hidden pr-[25px] text-[15px] font-bold text-ellipsis whitespace-nowrap text-white">
            {review.name}
          </div>
          <div className="text-[12px] text-white opacity-50">{review.date}</div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/reviews/google-icon.svg"
          alt="Google"
          width={20}
          height={20}
          loading="lazy"
          className="absolute top-0 right-0 h-[20px] w-[20px]"
        />
      </header>
      <Stars rating={review.rating} />
      <div className="review-body">{review.body}</div>
    </article>
  );
}

export function ReviewsCarousel() {
  const columns = useColumns();
  const reducedMotion = usePrefersReducedMotion();
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);

  const pageCount = Math.max(1, Math.ceil(REVIEWS.length / columns));

  // Narrowing the viewport reduces the page count, which can strand the stored
  // page past the end, so clamp while rendering rather than syncing state.
  const currentPage = Math.min(page, pageCount - 1);

  const goTo = useCallback(
    (next: number) => setPage(((next % pageCount) + pageCount) % pageCount),
    [pageCount],
  );

  useEffect(() => {
    if (reducedMotion || paused || pageCount < 2) return;

    const timer = window.setInterval(
      () => setPage((current) => (current + 1) % pageCount),
      AUTOPLAY_MS,
    );
    return () => window.clearInterval(timer);
  }, [reducedMotion, paused, pageCount]);

  return (
    <div
      // Unitless leading matters: the original applied `line-height: 1.4em`
      // through a universal selector so every element recomputed it against
      // its own font size. Inheriting `1.4em` would instead pass down a fixed
      // 19.6px and make the review headers a pixel too tall.
      className="my-[2rem] w-full px-[3rem] text-[14px] leading-[1.4] text-white md:px-0"
      role="region"
      aria-roledescription="carousel"
      aria-label="Google reviews"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* .ti-widget-container's own 5px/15px margins collapsed into the 2rem
          above, so they are deliberately not reproduced here. */}
      <div>
        <div className="relative">
          <div className="absolute top-1/2 z-10 -mt-[15px] h-0 w-full">
            <button
              type="button"
              onClick={() => goTo(currentPage - 1)}
              aria-label="Previous reviews"
              className="review-arrow review-arrow-prev hidden xs:block"
            />
            <button
              type="button"
              onClick={() => goTo(currentPage + 1)}
              aria-label="Next reviews"
              className="review-arrow review-arrow-next hidden xs:block"
            />
          </div>

          <div className="overflow-hidden pb-px xs:mx-[20px]">
            <div
              className="flex flex-nowrap transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${currentPage * 100}%)` }}
            >
              {REVIEWS.map((review, index) => {
                const visible =
                  index >= currentPage * columns &&
                  index < (currentPage + 1) * columns;
                return (
                  <div
                    key={review.name}
                    aria-hidden={!visible}
                    className="w-full shrink-0 grow-0 xs:px-[8px] md:w-1/2"
                  >
                    <ReviewCard review={review} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-[10px] mb-[10px] text-center xs:hidden">
          {Array.from({ length: pageCount }, (_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Go to review ${index + 1}`}
              aria-current={index === currentPage}
              className={`mx-[2px] inline-block h-[10px] w-[10px] rounded-[20px] bg-[#555555] p-[4px] transition-opacity ${
                index === currentPage
                  ? "opacity-100"
                  : "opacity-40 hover:opacity-100"
              }`}
            />
          ))}
        </div>

        <div className="text-light mt-[15px] text-center text-[14px]">
          <span className="mr-[2px] inline-block whitespace-nowrap">
            <strong className="font-bold">Google</strong> rating score:
          </span>
          <span className="mx-[2px] inline-block whitespace-nowrap">
            <strong className="font-bold">{RATING_SUMMARY.score}</strong> of{" "}
            {RATING_SUMMARY.outOf},
          </span>
          <span className="ml-[2px] inline-block whitespace-nowrap">
            based on{" "}
            <strong className="font-bold">
              {RATING_SUMMARY.count} reviews
            </strong>
            .
          </span>
        </div>
      </div>
    </div>
  );
}
