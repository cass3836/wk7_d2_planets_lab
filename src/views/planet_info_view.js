const PubSub = require('../helpers/pub_sub.js');

const PlanetInfoView = function(section){
    this.section = section;
};

PlanetInfoView.prototype.bindEvents = function(){
PubSub.subscribe('SolarSystem:planet-info', (event) =>{
  console.log(event.detail);
  const planet = event.detail;
  this.show(planet);
});
};

PlanetInfoView.prototype.show = function(planet){
  // console.log(planet);
  const planetInfo = document.createElement('p');
  planetInfo.textContent = `${planet.name}: Orbit: ${planet.orbit}`;
  this.section.appendChild(planetInfo);
};


module.exports = PlanetInfoView;
