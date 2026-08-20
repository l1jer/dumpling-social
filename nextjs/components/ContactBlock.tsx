import { CONTACT } from "@/lib/site";

/**
 * Trading hours, licensing notes and contact details. Copy is reproduced
 * verbatim from the WordPress build, including the en dash in the hours line.
 */
export function ContactBlock() {
  return (
    <div className="text-light w-full p-[1rem] text-center text-[0.8rem] leading-[1.7em] md:px-[10rem] md:py-0 md:text-[0.9rem] md:leading-[1.6em]">
      <div>We are open 7 days a week 11am &ndash; 9pm.</div>
      <div>
        We are fully licensed with wide selections of beers, wines, spirits, and
        sakes!
      </div>
      <div>BYO is also available!</div>
      <p className="mb-4">
        A 10% public holiday surcharge applies.
        <br />
        <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
        <br />
        <a href={CONTACT.emailHref}>{CONTACT.email}</a>
        <br />
        <a href={CONTACT.addressHref}>{CONTACT.address}</a>
      </p>
    </div>
  );
}
