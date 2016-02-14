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



// /**
//  * Circle / Point Collision
//  */
// window.onload = function() {
//   var canvas = document.getElementById("canvas"),
//     context = canvas.getContext("2d"),
//     width = canvas.width = window.innerWidth,
//     height = canvas.height = window.innerHeight;

//   var circle = {
//     x: Math.random() * width,
//     y: Math.random() * height,
//     radius: 50 * Math.random() + 100
//   };


//   document.body.addEventListener('mousemove', function(e) {

//     if (utils.circlePointCollision(e.clientX, e.clientY, circle)) {
//       context.fillStyle = '#f66';
//     } else {
//       context.fillStyle = '#999';
//     }

//     context.clearRect(0, 0, width, height);
//     context.beginPath();
//     context.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, false);
//     context.fill();

//   });
// };



// /**
//  * Rectangle / Point Collision
//  */
// window.onload = function() {
//   var canvas = document.getElementById("canvas"),
//     context = canvas.getContext("2d"),
//     width = canvas.width = window.innerWidth,
//     height = canvas.height = window.innerHeight;

//   var rect = {
//     x: 300,
//     y: 200,
//     width: -500,
//     height: -400
//   };


//   document.body.addEventListener('mousemove', function(e) {

//     if (utils.pointInRect(e.clientX, e.clientY, rect)) {
//       console.log('hello world')
//       context.fillStyle = '#f66';
//     } else {
//       context.fillStyle = '#999';
//     }

//     context.fillRect(rect.x, rect.y, rect.width, rect.height);
//   });
// };




/**
 * Rectangle / Rectangle Collision
 */
window.onload = function() {
  var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;

  var rect0 = {
    x: 300,
    y: 200,
    width: 200,
    height: 150
  };

  var rect1 = {
    x: 0,
    y: 0,
    width: 100,
    height: 100
  };


  document.body.addEventListener('mousemove', function(e) {
    rect1.x = e.clientX - 50;
    rect1.y = e.clientY - 50;

    if (utils.rectIntersect(rect0, rect1)) {
      context.fillStyle = '#f66';
    } else {
      context.fillStyle = '#999';
    }

    context.clearRect(0, 0, width, height);
    context.fillRect(rect0.x, rect0.y, rect0.width, rect0.height);
    context.fillRect(rect1.x, rect1.y, rect1.width, rect1.height);
  });
};