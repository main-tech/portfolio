import React from 'react';
import { DiFirebase, DiJava, DiProlog, DiReact} from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { RiVuejsFill } from "react-icons/ri";
import { SiCapacitor } from "react-icons/si";
const Technologies = () =>  (
<Section id="tech">
  <SectionDivider/>
  <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Showcased below are the tools I use to build amazing projects
    </SectionText>
    <List>
    <ListItem>
        <ListContainer>
        <DiProlog size="3rem"/>
      <ListTitle>Prolog</ListTitle>
      <ListParagraph>
        <p>Problem Solving</p>
      </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <ListContainer>
        <DiJava size="3rem"/>
      <ListTitle>Java</ListTitle>
      <ListParagraph>
      </ListParagraph>
      Standard Edition
        </ListContainer>
      </ListItem>

      <ListItem>
        <ListContainer>
        <DiReact size="3rem"/>
      <ListTitle>React</ListTitle>
      <ListParagraph>
      </ListParagraph>
       <p>Client side</p>
        </ListContainer>
      </ListItem>
      

      <ListItem>
        <ListContainer>
        <RiVuejsFill size="3rem"/>
      <ListTitle>Vue</ListTitle>
      <ListParagraph>
      <p>Client side</p>
      </ListParagraph>
        </ListContainer>
      </ListItem>



      <ListItem>
        <ListContainer>
        <SiCapacitor size="3rem"/>
      <ListTitle>Capacitor</ListTitle>
      <ListParagraph>
        <p>Cross platform native mobile applications</p>
      </ListParagraph>
        </ListContainer>
      </ListItem>

    




      <ListItem>
        <ListContainer>
        <DiFirebase size="3rem"/>
      <ListTitle>Back-End</ListTitle>
      <ListParagraph>
        Experience with <br/>
        NOde.js and Data bases
      </ListParagraph>
        </ListContainer>
      </ListItem>



    </List>
</Section>
);

export default Technologies;
