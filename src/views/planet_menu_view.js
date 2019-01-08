const PubSub = require('../helpers/pub_sub.js');

const PlanetMenuView = function(menu){
this.menu = menu;
};

PlanetMenuView.prototype.bindEvents = function () {
  PubSub.subscribe('Planets:SolarSystem-ready', (event) => {
    this.populate(event.detail);
  })
this.menu.addEventListener('click', (event) => {
  const thePlanet = event.target.id;
  PubSub.publish('Planets:Selected', thePlanet);
});

};

PlanetMenuView.prototype.populate = function(planets) {
planets.forEach((planet) => {
  const planetOption = document.createElement('a');
  planetOption.id = planet.name;
  planetOption.classList.add('planet-menu-item');
  planetOption.innerText = planet.name;
  this.menu.appendChild(planetOption);
});
}
module.exports = PlanetMenuView;
