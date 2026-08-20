"use client";

import { LocationChoiceModal } from "@/components/LocationChoiceModal";

const TITLE_ID = "book-a-table-title";

interface BookTableModalProps {
  open: boolean;
  onClose: () => void;
}

export function BookTableModal({ open, onClose }: BookTableModalProps) {
  return (
    <LocationChoiceModal
      open={open}
      onClose={onClose}
      titleId={TITLE_ID}
      title="book a table"
      intro={
        /* flow-root keeps the last paragraph's bottom margin inside the block,
           as the original's flex-item widget wrapper did. */
        <div className="text-light mb-[1.5rem] flow-root text-[0.9rem] [&_p]:mb-4">
          <p>We are open for dine-in and takeaway.</p>
          <p>
            We are fully licensed with wide selections of beers, wines, spirits,
            and sakes!
          </p>
          <p>BYO is available as well!</p>
          <p>À LA CARTE menus are available ALL DAY &amp; EVERY DAY.</p>
        </div>
      }
      actionFor={(location) => ({
        label: location.booking.label,
        href: location.booking.href,
        external: location.booking.kind === "online",
      })}
    />
  );
}
