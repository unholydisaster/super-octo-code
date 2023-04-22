import styled from "styled-components";

import { mq } from "../signin_signup/signup";

export  const AdminNotification=styled.div`
position:relative;
left:15vw;
top:10vh;
width:80vw;
padding:10px;
height:xxx;
border:1px solid white;
border-radius:5px;
h1{
    font-size:20px;
    color:red;
    font-weight:600;

}

${mq[1]}{
position:relative;
left:5vw;
top:5vh;
width:90vw;
height:xxx;
border:1px solid white;
border-radius:5px;
h1{
    font-size:20px;
    color:red;
    font-weight:600;

}
}
`