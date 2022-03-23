import React from 'react';
import { DiFirebase, DiReact, DiGithub } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Capstone Project </SectionTitle>
    <SectionText>
      For The course Capstone Project 2 me and my team decided to
       code a restaurant reservation and covid tracing app. It is a simple yet 
      effective app f dining out in current covid timies.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
           <a href={"https://github.com/mino9421/capstone_backend"}>Frontend Code</a>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
          <a href={"https://github.com/mino9421/capstone-frontend-react"}>Backend Code</a>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiGithub size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Other Files</ListTitle>
          <ListParagraph>
          <a href={"https://github.com/zion1102/CapstoneFiles"}>All Project Files</a>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
