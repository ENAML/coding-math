

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
//   var springPoint2 = {
//     x: utils.randomRange(0, width),
//     y: utils.randomRange(0, height)
//   }

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

//   weight.addSpring(springPoint, k, springLength);
//   weight.addSpring(springPoint2, k, springLength);

//   document.body.addEventListener('mousemove', function(e) {
//     springPoint.x = e.clientX;
//     springPoint.y = e.clientY;
//   });

//   update();
//   function update() {
//     context.clearRect(0, 0, width, height);


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
//     context.moveTo(springPoint2.x, springPoint2.y);
//     context.lineTo(weight.x, weight.y);
//     context.lineTo(springPoint.x, springPoint.y);
//     context.stroke();

//     requestAnimationFrame(update);
//   }

// };
// 




window.onload = function() {
  var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight,
    sun1 = new Particle(width / 2, height / 2, 0, 0),
    sun2 =  new Particle(width, height / 2, 0, 0),
    emitter = {
      x: 0,
      y: height / 2
    },
    particles = [],
    numParticles = 3000;


  sun1.mass = -20000;
  sun1.radius = 10;
  sun2.mass = 500000;
  sun2.radius = 20;
  
  for(var i = 0; i < numParticles; i += 1) {
    var p = new Particle(emitter.x, emitter.y, utils.randomRange(7, 8), utils.randomRange(-0.5, 0.5));
    p.addGravitation(sun1);
    p.addGravitation(sun2);
    p.radius = 3;
    particles.push(p);
  }


  update();

  function update() {
    context.clearRect(0, 0, width, height);

    draw(sun1, "yellow");
    draw(sun2, "yellow");

    for(var i = 0; i < numParticles; i += 1) {
      var p = particles[i];
      p.update();
      draw(p, "black");
      if(p.x > width ||
        p.x < 0 ||
        p.y > height ||
        p.y < 0) {
        p.x = emitter.x;
        p.y = emitter.y;
        p.setSpeed(utils.randomRange(7, 8));
        p.setHeading(utils.randomRange(-.5, .5));
      }
    }

    requestAnimationFrame(update);
  }

  function draw(p, color) {
    context.fillStyle = color;
    context.beginPath();
    context.arc(p.x, p.y, p.radius, 0, Math.PI * 2, false);
    context.fill();
  }

};

