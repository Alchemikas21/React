import { useState } from "react";
import axios from "axios";
import { error } from "console";

export const NewstudentForm = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [studentAge, setStudentAge] = useState<null | number>(null);
  const [identity, setIdentity] = useState<string[]>([]);

  const handleStudentSubmit: React.FormEventHandler<HTMLFormElement> = (
    event
  ) => {
    event.preventDefault();

    axios
      .post("http://localhost:5001/create-student", {
        name,
        lastName,
        studentAge,
      })
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
