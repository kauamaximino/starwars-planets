import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import fetchPlanets from '../services/planetsAPI';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const resultsPlanets = async () => {
      const response = await fetchPlanets();
      setData(response.results);
      setFilterData(response.results);
    };
    resultsPlanets();
  }, []);

  const context = {
    data,
    filterData,
    setFilterData,
  };

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
