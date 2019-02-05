const Planets = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const SelectView = require('./views/select_view.js');
const PlanetInfoView = require('./views/planet_info_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const planetsDataModel = new SolarSystem(Planets);
  console.log(planetsDataModel.planets);
  planetsDataModel.bindEvents();

  const selectPlanet = document.querySelector('.planets-menu');
  const selectPlanetDisplay = new SelectView(selectPlanet);
  selectPlanetDisplay.bindEvents();

  const planetInfo = document.querySelector('.planet-details');
  const planetInfoDisplay = new PlanetInfoView(planetInfo);
  planetInfoDisplay.bindEvents();
});
