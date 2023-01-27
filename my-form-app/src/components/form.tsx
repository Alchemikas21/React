import { useState } from "react";

export const Form = () => {
  const [answer, setAnswer] = useState("");
  const [savedAnswer, setSavedAnswer] = useState<string[]>([]);
const [areNotesShown, setAreNotesShown] = useState(false)

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setAnswer(event.target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    setSavedAnswer((prevSavedAnswers) => [...prevSavedAnswers, answer]);

    setAnswer("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={answer}
          style={{ color: "red", border: "3px solid red" }}
        />
        <input checked={areNotesShown} onChange={(e)=>setAreNotesShown(e.target.checked)} type="checkbox" />
        <button style={{ color: "red", border: "3px solid red" }}>
          Submit
        </button>
      </form>

      {areNotesShown && savedAnswer.map((curAnswer, i) => {
        return <p key={i}>{curAnswer}</p>;
      })}
    </>
  );
};
