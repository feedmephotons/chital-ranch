import React from 'react';
import LandingPageTemplate from './LandingPageTemplate';

const ChocolateFallowBucksForSale: React.FC = () => {
  return (
    <LandingPageTemplate
      title="Chocolate Fallow Bucks for Sale"
      subtitle="Proven breeder bucks from Texas bloodlines"
      heroImage="/images/buck-featured.jpg"
      intro="Looking for quality chocolate fallow bucks? Chital Ranch offers breeder bucks with wide palmation, solid frames, and dependable chocolate color. Our bucks come from proven Texas bloodlines and are selected for the traits that matter most — structure, color consistency, and the ability to pass those qualities to offspring."
      bulletPoints={[
        "Proven breeder bucks available",
        "Wide palmation and heavy mass",
        "Deep chocolate coloration",
        "Exceptional frame and structure",
        "Documented breeding history",
        "Hardy South Texas genetics",
        "Calm, manageable temperaments",
        "Live cover services available"
      ]}
      secondaryTitle="Bucks That Produce Results"
      secondaryContent="Our breeder bucks are known for passing on exceptional palm width and consistent chocolate coloring. We select for large-framed animals that can withstand the South Texas heat and produce robust offspring that perform well on any ranch. Each buck represents our commitment to well-rounded genetic quality."
      secondaryImage="/images/buck-front.png"
      calloutTitle="Live Cover from Proven Breeder Bucks"
      calloutText="Contact us to discuss availability, breeding plans, or to schedule a visit to see our herd sires in person."
    />
  );
};

export default ChocolateFallowBucksForSale;
