"use client";

import { CtaLink } from "@/components/CtaButton";
import { Modal } from "@/components/Modal";
import { PopupFrame } from "@/components/PopupFrame";
import { EXTERNAL_LINKS } from "@/lib/site";

const TITLE_ID = "book-a-table-title";

interface BookTableModalProps {
  open: boolean;
  onClose: () => void;
}

export function BookTableModal({ open, onClose }: BookTableModalProps) {
  return (
    <Modal open={open} onClose={onClose} labelledBy={TITLE_ID}>
      <PopupFrame titleId={TITLE_ID} title="book a table">
        {/* flow-root keeps the last paragraph's bottom margin inside the
            block, as the original's flex-item widget wrapper did. */}
        <div className="text-light mb-[30px] flow-root text-[0.9rem] [&_p]:mb-4">
          <p>We are open for dine-in and takeaway.</p>
          <p>
            We are fully licensed with wide selections of beers, wines, spirits,
            and sakes!
          </p>
          <p>BYO is available as well!</p>
          <p>À LA CARTE menus are available ALL DAY &amp; EVERY DAY.</p>
          <p>A 10% public holiday surcharge applies.</p>
        </div>
        <div className="flex justify-center">
          <CtaLink
            label="Reserve a table"
            href={EXTERNAL_LINKS.reserve}
            external
            variant="solid"
          />
        </div>
      </PopupFrame>
    </Modal>
  );
}
