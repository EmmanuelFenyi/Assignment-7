import React, { useState } from "react";
import InputContainer from "../components/InputContainer";
import "./RegistrationPage.css";

const dataFetch = async ({ uri, method = "GET", body = null }) => {
  const response = await fetch(uri, {
    method,
    headers: {
      "content-Type": "application/json",
    },
    body: body !== null ? JSON.stringify(body) : null,
  });
  const data = await response.json();
  return data;
};

const userInitialValue = {
  firstName: "",
  lastName: "",
  age: "",
  gender: "",
  programme: "",
  major: "",
  email: "",
};

const RegisterationPage = () => {
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState(userInitialValue);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dataFetch({
      uri: "http://localhost:4003/students",
      method: "POST",
      body: student,
    });
    setStudents([...students, student]);
    setStudent(userInitialValue);
  };

  // console.log(student);

  return (
    <div>
      <h1>Student Registration</h1>
      <form onSubmit={handleSubmit} className="reg-form">
        <InputContainer>
          <label htmlFor="">First Name :</label>
          <input
            type="text"
            value={student.firstName}
            name="firstName"
            onChange={handleChange}
            placeholder="enter student's first name here"
            className="medium-width2"
          />
        </InputContainer>

        {/* <br /> */}

        <InputContainer>
          <label htmlFor="">Last Name :</label>
          <input
            type="text"
            value={student.lastName}
            name="lastName"
            onChange={handleChange}
            placeholder="enter student's last name here"
            className="medium-width2"
          />
        </InputContainer>
        {/* <br /> */}

        <InputContainer>
          <label htmlFor="">Age :</label>
          <input
            type="number"
            value={student.age}
            name="age"
            onChange={handleChange}
            placeholder="enter student's age here"
            className="medium-width2"
          />
        </InputContainer>
        {/* <br /> */}

        <InputContainer>
          <label htmlFor="gender">Gender :</label>
          <select
            name="gender"
            id="gender"
            onChange={handleChange}
            className="medium-width2"
          >
            <option value="" selected={student.gender === ""}>
              ---- Select Gender ----
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </InputContainer>
        {/* <br /> */}

        <InputContainer>
          <label htmlFor="">Programme of Study :</label>
          <input
            type="text"
            value={student.programme}
            name="programme"
            onChange={handleChange}
            placeholder="enter student's programme of study here"
            className="medium-width2"
          />
        </InputContainer>
        {/* <br /> */}

        <InputContainer>
          <label htmlFor="">Major :</label>
          <input
            type="text"
            value={student.major}
            name="major"
            onChange={handleChange}
            placeholder="enter student's major here"
            className="medium-width2"
          />
        </InputContainer>
        {/* <br /> */}

        <InputContainer>
          <label htmlFor="">Email Address :</label>
          <input
            type="email"
            value={student.email}
            name="email"
            onChange={handleChange}
            placeholder="enter student's email address here"
            className="medium-width2"
          />
        </InputContainer>
        {/* <br /> */}
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default RegisterationPage;
