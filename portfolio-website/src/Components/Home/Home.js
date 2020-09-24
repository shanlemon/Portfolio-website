import React from 'react'
import './Home.css'
import shanPortrait from '../../images/shan.jpg'
import styled from 'styled-components'

const IntroBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 500px;
`

const LeftSide = styled.div`
  text-align: right;
  margin: 10px;
`
const RightSide = styled.div`
`

function Home() {
  return (
    <>
      <div className='container'>
        <IntroBlock>
          <LeftSide>
            <h1>Hi, I'm Shan</h1>
          </LeftSide>
          <RightSide>
            <img src={shanPortrait} alt='Shan Memon' />
          </RightSide>
        </IntroBlock>
      </div>
    </>
  )
}

export default Home
