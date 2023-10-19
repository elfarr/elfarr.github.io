
$(document).ready(function() {
$('.single-items').slick({
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: "<img src='img/l.png' class='prev' style='width: 50px; ' alt='1'>",
    nextArrow: "<img src='img/r.png' class='next' style='width: 50px'  alt='2'>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  });

})