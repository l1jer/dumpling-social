import type { ComponentPropsWithoutRef } from "react";

/**
 * Reproduces the JupiterX Raven button used across the original page. Base
 * metrics come from raven/frontend.min.css, the per-button overrides from
 * post-72.css (hero) and post-207.css (popup).
 *
 * The base is width-agnostic and shrink-wraps; callers add `w-full` where the
 * original stretched the button.
 */
const BASE_CLASSES =
  "inline-flex items-center justify-center text-center font-display rounded-none transition-all duration-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light";

const VARIANTS = {
  /** Hero calls to action: translucent brand fill inverting to near-black. */
  hero: "bg-brand-veil text-light text-[1.5rem] leading-none font-normal hover:bg-ink-veil hover:text-brand",
  /** Popup call to action: solid brand fill, text brightens on hover. */
  solid:
    "bg-brand text-light text-[1rem] leading-none font-bold p-[1.25em] hover:text-white",
} as const;

type Variant = keyof typeof VARIANTS;

type BaseProps = {
  label: string;
  variant?: Variant;
  className?: string;
};

type LinkProps = BaseProps & {
  href: string;
  external?: boolean;
} & Omit<ComponentPropsWithoutRef<"a">, "href" | "className">;

type ActionProps = BaseProps & {
  onClick: () => void;
} & Omit<ComponentPropsWithoutRef<"button">, "onClick" | "className">;

const classesFor = (variant: Variant, className: string) =>
  `${BASE_CLASSES} ${VARIANTS[variant]} ${className}`;

export function CtaLink({
  label,
  href,
  external = false,
  variant = "hero",
  className = "",
  ...rest
}: LinkProps) {
  return (
    <a
      href={href}
      className={classesFor(variant, className)}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : undefined)}
      {...rest}
    >
      {label}
    </a>
  );
}

export function CtaButton({
  label,
  onClick,
  variant = "hero",
  className = "",
  ...rest
}: ActionProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classesFor(variant, className)}
      {...rest}
    >
      {label}
    </button>
  );
}
