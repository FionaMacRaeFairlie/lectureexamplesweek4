import React, { useState } from "react";
export default function LessText({ text, maxLength }) {
  const [hidden, setHidden] = useState(true);
  if (text.length <= maxLength) {
    return <span>{text}</span>;
  }
  return (
    <span>
      {hidden ? `${text.substr(0, maxLength).trim()} ...` : text}     {" "}
      {hidden ? (
        <button onClick={() => setHidden(false)}> read more</button>
      ) : (
        <button onClick={() => setHidden(true)}> read less</button>
      )}
      {" "}
    </span>
  );
}
