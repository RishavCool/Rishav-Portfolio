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
        <SectionText>Web Developer & Devops Engineer</SectionText>
        <Button
          onClick={() => {
            window.open("Resume.pdf", "_blank");
          }}
        >
          Download Resume
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
