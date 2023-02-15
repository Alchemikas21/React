import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import { Location } from "./components/Location";
import data from "./data";

function App() {
  const cards = data.map((item) => {
    return <Location key={item.title} item={item} />;
  });
  return (
    <div className="App">
      <Header />
      <div className="card-container">{cards}</div>
    </div>
  );
}

export default App;
