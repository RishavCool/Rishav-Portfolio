import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello <br />
          I'm Rishav
        </SectionTitle>
        <SectionText>Software Developer</SectionText>
        <a 
          href="https://drive.google.com/file/d/1W5Kj0rJLMctalBXsORVy7RoKkBJIVajL/view?usp=sharing" target="_blank" className="btn-1">
          Download Resume
        </a>
      </LeftSection> <br/>
    </Section>
  </>
);

export default Hero;
