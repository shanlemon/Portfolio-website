import React from 'react'
import styled from 'styled-components'
import { HiOutlineMail } from 'react-icons/hi'
import { Mailto } from './Mailto'
import { Link } from 'react-router-dom'

const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 0.8fr;
  background-color: rgb(207, 90, 90);
`

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  background-color: darkolivegreen;
  text-align: center;
`

const RightSide = styled.div `
  display: flex;
  flex-direction: row;
  margin: 10px;
`

const ExporePanel = styled.div `
  background-color: yellow;  
  width: 200px;
`

const SocialPanel = styled.div `
  background-color: green;
  width 200px;

`

const Email = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  height: 40px;
`

const MailIcon = styled.div`
  display: flex;
  transform: scale(1.25);
  align-items: center;
  margin-right: 5px;
`

const Links = styled.div `
  display: flex;
  flex-direction: column;
  text-align: left;
`

function Footer() {
  return (
    <div className='container'>
      <FooterContainer>
        <LeftSide>
          <h1>ShanMemon.com</h1>
          <Email>
            <MailIcon>
              <HiOutlineMail />
            </MailIcon>
            <Mailto email={'shankmemon@gmail.com'} subject='Hey Shan!'>
              <p className='link'>ShanKMemon@gmail.com</p>
            </Mailto>
          </Email>
        </LeftSide>
        <RightSide>
          <ExporePanel>
            <h3>EXPLORE MORE</h3>
            <Links>
              <Link className='link'>Resume</Link>
              <Link className='link'>Contact Me</Link>
              <Link className='link'>Timeline</Link>
            </Links>
          </ExporePanel>
          <SocialPanel>
            <h3>SOCIALS</h3>
            
          </SocialPanel>
        </RightSide>
      </FooterContainer>
    </div>
  )
}

export default Footer
