import styled from 'styled-components';
import { lq, mq } from '../signin_signup/signup';
import Link from "next/link"

export const HomeContainer = styled.div`
  position:absolute;
  top:90px;
  display:flex;
  height:150px;

`
export const HomeWrapper= styled.div`
position:absolute;
border:1px solid black;
left:10px;
width:100vw;
flex-direction: column;
height:inherit;
${mq[1]}{
  position:absolute;
  border:1px solid black;
  left:10px;
  width:100vw;
  flex-direction: column;
  height:inherit;
}
`

export const Paragraph=styled.p`
font-size:16px;
`

export const GridContainer=styled.div`
display:grid;
grid-template-columns:repeat(3,1fr);
position:relative;
width:95%;
top:5px;
height:xxx;
${mq[1]}{
grid-template-columns:repeat(1, 1fr);
position:relative;
width:95vw;
top:5%;
left:-2.5vw;
height:xxx;
}
`
export const NotesContainer=styled.div`
${mq[1]}{
position:relative;
width:100%;
top:5px;
display:grid;
left:0vw;
grid-template-columns: 1fr;
min-height:xxx;
background:rgb(9,132,191);
h1{
  font-size:28px;
  top:0px;
  position:relative;
  color:white;
  
},
p{
  color:white;
  font-size:16px;
  width:inherit;

}
}
${lq[1]}{
position:relative;
display:grid;
left:0px;
min-height:xxx;
grid-gap:5px;
background: linear-gradient(360deg, rgba(43,58,135,1) 61%, rgba(51,125,140,1) 100%);
border:1px solid rgba(51,125,140,1);
border-radius:5px;
h1{
  font-size:25px;
  top:0px;
  position:relative;
  color:white;
  
},
p{
  color:white;
  font-size:16px;
  width:inherit;

}
}
`
export const Links=styled(Link)`
text-decoration: none;

`
export const LinksImage=styled(Link)`
text-decoration: none;
width:100%;
`