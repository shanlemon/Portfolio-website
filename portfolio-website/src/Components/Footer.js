import React from 'react';
import styled from 'styled-components';
import { MailTo } from './MailTo';
import { Link } from 'react-router-dom';
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
} from 'react-icons/ai';

import { FaArrowAltCircleUp } from 'react-icons/fa';

const FooterContainer = styled.div`
  color: white;
  background-color: black;
  height: 400px;
  text-decoration: none;
`;

const Content = styled.div`
  display: flex;
  margin: 4rem 0 4rem 8rem;
`;

const InfoPanel = styled.div`
  display: flex;
  width: 30%;
  flex-direction: column;
  text-align: left;
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
  width: 100%;
`;

const ExporePanel = styled.div`
  width: 200px;
`;

const SocialPanel = styled.div`
  width: 200px;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  text-decoration: none;
`;

const RedirectLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const Icons = styled.div`
  display: flex;
  height: 50px;
  font-size: 2rem;
`;

const NewTabButton = styled.a`
  cursor: pointer;
`;

const BackToTop = styled.div`
  
  margin-right: 5rem;
  width: 100%;
  text-align: right;
  svg{
    font-size: 2rem;
  }
`;

function Footer() {
  const openLink = (url) => {
    const win = window.open(url, '_blank');
    if (win) {
      win.focus();
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <FooterContainer>
      <Content>
        <InfoPanel>
          <h1>Shan K Memon</h1>
          <br />
          <b>Have any questions?</b>
          <MailTo email={'shankmemon@gmail.com'} subject='Hey Shan!'>
            <p>ShanKMemon@gmail.com</p>
          </MailTo>
          <p>(832) 917-4944</p>
        </InfoPanel>
        <RightSide>
          <ExporePanel>
            <h3>Links</h3>
            <br />
            <Links>
              <RedirectLink to='/'>Home</RedirectLink>
              <RedirectLink to='/resume'>Resume</RedirectLink>
              <RedirectLink to='/contact'>Contact Me</RedirectLink>
              <RedirectLink to='/timeline'>Timeline</RedirectLink>
            </Links>
          </ExporePanel>
          <SocialPanel>
            <h3>Socials</h3>
            <br />
            <Icons>
              <NewTabButton
                onClick={() =>
                  openLink('https://www.linkedin.com/in/shanmemon/')
                }
              >
                <AiFillLinkedin style={{ margin: -3, marginRight: 2 }} />
              </NewTabButton>
              <NewTabButton
                onClick={() => openLink('http://instagram.com/shanmemon_')}
              >
                <AiFillInstagram style={{ margin: -3, marginRight: 2 }} />
              </NewTabButton>
              <NewTabButton
                onClick={() =>
                  openLink('https://www.facebook.com/shan.memon.5243/')
                }
              >
                <AiFillFacebook style={{ margin: -3, marginRight: 2 }} />
              </NewTabButton>
            </Icons>
          </SocialPanel>
          <BackToTop>
            <NewTabButton onClick={scrollToTop}>
              <FaArrowAltCircleUp />
            </NewTabButton>
          </BackToTop>
        </RightSide>
      </Content>
    </FooterContainer>
  );
}

export default Footer;
