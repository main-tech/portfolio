import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const getBadgeHTML = (badgeId) => {
  return `
    <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="${badgeId}" data-share-badge-host="https://www.credly.com"></div>
  `;
};
const data = [
  { title: "2023", badgeId: '3c4e65e7-becc-4ba0-8440-3386e5ac4630', },
  { title: "2023", badgeId: 'f35068a5-fdb2-4628-be43-986fd456157b', },
  { title: "2023", badgeId: '28214908-8be7-4a37-9720-4d9bc1d81c2e', },

  { title: "2022", text: 'Graduated with Bsc.Computer Technology in JKUAT', },
];




const Acomplishments = () => {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <Section>
      <SectionTitle>
        Personal Accomplishments
      </SectionTitle>
      <Boxes>
        {data.map((card, index) => (
          <Box key={index}>
            <BoxNum>{card.title}</BoxNum>
            {card.badgeId ? (
              <div dangerouslySetInnerHTML={{ __html: getBadgeHTML(card.badgeId) }} />
            ) : (
              <BoxText>{card.text}</BoxText>
            )}
          </Box>
        ))}
      </Boxes>
    </Section>
  );
};



export default Acomplishments;
