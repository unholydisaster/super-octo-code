import styled from "styled-components"
import {mq,lq} from "./Globals"
import Link from "next/link"


export const FooterContainer = styled.footer`
  background:rgb(19,20,23);
  color: #fff;
  display: flex;
  align-items: center;
  padding:20px;
  grid-area: footer;
  ${mq[1]}{
    padding:0px;
  }
`;

export const FooterText = styled.p`
  font-size: 18px;
  margin: 0;
  margin-top:40px;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size:20px;
`;

export const LinkContainer=styled.div`
width:50vw;
position:relative;
display:grid;
grid-template-columns:repeat(2,1fr);
grid-gap:20px;
${mq[1]}{
  width:80vw;
  left:10vw;
}
`
