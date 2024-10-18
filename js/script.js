/* jQuery */

/* ****************************************
js-drawer
**************************************** */
jQuery("#js-drawer-icon").on("click", function (e) {
  e.preventDefault();
  jQuery("#js-drawer-icon").toggleClass("is-checked");
  jQuery("#js-drawer-content").toggleClass("is-checked");
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
    // 768: {
    //   slidesPerView: 4,
    // },
    // // // スライドの表示枚数：1024px以上の場合
    // 1024: {
    //   slidesPerView: 5,
    // },
    // スライドの表示枚数：1440px以上の場合
    // 1440: {
    //   slidesPerView: 6,
    // },
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
  spaceBetween: 14, //横のカードとの間（margin-right:*pxになる）
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
      slidesPerView: 3.37,
    },
  },
  // speed: 6000, // ループの時間
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
