'use client';

import CTA from '@/components/shared/cta';  
import Faqs from '@/components/shared/faq';
import GradientHero from '@/components/mvpblocks/mainsections/hero/gradient-hero';
import StarOnGithub from '@/components/mvpblocks/basics/buttons/star-on-github';
import TocDialog from '@/components/mvpblocks/basics/modals/toc-dialog';
import FooterGlow from '@/components/mvpblocks/required/footers/footer-glow';
import SparklesLogo from '@/components/mvpblocks/required/logo-cloud/sparkles-logo';
import AboutUs1 from '@/components/mvpblocks/mainsections/about/about-us-1';
import ContactUs1 from '@/components/mvpblocks/mainsections/contact/contact-us-1';
import Feature1 from '@/components/mvpblocks/mainsections/features/feature-1';
import AppHero from '@/components/mvpblocks/mainsections/hero/app-hero';
import Hero1 from '@/components/mvpblocks/mainsections/hero/hero-1';
import SimplePricing from '@/components/mvpblocks/mainsections/pricing/simple-pricing';
import Team1 from '@/components/mvpblocks/mainsections/team/team-1';
import Testimonials from '@/components/home/testimonials';
import BentoGridItem from '@/components/mvpblocks/grids/bento-grid-1';
import EllipsisBlock from '@/components/mvpblocks/cards/code/ellipsis-block';
import CardFlip from '@/components/mvpblocks/cards/basic/card-flip';
import Waitlist from '@/components/mvpblocks/pages/waitlist';


export default function CustomPage() {
  return (
    <>
      <GradientHero />
      <AppHero />
      <Hero1 />
      <div className="flex flex-col items-center justify-center gap-12 p-32">
        <StarOnGithub />
        <TocDialog />
      </div>
      <SparklesLogo />
      <FooterGlow />
      <AboutUs1 />
      <SimplePricing />
      <Team1 />
      <CardFlip />
      <BentoGridItem />
      <Waitlist />
      <Testimonials />
      <EllipsisBlock />
      <ContactUs1 />
      <Feature1 />
      <CTA />
      <Faqs />
    </>
  );
}
