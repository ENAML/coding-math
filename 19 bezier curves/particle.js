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

  this.springs = [];
  this.gravitations = [];
}

Particle.prototype.update = function() {

  this.handleSprings();
  this.handleGravitations();

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

Particle.prototype.getSpeed = function() {
  return Math.sqrt(this.vx * this.vx + this.vy * this.vy);
};

Particle.prototype.setSpeed = function(speed) {
  var heading = this.getHeading();

  this.vx = Math.cos(heading) * speed;
  this.vy = Math.sin(heading) * speed;
};

// gets current velocity's angle
Particle.prototype.getHeading = function() {
  return Math.atan2(this.vy, this.vx);
};

// sets current velocity's angle
Particle.prototype.setHeading = function(heading) {
  var speed = this.getSpeed();

  this.vx = Math.cos(heading) * speed;
  this.vy = Math.sin(heading) * speed;
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

Particle.prototype.addGravitation = function(p) {
  this.removeGravitation(p);
  this.gravitations.push(p);
};

Particle.prototype.removeGravitation = function(p) {
  for (var i = 0; i < this.gravitations.length; i++) {
    if (p === this.gravitations[i]) {
      this.gravitations.splice(i, 1);
      return;
    }
  }
};

Particle.prototype.handleGravitations = function() {
  for (i = 0; i < this.gravitations.length; i++) {
    this.gravitateTo(this.gravitations[i]);
  }
};


Particle.prototype.springTo = function(point, k, length) {
    // distance (length) representing weight's distance from springPoint
    var dx = point.x - this.x;
    var dy = point.y - this.y;
    var distance = Math.sqrt(dx * dx + dy * dy);

    // subtracting springLength to account for spring's size
    // then multiply by k (stiffness constant)
    var springForce = (distance - length || 0) * k;

    // set acceleration
    this.vx += dx / distance * springForce;
    this.vy += dy / distance * springForce;

};

Particle.prototype.addSpring = function(point, k, length) {
  this.removeSpring(point);
  this.springs.push({
    point: point,
    k: k,
    length: length || 0,
  });
};

Particle.prototype.removeSpring = function(point) {
  for (var i = 0; i < this.springs.length; i++) {
    if (point === this.springs[i].point) {
      this.springs.splice(i, 1);
      return;
    }
  }
};

Particle.prototype.handleSprings = function() {
  for (var i = 0; i < this.springs.length; i++) {
    var spring = this.springs[i];
    this.springTo(spring.point, spring.k, spring.length);
  }
};
















