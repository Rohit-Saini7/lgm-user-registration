import React, { useState } from "react";
import styled from "styled-components";
import Checkbox from "./Checkbox";
import RadioButtons from "./RadioButtons";

function RegForm({ users, setUsers }) {
  const skills_list = [
    {
      name: "HTML",
    },
    {
      name: "CSS",
    },
    {
      name: "JS",
    },
  ];
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [website, setWebsite] = useState(null);
  const [imageLink, setImageLink] = useState(null);
  const [gender, setGender] = useState(null);
  const [skills, setSkills] = useState(
    new Array(skills_list.length).fill(false)
  );

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "name") {
      setName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "website") {
      setWebsite(value);
    }
    if (id === "imageLink") {
      setImageLink(value);
    }
  };

  const handleSubmit = () => {
    const nweUserList = [
      ...users,
      {
        name: name,
        email: email,
        website: website,
        imageLink: imageLink,
        gender: gender,
        skills: skills,
      },
    ];
    setUsers(nweUserList);
  };

  const handleClear = () => {
    setName(null);
    setEmail(null);
    setWebsite(null);
    setImageLink(null);
    setGender(null);
    setSkills(new Array(skills_list.length).fill(false));
    console.log(name, email, website);
  };

  return (
    <Container className="form">
      <div className="form-body">
        <FormFileds className="username">
          <FormLabel className="form__label" htmlFor="name">
            Name
          </FormLabel>
          <FormInput
            className="form__input"
            type="text"
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => handleInputChange(e)}
          />
        </FormFileds>
        <FormFileds className="email">
          <FormLabel className="form__label" htmlFor="email">
            Email
          </FormLabel>
          <FormInput
            type="email"
            id="email"
            className="form__input"
            placeholder="Email"
            value={email}
            onChange={(e) => handleInputChange(e)}
          />
        </FormFileds>
        <FormFileds className="website">
          <FormLabel className="form__label" htmlFor="website">
            Website
          </FormLabel>
          <FormInput
            type="text"
            name=""
            id="website"
            className="form__input"
            placeholder="https://example.com"
            pattern="https://.*"
            onChange={(e) => handleInputChange(e)}
          />
        </FormFileds>
        <FormFileds className="image-link">
          <FormLabel className="form__label" htmlFor="image-link">
            Image Link
          </FormLabel>
          <FormInput
            type="text"
            name=""
            id="imageLink"
            className="form__input"
            placeholder="Image Link"
            onChange={(e) => handleInputChange(e)}
          />
        </FormFileds>
        <RadioButtons gender={gender} setGender={setGender} />
        <Checkbox
          skills={skills}
          setSkills={setSkills}
          skills_list={skills_list}
        />
      </div>
      <Footer className="footer">
        <FooterButton type="submit" className="btn" onClick={handleSubmit}>
          Register
        </FooterButton>
        <FooterButton type="reset" className="btn" onClick={handleClear}>
          Clear
        </FooterButton>
      </Footer>
    </Container>
  );
}

export default RegForm;

const Container = styled.div`
  position: relative;
  padding: 50px;
  left: 55px;
  width: 20vw;
  min-height: 40vh;
  /* display: flex; */
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border-radius: 10px;
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.2);

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

const FormFileds = styled.div`
  margin-bottom: 20px;
`;
const FormLabel = styled.label`
  font-size: 1.5rem;
  font-weight: 500;
  padding-right: 20px;
`;

const FormInput = styled.input`
  width: 60%;
  height: 30px;
  font-size: 1.5rem;
  outline: none;
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 5px;
`;

const Footer = styled.div`
  text-align: center;
  margin: 40px;
`;

const FooterButton = styled.button`
  -webkit-box-align: center;
  -webkit-box-pack: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  background-color: transparent;
  border: solid 1px #fff;
  margin: 0;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  -webkit-appearance: none;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.5rem;
  letter-spacing: 0.02857em;
  min-width: 64px;
  padding: 6px 8px;
  border-radius: 10px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  margin-top: 16px;
  margin-bottom: 16px;
  color: white;
  margin-right: 20px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    color: gray;
  }
`;
