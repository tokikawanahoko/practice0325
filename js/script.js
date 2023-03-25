//sp版メニューbtn
$(".btn").click(function () {
  $(".spnav").slideToggle(400);
  $(this).toggleClass("close");
});

//メイン写真スライドさせる
$(".slider").slick({
  autoplay: true,
  autoplaySpeed: 4000,
  fade: true,
  speed: 2000,
  //左右の矢印表示、非表示
  responsive: [
    {
      breakpoint: 991,
      settings: {
        arrows: false,
      },
    },
  ],
});

// ページトップへ
$(window).scroll(function () {
  var sc = $(window).scrollTop();
  // console.log(sc);
  if (sc > 200) {
    $("footer p.pagetop").fadeIn(500);
  } else {
    $("footer p.pagetop").fadeOut(500);
  }
});

//scroll_effect
$(window).scroll(function () {
  var scrollAnimationElm = document.querySelectorAll(".scroll_up");
  var scrollAnimationFunc = function () {
    for (var i = 0; i < scrollAnimationElm.length; i++) {
      var triggerMargin = 100;
      if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
        scrollAnimationElm[i].classList.add("on");
      }
    }
  };
  window.addEventListener("load", scrollAnimationFunc);
  window.addEventListener("scroll", scrollAnimationFunc);
});
