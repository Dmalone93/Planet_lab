const PubSub = require('../helpers/pub_sub.js')
const SolarSystem = function(planets) {
  this.planets = planets;
};


SolarSystem.prototype.bindEvents = function(){
PubSub.publish('Planets:SolarSystem-ready', this.planets);

PubSub.subscribe('Planets:Selected', (event) => {
  const selectedPlanet = event.detail;
  const selectedPlanetObject = this.findByName(selectedPlanet);
  PubSub.publish('SelectedPlanet:ready', selectedPlanetObject);

});
};

SolarSystem.prototype.findByName = function(findName) {
  const foundPlanet = this.planets.find((planet) => {
    return planet.name === findName;
  });
  return foundPlanet;
};

module.exports = SolarSystem;


//start publish on SolarSystem('Planets:SolarSystem-ready')
