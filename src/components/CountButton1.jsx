import { useState } from "react";
import styles from "../assets/Button.module.css";

function CountButton1() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <button className={styles.newbutton} onClick={handleClick}> Clicked {count} times </button>
  );
}
export default CountButton1;
