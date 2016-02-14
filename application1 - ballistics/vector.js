
/**
 * Vector Class
 * 
 */
function Vector(x, y, angle, length) {

  if (typeof x === "number" && typeof y === "number") {
    this._x = x;
    this._y = y;
  } else if (typeof angle === "number" && typeof length === "number") {
    this._x = Math.cos(angle) * length;
    this._y = Math.sin(angle) * length;
  } else {
    throw new Error('cannot make vector without coordinates or angle & length');
  }
}


/**
 * Coordinate Methods
 */

Vector.prototype.setX = function(val) {
  this._x = val;
};

Vector.prototype.setY = function(val) {
  this._y = val;
};

Vector.prototype.getX = function() {
  return this._x;
};

Vector.prototype.getY = function() {
  return this._y;
};


/**
 * Angle Methods (in Radians, like all JS angles)
 */

Vector.prototype.setAngle = function(angle) {
  var length = this.getLength();

  this._x = Math.cos(angle) * length;
  this._y = Math.sin(angle) * length;
};

Vector.prototype.getAngle = function() {
  return Math.atan2(this._y, this._x);
};


/**
 * Length Methods
 */

Vector.prototype.setLength = function(length) {
  var angle = this.getAngle();

  this._x = Math.cos(angle) * length;
  this._y = Math.sin(angle) * length;
};

Vector.prototype.getLength = function() {
  return Math.sqrt(this._x * this._x + this._y * this._y);
};


/**
 * Adding Vectors
 * 
 * - Passed a vector v2, returns a new vector of this and v2 combined
 */
Vector.prototype.add = function(v2) {
  return new Vector(this._x + v2.getX(), this._y + v2.getY());
};


/**
 * Subtracting Vectors
 * 
 * - Passed a vector v2, returns a new vector of this minus v2
 */
Vector.prototype.subtract = function(v2) {
  return new Vector(this._x - v2.getX(), this._y - v2.getY());
};


/**
 * Multiplying & Dividing Vector (Scalar Methods)
 */

Vector.prototype.multiply = function(val) {
  return new Vector(this._x * val, this._y * val);
};

Vector.prototype.divide = function(val) {
  return new Vector(this._x / val, this._y / val);
};


/**
 * Helpers
 * 
 * - These are duplicates of add, subtract, multiply, & divide,
 * but instead of returning a new vector, they just return this one
 *
 * - These might not be necessary, and can be removed if needed
 */

Vector.prototype.addTo = function(v2) {
  this._x += v2.getX();
  this._y += v2.getY();
};

Vector.prototype.subtractFrom = function(v2) {
  this._x -= v2.getX();
  this._y -= v2.getY();
};

Vector.prototype.multiplyBy = function(val) {
  this._x *= val;
  this._y *= val;
};

Vector.prototype.divideBy = function(val) {
  this._x /= val;
  this._y /= val;
};

