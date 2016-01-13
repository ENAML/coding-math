// /**
//  * Circle Collision
//  */
// window.onload = function() {
//   var canvas = document.getElementById("canvas"),
//     context = canvas.getContext("2d"),
//     width = canvas.width = window.innerWidth,
//     height = canvas.height = window.innerHeight;

//   var circle0 = {
//     x: Math.random() * width,
//     y: Math.random() * height,
//     radius: 50 * Math.random() + 100
//   };

//   var circle1 = {
//     x: Math.random() * width,
//     y: Math.random() * height,
//     radius: 50 * Math.random() + 100
//   };

//   document.body.addEventListener('mousemove', function(e) {
//     circle1.x = e.clientX;
//     circle1.y = e.clientY;

//     if (utils.circleCollision(circle0, circle1)) {
//       context.fillStyle = '#f66';
//     } else {
//       context.fillStyle = '#999';
//     }

//     context.clearRect(0, 0, width, height);
//     context.beginPath();
//     context.arc(circle0.x, circle0.y, circle0.radius, 0, Math.PI * 2, false);
//     context.fill();

//     context.beginPath();
//     context.arc(circle1.x, circle1.y, circle1.radius, 0, Math.PI * 2, false);
//     context.fill();
//   });
// };



/**
 * Circle / Point Collision
 */
window.onload = function() {
  var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;

  var circle = {
    x: Math.random() * width,
    y: Math.random() * height,
    radius: 50 * Math.random() + 100
  };


  document.body.addEventListener('mousemove', function(e) {

    if (utils.circlePointCollision(e.clientX, e.clientY, circle)) {
      context.fillStyle = '#f66';
    } else {
      context.fillStyle = '#999';
    }

    context.clearRect(0, 0, width, height);
    context.beginPath();
    context.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, false);
    context.fill();

  });
};