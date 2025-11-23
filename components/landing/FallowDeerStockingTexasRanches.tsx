import React from 'react';
import LandingPageTemplate from './LandingPageTemplate';

const FallowDeerStockingTexasRanches: React.FC = () => {
  return (
    <LandingPageTemplate
      title="Fallow Deer Stocking for Texas Ranches"
      subtitle="Quality deer for your property"
      heroImage="/images/herd-mixed.jpg"
      intro="Stocking your Texas ranch with fallow deer? CR Fallow provides quality chocolate fallow deer that perform well in pasture settings. Whether you're establishing a new population or adding to an existing herd, our deer offer the strong color, clean genetics, and good body condition that Texas ranches demand."
      bulletPoints={[
        "Ranch stocking specialists",
        "Bulk quantities available",
        "Hardy South Texas genetics",
        "Strong color and body condition",
        "Adaptable to pasture settings",
        "Both bucks and does available",
        "Consultation on stocking plans",
        "Delivery arrangements available"
      ]}
      secondaryTitle="Stock Your Ranch with Confidence"
      secondaryContent="Our deer are raised in South Texas conditions, so they're already adapted to the Texas environment. They hold up well in everyday pasture settings and maintain good body condition. We can work with you on stocking plans to ensure you get the right mix of animals for your property's goals."
      secondaryImage="/images/bucks-water.jpg"
      calloutTitle="Options for Every Ranch Size"
      calloutText="Contact us to discuss your stocking needs. We work with ranches of all sizes across Texas."
    />
  );
};

export default FallowDeerStockingTexasRanches;
