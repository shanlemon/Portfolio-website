import React from 'react';
import styled from 'styled-components';
import ProjectTile from "./ProjectTile";
import LeftBanner from "../LeftBanner";

const IntroBlock = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: .25fr .75fr;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
 
const LeftSide = styled.div`
  margin-left: 50px;
  text-align: center;
  border-right: .1rem solid black;
  height: 100%;
`;
 
const RightSide = styled.div`
  text-align: center;
  margin: 0 50px;
`;

function HomeRoute() {
  return (
    <MainWrapper>
      <IntroBlock>
        <LeftSide>
          <LeftBanner />
        </LeftSide>
        <RightSide>
          <h1>My Projects</h1>
          <ProjectTile></ProjectTile>
        </RightSide>
      </IntroBlock>
    </MainWrapper>
  );
}

export default HomeRoute;
