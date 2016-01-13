window.onload = function() {
  var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;


  var numParticles = 5000;
  var particles = [];
  for (var i = 0; i < numParticles; i++) {
    particles.push(new Particle(width / 2, height / 2, Math.random() * 4 + 1, Math.random() * Math.PI * 2));
  }


  render();
  function render() {
    context.clearRect(0,0,width,height);

    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];

      p.update();

      context.beginPath();
      context.arc(p.position.getX(), p.position.getY(), 2, 0, Math.PI*2, false);
      context.fill();
    }

    requestAnimationFrame(render);
  }

  document.body.addEventListener('mousemove', function(e) {

  });
};