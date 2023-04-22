import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
<FooterWrapper>
  <LinkList>
  <LinkColumn>
  <LinkTitle>Call</LinkTitle>
  <LinkItem href="tel:+254790770959">+254790770959</LinkItem>
  </LinkColumn>

  <LinkColumn>
  <LinkTitle>Call</LinkTitle>
  <LinkItem href="mailto:mandelamitan@gmail.com">mandelamitan@gmail.com</LinkItem>
  </LinkColumn>
  </LinkList>
  <SocialIconsContainer>
    <CompanyContainer>
      <Slogan>One step at a time</Slogan>
    </CompanyContainer>
    <SocialContainer>
    <SocialIcons href='https://www.github.com/main-tech'>
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/mandela-mitau'>
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      </SocialContainer>
  </SocialIconsContainer>
</FooterWrapper>
  );
};

export default Footer;
