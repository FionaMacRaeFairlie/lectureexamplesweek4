import { useState } from "react";
import styles from "../assets/Button.module.css";

const Numbers = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3]);
  
  const handleNumber = () => {
    const endNumber = numbers[numbers.length - 1];
    setNumbers([...numbers, endNumber + 1]);
  };

  return (
    <div>
      <button className={styles.newbutton} onClick={handleNumber}> Add number</button>
      <ul>
        {numbers.map((number) => (
          <li key={number}> {number}</li>
        ))}
      </ul>
    </div>
  );
};
export default Numbers;
