/**
 * regeneration
 */

window.onload = function() {
  var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;


  var mouseX = width / 2;

  var numParticles = 1000;
  var particles = [];
  for (var i = 0; i < numParticles; i++) {
    var p = new Particle(mouseX, height, Math.random() * 8 + 5, -Math.PI / 2 + (Math.random() * .4 - .2), 0.2);
    p.radius = Math.random() * 10 + 2;
    particles.push(p);
  }


  render();
  function render() {
    context.clearRect(0,0,width,height);

    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];

      p.update();

      if (p.position.getY() - p.radius > height) {
        p.position.setX(mouseX);
        p.position.setY(height);

        p.velocity.setLength(Math.random() * 8 + 5);
        p.velocity.setAngle(-Math.PI / 2 + (Math.random() * .4 - .2));
      }

      context.beginPath();
      context.arc(p.position.getX(), p.position.getY(), p.radius, 0, Math.PI*2, false);
      context.fill();
    }

    requestAnimationFrame(render);
  }

  document.body.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
  });
};