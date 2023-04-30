import React from "react";
import { GridContainer, Links, LinksImage, NotesContainer } from "@/styles/homepage/homepage";
import Image from "next/legacy/image";
import Link from "next/link";
import axios from 'axios';


export default function HomePage({ notes }) {
  return (
    <>
      <GridContainer>
        {notes.map((note) => {
          return (
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
          );
        })}
      </GridContainer>
    </>
  );
}

export async function getStaticProps() {
  const BASE_URL = process.env.BASE_URL;
  try {
    const res = await fetch(`${BASE_URL}api/notes`, {
      timeout: 1000000 // 10 seconds timeout
    });
    const notesdata = await res.json();
    return {
      props: {
        notes: notesdata,
      },
      revalidate: 60, // Number of seconds after which to re-generate the page
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
}

