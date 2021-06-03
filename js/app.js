var navctrl = document.getElementsByClassName("navbar-ctrl");
var btn = document.getElementById("myBtn");

function scrollfn() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navctrl[0].style.background = "white";
    btn.style.display = "block";
  } else {
    navctrl[0].style.background = "transparent";
    btn.style.display = "none";
  }
}

window.onscroll = function () {
  scrollfn();
};

function topFunction() {
  window.history.replaceState("", document.title, window.location.pathname);
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function backontop() {
  window.history.replaceState("", document.title, window.location.pathname);
  window.scrollTo(0, 0);
}

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
