import React from 'react';
import LandingPageTemplate from './LandingPageTemplate';

const FallowDeerGeneticsTexas: React.FC = () => {
  return (
    <LandingPageTemplate
      title="Fallow Deer Genetics in Texas"
      subtitle="Proven bloodlines, consistent results"
      heroImage="/images/buck-front.png"
      intro="Quality fallow deer genetics are the foundation of any successful breeding program. At CR Fallow, our genetics come from respected Texas bloodlines — including contributions from some of the state's top programs — and we use those strengths to build a herd that is consistent, balanced, and reliable."
      bulletPoints={[
        "Proven Texas bloodlines",
        "Documented genetic history",
        "Consistent chocolate coloration",
        "Balanced frames and clean structure",
        "Selective outcrossing program",
        "Strong maternal genetics",
        "Reliable results generation after generation",
        "Quality you can see in the pasture"
      ]}
      secondaryTitle="Genetics That Deliver"
      secondaryContent="Our breeding program focuses on well-rounded chocolate fallow genetics, using structured pairings and selective outcrossing to strengthen color, structure, and long-term herd health. We don't chase trends — we build on genetics that consistently produce quality offspring generation after generation."
      secondaryImage="/images/mudslide.jpg"
      calloutTitle="A Strong Foundation Behind Every Deer"
      calloutText="Every animal at CR Fallow carries forward the qualities we work for every season — clean, healthy animals with predictable results."
    />
  );
};

export default FallowDeerGeneticsTexas;
