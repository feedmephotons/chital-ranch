import React from 'react';
import LandingPageTemplate from './LandingPageTemplate';

const SouthTexasFallowDeerRanch: React.FC = () => {
  return (
    <LandingPageTemplate
      title="South Texas Fallow Deer Ranch"
      subtitle="Chital Ranch — Floresville, Texas"
      heroImage="/images/hero-bg.jpg"
      intro="Chital Ranch is a South Texas fallow operation located in Floresville, Texas, focused on consistent chocolate genetics and dependable herd development. We raise our deer with close attention to health, temperament, and long-term quality in the heart of South Texas ranch country."
      bulletPoints={[
        "Located in Floresville, TX",
        "South Texas climate-adapted genetics",
        "Family-operated ranch",
        "Visitors welcome by appointment",
        "Consistent chocolate fallow focus",
        "Proven Texas bloodlines",
        "Professional breeding operation",
        "Serving ranches across Texas"
      ]}
      secondaryTitle="Raised in South Texas"
      secondaryContent="Our deer are raised in the South Texas environment, developing the hardiness and adaptability that comes from thriving in Texas conditions. This means when you purchase from Chital Ranch, you're getting animals that are already acclimated to the Texas climate and ready to perform on your property."
      secondaryImage="/images/herd-mixed.jpg"
      calloutTitle="Visit Our South Texas Operation"
      calloutText="We welcome fellow breeders and ranch owners to visit Chital Ranch. See the quality for yourself at our Floresville location."
    />
  );
};

export default SouthTexasFallowDeerRanch;
