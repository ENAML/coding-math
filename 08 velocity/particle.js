function Particle(x, y, speed, direction) {
  this.position = new Vector(x, y);
  this.velocity = new Vector(null, null, direction, speed);
}

Particle.prototype.update = function() {
  this.position.addTo(this.velocity);
};