import styled from 'styled-components';

const borderRadius = '20px';
const boxShadow = '3px 3px 20px rgba(0, 0, 0, 0.2)';
const primaryColor = '#000000';
const secondaryColor = '#FFFFFF';
const accentColor = '#FFFFFF';
const accentHoverColor = '#000000';

export const Img = styled.img`
  border-radius: ${borderRadius};
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;

export const BlogCard = styled.div`
  border-radius: ${borderRadius};
  box-shadow: ${boxShadow};
  text-align: center;
  width: 400px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: ${primaryColor};
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? '3rem' : '2rem')};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: ${secondaryColor};
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #000000;
  font-family: 'Times New Roman', Times, serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #000000;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  color: #000000;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background: ${accentColor};
  border-radius: 15px;
  transition: 0.5s;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
  margin: 0.5rem;
  cursor: pointer;

  &:hover {
    background: ${accentHoverColor};
    border : 2px solid ${accentHoverColor};
    text-decoration: none;
    color : ${accentColor}
  }

`;

export const TagList = styled.ul`

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2rem;
`;

export const Tag = styled.li`
  color: "black";
  font-size: 1.5rem;
  margin: 0.5rem;
  padding: 0.5rem 2rem;
  border-radius: 15px;
  background: ${accentHoverColor};
  text-align: center;
  transition: 0.5s;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  font-weight: 600;
`;

