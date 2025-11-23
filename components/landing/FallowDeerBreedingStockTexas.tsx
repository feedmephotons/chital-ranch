import React from 'react';
import LandingPageTemplate from './LandingPageTemplate';

const FallowDeerBreedingStockTexas: React.FC = () => {
  return (
    <LandingPageTemplate
      title="Fallow Deer Breeding Stock in Texas"
      subtitle="Foundation genetics for serious programs"
      heroImage="/images/does-pasture.jpg"
      intro="Building or expanding a fallow deer breeding program? CR Fallow provides quality breeding stock from proven Texas bloodlines. Our chocolate fallow deer offer the consistent coloration, solid frames, and reliable temperaments that form the foundation of successful breeding operations across Texas."
      bulletPoints={[
        "Foundation-quality breeding stock",
        "Proven breeder bucks available",
        "Covered does with strong color traits",
        "Yearlings with steady development",
        "Documented genetics and bloodlines",
        "Consistent chocolate coloration",
        "Strong maternal genetics",
        "Breeder support and guidance"
      ]}
      secondaryTitle="Stock That Performs"
      secondaryContent="Whether you're starting a new breeding program or adding to an existing herd, our deer carry forward the qualities we work for every season — clean, healthy animals with predictable results and a strong foundation behind them. We offer live cover from proven breeder bucks, covered does with strong color traits, and yearlings ready for your program."
      secondaryImage="/images/mudslide.jpg"
      calloutTitle="Reliable Results Across Each Generation"
      calloutText="Our focus on structure, temperament, and consistent color gives buyers confidence in every animal we raise."
    />
  );
};

export default FallowDeerBreedingStockTexas;
