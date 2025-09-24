import React, { useState } from "react";
const Numbers = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3]);
  
  const handleNumber = () => {
    const endNumber = numbers[numbers.length - 1];
    setNumbers([...numbers, endNumber + 1]);
  };

  return (
    <div>
      <button onClick={handleNumber}> Add number</button>{" "}
      <ul>
        {numbers.map((number) => (
          <li key={number}> {number}</li>
        ))}
      </ul>
    </div>
  );
};
export default Numbers;
