import React, { useContext, useState, useEffect, useRef } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const Table = () => {
  const { filterData, data, setFilterData } = useContext(PlanetsContext);

  const columnRef = useRef(null);
  const [planetName, setPlanetName] = useState('');
  const [selected, setSelected] = useState({
    column: '',
    comparison: 'maior que',
    value: 0,
  });
  const [activeFilters, setActiveFilters] = useState([]);

  const initialOptions = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const [options, setOptions] = useState(initialOptions);

  useEffect(() => {
    setSelected((prev) => ({ ...prev, column: columnRef.current.value }));
  }, []);

  useEffect(() => {
    const planetFilter = data.filter((planet) => planet.name.toLowerCase()
      .includes(planetName.toLowerCase()));
    setFilterData(planetFilter);
  }, [data, planetName, setFilterData, activeFilters]);

  const handleFilter = (planet) => {
    const bools = [];

    activeFilters.forEach((filter) => {
      switch (filter.comparison) {
      case 'maior que':
        bools.push(Number(planet[filter.column]) > Number(filter.value));
        break;

      case 'menor que':
        bools.push(Number(planet[filter.column]) < Number(filter.value));
        break;

      case 'igual a':
        bools.push(Number(planet[filter.column]) === Number(filter.value));
        break;

      default:
        return true;
      }
    });
    return bools.every((e) => e);
  };
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
        ref={ columnRef }
        data-testid="column-filter"
        value={ selected.column }
        onChange={ (e) => setSelected({ ...selected, column: e.target.value }) }
      >
        {options.map((option) => (
          <option key={ option } value={ option }>
            {option}
          </option>
        ))}
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
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => {
          setActiveFilters([...activeFilters, selected]);
          setSelected({
            column: columnRef.current.value,
            comparison: 'maior que',
            value: 0,
          });
          console.log(columnRef.current.value);
          setOptions(
            options.filter((option) => option !== columnRef.current.value),
          );
        } }
      >
        Filtrar
      </button>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th> Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>

        <tbody>
          {filterData.filter(handleFilter).map((planet) => (
            <tr key={ planet.name }>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
