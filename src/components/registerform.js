import React from 'react';
import {
  FormContainer,
  FormWrapper,
  FormTitle,
  FormInput,
  FormButton,
} from '../styles/signin_signup/signup';

import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const Register = () => {
    const router = useRouter()
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  
    const handleNameChange = (event) => {
      setUsername(event.target.value);
    };
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleConfirmChange = (event) => {
      setConfirmPassword(event.target.value);
    };
  
  async function handleSubmit(event){
      event.preventDefault();
      // Make sure the password and confirm password match
      try{
        const BASE_URL = process.env.BASE_URL;
        await axios.post(`${BASE_URL}api/auth`,{username,email,password})
        router.push('/login'); // Navigate to login page
      }catch(err){
       alert("an error occured, check the details once again")
      }
    };
  
  
  return (
    <FormContainer>
      <FormWrapper>
      <form onSubmit={handleSubmit}>
        <FormTitle>Sign Up</FormTitle>
        <FormInput type="text" placeholder="Username" value={username} onChange={handleNameChange} />
        <FormInput type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
        <FormInput type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
        <FormButton>Sign Up</FormButton>
       </form> 
      </FormWrapper>
    </FormContainer>
  );
};

export default Register;