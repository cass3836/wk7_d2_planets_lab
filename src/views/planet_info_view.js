const PubSub = require('../helpers/pub_sub.js');

const PlanetInfoView = function(section){
    this.section = section;
};

PlanetInfoView.prototype.bindEvents = function(){
PubSub.subscribe('SolarSystem:planet-info', (event) =>{
  console.log(event.detail);
  // const planet = event.detail;
  // this.show(planet);
});
};

PlanetInfoView.prototype.show = function(planet){
  console.log(planet);
}


module.exports = PlanetInfoView;
