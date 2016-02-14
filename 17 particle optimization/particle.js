/**
 * Optimized particle class
 * (removed need for Vector class to minimize function calls)
 */

function Particle(x, y, speed, direction, grav) {
  this.x = x;
  this.y = y;
  this.vx = Math.cos(direction) * speed;
  this.vy = Math.sin(direction) * speed;

  this.gravity = grav || 0; // if gravity is undefined, no gravity applied

  this.mass = 1;

  this.friction = 1;
}

Particle.prototype.update = function() {

  // multiply velocity by friction
  this.vx *= this.friction;
  this.vy *= this.friction;

  // if set, add gravity to velocity
  if (this.gravity) {
    this.vy += this.gravity;
  }

  // set new position
  this.x += this.vx;
  this.y += this.vy;
};

Particle.prototype.accelerate = function(ax, ay) {
  this.vx += ax;
  this.vy += ay;
};

// passed second particle (p2), calcuates angle to second particle
Particle.prototype.angleTo = function(p2) {
  return Math.atan2(p2.y - this.y, p2.x - this.x);
};

// passed second particle (p2), calculates distance to second particle
Particle.prototype.distanceTo = function(p2) {
  var dx = p2.x - this.x;
  var dy = p2.y - this.y;

  return Math.sqrt(dx * dx + dy * dy);
};

Particle.prototype.gravitateTo = function(p2) {
  
  var dx = p2.x - this.x;
  var dy = p2.y - this.y;

  var distSq = dx * dx + dy * dy;
  var dist = Math.sqrt(distSq);

  // force is the distance of the acceleration vector
  var force = p2.mass / distSq;

  // var angle = this.angleTo(p2); // do not need if not using below trig Fns

  var ax = dx / dist * force; // faster than Math.cos(angle) * force;
  var ay = dy / dist * force; // faster than Math.sin(angle) * force;

  this.vx += ax;
  this.vy += ay;
};





