$(document).ready(function () {
  new WOW().init();

  $('.collapse').removeClass('nav-item');

  $(".nav-item").click(function (event) {
    $(".navbar-collapse, .nav-item").removeClass("show");
  });

  //плавный якорь
  $(function () {
    $('a[href^="#"]').on("click", function (event) {
      // отменяем стандартное действие
      event.preventDefault();

      var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
      /*
       * sc - в переменную заносим информацию о том, к какому блоку надо перейти
       * dn - определяем положение блока на странице
       */

      $("html, body").animate({
          scrollTop: dn,
        },
        1000
      );

      /*
       * 1000 скорость перехода в миллисекундах
       */
    });
  });
});