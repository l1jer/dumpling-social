import { BrandLogo } from "@/components/BrandLogo";
import { CtaLink } from "@/components/CtaButton";
import { ContactBlock } from "@/components/ContactBlock";
import { CtaRow } from "@/components/CtaRow";
import { Hero } from "@/components/Hero";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import { ScrollTopButton } from "@/components/ScrollTopButton";
import { EXTERNAL_LINKS } from "@/lib/site";

export default function Home() {
  return (
    <>
      <main>
        <Hero>
          <BrandLogo />
          <CtaRow />

          <section className="w-full px-[3rem] md:px-0">
            <div className="w-full p-[5px]">
              <div className="md:pb-[1rem]">
                <CtaLink
                  label="review us on google"
                  href={EXTERNAL_LINKS.writeReview}
                  className="h-[3em] w-full px-[1em] md:h-[2em]"
                />
              </div>
            </div>
          </section>

          <ReviewsCarousel />
          <ContactBlock />
        </Hero>
      </main>
      <ScrollTopButton />
    </>
  );
}
