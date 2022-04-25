import React, { useEffect, useState, useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const FilterPlanets = () => {
  const { data, setFilterData } = useContext(PlanetsContext);
  const [planetName, setPlanetName] = useState('');

  useEffect(() => {
    const planetFilter = data.filter((planet) => planet.name.toLowerCase()
      .includes(planetName.toLowerCase()));
    setFilterData(planetFilter);
  }, [data, planetName, setFilterData]);

  return (
    <div>
      <h1>Filter Planets</h1>
      <input
        type="text"
        data-testid="name-filter"
        value={ planetName }
        placeholder="Filter by name"
        onChange={ (e) => setPlanetName(e.target.value) }
      />
    </div>
  );
};

export default FilterPlanets;
