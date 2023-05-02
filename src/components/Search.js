import Fuse from "fuse.js";
import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Links } from "@/styles/homepage/homepage";

const breakpoints = [640, 768, 1024, 1280];
export const mq = breakpoints.map(
  (bp) => `@media screen and (max-width:${bp}px)`
);

const Div = styled.div`
  position: absolute;
  top:5px;
  width: 25vw;
  min-height: 50px;
  left: 43vw;
  justify-content: center;
  background:rgb(19,20,23);
  z-index: 999;

  li{
    color:white;
    list-style: none;
  }
  ${mq[1]}{
    position:relative;
    width:100vw;
    top:0px;
    left:0px;
}
`;

const Input = styled.input`
  position: relative;
  width: 95%;
  border:1px solid white;
  border-radius: 5px;
  height: 30px;
  top: 10px;
  color: black;
  background: white;
  ${mq[1]}{
    width:60%;
    left:20%;
    font-size:18px;
    
  }
  `;

export default function SearchComponent({ notes }) {
  // search term
  const [searchTerm, setSearchTerm] = useState("");

  // options object for fuse.js
  const options = {
    includeScore: true,
  };

  // extract note titles from notes data
  const noteTitles = notes.map((note) => note.title);

  // initialize fuse with note titles and options
  const fuse = new Fuse(noteTitles, options);

  // search based on search term entered
  const searchResults = fuse.search(searchTerm);

  // function to update search term from input element
  const handleSearch = ({ currentTarget }) => {
    const { value } = currentTarget;
    setSearchTerm(value);
  };

  return (
    <Div >
      <Input
        value={searchTerm}
        onChange={handleSearch}
        type="text"
        placeholder="Search"
      />
      <ul>
        {searchTerm !== "" &&
          searchResults.map((result) => (
            <li key={result.item}>
            <Links href={`/${result.item}`}>
                  <h2>{result.item}</h2>
            </Links>
            </li>
          ))}
      </ul>
    </Div>
  );
}