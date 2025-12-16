//CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import { createRoot } from "react-dom/client";
import cars from "./data";
import "./../public/styles.css";

const root = createRoot(document.getElementById("root"));

const [honda, tesla] = cars;
const {
  speedStats: { topSpeed: hondaTopSpeed },
} = honda;
const {
  speedStats: { topSpeed: teslaTopSpeed },
} = tesla;

const {
  coloursByPopularity: [hondaTopColour],
} = honda;

const {
  coloursByPopularity: [teslaTopColour],
} = tesla;

root.render(
  <div>
    <table>
      <tr>
        <th>Brand</th>
        <th>Top Speed</th>
        <th>Top Colour</th>
      </tr>
      <tr>
        <td id="t">{tesla.model}</td>
        <td id="ts">{teslaTopSpeed}</td>
        <td id="tc">{teslaTopColour}</td>
      </tr>
      <tr>
        <td id="h">{honda.model}</td>
        <td id="hs">{hondaTopSpeed}</td>
        <td id="hc">{hondaTopColour}</td>
      </tr>
    </table>
  </div>
);
