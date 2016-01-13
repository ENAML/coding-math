// window.onload = function() {
//   var canvas = document.getElementById("canvas"),
//     context = canvas.getContext("2d"),
//     width = canvas.width = window.innerWidth,
//     height = canvas.height = window.innerHeight;


//   var p = new Particle(100, height, 10, -Math.PI / 2);

//   var accl = new Vector(0.1, 0.1);


//   render();
//   function render() {
//     context.clearRect(0,0,width,height);

//     p.accelerate(accl);

//     p.update();

//     context.beginPath();
//     context.arc(p.position.getX(), p.position.getY(), 10, 0, Math.PI*2, false);
//     context.fill();


//     requestAnimationFrame(render);
//   }

//   document.body.addEventListener('mousemove', function(e) {

//   });
// };



window.onload = function() {
  var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;


  var numParticles = 1000;
  var particles = [];
  for (var i = 0; i < numParticles; i++) {
    particles.push(new Particle(width / 2, height / 3, Math.random() * 5 + 2, Math.random() * Math.PI * 2, Math.random()));
  }


  render();
  function render() {
    context.clearRect(0,0,width,height);

    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];


      // p.accelerate(gravity);
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