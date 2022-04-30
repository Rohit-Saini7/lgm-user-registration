import React from "react";
import styled from "styled-components";

function Checkbox({ skills, setSkills, skills_list }) {
  const handleOnChange = (position) => {
    const updatedCheckedState = skills.map((item, index) =>
      index === position
        ? index === 0
          ? item === "HTML"
            ? false
            : "HTML"
          : index === 1
          ? item === "CSS"
            ? false
            : "CSS"
          : item === "JS"
          ? false
          : "JS"
        : item
    );
    setSkills(updatedCheckedState);
  };
  return (
    <Container>
      <FormLabel>Skills</FormLabel>
      <Container>
        {skills_list.map(({ name }, index) => {
          return (
            <div key={index}>
              <FormInput
                type="checkbox"
                id={`checkbox-${index}`}
                name={name}
                value={name}
                checked={skills[index]}
                onChange={() => handleOnChange(index)}
              />
              <FormLabel htmlFor={`checkbox-${index}`}>{name}</FormLabel>
            </div>
          );
        })}
      </Container>
    </Container>
  );
}

export default Checkbox;

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
  border-radius: 5px;
  margin-right: 5px;
`;
