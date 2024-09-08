import React from 'react';
import { DESCRIPTION } from '../../Details';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';

const Hero = (props) => (
  <Section>
    <center>
    <SectionTitle main center>
      Mann Desai
      </SectionTitle>
      <SectionText>{DESCRIPTION}</SectionText>
      <Button onClick = { () => { window.location.href='mailto:desaimann37@gmail.com'}}>Contact Me</Button>
      </center>
  </Section>
);

export default Hero;