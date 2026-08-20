"use client";

import type { ReactNode } from "react";

import { CtaLink } from "@/components/CtaButton";
import { Modal } from "@/components/Modal";
import { PopupFrame } from "@/components/PopupFrame";
import { LOCATIONS, type RestaurantLocation } from "@/lib/site";

export interface LocationAction {
  readonly label: string;
  readonly href: string;
  /** Opens in a new tab. Left off for `tel:` links, which should not. */
  readonly external?: boolean;
}

interface LocationChoiceModalProps {
  open: boolean;
  onClose: () => void;
  titleId: string;
  title: string;
  /** Optional copy shown above the two location choices. */
  intro?: ReactNode;
  /** Resolves the button shown for each venue. */
  actionFor: (location: RestaurantLocation) => LocationAction;
}

/**
 * Asks the customer which venue they mean, then sends them to the matching
 * destination. Shared by the takeaway, booking and review calls to action.
 */
export function LocationChoiceModal({
  open,
  onClose,
  titleId,
  title,
  intro,
  actionFor,
}: LocationChoiceModalProps) {
  return (
    <Modal open={open} onClose={onClose} labelledBy={titleId}>
      <PopupFrame titleId={titleId} title={title}>
        {intro}
        <ul className="flex list-none flex-col gap-[1rem] p-0">
          {LOCATIONS.map((location) => {
            const action = actionFor(location);
            return (
              <li key={location.id}>
                <div className="text-light mb-[0.5rem] text-[0.9rem]">
                  <span className="font-display text-[1.1rem]">
                    {location.name}
                  </span>
                  <br />
                  {location.address}
                </div>
                <CtaLink
                  label={action.label}
                  href={action.href}
                  external={action.external}
                  variant="solid"
                  className="w-full"
                />
              </li>
            );
          })}
        </ul>
      </PopupFrame>
    </Modal>
  );
}
