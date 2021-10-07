import React from "react";
import {
  FeaturedWorksSectionWrapper,
  FeaturedWorksHeaderWrapper,
} from "./FeaturedWorksSection.styles";

const FeaturedWorksSection = () => {
  return (
    <div>
      <FeaturedWorksSectionWrapper>
        <FeaturedWorksHeaderWrapper>
          <h1>Featured works</h1>
        </FeaturedWorksHeaderWrapper>
      </FeaturedWorksSectionWrapper>
    </div>
  );
};

export default FeaturedWorksSection;
