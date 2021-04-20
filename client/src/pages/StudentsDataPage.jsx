import React, { useState, useEffect } from "react";
import "./StudentsDataPage.css";

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

const StudentsDataPage = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await dataFetch({ uri: "http://localhost:4003/students" });
      setStudents(data.students);
    };
    fetchData();
  }, [students]);

  const deleteStudent = async (id) => {
    await dataFetch({
      uri: `http://localhost:4003/students/${id}`,
      method: "DELETE",
    });
  };

  const editStudent = (id) => {
    const newStudents = students.filter((student) => {
      return student._id !== id;
    });
    setStudents(newStudents);
  };

  return (
    <div className="studentdb">
      <h1>Students Database</h1>

      {/* <ul>
        {students.map((student) => (
          <li key={student._id}>
            <section className="profileInfo">
              {`${student.firstName} ${student.lastName} ${student.age} ${student.gender} ${student.programme} ${student.major} ${student.email}`}
            </section>
            <section className="editAndDelete">
              <button onClick={() => editStudent(student._id)}>Edit</button>
              <button onClick={() => deleteStudent(student._id)}>
                {" "}
                Delete{" "}
              </button>
            </section>
          </li>
        ))}
      </ul> */}

      <table>
        <tbody>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Programme</th>
          <th>Major</th>
          <th>Email Address</th>
          {students.map((student) => (
            <tr key={student._id}>
              <td className="medium-width">{student.firstName}</td>
              <td className="medium-width">{student.lastName}</td>
              <td className="min-width">{student.age}</td>
              <td className="min-width">{student.gender}</td>
              <td className="medium-width">{student.programme}</td>
              <td className="medium-width">{student.major}</td>
              <td className="medium-width">{student.email}</td>
              <td className="table-btn">
                <button onClick={() => editStudent(student._id)}>Edit</button>
              </td>
              <td className="table-btn">
                <button onClick={() => deleteStudent(student._id)}>
                  {" "}
                  Delete{" "}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsDataPage;
