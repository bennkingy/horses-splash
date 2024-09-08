$("#container").mousemove(function(e) {
  parallaxIt(e, ".slide", -80);
  parallaxIt(e, ".bg", -25);
  parallaxIt(e, ".slideTwo", -60);
  parallaxIt(e, ".slideThree", -60);
});

function parallaxIt(e, target, movement) {
  var $this = $("#container");
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {
    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}


// Add click events for slideTwo and slideThree
$(".slideTwo, .slideThree").click(function() {
  alert("Coming soon!");
});

$(".slide").click(function() {
  window.open("https://www.berahorses.xyz", "_blank");
});