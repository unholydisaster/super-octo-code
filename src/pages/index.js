import React from "react"
import fetch from "isomorphic-unfetch"
import { GridContainer, Links, LinksImage, NotesContainer } from "@/styles/homepage/homepage"
import Image from "next/legacy/image"
import Link from "next/link"


const HomePage=({notes})=>{
  
  return(
    <>
    <GridContainer>
      {notes.map((note)=>{
        return(
        <ul key={note._id}>
        <NotesContainer>
        <LinksImage href={`/${note.title}`}>
         <Image
          layout="responsive" 
          width={1000} 
          height={500} 
          src={note.imageUrl}
          alt={note.title}
        />         
         </LinksImage> 
        <Links href={`/${note.title}`}>
          <h1>{note.title}</h1>
        </Links>
        </NotesContainer> 
        </ul>
        )
      })}
    </GridContainer>
    </>
  )
}

export async function getServerSideProps(context) {
  const BASE_URL = process.env.BASE_URL;
  const res = await fetch(`${BASE_URL}api/notes`)
  const notesdata = await res.json()

  if(!notesdata){

      return {
          notFound:true
      }
  }
  return{
      props:{
          notes:notesdata
      }
  }
}

export default HomePage
