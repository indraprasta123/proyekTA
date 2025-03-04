//ham-menu

$(document).ready(function () {
  $(".head").show();
  $("#show-menu").click(function () {
    if ($(".head").hasClass("close-menu")) {
      $(".head").removeClass("close-menu");
      $("body").removeClass("rm-scroll");
      $(".head__menu__list").addClass("animation");
    } else {
      $("body").addClass("rm-scroll");
      $(".head").addClass("close-menu");
      $(".head__menu__list").removeClass("animation");
      $(".head__menu__list").removeClass("animated");
    }
  });
  $(".p-home").addClass("p-home--animation");
});

//animasi ham menu & close menu
var swiper = new Swiper(".swiper-container.box", {
  pagination: ".swiper-pagination",
  paginationClickable: true,
  effect: "coverflow",
  loop: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflow: {
    rotate: 0,
    stretch: 100,
    depth: 150,
    modifier: 1.2,
    slideShadows: true,
  },
});

//animasi
const elementsHome = document.querySelectorAll(".animation");

let options = {
  root: null,
};
const callbacks = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animated");
    }
  });
};

const observerHome = new IntersectionObserver(callbacks, options);
elementsHome.forEach((item) => {
  observerHome.observe(item);
});

//caraousel with slick dots
$(".olahan__content__slider1 , .menu__content__slider1").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
});

//caraousel autoplay
$(".testimonial__content__slider1").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
});
//caraousel with slick dots responsive mobile
$(".olahan__content__slider2 , .menu__content__slider2").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
});
//caraousel autoplay responsive mobile
$(".testimonial__content__slider2").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});

//caraousel with slick dots responsive login
$(".login__slider1,.sign-up__slider1").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
});

//accordion
function accordion(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("acc-show") == -1) {
    x.className += " acc-show";
  } else {
    x.className = x.className.replace(" acc-show", "");
  }
  var y = document.getElementById(`${id}-arrow`);
  console.log(y);
  if (y.className.indexOf("rotate") == -1) {
    y.className += " rotate";
  } else {
    y.className = y.className.replace(" rotate", "");
  }
}

//date-picker function
