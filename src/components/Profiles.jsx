import React, { useState, useEffect, Fragment } from "react";
import { Pagination } from "./Pagination";
import Records from "./Records";
import styled from "styled-components";

import Search from "./Search";

const Profiles = () => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurentPage] = useState(1);
  const [profilesPerPage] = useState(20);

  useEffect(() => {
    const fetchRecords = async () => {
      setLoading(true);
      const response = await fetch(
        "https://api.enye.tech/v1/challenge/records"
      );
      const data = await response.json();
      setRecords(data.records.profiles);
      setLoading(false);
    };
    fetchRecords();
    // eslint-disable-next-line
  }, []);

  const indexOfLastProfile = currentPage * profilesPerPage;
  const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
  const currentRecords = records.slice(indexOfFirstProfile, indexOfLastProfile);

  const paginate = (pageNumber) => setCurentPage(pageNumber);

  return (
    <Fragment>
      <Box>
        <h2>PROFILE-DATA CARD</h2>
        <Search />
        <Records loading={loading} records={currentRecords} />
        <Pagination
          profilesPerPage={profilesPerPage}
          totalProfiles={records.length}
          paginate={paginate}
        />
      </Box>
    </Fragment>
  );
};

export default Profiles;

const Box = styled.div`
  h2 {
    text-align: center;
    color: #b3b8cd;
  }
`;
