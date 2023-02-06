import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Card } from "./components/Card";
import firstCardPhoto from "./components/image 12.png";
import secondCardPhoto from "./components/wedding.png";
import thirdCardPhoto from "./components/mountain-bike 1.png";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <div className="card-container">
        <Card
          image={firstCardPhoto}
          description="Life lessons with Katie Zaferes"
          price= {136}
          rating={5.0}
          country="USA"
          reviewCount="(6)"
          tooltipDescription = "Sold out"
        />
        <Card
          image={secondCardPhoto}
          description="Learn wedding photography"
          price={125}
          rating={5.0}
          country="USA"
          reviewCount="(30)"
          tooltipDescription = "Online"
        />
        <Card
          image={thirdCardPhoto}
          description="Group Mountain Biking"
          price= {50}
          rating={4.8}
          country="USA"
          reviewCount="(2)"
          tooltipDescription = "."
        />
      </div>
    </div>
  );
}

export default App;
