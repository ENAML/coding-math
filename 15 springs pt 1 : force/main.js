/**
 * Spring with length of 0 (weight's distance 
 * is calculated directly from springPoint)
 */

// window.onload = function() {
//   var canvas = document.getElementById("canvas"),
//     context = canvas.getContext("2d"),
//     width = canvas.width = window.innerWidth,
//     height = canvas.height = window.innerHeight;

//   // base of spring
//   var springPoint = new Vector(width/2, height/2);

//   // thing and end of 'spring'
//   var weight = new Particle(Math.random() * width,
//     Math.random() * height, 50, Math.random() * Math.PI * 2);
//   weight.radius = 20;
//   weight.friction = 0.9;

//   // spring stiffness constant
//   k = 0.1;

//   document.body.addEventListener('mousemove', function(e) {
//     springPoint.setX(e.clientX);
//     springPoint.setY(e.clientY);
//   });

//   update();
//   function update() {
//     context.clearRect(0, 0, width, height);

//     // vector representing weight's distance from springPoint
//     // uses subtract to get acceleration in direction of springPoint
//     var distance = springPoint.subtract(weight.position);
//     var force = distance.multiply(k);

//     // console.log(distance);

//     weight.velocity.addTo(force);

//     weight.update();

//     // weight
//     context.beginPath();
//     context.arc(weight.position.getX(),
//       weight.position.getY(),
//       weight.radius,
//       0, Math.PI * 2, false);
//     context.fill();

//     // springPoint
//     context.beginPath();
//     context.arc(springPoint.getX(),
//       springPoint.getY(),
//       5,
//       0, Math.PI * 2, false);
//     context.fill();

//     context.beginPath();
//     context.moveTo(weight.position.getX(), weight.position.getY());
//     context.lineTo(springPoint.getX(), springPoint.getY());
//     context.stroke();

//     requestAnimationFrame(update);
//   }

// };





/**
 * Springs with length (length is some distance from springPoint)
 */

window.onload = function() {
  var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;

  // base of spring
  var springPoint = new Vector(width/2, height/2);

  // thing and end of 'spring'
  // var weight = new Particle(Math.random() * width,
  //   Math.random() * height, 50, Math.random() * Math.PI * 2);
  var weight = new Particle(Math.random() * width,
    Math.random() * height, 50, Math.random() * Math.PI * 2, 0.5); // added gravity
  weight.radius = 20;
  weight.friction = 0.9;

  // spring stiffness constant
  k = 0.1;

  // spring length - since spring has a size in this example, give it length
  var springLength = 100;

  document.body.addEventListener('mousemove', function(e) {
    springPoint.setX(e.clientX);
    springPoint.setY(e.clientY);
  });

  update();
  function update() {
    context.clearRect(0, 0, width, height);

    // vector representing weight's distance from springPoint
    // uses subtract to get acceleration in direction of springPoint
    var distance = springPoint.subtract(weight.position);

    // subtracting springLength to account for spring's size
    distance.setLength(distance.getLength() - springLength);

    var force = distance.multiply(k);

    // console.log(distance);

    weight.velocity.addTo(force);

    weight.update();

    // weight
    context.beginPath();
    context.arc(weight.position.getX(),
      weight.position.getY(),
      weight.radius,
      0, Math.PI * 2, false);
    context.fill();

    // springPoint
    context.beginPath();
    context.arc(springPoint.getX(),
      springPoint.getY(),
      5,
      0, Math.PI * 2, false);
    context.fill();

    context.beginPath();
    context.moveTo(weight.position.getX(), weight.position.getY());
    context.lineTo(springPoint.getX(), springPoint.getY());
    context.stroke();

    requestAnimationFrame(update);
  }

};






// /**
//  * Springs that move towards other springs' offsets
//  */

// window.onload = function() {
//   var canvas = document.getElementById("canvas"),
//     context = canvas.getContext("2d"),
//     width = canvas.width = window.innerWidth,
//     height = canvas.height = window.innerHeight;

//   var particleA = new Particle(utils.randomRange(0, width),
//     utils.randomRange(0, height),
//     utils.randomRange(0, 50),
//     utils.randomRange(0, Math.PI * 2));
//   particleA.friction = 0.9;
//   particleA.radius = 20;

//   var particleB  = new Particle(utils.randomRange(0, width),
//     utils.randomRange(0, height),
//     utils.randomRange(0, 50),
//     utils.randomRange(0, Math.PI * 2));
//   particleB.friction = 0.9;
//   particleB.radius = 20;

