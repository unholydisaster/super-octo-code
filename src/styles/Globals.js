import { createGlobalStyle } from "styled-components";

const breakpoints=[640,768,1024,1280]
export const mq=breakpoints.map(
    bp=>`@media screen and (max-width:${bp}px)`
)

export const lq=breakpoints.map(
  bp=>`@media screen and (min-width:${bp}px)`
)

export const GlobalStyle = createGlobalStyle`
a {
  color: inherit;
  text-decoration: none;
}
/* Works on Firefox */
* {
  box-sizing: border-box;
  scrollbar-width: thin;
  scrollbar-color: inherit;
}
/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 8px;
}
*::-webkit-scrollbar-track {
  background:white;
}
*::-webkit-scrollbar-thumb {
  background-color:inherit;
  border-radius: 30px;
  border: 2px solid inherit;
}
body{
  background-color:#E5E5E5;
  font-family:Verdana;
  margin:0;
  padding:0;
  display:grid;
  overflow-x:hidden;
${mq[0,1]}{
  background-color:white;
  min-height:100vh;
  overflow-x:hidden;
  overflow-y:auto;
}
}
`;
 
