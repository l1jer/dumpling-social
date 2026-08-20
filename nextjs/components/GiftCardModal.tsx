"use client";

import { Modal } from "@/components/Modal";
import { PopupFrame } from "@/components/PopupFrame";
import { CONTACT } from "@/lib/site";

const TITLE_ID = "giftcard-title";

interface GiftCardModalProps {
  open: boolean;
  onClose: () => void;
}

export function GiftCardModal({ open, onClose }: GiftCardModalProps) {
  return (
    <Modal open={open} onClose={onClose} labelledBy={TITLE_ID}>
      <PopupFrame titleId={TITLE_ID} title="giftcard">
        <div className="text-light text-[0.9rem] [&_p]:mb-4">
          <p>
            Contact our phone number at{" "}
            <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a> or our email
            at <a href={CONTACT.emailHref}>{CONTACT.email}</a> for more
            information about our giftcard range!
          </p>
        </div>
      </PopupFrame>
    </Modal>
  );
}
