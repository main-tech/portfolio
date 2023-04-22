import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { title:"2022",text: 'Graduated with Bsc.Computer Technology in JKUAT', }
];

const Acomplishments = () => (
<Section>
  <SectionTitle>
    Personal Accomplishments
  </SectionTitle>
  <Boxes>
    {data.map((card,index)=>(
      <Box key={index}>
        <BoxNum>{card.title}</BoxNum>
        <BoxText>{card.text}</BoxText>
      </Box>
    ))

    }
  </Boxes>
</Section>
);

export default Acomplishments;
