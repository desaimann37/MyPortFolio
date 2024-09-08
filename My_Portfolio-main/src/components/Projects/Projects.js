import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';


const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({id , image , title ,description , tags ,source , visit}) => {
        return (
          <BlogCard key={id}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr />
            </TitleContent>
              <CardInfo>{description}</CardInfo>
            <div style={{marginTop : "25px"}}>
              <TitleContent><b><u>Technologies</u></b></TitleContent>
              <TagList>
                {tags.map((tag, i) => {
                  return (<Tag key={i}>{tag}</Tag>);
                })}
              </TagList>
            </div>
            <UtilityList>
              {visit && <ExternalLinks href={visit}><b>Visit</b></ExternalLinks>}
              <ExternalLinks href={source}><b>Code</b></ExternalLinks>
            </UtilityList>
          </BlogCard>
          );
      })}
    </GridContainer>
  </Section>
);

export default Projects;