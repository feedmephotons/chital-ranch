import React from 'react';
import LandingPageTemplate from './LandingPageTemplate';

const QualityFallowDeerBloodlinesTexas: React.FC = () => {
  return (
    <LandingPageTemplate
      title="Quality Fallow Deer Bloodlines in Texas"
      subtitle="Proven genetics from respected programs"
      heroImage="/images/buck-front.png"
      intro="The foundation of a successful fallow deer program is quality bloodlines. At Chital Ranch, our genetics come from respected Texas bloodlines — including contributions from some of the state's top programs. We've built our herd on these proven genetics to deliver consistent, reliable results for our buyers."
      bulletPoints={[
        "Respected Texas bloodlines",
        "Contributions from top programs",
        "Documented genetic history",
        "Consistent traits across generations",
        "Proven performance records",
        "Selective breeding practices",
        "Outcrossing for genetic strength",
        "Quality you can trace"
      ]}
      secondaryTitle="Bloodlines That Produce"
      secondaryContent="We don't chase trends — we build on genetics that consistently produce quality offspring generation after generation. Our selective breeding program uses structured pairings and thoughtful outcrossing to strengthen the traits we value most: consistent chocolate color, balanced frames, clean structure, and reliable temperaments."
      secondaryImage="/images/buck-featured.jpg"
      calloutTitle="A Strong Foundation Behind Every Deer"
      calloutText="Every animal we sell carries forward the genetic quality we've worked to build. Contact us to learn more about our bloodlines."
    />
  );
};

export default QualityFallowDeerBloodlinesTexas;
