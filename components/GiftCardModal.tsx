"use client";

import { Modal } from "@/components/Modal";
import { PopupFrame } from "@/components/PopupFrame";
import { EMAIL, EMAIL_HREF, LOCATIONS } from "@/lib/site";

const TITLE_ID = "giftcard-title";

interface GiftCardModalProps {
  open: boolean;
  onClose: () => void;
}

const [WODEN, BRADDON] = LOCATIONS;

/** Gift cards are handled by both venues, so this popup has no venue picker. */
export function GiftCardModal({ open, onClose }: GiftCardModalProps) {
  return (
    <Modal open={open} onClose={onClose} labelledBy={TITLE_ID}>
      <PopupFrame titleId={TITLE_ID} title="giftcard">
        <div className="text-light text-[0.9rem] [&_p]:mb-4">
          <p>
            To purchase a gift card or for more information, contact us on{" "}
            <a href={WODEN.phoneHref}>{WODEN.phoneDisplay}</a> ({WODEN.name}) or{" "}
            <a href={BRADDON.phoneHref}>{BRADDON.phoneDisplay}</a> (
            {BRADDON.name}), or email us at <a href={EMAIL_HREF}>{EMAIL}</a>
          </p>
        </div>
      </PopupFrame>
    </Modal>
  );
}
