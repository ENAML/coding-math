/**
 * "Real" Friction
 * 
 * - uses a friction vector, but requires many calls to
 * trig functions and squaring / square roots to calc.
 */

// window.onload = function() {
//   var canvas = document.getElementById("canvas"),
//     context = canvas.getContext("2d"),
//     width = canvas.width = window.innerWidth,
//     height = canvas.height = window.innerHeight;

//   var p = new Particle(width / 2, height / 2, 10, Math.random() * Math.PI * 2);

//   var friction = new Vector(null, null, 0, 0.15);

//   render();
//   function render() {
//     context.clearRect(0,0,width,height);

//     friction.setAngle(p.velocity.getAngle());

//     if (p.velocity.getLength() > friction.getLength()) {
//       p.velocity.subtractFrom(friction);
//     } else {
//       p.velocity.setLength(0);
//     }    

//     p.update();

//     context.beginPath();
//     context.arc(p.position.getX(), p.position.getY(), p.radius, 0, Math.PI*2, false);
//     context.fill();
    

//     requestAnimationFrame(render);
//   }

//   document.body.addEventListener('mousemove', function(e) {
//     mouseX = e.clientX;
//   });
// };


/**
 * Simple Friction
 *
 * - less accurate, but since friction is just a percentage,
 * fewer calls to complicated math functions that can be taxing
 * on CPUs if used on many objects per frame.
 */

window.onload = function() {
  var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;

  var p = new Particle(width / 2, height / 2, 10, Math.random() * Math.PI * 2);
  p.radius = 10;
  p.friction = 0.9;

  render();
  function render() {
    context.clearRect(0,0,width,height);

    p.update();

    context.beginPath();
    context.arc(p.position.getX(), p.position.getY(), p.radius, 0, Math.PI*2, false);
    context.fill();
    

    requestAnimationFrame(render);
  }

  document.body.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
  });
};