import React from "react";

import styled from "styled-components";
import avatar from "../assets/avatar.png";

const Records = ({ records, loading }) => {
  return (
    <Background>
      {records &&
        records.map((record) => (
          <Centered key={record.Email}>
            <Box>
              <Avatar>
                <img src={avatar} alt="avatar-icon" />
              </Avatar>
              <h2>
                {record.FirstName} {record.LastName}
              </h2>

              <p> {record.Gender}</p>
              <div>
                <h5>CONTACT DETAILS</h5>
                <InnerBoxContact>
                  <p className="btn-color"> {record.Email}</p>
                  <p className="btn-outline">{record.PhoneNumber}</p>
                </InnerBoxContact>
              </div>
              <div>
                <h5>PAYMENT DETAILS</h5>
                <InnerBoxContact>
                  <p className="btn-color"> {record.CreditCardType}</p>
                  <p className="btn-outline">{record.PaymentMethod}</p>
                </InnerBoxContact>
              </div>
              <h5>LOGIN DETAILS</h5>
              <InnerBoxLoginDetails>
                <div>
                  
                  <p>{record.UserName}</p>
                  <p> {record.LastLogin}</p>
                </div>
                <div>
                  <p>{record.DomainName}</p>
                  <p> {record.MacAddress}</p>
                </div>

                {/* <p>{record.URL}</p> */}
              </InnerBoxLoginDetails>
            </Box>
          </Centered>
        ))}
    </Background>
  );
};

export default Records;

const Background = styled.div`
  /* background-color: blue; */
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto;
  column-gap: 10px;
  row-gap: 15px;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }
`;
const Centered = styled.div`
  text-align: center;
`;

const Box = styled.div`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 15px;
  border-radius: 25px;
  background-color: #31394d;
  /* padding:20px; */
  padding-top: 10px;
  padding-bottom: 10px;
  color: #b3b8cd;
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
  :hover {
    box-shadow: 0px 10px 20px -10px rgba(238, 237, 237, 0.809);
    transform: scale(1.02);
    transition: 0.7s ease-out;
  }
  p {
    font-size: 14px;
    color: #7c8097;
    font-size: 15px;
    font-weight: 100;
  }
  h2 {
    color: #ffffff;
    font-weight: 300;
    box-shadow: 0px 10px 20px -10px rgba(238, 237, 237, 0.809);
  }
`;

const InnerBoxContact = styled.div`
  display: flex;
  justify-content: space-around;
  flex-flow: wrap;
  align-items: center;
  margin: 20px;
 
  .btn-color {
    flex: 1;
    border: none;
    background: linear-gradient(to top right, #8162CE, #F54BA5);
    height: 40px;
    color: #ffffff;
    width: 20%;
    font-size: 12px;
    border-radius: 30px;
    box-shadow: 0 13px 26px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.16);
    padding: 9px;
    margin-right:10px;
  }
.btn-color:hover{
    background: transparent;
    border: 1px solid  #da59b1 ;
    height: 40px;
    color: #da59b1;
    
    width: 30%;
    font-size: 13px;
    border-radius: 30px;
    box-shadow: 0 13px 26px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.16);
}
  .btn-outline {
    background-color: transparent;
    border: none;
    height: 40px;
    color: #da59b1;
    padding: 9px;
    width: 30%;
    font-size: 13px;
    border-radius: 30px;
    box-shadow: 0 13px 26px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.16);
  }
  .btn-outline:hover {
    background-color: transparent;
    border: 1px solid  #da59b1 ;
    width: 35%;
    border-color: linear-gradient(to top right, #8162ce, #f54ba5);
    border-radius: 30px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.16);
  }
`;

const InnerBoxLoginDetails = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: space-evenly;
  /* background-color: #1f1a36; */
  text-align: left;
  padding: 12px;
  margin-top: 30px;
  border-radius: 0px 0px 15px 15px;
  
  div p {
    background: linear-gradient(to bottom right, #5E5AEC, #3F9EFC);
    border: 1px solid #2d2747;
    color:#ffffff;
    border-radius: 30px;
text-align:center;
    font-size: 12px;
    margin: 0 7px 7px 0;
    padding: 7px;
  }
`;
const Avatar = styled.div`
  img {
    width: 100px;
  }
`;
