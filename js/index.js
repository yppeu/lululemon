// 스와이퍼
var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var swiper = new Swiper(".mySwiper2", {
  autoplay: {
    delay: 2000,
  },
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});
var swiper = new Swiper(".mySwiper3", {
  autoplay: {
    delay: 2000,
  },
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});
var swiper = new Swiper(".mySwiper4", {
  autoplay: {
    delay: 4000,
  },
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// 헤더 스크롤 시 백그라운드 생성
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $("header").addClass("active");
    } else {
      $("header").removeClass("active");
    }
  });
  // nav 풀드롭 + 햄버거
  var gnb = $("#gnb");
  // 마우스 오버 시
  // mouseenter는 오로지 자기 자신에게 마우스 포인터가 와야만 발생
  gnb.mouseenter(function () {
    $(".inner-menu").show();
    // menu bg
    // 선택한 요소의 세로 값(패딩 포함)을 가져옴
    var menuHeight = $("#header").outerHeight();
    var inmeHegiht = $(".inner-menu").outerHeight();
    console.log(menuHeight, inmeHegiht);
    $(".hd_bg").css({
      top: menuHeight + "px",
      height: inmeHegiht + 80 + "px",
    });
    $("#header").css("background", "#fff");
    // $("#header").css("border-bottom", "1px solid #ccc");
  });
  // 마우스  leave 시
  gnb.mouseleave(function () {
    $(".inner-menu").hide();
    $(".hd_bg").css("height", "0");
    $("#header").css("background", "");
    // $("#header").css("border-bottom", "");
  });
  //dept2 hover시 dept1 active
  $(".dept1").mouseenter(function () {
    $(this).children().addClass("active");
    $(this).siblings().children().removeClass("active");
  });
  $(".dept1").mouseleave(function () {
    $(this).children().removeClass("active");
  });

  /* 햄버거 메뉴 */
  $(".burger").click(function () {
    $(this).toggleClass("active");
    $(".menu_open").slideToggle();
  });
});
