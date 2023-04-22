import { Alert, Container, Editor, H1, MarkdownContainer, Reviewarea, SaveButton } from "@/styles/createnote/newnote";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import axios from 'axios';
import {useCookies} from "react-cookie"
import CodeBlock from "@/styles/codecontainers/highlighter";
import remarkGfm from "remark-gfm";

const Newnotes = () => {
  const [cookies,setCookies]=useCookies(["access_token","userID"]);
  const [note, setNote] = useState({ markdown: '', userOwner:cookies.userID, });
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const router = useRouter()

  const handleChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const { markdown } = note;
    const lines = markdown.split('\n');
    const title = lines.find(line => line.startsWith('# ')) || '';
    const imageUrl = lines.find(line => line.startsWith('!['))?.match(/\((.*?)\)/)?.[1] || '';

    setTitle(title.substring(2));
    setImageUrl(imageUrl);

  }, [note, title, imageUrl]);


  const Submit=async(event)=>{
    event.preventDefault();

    try{
        const BASE_URL = process.env.BASE_URL;
        await axios.post(`${BASE_URL}api/notes`, {title,note:note.markdown,imageUrl,userOwner:note.userOwner} )
        router.push("/")
    }catch(err){
        alert("an error occurred")
    }
  }


  return (
    <>
    {!cookies.access_token?(
      <Alert>
       <H1>you have to be logged in to access this page, contact support for more information</H1>
      </Alert>
    ):(
      <>
    <Container>
    <form onSubmit={Submit}>
    <Editor
      id="textarea_id"
      name= "markdown"
      type= "text"
      onChange={handleChange}
    />      
    </form>
    <Reviewarea
      skipHtml={false}
      components={CodeBlock}
      remarkPlugins={[remarkGfm]}      
      >
      {note.markdown}
    </Reviewarea>    
    </Container>
    <SaveButton onClick={Submit}>Save</SaveButton>
    </>
    )}    
    </>
  );
}

export default Newnotes;
/*
return (
  <Container>
  <form onSubmit={Submit}>
  <MarkdownContainer>
    <Editor
      id="textarea_id"
      name= "markdown"
      type= "text"
      onChange={handleChange}
    />
    <Reviewarea>
      {note.markdown}
    </Reviewarea>
  </MarkdownContainer>
  <SaveButton>Save</SaveButton>
  </form>
  </Container>
);
}
*/



