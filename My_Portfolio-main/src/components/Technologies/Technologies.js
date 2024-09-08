import React from 'react';
import { DiAndroid, DiFirebase, DiJava, DiMongodb, DiMysql, DiNodejs, DiPython, DiReact, DiVisualstudio, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="technologies">
    <SectionDivider />
    <div style={{marginTop : "58px"}}>
      <SectionTitle>Technologies</SectionTitle>
    </div>
    <SectionText>
      I've worked with a range of technologies in the web development world.
      From Back-end to Front-end.
    </SectionText>
    <List>
      <ListItem>
      <DiPython size="3rem" color='black' />
        <ListContainer>
        <ListTitle>Data Science</ListTitle>
          <ListParagraph>
            Machine Learning <br />
            Deep Learning <br />
            NLP <br />
            Computer Vision <br />
          </ListParagraph>
        </ListContainer>
        </ListItem>
      <ListItem>
        
        <DiReact size="3rem" color='black' />
        <ListContainer>
          
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            ReactJs
          </ListParagraph>
          <ListParagraph>
            NextJs
          </ListParagraph>
          <ListParagraph>
            JSP
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <div>
          <DiNodejs size="3rem"  color='black'/>
          <DiJava size="3rem"  color='black'/>
        </div>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            NodeJs <br />
            ExpressJs <br />
            Java Spring Boot <br />
            Flask
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <div>
          <DiMysql size="3rem" color='black'/>
          <DiMongodb size="3rem" color='black'/>
        </div>
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            SQL <br />
            MongoDB <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiAndroid size="3rem"  color='black'/>
        <ListContainer>
          <ListTitle>Android</ListTitle>
          <ListParagraph>
            Flutter <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiVisualstudio size="3rem"  color='black'/>
        <ListContainer>
          <ListTitle>Tools</ListTitle>
          <ListParagraph>
            PostMan <br />
            VSCode <br />
            Git & Github <br />
            Docker <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
