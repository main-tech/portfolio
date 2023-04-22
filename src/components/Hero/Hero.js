import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';


 


const Hero = (props) => (
<Section>
  <LeftSection>
    <SectionTitle main center>
      Welcome To <br />
      Mitau's Portfolio
    </SectionTitle>
    <SectionText>Software Developer
    </SectionText>

      <a href="mandelacv.pdf" download="mandelacv" target='_blank'>
      <Button >Download portfolio</Button>
</a>

  </LeftSection>
</Section>
);

export default Hero;