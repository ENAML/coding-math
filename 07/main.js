window.onload = function() {
  var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;



  var v1 = new Vector(10, 5);
  console.log(v1.getLength());

  var v2 = v1.multiply(2);
  console.log(v2.getLength());

  // render();

  function render() {
    context.clearRect(0,0,width,height);



    requestAnimationFrame(render);
  }

  document.body.addEventListener('mousemove', function(e) {

  });
};