//   // stiffness constant
//   var k = 0.01;

//   // separation / spring length
//   var separation = 100;


//   document.body.addEventListener('mousemove', function(e) {

//   });

//   update();
//   function update() {
//     context.clearRect(0, 0, width, height);

//     spring(particleA, particleB, separation);

//     particleA.update();
//     particleB.update();

//     context.beginPath();
//     context.arc(particleA.position.getX(), particleA.position.getY(),
//       particleA.radius, 0, Math.PI * 2, false);
//     context.fill();

//     context.beginPath();
//     context.arc(particleB.position.getX(), particleB.position.getY(),
//       particleB.radius, 0, Math.PI * 2, false);
//     context.fill();

//     context.beginPath();
//     context.moveTo(particleA.position.getX(), particleA.position.getY());
//     context.lineTo(particleB.position.getX(), particleB.position.getY());
//     context.stroke();

//     requestAnimationFrame(update);
//   }


//   function spring(p0, p1, separation) {
//     // same as first two, just using p0's position instead of springPoint
//     var distance = p0.position.subtract(p1.position);

//     // subtract spring length from distance
//     distance.setLength(distance.getLength() - separation);

//     // multiply by stiffness constant
//     springForce = distance.multiply(k);

//     p1.velocity.addTo(springForce);

//     // instead of calling spring fn again with opposite p0/p1, 
//     // you can just subtract springForce from p0
//     p0.velocity.subtractFrom(springForce);
//   }

// };





/**
 * Springs that move towards other springs' offsets
 * - This one uses three particles
 */

// window.onload = function() {
//   var canvas = document.getElementById("canvas"),
//     context = canvas.getContext("2d"),
//     width = canvas.width = window.innerWidth,
//     height = canvas.height = window.innerHeight;

//   var particleA = new Particle(utils.randomRange(0, width),
//     utils.randomRange(0, height),
//     utils.randomRange(0, 50),
//     utils.randomRange(0, Math.PI * 2));
//   particleA.friction = 0.9;
//   particleA.radius = 20;

//   var particleB = new Particle(utils.randomRange(0, width),
//     utils.randomRange(0, height),
//     utils.randomRange(0, 50),
//     utils.randomRange(0, Math.PI * 2));
//   particleB.friction = 0.9;
//   particleB.radius = 20;

//   var particleC = new Particle(utils.randomRange(0, width),
//     utils.randomRange(0, height),
//     utils.randomRange(0, 50),
//     utils.randomRange(0, Math.PI * 2));
//   particleC.friction = 0.9;
//   particleC.radius = 20;

//   // stiffness constant
//   var k = 0.01;

//   // separation / spring length
//   var separation = 100;


//   document.body.addEventListener('mousemove', function(e) {

//   });

//   update();
//   function update() {
//     context.clearRect(0, 0, width, height);

//     spring(particleA, particleB, separation);
//     spring(particleB, particleC, separation);
//     spring(particleC, particleA, separation);

//     particleA.update();
//     particleB.update();
//     particleC.update();

//     context.beginPath();
//     context.arc(particleA.position.getX(), particleA.position.getY(),
//       particleA.radius, 0, Math.PI * 2, false);
//     context.fill();

//     context.beginPath();
//     context.arc(particleB.position.getX(), particleB.position.getY(),
//       particleB.radius, 0, Math.PI * 2, false);
//     context.fill();

//     context.beginPath();
//     context.arc(particleC.position.getX(), particleC.position.getY(),
//       particleC.radius, 0, Math.PI * 2, false);
//     context.fill();

//     context.beginPath();
//     context.moveTo(particleA.position.getX(), particleA.position.getY());
//     context.lineTo(particleB.position.getX(), particleB.position.getY());
//     context.lineTo(particleC.position.getX(), particleC.position.getY());
//     context.lineTo(particleA.position.getX(), particleA.position.getY());
//     context.stroke();

//     requestAnimationFrame(update);
//   }


//   function spring(p0, p1, separation) {
//     // same as first two, just using p0's position instead of springPoint
//     var distance = p0.position.subtract(p1.position);

//     // subtract spring length from distance
//     distance.setLength(distance.getLength() - separation);

//     // multiply by stiffness constant
//     springForce = distance.multiply(k);

//     p1.velocity.addTo(springForce);

//     // instead of calling spring fn again with opposite p0/p1, 
//     // you can just subtract springForce from p0
//     p0.velocity.subtractFrom(springForce);
//   }

// };
