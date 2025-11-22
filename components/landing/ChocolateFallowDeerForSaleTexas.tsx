import React from 'react';
import LandingPageTemplate from './LandingPageTemplate';

const ChocolateFallowDeerForSaleTexas: React.FC = () => {
  return (
    <LandingPageTemplate
      title="Chocolate Fallow Deer for Sale in Texas"
      subtitle="Quality genetics from proven Texas bloodlines"
      heroImage="/images/herd-mixed.jpg"
      intro="Looking for chocolate fallow deer for sale in Texas? Chital Ranch offers quality breeding stock with consistent chocolate coloration, balanced frames, and healthy, steady temperaments. Our deer are raised in South Texas with close attention to genetics, health, and long-term quality."
      bulletPoints={[
        "Proven Texas bloodlines",
        "Consistent chocolate coloration",
        "Balanced frames and clean structure",
        "Healthy, steady temperaments",
        "Live cover and covered does available",
        "Breeder bucks and yearlings",
        "Straightforward communication",
        "Honest representation of every animal"
      ]}
      secondaryTitle="Why Choose Chital Ranch?"
      secondaryContent="Our herd is built from respected Texas bloodlines with consistent chocolate color, balanced frames, and reliable, steady temperaments. We focus on well-rounded genetic quality and use thoughtful outcrossing to continually strengthen the traits we value most. Whether you're building a breeding program or stocking a hunting ranch, our deer deliver consistent results generation after generation."
      secondaryImage="/images/buck-featured.jpg"
      calloutTitle="Quality You Can See in the Pasture"
      calloutText="We stand behind what we sell with honest representation and a commitment to helping buyers find the right fit for their goals."
    />
  );
};

export default ChocolateFallowDeerForSaleTexas;
