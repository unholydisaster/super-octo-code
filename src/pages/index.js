import React from "react";
import { GridContainer, Links, LinksImage, NotesContainer } from "@/styles/homepage/homepage";
import Image from "next/legacy/image";
import axios from "axios";
import SearchComponent from "@/components/Search";

export default function HomePage({ notes}) {
  return (
    <>
    <SearchComponent notes={notes}/>
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
    const res = await axios.get(`${BASE_URL}api/notes`);
    const notesdata = res.data;
    return {
      props: {
        notes: notesdata,
      }
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
}


