import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Card } from "./components/Card";
import data from "./data";

export default function App() {
  const cards = data.map((item) => {
    return (
      <Card
        // key={item.id}
        // title={item.title}
        // description={item.description}
        // price={item.price}
        // coverImg={item.coverImg}
        // rating={item.stats.rating }
        // reviewCount={item.stats.reviewCount}
        // location={item.location}
        // openSpots={item.openSpots}
        key={item.id}
        item={item}
        // {...item}
        //galima naudoti {.../item} tada ims tik tuos propercius, kuriu reikia, bet reikia komponente keisti pathing
      />
    );
  });

  return (
    <div className="App">
      <Header />
      <Main />
      <div className="card-container">{cards}</div>
    </div>
  );
}
