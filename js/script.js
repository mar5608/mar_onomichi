/* jQuery */

/* ****************************************
js-drawer
**************************************** */
jQuery("#js-drawer-icon").on("click", function (e) {
  e.preventDefault();
  jQuery("#js-drawer-icon").toggleClass("is-checked");
  jQuery("#js-drawer-content").toggleClass("is-checked");
});

/** スムーススクロール*/
/** drawer 制御 */
jQuery('#js-drawer-content a[href^="#"]').on("click", function (e) {
  e.preventDefault();
  jQuery("#js-drawer-icon").removeClass("is-checked");
  jQuery("#js-drawer-content").removeClass("is-checked");
});

jQuery('a[href^="#"]').on("click", function (e) {
  const speed = 300;
  const id = jQuery(this).attr("href");
  const target = jQuery("#" == id ? "html" : id);
  const position = jQuery(target).offset().top;
  jQuery("html,body").animate(
    {
      scrollTop: position,
    },
    speed,
    "swing" // swing or liner
  );
  // jQuery("html,body").animate(
  //   {
  //     scrollTop: 0,
  //   },
  //   1000,
  //   "swing" // swing or liner
  // );
});

/* ****************************************
ABOUT
swiper
**************************************** */
const swiperAbout = new Swiper("#js-about-swiper", {
  // Optional parameters
  // direction: "vertical",
  loop: true, //無限再生
  slidesPerView: 3, // 一度に表示する枚数
  spaceBetween: 0, //横のカードとの間
  breakpoints: {
    // スライドの表示枚数：768px以上の場合
    768: {
      slidesPerView: 5,
    },
    // // スライドの表示枚数：1024px以上の場合
    1024: {
      slidesPerView: 6,
    },
    // スライドの表示枚数：1440px以上の場合
    1440: {
      slidesPerView: 7,
    },
  },
  speed: 6000, // ループの時間
  allowTouchMove: false, // スワイプ無効
  autoplay: {
    delay: 0, // 途切れなくループ
  },
});

/* ****************************************
SPOT
swiper
**************************************** */
const swiperSpot = new Swiper("#js-spot-swiper", {
  // Optional parameters
  // direction: "vertical",
  loop: true, //無限再生

  centeredSlides: true, // 中央寄せにする
  slidesPerView: 1.53, // 一度に表示する枚数
  spaceBetween: 0, //横のカードとの間（margin-right:*pxになる）
  breakpoints: {
    // スライドの表示枚数：768px以上の場合
    768: {
      centeredSlides: true, // 中央寄せにする
      slidesPerView: 1.5, // 一度に表示する枚数
      spaceBetween: 10, //横のカードとの間（margin-right:*pxになる）
    },
    // // スライドの表示枚数：1024px以上の場合
    1024: {
      centeredSlides: false, // 中央寄せにしない
      slidesPerView: 3,
    },
    // スライドの表示枚数：1440px以上の場合
    1440: {
      centeredSlides: false, // 中央寄せにしない
      // slidesPerView: 3.37,
      slidesPerView: 6.8,
    },
  },
  allowTouchMove: true, // スワイプ無効
  // autoplay: {
  //   delay: 0, // 途切れなくループ
  // },
  // If we need pagination
  // pagination: {
  //   el: "#js-spot-pagination",
  // },

  // Navigation arrows
  navigation: {
    nextEl: "#js-spot-next",
    prevEl: "#js-spot-prev",
  },
});

/* ****************************************
QA
js-accordion
**************************************** */
jQuery(".js-accordion").on("click", function (e) {
  e.preventDefault();

  if (jQuery(this).parent().hasClass("is-open")) {
    // thisで押した要素を取得する
    jQuery(this).parent().removeClass("is-open");
    // スライドしながら戻る
    jQuery(this).next().slideUp();
  } else {
    jQuery(this).parent().addClass("is-open");
    jQuery(this).next().slideDown();
  }
});

/** topに戻る */
jQuery(window).on("scroll", function () {
  if (100 < jQuery(window).scrollTop()) {
    jQuery("#js-pagetop").addClass("is-show");
  } else {
    jQuery("#js-pagetop").removeClass("is-show");
  }
});

/* ****************************************
CONTACT

**************************************** */
/** 必須項目入力*/
// $(document).ready(function () {
//   const $submitBtn = $("#js-submit");
//   // $("#form input,#form textarea").on("change", function ()
//   $(".contact__form input").on("input", function () {
//     if (
//       $('.contact__form input[type="text"]').val() !== "" &&
//       $('.contact__form input[type="email"]').val() !== ""
//     ) {
//       $submitBtn.prop("disabled", false);
//     } else {
//       $submitBtn.prop("disabled", true);
//     }
//   });
// });

const form = jQuery("#js-form");
const inputElements = form.find(".js-form-input");

form.on("submit", function (e) {
  e.preventDefault();

  inputElements.removeClass("is-error");
  const isValid = form[0].checkValidity();
  if (isValid) {
    alert("送信完了");
    form[0].reset();
  }
});

inputElements.on("invalid", function () {
  jQuery(this).addClass("is-error");
});

inputElements.on("input", function () {
  if (this.checkValidity()) {
    jQuery(this).removeClass("is-error");
  }
});
