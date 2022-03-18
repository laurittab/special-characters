import React, { useState } from "react";
export default function Special() {
  const [characters, setChars] = useState("");
  function getCodes() {
    var symbols = "";
    var myCodes = "";
    for (var i = 0; i < characters.length; i++) {
      var symbol = characters[i];
      switch (symbol) {
        case "(":
          myCodes = myCodes + " &#40;";
          symbols = symbols + symbol + " ";
          break;
        case ")":
          myCodes = myCodes + " &#41;";
          symbols = symbols + symbol + " ";
          break;
        case "<":
          myCodes = myCodes + " &#60;";
          symbols = symbols + symbol + " ";
          break;
        case ">":
          myCodes = myCodes + " &#62;";
          symbols = symbols + symbol + " ";
          break;
        case "[":
          myCodes = myCodes + " &#91;";
          symbols = symbols + symbol + " ";
          break;
        case "]":
          myCodes = myCodes + " &#93;";
          symbols = symbols + symbol + " ";
          break;
        case "{":
          myCodes = myCodes + " &#123;";
          symbols = symbols + symbol + " ";
          break;
        case "}":
          myCodes = myCodes + " &#125;";
          symbols = symbols + symbol + " ";
          break;
        default:
          break;
      }
    }

    return (
      <div style={{ fontSize: "1em" }}>
        <p> React codes are needed for the following symbol(s):</p>
        <h2>{symbols} </h2>
        <h2 style={{ paddingBottom: "10px" }}>{myCodes}</h2>
      </div>
    );
  }

  return (
    <div
      style={{
        justify: "centre",
        margin: "100px",
        width: "50%",
        paddingLeft: "10px",
        color: "grey",
        background: "lightblue",
      }}
    >
      <h1>React Special Characters</h1>
      <input
        style={{ fontSize: "1.5em", width: "90%" }}
        value={characters}
        placeholder="Enter symbols"
        fontSize="1.5em"
        onChange={(e) => {
          setChars(e.target.value);
        }}
      />
      <br />
      {getCodes()}
    </div>
  );
}
