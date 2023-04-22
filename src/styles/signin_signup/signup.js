import styled from 'styled-components';

const breakpoints=[640,768,1024,1280]

export const mq=breakpoints.map(
    bp=>`@media screen and (max-width:${bp}px)`
)

export const lq=breakpoints.map(
    bp=>`@media screen and (min-width:${bp}px)`
)

export const FormContainer = styled.div`
  position:relative;
  top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  
  ${mq[1]}{
    justify-content: center;
    align-items: center;
    margin:0;
    padding:0;
  }
`;

  //background-color:rgb(68,72,87);
export const FormWrapper = styled.div`
  flex-direction: column;
  align-items: center;
  background-color:rgb(30,31,38);
  border:1px;
  border-radius: 10px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  padding: 30px;
  width: 25vw;
  

  ${mq[1]}{
    top:10vh;
    width:90vw;
    position:absolute;
    left:5vw;
    border:1px solid rgba(51,125,140,1);
  }
  ${lq[1]}{
    width:40vw;
    height:xxxpx;
    left:30vw;
  }
`;

export const FormTitle = styled.h2`
  font-size:40px;
  font-weight: 900;
  margin-bottom: 20px;
  color: white;

  ${lq[1]}{
    margin-bottom: 20px;
    margin-top:0px;
  }
  ${mq[1]}{
    margin-bottom: 20px;
    margin-top:0px;
  }
`;

export const FormInput = styled.input`
  background-color: #f8f8f8;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  color: #666;
  font-size: 1rem;
  height:35px;
  margin-bottom: 20px;
  ${lq[1]}{
    width:100%;
  }
  ${mq[1]}{
    width:100%;
    position:relative;
    height:40px;

  }
`;

export const FormButton = styled.button`
  background: linear-gradient(360deg, rgba(43,58,135,1) 61%, rgba(51,125,140,1) 100%);
  border: 1px solid white;
  border-radius: 5px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  height:40px;
  font-weight: 700;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #3c3cff;
  }
  ${lq[1]}{
    width:100%;
    position:relative;
  }
  ${mq[1]}{
    width:100%;
    font-size:28px;
    position:relative;
  }
`;
