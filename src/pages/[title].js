import React from "react";
import ShareButton from "../components/ShareLinks.js"
import { ArticleContainer,Article } from "@/styles/articles/articlepage";
import CodeBlock from "@/styles/codecontainers/highlighter";
import remarkGfm from "remark-gfm";
import axios from "axios"
import Carousel from "@/components/Carousel.js";
import SearchComponent from "@/components/Search.js";


export default function NotesByTitle({ notes,note,noteTitle,noteImage}) {
  
  return(
    <> 
    <SearchComponent notes={notes}/>
    <ShareButton noteTitle={noteTitle} noteImage={noteImage}/>
    <ArticleContainer>
    <Article 
      skipHtml={false}
      components={CodeBlock}
      remarkPlugins={[remarkGfm]}>
    {note}
    </Article>
    <Carousel notes={notes}/>
    </ArticleContainer>
    </>

  )
}


export async function getStaticPaths() {
  const BASE_URL = process.env.BASE_URL;
  const {data} = await axios.get(`${BASE_URL}api/notes/`)

  const paths = data.map((article) => ({
    params: {
      title: article.title,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { title } = params;
  const BASE_URL = process.env.BASE_URL;
  try {
    const {data} = await axios.get(`${BASE_URL}api/notes/${title}`);
    const res = await axios.get(`${BASE_URL}api/notes`);
    const notesdata = res.data.filter((note) => note.title !== title);
    // Filter out the note that matches the title of the current page
    return {
      props: {
        note: data.note,
        noteTitle:data.title,
        noteImage:data.imageUrl,
        notes:notesdata
      },
    };
  } catch (error) {
    console.error("Error fetching note:", error);
    return {
      props: {
        note: "",
        noteTitle:"",
        noteImage:"",
        notedata:""
      },
    };
  }
}

  
  
