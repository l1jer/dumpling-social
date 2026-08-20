import { EMAIL, EMAIL_HREF, LOCATIONS } from "@/lib/site";

/**
 * Licensing notes shared by both venues, followed by the address, phone and
 * trading hours for each.
 */
export function ContactBlock() {
  // Narrower side padding than the single-venue original, so the two address
  // columns each fit on one line.
  return (
    <div className="text-light w-full p-[1rem] text-center text-[0.8rem] leading-[1.7em] md:px-[2rem] md:py-0 md:text-[0.9rem] md:leading-[1.6em]">
      <div>
        We are fully licensed with wide selections of beers, wines, spirits, and
        sakes!
      </div>
      <div>BYO is also available!</div>
      <div className="mb-[1rem]">A 10% public holiday surcharge applies.</div>

      <ul className="mb-[1rem] flex list-none flex-col gap-[1rem] p-0 md:flex-row md:justify-center md:gap-[3rem]">
        {LOCATIONS.map((location) => (
          <li key={location.id} className="md:flex-1">
            <div className="font-display text-[1.1rem] leading-none">
              {location.name}
            </div>
            {location.hours.map((line) => (
              <div key={line}>{line}</div>
            ))}
            <div>
              <a href={location.phoneHref}>{location.phoneDisplay}</a>
            </div>
            <div>
              <a href={location.addressHref}>{location.address}</a>
            </div>
          </li>
        ))}
      </ul>

      <p className="mb-4">
        <a href={EMAIL_HREF}>{EMAIL}</a>
      </p>
    </div>
  );
}
