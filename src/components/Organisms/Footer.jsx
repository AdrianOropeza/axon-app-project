import React from 'react'
import styled from 'styled-components';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {

  return ( 
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>ACERCA DE</FooterLinkTitle>
              <Link to="/especialidades"><FooterLink>Enseña en Axon</FooterLink></Link>
              <Link to="/cursos"><FooterLink>Principales cursos</FooterLink></Link>
              <Link to="/profesores"><FooterLink>Profesores</FooterLink></Link>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>METODO "Q"</FooterLinkTitle>
              <Link to="/"><FooterLink>Empleo</FooterLink></Link>
              <Link to="/"><FooterLink>Blog</FooterLink></Link>
              <Link to="/"><FooterLink>Ofertas</FooterLink></Link>
            </FooterLinkItems>
            <FooterLinkItems>
             <FooterLinkTitle>PATROCINADORES</FooterLinkTitle>
             <Link to="/"><FooterLink>Universidades</FooterLink></Link>
             <Link to="/"><FooterLink>Carreras</FooterLink></Link>
             <Link to="/"><FooterLink>Certificaciones</FooterLink></Link>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <Link to="/">
            <SocialLogo>
              Axon C.A
            </SocialLogo>
            </Link>
            <WebSiteRight>Desarrollado por Adrian Oropeza © 2021</WebSiteRight>
            <SocialIcons>
              <SocialIconLink href="https://www.facebook.com/" target="_blank">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="https://www.instagram.com/" target="_blank">
             <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="https://www.linkedin.com/" target="_blank">
              <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
   );
}

const FooterContainer = styled.footer`
  background-color: #141618;

`;

const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0px auto;

`;

const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px){
    padding-top: 32px;
  }
`;
 
const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px){
    flex-direction: column;
  }
`;

const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px){
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

const FooterLinkTitle = styled.h2`
  font-size: 14px;
  margin-bottom: 16px;
  color:#007BDF;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover{
    color: #00BFF0;
    transition: 0.3ms ease-out;
  }
`;

const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px){
    flex-direction: column;
  }
`;

const SocialLogo = styled.a`
  color:#007BDF;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items:center;
  margin-bottom:16px;
  font-weight:bold;
`;

const WebSiteRight = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

const SocialIconLink = styled.a`
  color: #fff;
  font-size:24px;
`;


export default Footer;