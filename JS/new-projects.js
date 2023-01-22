var carouselA = document.getElementById('carouselExampleControls');
var carouselB = document.getElementById('carouselExampleControls2');

carouselA.addEventListener('slide.bs.carousel', function(e) {
  var bsCarouselB = bootstrap.Carousel.getInstance(carouselB);
  bsCarouselB.to(e.to);
});