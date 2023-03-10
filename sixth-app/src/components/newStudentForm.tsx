import { useState } from "react";
import axios from "axios";
import { error } from "console";

export const NewstudentForm = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [studentAge, setStudentAge] = useState<null | number>(null);

  //axxxios fetchinimas?
//backendas node exam main.js
  const handleStudentSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5001/create-student", { name, lastName, studentAge })
      .then((result) => console.log(result))
      .catch();
  };

  return (
    <form onSubmit={handleStudentSubmit}>
      <input onChange={(e) => setName(e.target.value)} value={name} />
      <input onChange={(e) => setLastName(e.target.value)} value={lastName} />
      <input
        onChange={(e) => setStudentAge(+e.target.value)}
        value={studentAge ?? ""}
        type={"number"}
      />
      <button>Add</button>
    </form>
  );
};
