"use client";

import { useState } from "react";

import { BookTableModal } from "@/components/BookTableModal";
import { CtaButton, CtaLink } from "@/components/CtaButton";
import { GiftCardModal } from "@/components/GiftCardModal";
import { EXTERNAL_LINKS } from "@/lib/site";

type OpenPopup = "book" | "gift" | null;

/** Buttons stretch full width, 3.5em tall on desktop and 3em on mobile. */
const BUTTON_CLASSES = "w-full h-[3em] md:h-[3.5em]";

export function CtaRow() {
  const [openPopup, setOpenPopup] = useState<OpenPopup>(null);
  const close = () => setOpenPopup(null);

  return (
    <>
      <section className="w-full px-[3rem] md:px-0">
        <div className="flex flex-wrap">
          <div className="w-full p-[5px] md:w-1/3">
            <CtaLink
              label="menu/takeaway"
              href={EXTERNAL_LINKS.order}
              className={BUTTON_CLASSES}
            />
          </div>
          <div className="w-full p-[5px] md:w-1/3">
            <CtaButton
              label="book a table"
              onClick={() => setOpenPopup("book")}
              className={BUTTON_CLASSES}
              aria-haspopup="dialog"
            />
          </div>
          <div className="w-full p-[5px] md:w-1/3">
            <CtaButton
              label="giftcard"
              onClick={() => setOpenPopup("gift")}
              className={BUTTON_CLASSES}
              aria-haspopup="dialog"
            />
          </div>
        </div>
      </section>

      <BookTableModal open={openPopup === "book"} onClose={close} />
      <GiftCardModal open={openPopup === "gift"} onClose={close} />
    </>
  );
}
