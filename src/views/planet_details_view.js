const PubSub = require('../helpers/pub_sub.js');


const PlanetDetailsView = function(container){
this.container = container;
};

PlanetDetailsView.prototype.bindEvents = function(){
  PubSub.subscribe('SelectedPlanet:ready', (event) => {
    const planetObject = event.detail
    this.render(planetObject);
  });
};

PlanetDetailsView.prototype.render = function(planet){
  this.container.innerHTML = '';

  const heading = this.createHeading(planet);
  const list = this.createList(planet);
  const photo = this.postPhoto(planet);

  this.container.appendChild(heading);
  this.container.appendChild(list);
  this.container.appendChild(photo);
};

PlanetDetailsView.prototype.createHeading = function(planet){
  const heading = document.createElement('h2');
  heading.textContent = planet.name;
  return heading;
};

PlanetDetailsView.prototype.createList = function(planet){
  const list = document.createElement('ul');
  const liOrbit = this.createLi(`Orbit: ${planet.orbit}`, list);
  const liDay = this.createLi(`Day: ${planet.day}`, list);
  const liSurface = this.createLi(`SurfaceArea: ${planet.surfaceArea}`, list);
  const liVolume = this.createLi(`Volume: ${planet.Volume}`, list);
  const liGravity = this.createLi(`Gravity: ${planet.gravity}`, list);
  const liMoons = this.createLi(`Moons: ${planet.moons}`, list);

  return list;
};

PlanetDetailsView.prototype.createLi = function(textContent, ul){
  const li = document.createElement('li');
  li.textContent = textContent;
  ul.appendChild(li);
};

PlanetDetailsView.prototype.postPhoto = function(planet){
  const photo = document.createElement("img");
  img.src = planet.image
  photo.appendChild(img)
};




// orbit: 87.969,
// day: 58.646,
// surfaceArea: 0.147,
// volume: 0.056,
// gravity: 0.38,
// moons: 0,

module.exports = PlanetDetailsView;
