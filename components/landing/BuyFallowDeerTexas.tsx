import React from 'react';
import LandingPageTemplate from './LandingPageTemplate';

const BuyFallowDeerTexas: React.FC = () => {
  return (
    <LandingPageTemplate
      title="Buy Fallow Deer in Texas"
      subtitle="Quality chocolate fallow deer available now"
      heroImage="/images/herd-mixed.jpg"
      intro="Ready to buy fallow deer in Texas? CR Fallow offers quality chocolate fallow deer for breeders and hunting ranches. We provide straightforward communication, honest representation of every animal, and healthy deer ready for breeding or pasture. Contact us to discuss your needs and see what's available."
      bulletPoints={[
        "Chocolate fallow deer available",
        "Breeder bucks and does",
        "Yearlings and covered does",
        "Options for all program sizes",
        "Clear communication throughout",
        "Accurate animal descriptions",
        "Healthy animals ready to go",
        "Delivery options available"
      ]}
      secondaryTitle="What We Offer"
      secondaryContent="We offer live cover from proven breeder bucks, covered does with strong color traits, yearlings with steady development, and breeder bucks available by rotation. Buyers can expect clear communication, accurate descriptions, and healthy animals ready for breeding or pasture."
      secondaryImage="/images/does-pasture.jpg"
      calloutTitle="Ready to Talk?"
      calloutText="Contact us anytime to discuss herd goals, availability, or breeding plans. We're here to help you find the right deer for your program."
    />
  );
};

export default BuyFallowDeerTexas;
