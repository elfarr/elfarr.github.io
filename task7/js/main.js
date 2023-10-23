$(document).ready(function() {
  $(".single-items").slick({
      dots: true,
      infinite: true,
      nextArrow: "<img src='img/r.png' class='next'"+
          "style='width: 50px'  alt='2'>",
      prevArrow: "<img src='img/l.png' class='prev'"+
          "style='width: 50px; ' alt='1'>",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            dots: true,
            infinite: true,
            slidesToScroll: 1,
            slidesToShow: 1
          }
        }
      ],
      slidesToScroll: 1,
      slidesToShow: 3
    });
  });
