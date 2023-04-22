import { Nav,Div,Links, Category,CategoryContainer, Logo, AuthButton,StyledBurger,BurgerLine,SearchIcon } from "@/styles/Navbar";
import React, { useState } from 'react';
import logoImage from "../../public/rahacodecom.png"
import Image from "next/image"
import Link from "next/link";
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';


const Navbar =()=>{
    const[open, setOpen]=useState(false)
    const router=useRouter()
    const [cookies,setCookies]=useCookies(["access_token","userID"]);
    
    const handleLogout = () => {
      setCookies("access_token","")
      setCookies("userID","")
      router.push("/");
    };

    const handleBurgerClick = () => {
        setOpen(!open);
      }; 

    const handleClick=()=>{
      router.push("/login")
    }

    
    return(
        <>
        <Nav>
        <Div>
        <StyledBurger onClick={handleBurgerClick}>
          <BurgerLine open={open} />
          <BurgerLine open={open} />
          <BurgerLine open={open} />
        </StyledBurger>
        <Category onClick={handleBurgerClick}>Menu</Category>
        <Logo href={`/`}>
        <Image
          style={{width:'100%',height:'100%'}}
          src={logoImage}
          alt="logo Image"
        /> 
        </Logo>
        <SearchIcon/>
        {!cookies.access_token?(
          <>        
           <AuthButton onClick={handleClick}>Admin</AuthButton>
          </>
        ):(
          <>
           <AuthButton>Logout</AuthButton>          
          </>
        )}
        </Div>
        </Nav>
        <CategoryContainer open={open}>
              <Links href={"/react"}>React</Links>
              <Links href={"/javascript"}>Javascript</Links>
              <Links href={"/kotlin"}>Kotlin</Links>
              <Links href={"/java"}>Java</Links>
              <Links href={"/python"}>Python</Links>
        </CategoryContainer>
        </>
    )
}

export default Navbar