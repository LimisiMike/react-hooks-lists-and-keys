import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

  const colorElements = colors.map((color) =>{
    return <li style={ {color:color}}>{color}</li>
  })

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        <li key={color} style={{ color: colors[0] }}>{colors[0]}</li>
          {/* display the array of <li> elements/colors here */}
          {colorElements}
      </ol>
    </div>
  );
}

export default ColorList;
