import { useState } from "react";

export const Form = () => {
  const [note, setNote] = useState("");
  let [savedNotes, setSavedNotes] = useState<string[]>([]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setNote(event.target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    setSavedNotes((prevSavedNotes) => [...prevSavedNotes, note]);

    setNote("");
  };

  //komponentas reacto
  //rassoma is didziosios kai stilius jei du zodziai, o ne bruksnys pvz background-color
  return (
    <>
      <form onSubmit={handleSubmit} style={{ backgroundColor: "green" }}>
        <input onChange={handleChange} value={note} />
        <button>Submit</button>
      </form>

      {savedNotes.map((curNote,i) => {
        return <p key = {i}>{curNote}</p>;
      })}
    </>
  );
};
