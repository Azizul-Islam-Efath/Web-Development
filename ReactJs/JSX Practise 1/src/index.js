import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#root"));
root.render(
  <div>
    <h1>My Favourite Foods-</h1>
    <ul>
      <li>Kacchi</li>
      <li>Lemonade</li>
      <li>And You🙈.</li>
    </ul>
  </div>
);

