import React from "react";
import { createRoot } from "react-dom";

const container = document.getElementById("root");
const root = createRoot(container);

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt Me!")
  );
};

root.render(<App />);
