import React from "react";
import "./App.css";
import { NewstudentForm } from "./components/NewStudentForm";
import { GreatingHeader } from "./components/GreatingHeader";

function App() {
  return (
    <div className="App">
      <NewstudentForm />
      <GreatingHeader studentName = ""/>
    </div>
  );
}

export default App;
