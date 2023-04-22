import styled from "styled-components"
import { lq,mq } from "../signin_signup/signup"
import ReactMarkdown from "react-markdown";

export const ArticleContainer = styled.div`
  position:relative;
  background:white;
  width:90vw;
  height:xxx;
  top:15px;
  left:5vw;
  margin-bottom:10px;
  ${mq[1]}{
    top:10px;
    position:relative;
    width:100vw;
    left:0vw;
    height:xxx;
  }
`

export const Article = styled(ReactMarkdown)`
  position:relative;
  padding:10px;
  font-size: 18px;
  width:100%;
  word-wrap: break-word;

  ${mq[1]}{
    position:relative;
    padding:10px;
    font-size: 20px;
    height:inherit;

    img{
      width:90vw;
      height: auto;
      
      .heroimage{
        width:90vw;
        height:40vw;
      }
    }
`;

