import React, { useEffect } from "react";
import { useState } from "react";

export const RandomNumberGenerator = () => {
  const [randomNumber, SetRandomNumber] = useState(0);
  const [description, setDescription] = useState("");
  const isImportantValue = randomNumber > 50;
  const [isLoading, setIsLoading] = useState(true);
  //hook pavyzdys
  useEffect(() => {
    // alert("greetings, welcome to random number generator website!");

    const products = fetch("https://jsonplaceholder.typicode.com/todos/1").then(
      (result) => result
    );
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  //kai masyve keiciasi reiksmes, funkcijoje vykdyk koda

  useEffect(() => {
    // alert(randomNumber);
  }, [description, randomNumber]);

  return (
    <>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <>
          <button
            onClick={() => {
              const magicNumber = Math.random() * 100;
              SetRandomNumber(magicNumber);
            }}
          >
            Generate random number
          </button>

          <p className={isImportantValue ? "importantValue" : "boldValue"}>
            {randomNumber.toFixed()}
          </p>

          {isImportantValue && <p>Important Client</p>}

          <input
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </>
      )}
      {/* jei vienas tiesam tai ir kita pritaikyk */}
    </>
  );
};
