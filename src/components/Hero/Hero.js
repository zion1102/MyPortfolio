import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Zion Henry's <br />
          Personal Portfolio
        </SectionTitle>
        <SectionText>
        Welcome to my personal porfolio. On this page you will be able to see app and projects i have worked on in the past and get to know me a but better.
        </SectionText>
        {
        //<Button onClick={props.handleClick}>Learn More</Button>
        }
      </LeftSection>
    </Section>
  </>
);

export default Hero;