window.onload = function() {
  var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;

  var centerX = width / 2;
  var centerY = height / 2;

  // var offset = height * 0.4;
  var baseRadius = 50;
  var offset = 10;

  var speed = 0.05;

  var angle = 0;

  render();

  function render() {
    // var y = centerY + Math.sin(angle) * offset;
    var radius = baseRadius + (Math.sin(angle) * offset);

    context.clearRect(0,0,width,height);
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, Math.PI * 2, false);
    context.fill();

    angle += speed;

    requestAnimationFrame(render);
  }
};