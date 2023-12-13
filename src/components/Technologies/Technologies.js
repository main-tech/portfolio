import React from 'react';
import { DiFirebase, DiJava, DiProlog, DiReact } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { RiVuejsFill } from "react-icons/ri";
import { SiCapacitor } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { DiDocker } from 'react-icons/di';
import { DiNginx } from 'react-icons/di';
import { SiTraefikproxy } from 'react-icons/si';
import { SiMicrosoftazure } from 'react-icons/si';
import { SiKubernetes } from 'react-icons/si';
import { TbBrandNextjs } from "react-icons/tb";
const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Core Tools & Technologies: My Go-To Resources for Project Excellence
    </SectionText>
    <List>
      {/* AWS */}
      <ListContainer>
        <FaAws size="3rem" />
        <ListTitle>AWS</ListTitle>
        <ListParagraph>
          <p>Backbone of Cloud Innovation</p>
        </ListParagraph>
      </ListContainer>


      {/* Azure */}
      <ListContainer>
        <SiMicrosoftazure size="3rem" />
        <ListTitle>Azure</ListTitle>
        <ListParagraph>
          <p>Powering Scalable, Secure Cloud Solutions</p>
        </ListParagraph>
      </ListContainer>


      {/* Next.js */}
      <ListContainer>
        <TbBrandNextjs size="3rem" />
        <ListTitle>Next.js</ListTitle>
        <ListParagraph>
          <p>Advancing Web Development with Next.js</p>
        </ListParagraph>
      </ListContainer>
      {/* Docker */}
      <ListContainer>
        <DiDocker size="3rem" />
        <ListTitle>Docker</ListTitle>
        <ListParagraph>
          <p>Streamlining Development with Containerization</p>
        </ListParagraph>
      </ListContainer>

      <ListContainer>
        <SiKubernetes size="3rem" />
        <ListTitle>Kubernetes</ListTitle>
        <ListParagraph>
          <p>Orchestrating Container Efficiency and Reliability</p>
        </ListParagraph>
      </ListContainer>
      {/* Nginx */}
      <ListContainer>
        <DiNginx size="3rem" />
        <ListTitle>Nginx</ListTitle>
        <ListParagraph>
          <p>Accelerating Web Performance and Stability</p>
        </ListParagraph>
      </ListContainer>


      {/* Traefik */}
      <ListContainer>
        <SiTraefikproxy size="3rem" />
        <ListTitle>Traefik</ListTitle>
        <ListParagraph>
          <p>Simplifying Network Management with Intelligent Routing</p>
        </ListParagraph>
      </ListContainer>

      <ListItem>
        <ListContainer>
          <DiProlog size="3rem" />
          <ListTitle>Prolog</ListTitle>
          <ListParagraph>
            <p>Problem Solving</p>
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <ListContainer>
          <DiJava size="3rem" />
          <ListTitle>Java</ListTitle>
          <ListParagraph>
          </ListParagraph>
          Standard Edition
        </ListContainer>
      </ListItem>

      <ListItem>
        <ListContainer>
          <DiReact size="3rem" />
          <ListTitle>React</ListTitle>
          <ListParagraph>
          </ListParagraph>
          <p>Client side</p>
        </ListContainer>
      </ListItem>


      <ListItem>
        <ListContainer>
          <RiVuejsFill size="3rem" />
          <ListTitle>Vue</ListTitle>
          <ListParagraph>
            <p>Client side</p>
          </ListParagraph>
        </ListContainer>
      </ListItem>



      <ListItem>
        <ListContainer>
          <SiCapacitor size="3rem" />
          <ListTitle>Capacitor</ListTitle>
          <ListParagraph>
            <p>Cross platform native mobile applications</p>
          </ListParagraph>
        </ListContainer>
      </ListItem>






      <ListItem>
        <ListContainer>
          <DiFirebase size="3rem" />
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            NOde.js and Data bases
          </ListParagraph>
        </ListContainer>
      </ListItem>



    </List>
  </Section>
);

export default Technologies;
