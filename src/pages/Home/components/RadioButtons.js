import React from "react";
import styled from "styled-components";

function RadioButtons({ gender, setGender }) {
  const handleOnChange = (g) => {
    setGender(g);
  };
  return (
    <Container>
      <FormLabel>Gender</FormLabel>
      <Container>
        <div>
          <FormInput
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={() => handleOnChange("male")}
          />
          <FormLabel htmlFor="male">Male</FormLabel>
        </div>
        <div>
          <FormInput
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={() => handleOnChange("female")}
          />
          <FormLabel htmlFor="female">Female</FormLabel>
        </div>
      </Container>
    </Container>
  );
}

export default RadioButtons;

const Container = styled.div`
  display: flex;
`;

const FormLabel = styled.label`
  font-size: 1.5rem;
  font-weight: 500;
  padding-right: 20px;
`;

const FormInput = styled.input`
  width: 16px;
  height: 16px;
  font-size: 1.5rem;
  outline: none;
  background-color: transparent;
  border: 1px solid #fff;
  margin-right: 5px;
  border-radius: 5px;
`;
