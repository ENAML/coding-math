function Particle(x, y, speed, direction, grav) {
  this.position = new Vector(x, y);
  this.velocity = new Vector(null, null, direction, speed);
  this.gravity = new Vector(0, grav || null); // if gravity is undefined, no gravity applied
}

Particle.prototype.update = function() {
  this.velocity.addTo(this.gravity);
  this.position.addTo(this.velocity);
};

// accel should be obj type vector
Particle.prototype.accelerate = function(accl) {
  this.velocity.addTo(accl);
};