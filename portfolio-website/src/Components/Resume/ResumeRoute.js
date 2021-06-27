import React from 'react';
import styled from 'styled-components';
import LeftBanner from "../LeftBanner";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

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

function ResumeRoute() {

  return (
    <MainWrapper>
      <IntroBlock>
        <LeftSide>
          <LeftBanner />
        </LeftSide>
        <RightSide>
          <h1>Resume</h1>
          <Document file="../resume.pdf">
            <Page pageNumber={0} />
          </Document>
        </RightSide>
      </IntroBlock>
    </MainWrapper>
  );
}

export default ResumeRoute;
