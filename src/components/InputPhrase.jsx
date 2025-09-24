import React, { useState, useEffect } from "react";

export default function InputPhrase() {
  const [val, setValue] = useState("");
  const [phrase, setPhrase] = useState("example phrase");
  
  const createPhrase = () => {
    setPhrase(val);
    setValue("");
  };
 
  useEffect(() => {
    console.log(`typing "${val}"`);
  });
 
  useEffect(() => {
    console.log(`saved phrase: "${phrase}"`);
  });

  return (
    <>
      <label>Favorite phrase:</label>
      <input
        value={val}
        placeholder={phrase}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={createPhrase}>send</button>
      <p>typing: {val}</p>
      <p>phrase :{phrase}</p>
    </>
  );
}
