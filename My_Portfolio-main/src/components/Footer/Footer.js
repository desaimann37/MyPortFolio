import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMediumCircle } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:desaimann37@gmail.com'>desaimann37@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          {/* <Slogan></Slogan> */}
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons target='_blank' href='https://github.com/desaimann37'>
            <AiFillGithub size="3rem"/>
          </SocialIcons>
          <SocialIcons target='_blank' href='https://www.linkedin.com/in/desaimann37/'>
            <AiFillLinkedin size="3rem"/>
          </SocialIcons>
          <SocialIcons target='_blank' href='https://medium.com/@desaimann37'>
            <AiFillMediumCircle size="3rem"/>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
