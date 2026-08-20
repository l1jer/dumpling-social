"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  /** id of the heading that names this dialog. */
  labelledBy: string;
  children: ReactNode;
}

/**
 * Dialog shell matching the Elementor Pro popup chrome (640px wide on desktop,
 * 85vw on mobile, 50% black backdrop, close control in the top-right corner).
 *
 * Built on the native <dialog> element so focus trapping, Escape handling,
 * top-layer stacking and focus restoration come from the platform. The
 * original Elementor popups had none of these.
 */
export function Modal({ open, onClose, labelledBy, children }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  // The native `close` event does not bubble, so it is subscribed directly
  // rather than through React. Without this, dismissing with Escape would
  // close the dialog while leaving the parent's state stale, and the trigger
  // button would then appear dead.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => onCloseRef.current();
    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  // Everything funnels through the native close event, so the Escape key,
  // the close button and a backdrop click all follow one path.
  const requestClose = () => dialogRef.current?.close();

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={labelledBy}
      onClick={(event) => {
        // A click landing on the dialog box itself came from the backdrop,
        // because the panel below fills the dialog completely.
        if (event.target === dialogRef.current) requestClose();
      }}
      className="m-auto max-h-screen w-[85vw] max-w-screen overflow-visible bg-transparent p-0 shadow-[2px_8px_23px_15px_rgba(0,0,0,0.2)] backdrop:bg-[#00000080] md:w-[640px]"
    >
      <div className="relative max-h-screen overflow-auto">
        <button
          type="button"
          onClick={requestClose}
          aria-label="Close dialogue"
          className="text-ink hover:text-light absolute top-0 right-0 z-10 flex h-[30px] w-[30px] items-center justify-center transition-colors"
        >
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M5 5l14 14M19 5L5 19" />
          </svg>
        </button>
        {children}
      </div>
    </dialog>
  );
}
