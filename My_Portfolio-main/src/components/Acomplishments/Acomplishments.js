import React, { useState } from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import { useEffect } from 'react';
import Link from 'next/link';

const static_data = [
  { number: 10, text: 'Number of Projects Build'},
  { number: 'DUHacks' , text: 'Participation'}
];



const Acomplishments = () => {

  const [data , setData] = useState();

  const getLeetCodeData = async () => {
    const response = await fetch("/api/hello");
    const details = await response.json();
    setData(details.data);
  }

  useEffect(() => {
    getLeetCodeData();
  },[]);
  
  return (

  <Section>
    <SectionDivider/>
      <div style={{ marginTop: "58px" }}>
        <SectionTitle>
          Live : 
        </SectionTitle>
      <SectionTitle>
          LeetCode Stats: <p style={{ display: "inline", color: "grey", padding: "15px" }}>
            <a href={`https://www.leetcode.com/${data?.matchedUser?.username}`} style={{ textDecoration: "none", color: "grey" }}>
            {data?.matchedUser?.username}
            </a>
          </p>
          <img src={data?.matchedUser?.profile?.userAvatar} alt="avatar" style={{borderRadius: "40%", width: "60px", height: "60px"}}/>
      </SectionTitle>
      </div>
      <Boxes>
        <Box>
          <BoxText>Highest LeetCode Contest Rating:</BoxText>
          <br/>
          <BoxNum>1616</BoxNum>
        </Box>
        <Box>
          <BoxText>Total Contests Given:</BoxText>
          <br/>
          <BoxNum>{data?.userContestRanking?.attendedContestsCount}</BoxNum>
        </Box>
        <Box>
          <BoxText>Ranking:</BoxText>
          <br/>
          <BoxNum>{data?.matchedUser?.profile?.ranking}</BoxNum>
        </Box>
        <Box>
          <BoxText>Reputation:</BoxText>
          <br/>
          <BoxNum>{data?.matchedUser?.profile?.reputation}</BoxNum>
        </Box>
      </Boxes>
      <br />
    <Boxes>
      {data?.matchedUser?.submitStats?.acSubmissionNum?.map((card, index) => {
        return (
          <Box key={index}>
            <BoxNum>{card.difficulty}</BoxNum>
            <BoxText>Problems Solved : {card.count}</BoxText>
          </Box>
        );
      })}
      </Boxes>
      <SectionDivider/>
    <div style={{marginTop : "58px"}}>
      <SectionTitle>
          Personal Accomplishments
        </SectionTitle>
      </div>
    <Boxes>
        <Box>
          <BoxText>{static_data[0].text}</BoxText>
          <BoxNum>{static_data[0].number}</BoxNum>
        </Box>
        <Box>
          <BoxText>{static_data[1].text}</BoxText>
          <a href='https://devfolio.co/@desaimann37'><BoxNum>{static_data[1].number}</BoxNum></a>
        </Box>
    </Boxes>
  </Section>
)};

export default Acomplishments;
