import React from 'react';
import LandingPageTemplate from './LandingPageTemplate';

const ChocolateFallowDeerBreedersTexas: React.FC = () => {
  return (
    <LandingPageTemplate
      title="Chocolate Fallow Deer Breeders in Texas"
      subtitle="Built on purpose and integrity"
      heroImage="/images/buck-front.png"
      intro="CR Fallow is a South Texas fallow operation focused on consistent chocolate genetics and dependable herd development. As dedicated chocolate fallow deer breeders, we raise our deer with close attention to health, temperament, and long-term quality. Our breeding program focuses on structured pairings and selective outcrossing to strengthen color, structure, and herd health."
      bulletPoints={[
        "Dedicated chocolate fallow specialists",
        "Structured breeding program",
        "Selective outcrossing for genetic strength",
        "Focus on color, structure, and health",
        "Proven maternal genetics",
        "Consistent management practices",
        "Years of breeding experience",
        "Options for breeders and hunting ranches"
      ]}
      secondaryTitle="Our Breeding Philosophy"
      secondaryContent="Our breeding program focuses on well-rounded chocolate fallow genetics, using structured pairings and selective outcrossing to strengthen color, structure, and long-term herd health. Every animal represents our standard for quality — healthy, and true to type. Raised with care and managed for reliable results across each generation."
      secondaryImage="/images/herd-grazing.jpg"
      calloutTitle="A Strong Foundation Behind Every Deer"
      calloutText="Our genetics come from respected Texas bloodlines with documented track records. We don't chase trends — we build on genetics that consistently produce quality offspring."
    />
  );
};

export default ChocolateFallowDeerBreedersTexas;
