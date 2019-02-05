const Planets = require('../data/planets.js');
const PubSub = require('../helpers/pub_sub.js');

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function(){
  PubSub.subscribe('SelectView:selected-planet', (event) => {
    console.log("subscribe firing");
    const selectedPlanetName = event.detail;
    const selectedPlanet = this.publishPlanet(selectedPlanetName);
    PubSub.publish('SolarSystem:planet-info', selectedPlanet);
});
}

SolarSystem.prototype.publishPlanet = function(name){
  const selectedPlanet = this.planets.find((planet) =>{
    return planet.name === name;
  });
  return selectedPlanet;
}
  // PubSub.publish('SolarSystem:planet-info', selectedPlanet);


module.exports = SolarSystem;
