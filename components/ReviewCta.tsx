"use client";

import { useState } from "react";

import { CtaButton } from "@/components/CtaButton";
import { LocationChoiceModal } from "@/components/LocationChoiceModal";

const TITLE_ID = "review-title";

/**
 * The review call to action and its venue picker. Kept separate from the main
 * button row because it sits in its own section with different sizing.
 */
export function ReviewCta() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <CtaButton
        label="review us on google"
        onClick={() => setOpen(true)}
        className="h-[3em] w-full px-[1em] md:h-[2em]"
        aria-haspopup="dialog"
      />

      <LocationChoiceModal
        open={open}
        onClose={() => setOpen(false)}
        titleId={TITLE_ID}
        title="review us on google"
        intro={
          <p className="text-light mb-[1.5rem] text-[0.9rem]">
            Which venue would you like to review?
          </p>
        }
        actionFor={(location) => ({
          label: `Review ${location.name}`,
          href: location.reviewHref,
        })}
      />
    </>
  );
}
