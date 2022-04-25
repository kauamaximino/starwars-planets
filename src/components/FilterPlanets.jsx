import React, { useEffect, useState, useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const FilterPlanets = () => {
  const { data, setFilterData } = useContext(PlanetsContext);

  const [planetName, setPlanetName] = useState('');
  const [selected, setSelected] = useState({ column: '', comparison: '', value: 0 });
  // const [activeFilters, setActiveFilters] = useState([]);

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

      <select
        name="column"
        data-testid="column-filter"
        value={ selected.column }
        onChange={ (e) => setSelected({ ...selected, column: e.target.value }) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>

      <select
        name="comparison"
        data-testid="comparison-filter"
        value={ selected.comparison }
        onChange={ (e) => setSelected({ ...selected, comparison: e.target.value }) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        type="number"
        data-testid="value-filter"
        value={ selected.value }
        onChange={ (e) => setSelected({ ...selected, value: e.target.value }) }
      />
      <button type="button" data-testid="button-filter">
        Filtrar
      </button>
    </div>
  );
};

export default FilterPlanets;
