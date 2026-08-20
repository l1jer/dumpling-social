"use client";

import { useState } from "react";

import { BookTableModal } from "@/components/BookTableModal";
import { CtaButton } from "@/components/CtaButton";
import { GiftCardModal } from "@/components/GiftCardModal";
import { TakeawayModal } from "@/components/TakeawayModal";

type OpenPopup = "takeaway" | "book" | "gift" | null;

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
            <CtaButton
              label="menu/takeaway"
              onClick={() => setOpenPopup("takeaway")}
              className={BUTTON_CLASSES}
              aria-haspopup="dialog"
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

      <TakeawayModal open={openPopup === "takeaway"} onClose={close} />
      <BookTableModal open={openPopup === "book"} onClose={close} />
      <GiftCardModal open={openPopup === "gift"} onClose={close} />
    </>
  );
}
