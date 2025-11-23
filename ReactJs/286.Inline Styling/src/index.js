import React from "react";
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));

const csstyle = {
  color: "blue",
  fontSize: "10vh",
  textAlign: "Center",
};
csstyle.color = "pink";
root.render(<h1 style={csstyle}>Hello World!</h1>);

