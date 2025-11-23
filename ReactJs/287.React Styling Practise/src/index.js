import react from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

const t = new Date();
const Time = t.getHours();
const Red = {
  color: "red",
};
const Green = {
  color: "green",
};
const Blue = {
  color: "blue",
};

function greet() {
  if (Time >= 0 && Time < 12) {
    return <h1 style={Red}>Good Morning</h1>;
  } else if (Time >= 12 && Time < 18) {
    return <h1 style={Green}>Good Afternoon</h1>;
  } else if (Time >= 18 && Time <= 24) {
    return <h1 style={Blue}>Good Evening</h1>;
  }
}

root.render(
  <div>
    <h1 className="heading">{greet()}</h1>
  </div>
);
