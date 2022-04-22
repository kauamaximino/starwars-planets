import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import fetchPlanets from '../services/planetsAPI';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const resultsPlanets = async () => {
      const response = await fetchPlanets();
      setData(response.results);
    };
    resultsPlanets();
  }, []);

  const context = { data };

  return (
    <PlanetsContext.Provider value={ context }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: propTypes.props,
}.isRequired;

export default PlanetsProvider;
