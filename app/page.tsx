import { BrandLogo } from "@/components/BrandLogo";
import { ContactBlock } from "@/components/ContactBlock";
import { CtaRow } from "@/components/CtaRow";
import { Hero } from "@/components/Hero";
import { ReviewCta } from "@/components/ReviewCta";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import { ScrollTopButton } from "@/components/ScrollTopButton";

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
                <ReviewCta />
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
