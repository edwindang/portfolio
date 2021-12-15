import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi!<br />
        I am Edwin Dang
      </SectionTitle>
      <SectionText>
        I'm an aspiring software engineer with a background in data analytics and healthcare technology.
      </SectionText>
      <Button onClick={() => window.open("https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:dcf0d32a-bf2e-41a8-b8dc-6be1c847217e#pageNum=1", "_blank")}>
        Resume
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;