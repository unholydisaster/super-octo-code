import styled from "styled-components";
import ReactMarkdown from "react-markdown";

export const H1 = styled.h1`
  position: absolute;
  left: 10vh%;
  color:white;
`;

export const Alert = styled.div`
  position:relative;
  display: grid;
  top:20vh;
  grid-template-columns:1fr;
  height:100%;
  left:15vw;
  width:85vw;
`;

export const Container = styled.div`
  position:relative;
  display: grid;
  top:20vh;
  grid-template-columns: 40vw 40vw;
  grid-column-gap: 20px;
  height:100%;
  left:15vw;
`;

export const Editor = styled.textarea`
  font-size: 1.2rem;
  background: #1e2126;
  color: white;
  padding:10px;
  border: 1px solid rgba(51,125,140,1);
  grid-column: 1 / 2;
  resize:none;
  height:100vh;
  width: 100%;

`;

export const Reviewarea = styled(ReactMarkdown)`
  font-size: 1.2rem;
  background: white;
  border: 1px solid rgba(51,125,140,1);
  grid-column: 2 / 3;
  width: 100%;
  height:100vh;
  overflow-y: auto; 
  img {
    max-width: 100%;
    height: auto;
  }
`;

export const SaveButton=styled.button`
  position:fixed;
  width: 80px;
  background: linear-gradient(360deg, rgba(43,58,135,1) 61%, rgba(51,125,140,1) 100%); 
  left:15vw;
  border:none;
  border-radius:5px;
  font-weight:600;
  height: 35px;
  top:88vh;
  color:white;
  margin-top: 20px;
`;

