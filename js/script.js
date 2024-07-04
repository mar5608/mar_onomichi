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
