import React, { useState } from "react";
import styled from "styled-components";

function Search(props) {
  const { onSearch } = props;

  const [searchText, setSearchText] = useState("");

  const handleInput = (e) => {
    const text = e.target.value;
    setSearchText(text);
  };

  const handleEnterKeyPressed = (e) => {
    if (e.key === "Enter") {
      onSearch(searchText);
    }
  };
  return (
    <div>
      <Box>
        <SearchInput
          onChange={handleInput}
          onKeyPress={handleEnterKeyPressed}
          type="text"
          value={searchText}
          placeholder="Search your profile"
        />
       
      </Box>
    </div>
  );
}
const SearchInput = styled.input`

  width: 100%;
  padding: 0.5rem 1rem 0.5rem 1rem;
  border: none;
background-color:transparent;
  :focus {
    outline: none;
  }
  ::placeholder{
    text-align:center;
  }
`;
const Box = styled.div`
background-color:none;
margin-bottom:2rem;
border:1px solid #da59b1;
border-radius:15px;
  max-width: 30rem;
  margin:  0 auto;
 
`;

export default Search;
  