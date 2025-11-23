import React from 'react';
import LandingPageTemplate from './LandingPageTemplate';

const TexasExoticDeerBreeders: React.FC = () => {
  return (
    <LandingPageTemplate
      title="Texas Exotic Deer Breeders"
      subtitle="Chocolate fallow deer specialists"
      heroImage="/images/herd-grazing.jpg"
      intro="Looking for reputable exotic deer breeders in Texas? CR Fallow specializes in chocolate fallow deer — one of the most sought-after exotic deer varieties for Texas ranches. Our focus on consistent genetics, health, and professional management makes us a trusted source for quality fallow deer across the state."
      bulletPoints={[
        "Chocolate fallow deer specialists",
        "Professional breeding operation",
        "Serving Texas ranches statewide",
        "Options for breeders and hunting ranches",
        "Consistent, well-managed herd",
        "Proven Texas bloodlines",
        "Health-focused management",
        "Straightforward, honest approach"
      ]}
      secondaryTitle="Why Chocolate Fallow Deer?"
      secondaryContent="Chocolate fallow deer are prized for their distinctive rich coloration, impressive palmated antlers, and adaptability to Texas conditions. At CR Fallow, we've built our entire operation around producing the highest quality chocolate fallow deer with consistent color, balanced frames, and reliable temperaments."
      secondaryImage="/images/mudslide.jpg"
      calloutTitle="Built on Purpose and Integrity"
      calloutText="We stand behind what we sell with honest representation and a commitment to helping buyers find the right fit for their goals."
    />
  );
};

export default TexasExoticDeerBreeders;
