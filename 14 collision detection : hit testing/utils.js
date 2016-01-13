/**
 * Basic Math Utilities
 */
var utils = {


  /**
   * Normalize:
   * Calculates a percent (btwn 0 and 1) that a value
   * represents between a minimum and maximum value
   * 
   * - Can handle when max is less than min
   * - Can handle negative numbers
   * - Can handle when val is greater or less than max / min
   */
  norm: function(val, min, max) {
    return (val - min) / (max - min);
  },


  /**
   * Lerp (Linear Interpolation):
   * Takes a normalized number / percentage (between 0 and 1)
   * and returns the value of it between a range of min and max
   */
  lerp: function(norm, min, max) {
    return (max - min) * norm + min;
  },


  /**
   * Map:
   * Converts a normalized value in one range into
   * the corresponding value in another range
   */
  map: function(val, sourceMin, sourceMax, destMin, destMax) {
    return lerp(this.norm(val, sourceMin, sourceMax), destMin, destMax);
  },


  /**
   * Clamp:
   * Forces value into range if it is 
   * greater than max or less than min
   *
   * - Achieved by calculating the maximum of val and min,
   * then calculating the minimum of what was returned and max
   */
  clamp: function(val, min, max) {
    return Math.min(Math.max(val, min), max);
  },


  /**
   * Distance:
   * Calculates distance between two x,y points by using
   * Pythagoan Theorum to get the hypotenuse.
   */
  distance: function(x0, y0, x1, y1) {
    var dx = x1 - x0;
    var dy = y1 - y0;
    return Math.sqrt(dx * dx + dy * dy);
  },

  /**
   * Circle Collision:
   * Given two circles, c0 and c1, calculates if distance between
   * them is greater or less than the sum of their radii
   */
  circleCollision: function(c0, c1) {
    return this.distance(c0.x, c0.y, c1.x, c1.y) <= c0.radius + c1.radius;
  },

  /**
   * Circle / Point Collision:
   * Calculates if distance between point and circle is less than radius
   */
  circlePointCollision: function(x, y, circle) {
    return this.distance(circle.x, circle.y, x, y) <= circle.radius;
  },
};











