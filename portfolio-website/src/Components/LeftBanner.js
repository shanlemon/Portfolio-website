import React from 'react'
import styled from "styled-components";
import shanPortrait from '../media/shan.png';

const ShanPortrait = styled.img`
  width: 50%;
`;

function LeftBanner() {
  return (
    <>
      <h1>Hi, I'm Shan</h1>
      <ShanPortrait src={shanPortrait}></ShanPortrait>
      <h4>Junior at the University of Texas at Austin</h4>
    </>
  )
}

export default LeftBanner
