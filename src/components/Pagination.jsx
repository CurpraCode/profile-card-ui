import React from "react";
import styled from "styled-components";


export const Pagination = ({ profilesPerPage, totalProfiles, paginate }) => {
  const pageNumbers = [];
  for (
    let index = 1;
    index <= Math.ceil(totalProfiles / profilesPerPage);
    index++
  ) {
    pageNumbers.push(index);
  }
  return (
    <PageMove>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a onClick={() => paginate(number)} href="pages">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </PageMove>
  );
};

const PageMove = styled.div`
  max-width: 300px;
  margin: 0 auto;
  ul {
    margin: 0px;
    display: flex;
    justify-content: center;
    /* align-items: center; */
  }
  li {
    
    border-radius: 10px;
    box-shadow: 0px 10px 20px -10px rgba(238, 237, 237, 0.809);
    list-style-type: none;
    margin-right: 30px;
    padding: 15px;
  }
  a {
    text-decoration: none;
    color: #b3b8cd;
  }
`;
