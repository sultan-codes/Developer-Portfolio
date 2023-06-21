import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        HI I AM <br />
        SHOAIB SHAIK
      </SectionTitle>
      <SectionText>
        Discover the budding world of a beginner web developer through my
        portfolio website. Dive into a collection of projects showcasing my
        passion for coding and my journey of growth. Explore the fusion of
        creativity and technical expertise as I transform ideas into captivating
        digital experiences.
      </SectionText>
      <Button onClick={() => (window.location = "#about")}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
