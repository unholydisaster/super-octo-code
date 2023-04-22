import React, { useState, useRef } from "react";
import styled from "styled-components";
import Link from "next/link"
import Image from "next/legacy/image"

const breakpoints=[640,768,1024,1280]
export const mq=breakpoints.map(
    bp=>`@media screen and (max-width:${bp}px)`
)

const H1=styled.h1`
font-size:24px;
position:relative;
top:20px;
${mq[1]}{
    font-size:20px;
    top:10px;
    margin-bottom:20px;
}
`
const Container = styled.div`
display: flex;
width:100vw;
margin-top:30px;
height:300px;
position:relative;
overflow-x: scroll;
overflow-y:hidden;
scroll-behavior: smooth;
${mq[1]}{
  display: flex;
  width:100vw;
  margin-top:0px;
  height:300px;
  position:relative;
  overflow-x: scroll;
  overflow-y:hidden;
  scroll-behavior: smooth;
}

  `;

const Item = styled.div`
height:xxx;
min-width:400px;
background: linear-gradient(360deg, rgba(43,58,135,1) 61%, rgba(51,125,140,1) 100%);
background-color: #ccc;
margin-right: 20px;
color:white;
font-size:10px;
margin-bottom:20px;
${mq[1]}{
  height:xxx;
  min-width:250px;
  background: linear-gradient(360deg, rgba(43,58,135,1) 61%, rgba(51,125,140,1) 100%);
  background-color: #ccc;
  margin-right: 20px;
  color:white;
  font-size:14px;
  margin-bottom:20px;
}
`;

const Carousel = ({ notedata}) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const containerRef = useRef(null);
    const intervalRef = useRef(null);
  
    const handleAutoScroll = () => {
      intervalRef.current = setInterval(() => {
        const container = containerRef.current;
        if (container.scrollLeft + container.offsetWidth !== container.scrollWidth) {
          setScrollPosition(prevScrollPosition => prevScrollPosition + 320);
        } else {
          setScrollPosition(0);
        }
      }, 3000);
    };
  
    const handleStopAutoScroll = () => {
      clearInterval(intervalRef.current);
    };

  return (
    <>
    <H1>Read more...</H1>
    <Container
    ref={containerRef}
    style={{ scrollLeft: scrollPosition }}
    onMouseEnter={handleStopAutoScroll}
    onMouseLeave={handleAutoScroll}
    >
    
      {notedata.map((item) => (
        <Item  key={item._id}>
         <Image
          layout="responsive" 
          width={1000} 
          height={500}
          style={{width:'100%',height:'100%'}} 
          src={item.imageUrl}
          alt={item.title}
        />         
        <Link href={`/${item.title}`}>
          <h1>{item.title}</h1>
        </Link>
        </Item>
      ))}
    </Container>
    </>
  );
};

export default Carousel;
