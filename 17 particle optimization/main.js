/**
 * Updated version of episode 11 with new particle API implemented
 */

// window.onload = function() {
//   var canvas = document.getElementById("canvas"),
//     context = canvas.getContext("2d"),
//     width = canvas.width = window.innerWidth,
//     height = canvas.height = window.innerHeight;

//   var sun = new Particle(width/2, height/2, 0, 0);
//   sun.mass = 20000;

//   var planet = new Particle(width/2 + 200, height/2, 10, -Math.PI / 2);


//   render();
//   function render() {
//     context.clearRect(0,0,width,height);

//     planet.gravitateTo(sun);
//     planet.update();

//     context.beginPath();
//     context.fillStyle = '#000000';
//     context.arc(sun.x, sun.y, 20, 0, Math.PI * 2, false);
//     context.fill();


//     context.beginPath();
//     context.fillStyle = '#0000ff';
//     context.arc(planet.x, planet.y, 5, 0, Math.PI * 2, false);
//     context.fill();



//     requestAnimationFrame(render);
//   }

// };


/**
 * Updated version of ep 14 - springs with length
 */

// window.onload = function() {
//   var canvas = document.getElementById("canvas"),
//     context = canvas.getContext("2d"),
//     width = canvas.width = window.innerWidth,
//     height = canvas.height = window.innerHeight;

//   // base of spring
//   var springPoint = {
//     x: width/2,
//     y: height/2,
//   };

//   // thing and end of 'spring'
//   var weight = new Particle(Math.random() * width,
//     Math.random() * height, 50, Math.random() * Math.PI * 2);
//   // var weight = new Particle(Math.random() * width,
//   //   Math.random() * height, 50, Math.random() * Math.PI * 2, 0.5); // added gravity
//   weight.radius = 20;
//   weight.friction = 0.9;

//   // spring stiffness constant
//   k = 0.1;

//   // spring length - since spring has a size in this example, give it length
//   var springLength = 100;

//   document.body.addEventListener('mousemove', function(e) {
//     springPoint.x = e.clientX;
//     springPoint.y = e.clientY;
//   });

//   update();
//   function update() {
//     context.clearRect(0, 0, width, height);

//     // distance (length) representing weight's distance from springPoint
//     var dx = springPoint.x - weight.x;
//     var dy = springPoint.y - weight.y;
//     var distance = Math.sqrt(dx * dx + dy * dy);

//     // subtracting springLength to account for spring's size
//     // then multiply by k (stiffness constant)
//     var springForce = (distance - springLength) * k;

//     // get acceleration
//     var ax = dx / distance * springForce;
//     var ay = dy / distance * springForce;

//     weight.vx += ax;
//     weight.vy += ay;

//     weight.update();

//     // weight
//     context.beginPath();
//     context.arc(weight.x,
//       weight.y,
//       weight.radius,
//       0, Math.PI * 2, false);
//     context.fill();

//     // springPoint
//     context.beginPath();
//     context.arc(springPoint.x,
//       springPoint.y,
//       5,
//       0, Math.PI * 2, false);
//     context.fill();

//     context.beginPath();
//     context.moveTo(weight.x, weight.y);
//     context.lineTo(springPoint.x, springPoint.y);
//     context.stroke();

//     requestAnimationFrame(update);
//   }

// };




/**
 * Updated version of ep 14 - springs with length
 */


window.onload = function() {
  var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;

  var angle = 0;
  var turningLeft = false;
  var turningRight = false;
  var thrusting = false;


  var ship = new Particle(width / 2, height / 2, 0, 0);
  ship.friction = 0.99;

  var thrust = {
    ax: 0,
    ay: 0
  };



  render();
  function render() {

    if (turningLeft) {
      angle -= 0.07;
    }
    if (turningRight) {
      angle += 0.07;
    }


    /**
     * Wildly simplified thrust functionality:
     * 
     * - Creates arbitrary length (the hypotenuse of vector) of 0.3
     * - Get Sin and Cos of current angle (which are (ax) and (ay) if 
     * hypotenuse of vector is 1)
     * - Multiply it to newThrustLength to get acctual (ax) and (ay)
     */
    if (thrusting) {
      var newThrustLength = 0.3;

      var angleCos = Math.cos(angle);
      var angleSin = Math.sin(angle);

      thrust.ax = angleCos * newThrustLength;
      thrust.ay = angleSin * newThrustLength;
    } else {
      thrust.ax = 0;
      thrust.ay = 0;
    }

    ship.accelerate(thrust.ax, thrust.ay);
    ship.update();

    if (ship.x > width) {
      ship.x = 0;
    } else if (ship.x < 0) {
      ship.x = width;
    }

    if (ship.y < 0) {
      ship.y = height;
    } else if (ship.y > height) {
      ship.y = 0;
    }


    context.clearRect(0,0,width,height);

    context.save();
    context.translate(ship.x, ship.y);
    context.rotate(angle);
    

    context.beginPath();

    context.moveTo(20, 0);
    context.lineTo(-20, -14);
    context.lineTo(-20, 14);
    context.lineTo(20, 0);
    if (thrusting) {
      context.moveTo(-20, 0);
      context.lineTo(-40, 0);
    }

    context.stroke();

    context.restore();


    requestAnimationFrame(render);
  }

  document.body.addEventListener('keydown', function(e) {
    switch(e.keyCode) {
      case 38: // up
        thrusting = true;
        break;
      case 37: // left
        turningLeft = true;
        break;
      case 39: // right
        turningRight = true;
        break;
      case 32: // bullet
        // newBullet();
        break;
      default:
        break;
    }
  });

  document.body.addEventListener('keyup', function(e) {
    switch(e.keyCode) {
      case 38: // up
        thrusting = false;
        break;
      case 37: // left
        turningLeft = false;
        break;
      case 39: // right
        turningRight = false;
        break;
      default:
        break;
    }
  });
};