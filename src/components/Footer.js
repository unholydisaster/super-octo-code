import { FooterContainer,LinkContainer, FooterLink, FooterText } from "@/styles/Footer";
import React from "react"

const Footer = () => {
    return (
      <FooterContainer>
        <LinkContainer>
        <FooterLink href="#">Services</FooterLink>
        <FooterLink href="#">About</FooterLink>
        <FooterLink href="#">contact</FooterLink>
        <FooterLink href="#">Privacy Policy</FooterLink>            
        </LinkContainer>
        <FooterText>  
          © 2023 RahaCode.com . All Rights Reserved.
        </FooterText>
      </FooterContainer>
    );
  };
  
  export default Footer;