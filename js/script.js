// alert("おはよう");

/* jQuery */
/*js-drawer*/
jQuery("#js-drawer-icon").on("click", function (e) {
  e.preventDefault();
  jQuery("#js-drawer-icon").toggleClass("is-checked");
  jQuery("#js-drawer-content").toggleClass("is-checked");
});

// jQuery(".js-accordion").on("click", function (e) {
//   e.preventDefault();

//   if (jQuery(this).parent().hasClass("is-open")) {
//     // thisで押した要素を取得する
//     jQuery(this).parent().removeClass("is-open");
//     // スライドしながら戻る
//     jQuery(this).next().slideUp();
//   } else {
//     jQuery(this).parent().addClass("is-open");
//     jQuery(this).next().slideDown();
//   }
// });

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

const swiperSpot = new Swiper("#js-spot-swiper", {
  // Optional parameters
  // direction: "vertical",
  loop: true, //無限再生
  // slidesPerView: 1, // 一度に表示する枚数
  spaceBetween: 3, //横のカードとの間
  breakpoints: {
    // スライドの表示枚数：768px以上の場合
    768: {
      slidesPerView: 2.5,
      // loop: true, //無限再生
    },
    // // スライドの表示枚数：1024px以上の場合
    1024: {
      slidesPerView: 3,
      // loop: false, //無限再生
    },
    // スライドの表示枚数：1440px以上の場合
    1440: {
      slidesPerView: 3.37,
      // loop: false, //無限再生
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

/** qa js-accordion */
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
