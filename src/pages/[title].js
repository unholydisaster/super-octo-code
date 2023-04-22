import React from "react";
import fetch from "isomorphic-unfetch";
import ShareButton from "../components/ShareLinks.js"
import { ArticleContainer,Article } from "@/styles/articles/articlepage";
import CodeBlock from "@/styles/codecontainers/highlighter";
import remarkGfm from "remark-gfm";
import Carousel from "../components/Carousel.js";
import Head from "next/head"


export default function NotesByTitle({ note,notedata,noteTitle,noteImage}) {
  const pageUrl = `https://rahacode.com/${noteTitle}`;
  const encodedUrl = encodeURIComponent(pageUrl);
  return(
    <>
    <Head>
        <meta property="og:title" content={`${noteTitle} | My Website`} />
        <meta property="og:description" content={noteTitle} />
        <meta property="og:image" content={noteImage} />
        <meta property="og:url" content={encodedUrl} />
        <meta property="og:type" content="website" />
    </Head>
    
    <ShareButton noteTitle={noteTitle} noteImage={noteImage}/>
    <ArticleContainer>
    <Article 
      skipHtml={false}
      components={CodeBlock}
      remarkPlugins={[remarkGfm]}>
    {note}
    </Article>
    </ArticleContainer>
    <Carousel notedata={notedata}/>
    </>

  )
}


export async function getStaticPaths() {
  const BASE_URL = process.env.BASE_URL;
  const response = await fetch(`${BASE_URL}api/notes`)
  const data = await response.json();

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

  try {
    const BASE_URL = process.env.BASE_URL;
    const response = await fetch(`${BASE_URL}api/notes/${title}`);
    const data = await response.json();

    const res = await fetch(`${BASE_URL}api/notes`)
    const notesdata = await res.json()
    const items = [...notesdata];

    // Shuffle the order of the items array using the Fisher-Yates shuffle algorithm
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }

    return {
      props: {
        note: data.note,
        noteTitle:data.title,
        noteImage:data.imageUrl,
        notedata:items
      },
    };
  } catch (error) {
    console.error("Error fetching note:", error);
    return {
      props: {
        note: "",
      },
    };
  }
}
  
