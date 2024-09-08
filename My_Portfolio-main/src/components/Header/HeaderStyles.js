import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';
import '@fontsource/creepster';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 1rem;
  padding: 1rem;
  padding-top: 2rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    align-items: center;
    padding: 0.5rem;
  }
`;

export const Ashish = styled.div`
  font-family: 'Creepster', cursive;
`;

export const Span = styled.span`
  font-weight: 900;
  cursor: pointer;
  font-size: 4rem;

`;
export const Div1 = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  margin-left: 1rem; 
  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    align-items: center;
    margin-left: 0;
    order: 1;
  }
`;

export const Div2 = styled.div`
  display: flex;
  justify-content: space-around;
  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 100%;
    order: 2;
  }
`;

export const Div3 = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    justify-content: center;
    order: 3;
  }
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: rgba(0, 0, 0, 0.75);
  transition: 0.4s ease;
  &:hover {
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;
  line-height: 32px;
  color: rgba(0, 0, 0, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: solid 2px transparent;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;


// Social Icons 


export const SocialIcons = styled.a`
transition: 0.3s ease;
color: black;
border-radius: 50px;
  padding: 4px;
&:hover {
    transform: scale(1.2);
    transition: 0.3s ease;
    cursor: pointer;
  }
`