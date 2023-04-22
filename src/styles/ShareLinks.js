import styled from "styled-components"
import { lq, mq } from "./Globals";
import {Whatsapp,Twitter,Reddit,Linkedin,Telegram,FacebookCircle} from "styled-icons/boxicons-logos"

export const Linkdiv=styled.div`
display:grid;
position:relative;
grid-template-columns:repeat(6,1fr);
width:30vw;
height:10vh;
padding:10px;
left:35vw;
border:1px solid rgb(255,255,255);
background-color:rgb(255,255,255);
border-radius:20px;
top:10px;
${mq[1]}{
    width:70vw;
    height:10%;
    left:15vw;
    padding:10px;
    top:10px;
    border:1px solid #01AAF0;
    border-radius:30px;
}
`

export const Twitterlogo=styled(Twitter)`
font-size:20px;
width:30px;
color:rgb(0,172,237);
`
export const Whatsapplogo=styled(Whatsapp)`
font-size:20px;
width:30px;
color:rgb(72,193,152);
`
export const Redditlogo=styled(Reddit)`
font-size:20px;
width:30px;
color:rgb(255,69,0);
`
export const Facebooklogo=styled(FacebookCircle)`
font-size:20px;
color:#3B5998;
width:30px;
`
export const Telegramlogo=styled(Telegram)`
width:30px;
color:rgb(0,136,204);
`
export const LinkedInlogo=styled(Linkedin)`
font-size:20px;
width:30px;
color:rgb(0,119,181);
`