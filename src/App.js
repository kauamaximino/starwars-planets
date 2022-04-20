import React from "react";
import PlanetsProvider from "./context/PlanetsProvider";

function App() {
  return (
    <PlanetsProvider>
      <span>Hello, App!</span>
      <p>teste</p>
    </PlanetsProvider>
  );
}

export default App;
