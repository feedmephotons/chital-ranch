import React from 'react';
import LandingPageTemplate from './LandingPageTemplate';

const ChocolateFallowDeerFloresvilleTX: React.FC = () => {
  return (
    <LandingPageTemplate
      title="Chocolate Fallow Deer — Floresville, TX"
      subtitle="Local South Texas fallow deer operation"
      heroImage="/images/hero-bg.jpg"
      intro="CR Fallow is located in Floresville, Texas, in the heart of South Texas ranch country. We're a local fallow deer operation focused on consistent chocolate genetics and dependable herd development. Conveniently located for buyers throughout South Texas, San Antonio, and the surrounding region."
      bulletPoints={[
        "Located in Floresville, TX 78114",
        "Easy access from San Antonio",
        "Central South Texas location",
        "Visitors welcome by appointment",
        "Local pickup available",
        "Serving South Texas ranches",
        "Professional breeding operation",
        "Part of the local ranching community"
      ]}
      secondaryTitle="Your Local Fallow Deer Source"
      secondaryContent="Being located in Floresville means we understand South Texas conditions and raise deer that thrive here. Our proximity to San Antonio and the surrounding area makes it easy for local buyers to visit, inspect animals, and arrange pickup. We're proud to be part of the South Texas ranching community."
      secondaryImage="/images/herd-grazing.jpg"
      calloutTitle="Visit Us in Floresville"
      calloutText="We're located at 1424 County Rd 329, Floresville, TX 78114. Schedule a visit to see our operation firsthand."
    />
  );
};

export default ChocolateFallowDeerFloresvilleTX;
