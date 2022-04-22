import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import PlanetsContext from './planetsContext';
import fetchPlanets from '../services/planetsAPI';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const result = fetchPlanets();
    setData(result.resutls);
  }, []);

  return (
    <PlanetsContext.Provider value={ data }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: propTypes.props,
}.isRequired;

export default PlanetsProvider;
