import React from 'react';
import LandingPageTemplate from './LandingPageTemplate';

const FallowDeerYearlingsForSaleTexas: React.FC = () => {
  return (
    <LandingPageTemplate
      title="Fallow Deer Yearlings for Sale in Texas"
      subtitle="Young stock with steady development"
      heroImage="/images/two-deer.jpg"
      intro="Looking to grow out your own fallow deer? CR Fallow offers yearlings with steady development from proven chocolate fallow genetics. Yearlings are an excellent choice for buyers who want to develop animals in their own program while benefiting from our foundation genetics and early management."
      bulletPoints={[
        "Yearlings with steady development",
        "Chocolate fallow genetics",
        "Excellent grow-out potential",
        "From proven Texas bloodlines",
        "Early selection opportunities",
        "More affordable entry point",
        "Both bucks and does available",
        "Health records provided"
      ]}
      secondaryTitle="Invest in the Future"
      secondaryContent="Our yearlings come from the same quality genetics as our mature breeding stock — proven Texas bloodlines with consistent chocolate color and balanced frames. By purchasing yearlings, you get the opportunity to grow and develop animals in your own environment while benefiting from the genetic foundation we've built."
      secondaryImage="/images/herd-mixed.jpg"
      calloutTitle="Yearlings with Steady Development"
      calloutText="Contact us to see our current yearling availability and discuss which animals might be right for your program."
    />
  );
};

export default FallowDeerYearlingsForSaleTexas;
