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
   * Converts a value in one range into
   * the corresponding value in another range
   */
  map: function(val, sourceMin, sourceMax, destMin, destMax) {
    return this.lerp(this.norm(val, sourceMin, sourceMax), destMin, destMax);
  },


  /**
   * Clamp:
   * Forces value into range if it is 
   * greater than max or less than min
   *
   * - Achieved by calculating the maximum of val and min,
   * then calculating the minimum of what was returned and max
   * - Updated function uses second Math.min / Math.max calls
   * so the function still works when min is greater than max
   * (good for negative numbers, etc)
   */
  clamp: function(val, min, max) {
    // return Math.min(Math.max(val, min), max);
    return Math.min(Math.max(val, Math.min(min,max)), Math.max(min, max));
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

  /**
   * Point in Rectangle:
   * Calculates if point is in a rectangle based on rectangle's
   * x,y coords, width, and height
   */
  pointInRect: function(x, y, rect) {
    return this.inRange(x, rect.x, rect.x + rect.width) &&
      this.inRange(y, rect.y, rect.y + rect.height);
  },

  /**
   * In Range:
   * Calcuates if value is between min and max
   * - Using Math.min & Math.max, min can be larger
   * than max and vice versa (useful for when width/height
   * of a rectangle are negative values)
   */
  inRange: function(val, min, max) {
    return val >= Math.min(min,max) && val <= Math.max(min,max);
  },

  /**
   * Range Intersect:
   * Calculates if there is any overlap between two ranges
   * - Useful for calculating if two rectangles are overlapping
   * - Updated function wraps everything in Math.min / Math.max
   * so that mins can be larger than maxes and vise versa
   */
  rangeIntersect: function(min0, max0, min1, max1) {
    // return max0 >= min1 && min0 <= max1;
    return Math.max(min0, max0) >= Math.min(min1, max1) && 
      Math.min(min0, max0) <= Math.max(min1, max1); 
  },

  /**
   * Rectangle Intersect
   * Calculates if two rectangles intersect one another by
   * comparing the ranges with rangeIntersect function
   */
  rectIntersect: function(r0, r1) {
    return this.rangeIntersect(r0.x, r0.x + r0.width, r1.x, r1.x + r1.width) &&
      this.rangeIntersect(r0.y, r0.y + r0.height, r1.y, r1.y + r1.height);
  },

  /**
   * randomRange:
   * Calculates a random number between given range
   * - Works with negative numbers (ex: get random number btwn -10 and 10) 
   */
  randomRange: function(min, max) {
    return min + Math.random() * (max - min);
  },

  /**
   * randomInt:
   * Calculates a random integer between given range
   */
  randomInt: function(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
  },

  /**
   * Random Distribution:
   * Returns a weighted random number based on the number of
   * iterations (the higher the iterations, the higher the
   * chance that the number returned will be in the middle
   * of the range).
   */
  randomDist: function(min, max, iterations) {
    var total = 0;

    for (var i = 0; i < iterations; i++) {
      total += this.randomRange(min, max);
    }

    return total / iterations;
  },


  /**
   * Degrees to Radians:
   * Calculates radians from degrees
   */
  degreesToRads: function(degrees) {
    return degrees / 180 * Math.PI;
  },
  

  /**
   * Radians to Degrees:
   * Calculates degrees from radians
   */
  radsToDegrees: function(radians) {
    return radians * 180 / Math.PI;
  },
};











