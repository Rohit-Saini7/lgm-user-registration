import React from "react";
import styled from "styled-components";

function User({ users }) {
  return (
    <Box>
      {users.map((item, index) => (
        <Container key={index}>
          <UserImage src={item.avatar} alt={item.first_name} />
          <UserDetail>
            <div className="first-name">{`${item.first_name}                
                                   ${item.last_name}`}</div>
            <div className="last-name">{item.email}</div>
          </UserDetail>
        </Container>
      ))}
    </Box>
  );
}

export default User;

const Box = styled.div`
  display: flex;
  width: 80%;
  flex-wrap: wrap;
  align-items: center;
`;

const Container = styled.div`
  position: relative;
  padding: 50px;
  margin: 20px 7%;
  width: 10vw;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border-radius: 10px;
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.2);
  display: grid;
  justify-content: center;

  &::after {
    content: "";
    position: absolute;
    top: 7px;
    right: 7px;
    bottom: 7px;
    left: 7px;
    border-radius: 5px;
    pointer-events: none;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.1) 2%
    );
  }
`;

const UserImage = styled.img`
  border-radius: 50%;
  margin: auto;
`;

const UserDetail = styled.div`
  font-size: 1.2rem;
  color: #fff;
  font-weight: 700;
  margin-top: 2vh;
`;
