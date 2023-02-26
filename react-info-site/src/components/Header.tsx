import React from "react";

export const Header = ({darkMode, toggleDarkMode} : {darkMode:boolean , toggleDarkMode : any}) => {
 
console.log( `darkMode is ${darkMode}`)
  
  return (
    <nav className={darkMode ? "dark" : ""}>
       <img className="nav-logo_icon" src= {darkMode === true ? "./images/logo1.svg" : "./images/logo2.svg"}></img>
      <h3 className="nav-logo_text">ReactFacts</h3>

      <div className="toggler">
        <p className="toggler-light">Light</p>
        <div className="toggler-slider" onClick={toggleDarkMode}>
          <div className="toggler-slider-circle"></div>
        </div>
        <p className="toggler-dark">Dark</p>
      </div>
    </nav>
  );
}
