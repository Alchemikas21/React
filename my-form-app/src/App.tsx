import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Form } from "./components/form";
import Button from "./components/button";
import Hero from "./components/hero";

function App() {
  return (
    <div className="App">
      <Form />
      <Button />
      <Hero
        style={{ backgroundColor: "greenyellow" }}
        title="My title"
        subtitle="My subtitle"
      />

      <Hero
        style={{ backgroundColor: "blue" }}
        title="Hero"
        subtitle="Is you"
      />
    </div>
  );
}

export default App;
