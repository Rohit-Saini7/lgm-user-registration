/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import User from "./components/User";

function Home() {
  const [users, setUsers] = useState([]);

  return (
    <React.Fragment>
      <Navbar />
      <Section>
        <User users={users} />
      </Section>
    </React.Fragment>
  );
}

export default Home;

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 10s ease infinite;
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
