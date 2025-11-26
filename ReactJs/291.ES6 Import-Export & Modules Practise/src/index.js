import React from "react";
import { createRoot } from "react-dom/client";
import * as cal from "./calculator";

const root = createRoot(document.getElementById("root"));

root.render(
  <ul>
    <li>{cal.add(1, 2)}</li>
    <li>{cal.multiply(2, 3)}</li>
    <li>{cal.subtract(7, 2)}</li>
    <li>{cal.divide(5, 2)}</li>
  </ul>
);
