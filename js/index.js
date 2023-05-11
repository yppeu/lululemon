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
    // 화면의 넓이가 300px 이상일 때
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // 화면의 넓이가 600px 이상일 때
    600: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1000: {
      slidesPerView: 4,
      spaceBetween: 40,
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
    // 화면의 넓이가 300px 이상일 때
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // 화면의 넓이가 600px 이상일 때
    600: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1000: {
      slidesPerView: 4,
      spaceBetween: 40,
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
  breakpoints: {
    // 화면의 넓이가 300px 이상일 때
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // 화면의 넓이가 600px 이상일 때
    600: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
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
    $("#header").css({
      background: "#fff",
      "border-bottom": "1px solid #ccc",
    });
    // menu bg
    // 선택한 요소의 세로 값(패딩 포함)을 가져옴
    var menuHeight = $("#header").outerHeight();
    var inmeHeight = $(".inner-menu").outerHeight();
    console.log(menuHeight, inmeHeight);
    $(".hd_bg").css({
      top: menuHeight + "px",
      height: inmeHeight + 80 + "px",
    });
  });
  // 마우스  leave 시
  gnb.mouseleave(function () {
    $(".inner-menu").hide();
    $(".hd_bg").css("height", "0");
    $("#header").css({
      background: "",
      "border-bottom": "",
    });
    // console.log(1);
    // $("#header").addClass("border-bottom-none");
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
    if ($(".menu_box").css("display") == "none") {
      $(".menu_box").css("display", "block");
    } else {
      $(".menu_box").css("display", "none");
    }
  });
});
