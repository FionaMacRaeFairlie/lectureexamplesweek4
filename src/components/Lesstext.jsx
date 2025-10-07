// import { useState } from "react";
// export default function LessText({ text, maxLength }) {
//   const [hidden, setHidden] = useState(true);
//   return (
//     <span>
//       {hidden ? `${text.substr(0, maxLength).trim()} ...` : text}  
//       {hidden ? (
//         <button onClick={() => setHidden(false)}> read more</button>
//       ) : (
//         <button onClick={() => setHidden(true)}> read less</button>
//       )}
  
//     </span>
//   );
// }


import { useState } from "react";
export default function LessText({ children:text, maxLength }) {
  const [hidden, setHidden] = useState(true);
  return (
    <span>
      {hidden ? `${text.substr(0, maxLength).trim()} ...` : text}  
      {hidden ? (
        <button onClick={() => setHidden(false)}> read more</button>
      ) : (
        <button onClick={() => setHidden(true)}> read less</button>
      )}
  
    </span>
  );
}