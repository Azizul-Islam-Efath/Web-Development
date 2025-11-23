import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
const date = new Date();
const year = date.getFullYear();
root.render(
  <div>
    <p>Created By Azizul Islam</p>
    <p>@Copyright {year}</p>
  </div>
);

