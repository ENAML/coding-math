// function Particle(x, y, speed, direction, grav) {
//   this.position = new Vector(x, y);
//   this.velocity = new Vector(null, null, direction, speed);
//   this.gravity = new Vector(0, grav || 0); // if gravity is undefined, no gravity applied
// }

// Particle.prototype.update = function() {
//   this.velocity.addTo(this.gravity);
//   this.position.addTo(this.velocity);
// };

// // accel should be obj type vector
// Particle.prototype.accelerate = function(accl) {
//   this.velocity.addTo(accl);
// };


/**
 * UPDATED FROM EPISODE 13:
 */

function Particle(x, y, speed, direction, grav) {
  this.position = new Vector(x, y);
  this.velocity = new Vector(null, null, direction, speed);
  this.gravity = new Vector(0, grav || 0); // if gravity is undefined, no gravity applied

  this.mass = 1;

  this.friction = 1;
}

Particle.prototype.update = function() {
  this.velocity.multiplyBy(this.friction);
  this.velocity.addTo(this.gravity);
  this.position.addTo(this.velocity);
};

// accel should be obj type vector
Particle.prototype.accelerate = function(accl) {
  this.velocity.addTo(accl);
};

// passed second particle (p2), calcuates angle to second particle
Particle.prototype.angleTo = function(p2) {
  return Math.atan2(p2.position.getY() - this.position.getY(),
    p2.position.getX() - this.position.getX());
};

// passed second particle (p2), calculates distance to second particle
Particle.prototype.distanceTo = function(p2) {
  var dx = p2.position.getX() - this.position.getX();
  var dy = p2.position.getY() - this.position.getY();

  return Math.sqrt(dx * dx + dy * dy);
};

Particle.prototype.gravitateTo = function(p2) {
  var grav = new Vector(0, 0);
  var dist = this.distanceTo(p2);

  grav.setLength(p2.mass / (dist * dist));
  grav.setAngle(this.angleTo(p2));

  this.velocity.addTo(grav);
};