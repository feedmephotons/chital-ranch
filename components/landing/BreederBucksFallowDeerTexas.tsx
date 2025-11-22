import React from 'react';
import LandingPageTemplate from './LandingPageTemplate';

const BreederBucksFallowDeerTexas: React.FC = () => {
  return (
    <LandingPageTemplate
      title="Breeder Bucks — Fallow Deer Texas"
      subtitle="Proven sires for your breeding program"
      heroImage="/images/buck-featured.jpg"
      intro="Looking for a breeder buck to elevate your fallow deer program? Chital Ranch offers proven breeder bucks with documented genetics, wide palmation, and the consistent chocolate coloration that defines quality fallow deer. Our bucks are selected for their ability to pass premium traits to offspring."
      bulletPoints={[
        "Proven breeding performance",
        "Wide palmation genetics",
        "Consistent chocolate coloration",
        "Heavy mass and solid frames",
        "Documented breeding history",
        "Calm, workable temperaments",
        "Live cover services available",
        "Breeder bucks by rotation"
      ]}
      secondaryTitle="Sires That Make a Difference"
      secondaryContent="The right breeder buck can transform your herd. Our bucks are known for passing on exceptional palm width, consistent chocolate coloring, and solid frames. We select for large-framed animals that produce robust offspring and maintain the genetic consistency that serious breeders demand."
      secondaryImage="/images/buck-front.png"
      calloutTitle="Breeder Bucks Available by Rotation"
      calloutText="Contact us to discuss your breeding goals and see which of our herd sires might be the right fit for your program."
    />
  );
};

export default BreederBucksFallowDeerTexas;
