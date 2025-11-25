import React from "react";
import { createRoot } from "react-dom/client";
import * as Pi from "./Math";

const root = createRoot(document.getElementById("root"));
root.render(
  <ul>
    <li>{Pi.default}</li>
    <li>{Pi.doublePi()}</li>
    <li>{Pi.triplePi()}</li>
  </ul>
);
