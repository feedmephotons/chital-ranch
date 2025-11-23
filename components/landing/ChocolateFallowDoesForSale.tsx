import React from 'react';
import LandingPageTemplate from './LandingPageTemplate';

const ChocolateFallowDoesForSale: React.FC = () => {
  return (
    <LandingPageTemplate
      title="Chocolate Fallow Does for Sale"
      subtitle="Foundation does with proven maternal genetics"
      heroImage="/images/does-pasture.jpg"
      intro="Building your herd starts with quality does. CR Fallow offers chocolate fallow does with strong maternal genetics, consistent coloration, and the steady temperaments that make for successful breeding programs. Our does are raised with care and selected for the traits that produce quality offspring year after year."
      bulletPoints={[
        "Foundation-quality chocolate does",
        "Proven maternal genetics",
        "Consistent chocolate coloring",
        "Covered does available",
        "Strong color traits passed to offspring",
        "Steady, calm temperaments",
        "Ready for breeding or pasture",
        "Various ages available"
      ]}
      secondaryTitle="The Foundation of Quality Genetics"
      secondaryContent="We believe that a great trophy starts with a great mother. Our does are selected for superior maternal instincts, consistent chocolate coloration, and the ability to raise healthy, well-developed offspring. Whether you need open does or covered does bred to our top herd sires, we have options to fit your program."
      secondaryImage="/images/herd-grazing.jpg"
      calloutTitle="Covered Does with Strong Color Traits"
      calloutText="Get a head start on your breeding program with does already bred to our proven herd sires."
    />
  );
};

export default ChocolateFallowDoesForSale;
