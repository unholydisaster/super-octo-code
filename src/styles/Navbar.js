import styled from "styled-components"
import { lq, mq } from "./Globals";
import {Search} from "@styled-icons/bootstrap/Search"
import Link from 'next/link';

export const Nav = styled.div`
 ${lq[2]}{ 
    background:rgb(19,20,23);
    width:100%;
    height:13vh;
 }
  ${mq[0,1]}{
    background:rgb(19,20,23);
    width:100vw;
    position:relative;
    height:10%;
  }
  
`;

export const Div = styled.div`
 ${lq[2]}{
    width:inherit;
    height:inherit;
    padding:10px;
    display:grid;
    grid-template-column:repeat(4,1fr);
 }
  ${mq[0,1]}{
    width:inherit;
    height:inherit;
    display:grid;
    top-padding:15px;
    padding:15px;
    grid-template-column:repeat(4,1fr);
  }
  
`;

export const SearchIcon=styled(Search)`
position:absolute;
left:68%;
color:white;
font-size:20px;
width:25px;
top:20px;
${mq[1]}{
  left:60%;
}
`

export const Logo = styled(Link)`
  width:15vw;
  height:40px;
  position:absolute;
  left:0;
  ${mq[1]}{
    width:20vw;
    position:absolute;
    left:10px;
  }
`;

export const StyledBurger = styled.div`
${mq[0,1]}{
  width: 50px;
  height: 30px;
  position:absolute;
  left:30%;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;  
  z-index: 40;
}


`;

export const BurgerLine = styled.div`
${mq[1]}{
width: 30px;
height: 5px;
border-radius: 10px;
background-color: ${({open}) => open ? 'white' : 'white'};
font-size: 20px;
transform-origin: 1px;
transition: all 0.3s linear;
z-index: 20;

&:nth-child(1) {
  transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
}

&:nth-child(2) {
  transform: ${({ open }) =>
    open ? "translateX(-100%)" : "translateX(0)"};
  opacity: ${({ open }) => (open ? 0 : 1)};
}

&:nth-child(3) {
  transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
}
}
`;

export const AuthButton= styled.button`
    background-color:transparent;
    left:90%;  
    width:10%;
    color:white;
    position:absolute;
    height:45px;
    text-align:center;
    border:none;
    font-size:16px;
    font-weight:700;
  ${mq[1]}{  
    width:25%;
    height:30px;
    left:75%;
    border:2px solid white;
    border-radius:5px;
    text-align:center;
    font-size:20px;
    font-weight:600;
    position:relative;
    top:0px;
  }
`;

export const Category=styled.button`
${lq[2]}{
  width:10vw;
  height:45px;
  position:absolute;
  border:none;
  color:white;
  left:75vw;
  background-color:inherit;
}
${mq[0,1]}{
  display:none;
}
`
export const CategoryContainer=styled.div`
display:${({open})=>(open? "grid" : "none")};
position:absolute;
background:rgb(19,20,23);
width:15vw;
grid-template-columns:1fr;
border-radius:10px;
left:75vw;
height:200px;
color:white;
font-size:16px;
aling-items:center;
padding:10px;
top:15vh;
z-index:999;
${mq[1]}{
  width:100vw;
  top:0px;
  left:0px;
  position:relative;
  color:white;
  border:none;
  border-radius:0px;
  font-size:20px;
  align-items:center;
  z-index:999;
`
export const Links=styled(Link)`
display:grid;
position:relative;
width:90%;
left:10%;
${mq[1]}{
display:grid;
position:relative;
width:40%;
left:40%;
}
`