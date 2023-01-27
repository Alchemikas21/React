import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/header";
import { Button } from "./components/button";
import picture from "./mountain-wallpaper-background-1.jpg";
import { PhotoBox } from "./components/photoBox";
import picture2 from "./HD-wallpaper-nature-mountains-look-nice-thumbnail.jpg";
import picture3 from "./9cf222c76b02487c040b2ed7e67772e6.jpg";

function App() {
  return (
    <div className="App">
      <header className="upper-header">
        <h1 className="upper-h1">Title</h1>
        <p className="upper-paragraph">Text in two lines</p>
        <img className="image" style={{position:"relative"}} src={picture} alt="" />
        <Button
          style={{ backgroundColor: "red", borderRadius: "10px", position:"absolute", left:"50%", bottom: "40%" }}
          text={"Press me"}
        ></Button>
      </header>

      <main>
        <h1 className="header">Portfolio</h1>
        <p className="paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus laboriosam ratione cupiditate, tempore commodi blanditiis amet facere adipisci et placeat sapiente atque! Pariatur suscipit dolor molestiae porro quos minima explicabo?</p>
        <div className="grid-display-container">
          <PhotoBox
            className="photo-box"
            style={{ width: "400px", height: "300px" }}
            image={picture2}
            text={"lorem"}
          ></PhotoBox>
          <PhotoBox
            style={{ width: "400px", height: "300px" }}
            image={picture2}
            text={"lorem ipsum sssss"}
          ></PhotoBox>
          <PhotoBox
            style={{ width: "400px", height: "300px" }}
            image={picture2}
            text={"lorem ipsum dsfa"}
          ></PhotoBox>

          <PhotoBox
            style={{ width: "400px", height: "300px" }}
            image={picture3}
            text={"lorem dedentis dsds"}
          ></PhotoBox>
          <PhotoBox
            style={{ width: "400px", height: "300px" }}
            image={picture3}
            text={"lorem ipsssss"}
          ></PhotoBox>
          <PhotoBox
            style={{ width: "400px", height: "300px" }}
            image={picture3}
            text={"lorem dsasdd"}
          ></PhotoBox>
        </div>
      </main>
    </div>
  );
}

export default App;
