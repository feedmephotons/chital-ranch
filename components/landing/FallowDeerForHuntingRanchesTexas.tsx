import React from 'react';
import LandingPageTemplate from './LandingPageTemplate';

const FallowDeerForHuntingRanchesTexas: React.FC = () => {
  return (
    <LandingPageTemplate
      title="Fallow Deer for Hunting Ranches in Texas"
      subtitle="Strong color, clean genetics, good body condition"
      heroImage="/images/herd-grazing.jpg"
      intro="Stocking a hunting ranch with quality fallow deer? Our chocolate fallow deer perform well on hunting ranches, offering strong color, clean genetics, and good body condition that holds up in everyday pasture settings. Raised in South Texas conditions, our deer are built to thrive on Texas ranches."
      bulletPoints={[
        "Ideal for hunting ranch stocking",
        "Strong chocolate coloration",
        "Good body condition and frame",
        "Hardy South Texas genetics",
        "Steady, manageable temperaments",
        "Holds up in pasture settings",
        "Clean genetics throughout",
        "Bulk quantities available"
      ]}
      secondaryTitle="Built for Texas Ranches"
      secondaryContent="Our deer perform well on hunting ranches, offering strong color, clean genetics, and good body condition that holds up in everyday pasture settings. Whether you're stocking a new property or adding quality animals to an existing operation, our focus on structure, temperament, and consistent color gives buyers confidence in every animal we raise."
      secondaryImage="/images/bucks-water.jpg"
      calloutTitle="Options for Breeders and Hunting Ranches"
      calloutText="We work with buyers to match them with the right deer for their goals. Contact us to discuss your stocking needs."
    />
  );
};

export default FallowDeerForHuntingRanchesTexas;
