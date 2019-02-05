const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element){
    this.element = element;
};

// SelectView.prototype.bindEvents = function(){
//   PubSub.subscribe('SolarSystem:planets-ready', (event) =>{
//     const allPlanets = event.detail;
//     this.populate(allPlanets);
//   });
// }

SelectView.prototype.bindEvents = function(){
  this.element.addEventListener('click', (event) => {
    const selectedPlanetName = event.target.id;
    PubSub.publish('SelectView:selected-planet', selectedPlanetName);
   });
}



  // PubSub.publish('SelectView:planet-selected', (event) =>{
  //   const button = document.querySelector(`);
  //   button.addEventListener('click', handlePlanetClick);
//   // });
// });



// SelectView.prototype.populate = function(planetsData){
//   planetsData.forEach((planet, index) => {
//     const button = document.querySelector(`.planet-menu-item`);
//     button.addEventListener('click', handlePlanetClick);
//   });
// }




module.exports = SelectView;
