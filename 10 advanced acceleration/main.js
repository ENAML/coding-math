// window.onload = function() {
//   var canvas = document.getElementById("canvas"),
//     context = canvas.getContext("2d"),
//     width = canvas.width = window.innerWidth,
//     height = canvas.height = window.innerHeight;


//   var ship = new Particle(width / 2, height / 2, 0, 0);
//   var thrust = new Vector(0, 0);


//   render();
//   function render() {
//     context.clearRect(0,0,width,height);

//     ship.accelerate(thrust);
//     ship.update();

//     context.save();
//     context.translate(ship.position.getX(), ship.position.getY());
//     context.rotate(ship.velocity.getAngle());

//     context.beginPath();

//     context.moveTo(20, 0);
//     context.lineTo(-20, -14);
//     context.lineTo(-20, 14);
//     context.lineTo(20, 0);

//     context.stroke();

//     context.restore();


//     if (ship.position.getX() > width) {
//       ship.position.setX(0);
//     } else if (ship.position.getX() < 0) {
//       ship.position.setX(width);
//     }

//     if (ship.position.getY() < 0) {
//       ship.position.setY(height);
//     } else if (ship.position.getY() > height) {
//       ship.position.setY(0);
//     }

//     requestAnimationFrame(render);
//   }

//   document.body.addEventListener('keydown', function(e) {
//     switch(e.keyCode) {
//       case 38: // up
//         thrust.setY(-0.1);
//         break;
//       case 40: // down
//         thrust.setY(0.1);
//         break;
//       case 37: // left
//         thrust.setX(-0.1);
//         break;
//       case 39: // right
//         thrust.setX(0.1);
//         break;
//       default:
//         break;
//     }
//   });

//   document.body.addEventListener('keyup', function(e) {
//     switch(e.keyCode) {
//       case 38: // up
//         thrust.setY(0);
//         break;
//       case 40: // down
//         thrust.setY(0);
//         break;
//       case 37: // left
//         thrust.setX(0);
//         break;
//       case 39: // right
//         thrust.setX(0);
//         break;
//       default:
//         break;
//     }
//   });
// };



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
  ship.friction = 0.97;

  var thrust = new Vector(0, 0);

  var bullets = [];


  render();
  function render() {

    if (turningLeft) {
      angle -= 0.05;
    }
    if (turningRight) {
      angle += 0.05;
    }

    thrust.setAngle(angle);
    if (thrusting) {
      thrust.setLength(0.3);
    } else {
      thrust.setLength(0);
    }

    ship.accelerate(thrust);
    ship.update();

    context.clearRect(0,0,width,height);

    context.save();
    context.translate(ship.position.getX(), ship.position.getY());
    context.rotate(angle);


    if (ship.position.getX() > width) {
      ship.position.setX(0);
    } else if (ship.position.getX() < 0) {
      ship.position.setX(width);
    }

    if (ship.position.getY() < 0) {
      ship.position.setY(height);
    } else if (ship.position.getY() > height) {
      ship.position.setY(0);
    }

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


    for (var i = 0; i < bullets.length; i++) {
      bullets[i].update();
      context.beginPath();
      context.arc(bullets[i].position.getX(), bullets[i].position.getY(), 3, 0, Math.PI*2, false);
      context.fill(); 
    }

    requestAnimationFrame(render);
  }

  function newBullet() {
    bullets.push(new Particle(ship.position.getX(), ship.position.getY(), 7, angle));
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
        newBullet();
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

