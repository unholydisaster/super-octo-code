import React from 'react';

import {
  FormContainer,
  FormWrapper,
  FormTitle,
  FormInput,
  FormButton,
} from '../styles/signin_signup/signup';

import { useState } from "react";
import { useRouter } from 'next/router';
import {useCookies} from "react-cookie"
import axios from "axios";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const [_,setCookies]=useCookies(["access_token","userID"]);
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleLogin = async (event) => {
      event.preventDefault();
  
      try{
        const BASE_URL = process.env.BASE_URL;
        const response = await axios.put(`${BASE_URL}api/auth`,
        {
          email, 
          password
        })
        alert("Successfully logedin")
        console.log(response)
        setCookies("access_token", response.data.token)
        setCookies("userID", response.data.userID)
        router.push('/newnote')
      }catch(err){
        console.error(err)
      }
    };
  
  return (
    <FormContainer>
      <FormWrapper>
      <form onSubmit={handleLogin}>      
        <FormTitle>Log In</FormTitle>
        <FormInput type="email" placeholder="Email" value={email} onChange={handleEmailChange}/>
        <FormInput type="password" placeholder="Password" value={password} onChange={handlePasswordChange}/>
        <FormButton>Log In</FormButton>
       </form> 
      </FormWrapper>
    </FormContainer>
  );
};

export default Login;