import React from 'react';

function Simple(_) {
    const simpleStyle = {
      color: "white",
      backgroundColor: "green",
      margin: "8px",
      fontFamily: "Times New Roman",
      display:"inline-block",
      width:"20%",
    };
    return (
      <div>
        <h1 style={simpleStyle}> Hello simple!</h1>
      </div>
    );
  }
export default Simple;