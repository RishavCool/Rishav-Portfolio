import React from 'react';
import { DiFirebase , DiFsharp } from 'react-icons/di';
import { FaLanguage } from 'react-icons/fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world.
      From Front-end To Back-end & little knowledge of Devops Tools.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <FaLanguage size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Language</ListTitle>
          <ListParagraph>
            C++ , Java <br />
            Python , HTML , CSS
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
            Python , JavaScript , Docker <br />
            MangoDb , MySQL , Node.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFsharp size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Framework</ListTitle>
          <ListParagraph>
            Angular , Express <br />
            Django , Bootstrap
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
