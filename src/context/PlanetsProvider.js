import React, { useState } from "react";
import PlanetsContext from "./planetsContext";
import fetchPlanets from "../services/planetsAPI";

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState({});

  const planetsFromApi = async () => {
    const response = await fetchPlanets();
    console.log(response);
  };

  return (
    <PlanetsContext.Provider value={planets}>
      {children}
    </PlanetsContext.Provider>
  );
}

export default PlanetsProvider;
