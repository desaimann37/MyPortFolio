import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillMediumCircle } from 'react-icons/ai';
import { Ashish, Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "black" }}>
          <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <Link href="#projects">
        <NavLink>Projects</NavLink>
      </Link>
      <Link href="#technologies">
        <NavLink>Technologies</NavLink>
      </Link>
      <Link href="#about">
        <NavLink>About</NavLink>
      </Link>
    </Div2>
    <Div3>
      <SocialIcons target='_blank' href='https://github.com/desaimann37'>
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons target='_blank' href='https://www.linkedin.com/in/desaimann37/'>
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons target='_blank' href='https://medium.com/@desaimann37'>
        <AiFillMediumCircle size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
