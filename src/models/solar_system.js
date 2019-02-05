// const Planets = require('../data/planets.js');
const PubSub = require('../helpers/pub_sub.js');

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function(){
  PubSub.subscribe('SelectView:selected-planet', (event) => {
    console.log("subscribe firing");
    const selectedPlanetName = event.detail;
    this.publishPlanet(selectedPlanetName);
});
}

SolarSystem.prototype.publishPlanet = function(name){
  const selectedPlanet = function(){
    return this.planets.map((planet) =>{
    return planet.name;
  });
}
  PubSub.publish('SolarSystem:planet-info', selectedPlanet);
};

module.exports = SolarSystem;
