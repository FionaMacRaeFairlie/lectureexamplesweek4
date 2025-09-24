import { useState } from "react";

export default function BasicStateEx() {
  const [fruit, setFruit] = useState("banana");

  function handleClick() {
    // setFruit("apple");
    // if ( fruit==="apple") {setFruit("banana")} else {setFruit("apple")};
     fruit==="apple" ? setFruit("banana"):setFruit("apple")
  }

  return (
    <>
      {fruit} &nbsp;
      <button onClick={handleClick}>change fruit</button> 
    </>
  );
}
