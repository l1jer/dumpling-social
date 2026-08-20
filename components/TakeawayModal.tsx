"use client";

import { LocationChoiceModal } from "@/components/LocationChoiceModal";

const TITLE_ID = "takeaway-title";

interface TakeawayModalProps {
  open: boolean;
  onClose: () => void;
}

export function TakeawayModal({ open, onClose }: TakeawayModalProps) {
  return (
    <LocationChoiceModal
      open={open}
      onClose={onClose}
      titleId={TITLE_ID}
      title="menu / takeaway"
      intro={
        <p className="text-light mb-[1.5rem] text-[0.9rem]">
          Choose the venue you would like to order from.
        </p>
      }
      actionFor={(location) => ({
        label: `Order from ${location.name}`,
        href: location.orderHref,
      })}
    />
  );
}
