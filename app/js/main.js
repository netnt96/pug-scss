$(document).ready(function () {

  //sticky
  $(window).bind('scroll', function () {
    if ($(window).scrollTop() > 0) {
      $('.header').addClass('sticky');
    } else {
      $('.header').removeClass('sticky');
    }
  });

  $('.js-menu-item').each(function () {
    $(this).children('.js-menulink').on('mouseover', function () {
      var menuItem = $(this).parent('.js-menu-item');

      if (menuItem.hasClass('main-menu__item--active')) {
        menuItem.children('.js-submenu').slideUp(300);
        $(this).removeClass('main-menu__item--active');
      }

      else {
        $('.main-menu > li').removeClass('main-menu__item--active');
        $('.js-submenu').slideUp(300);
        menuItem.children('.js-submenu').slideDown(400);
        menuItem.addClass('main-menu__item--active');
      }
    })

  })

  $('.js-sub-item').each(function () {
    $(this).children('.js-sub-link').on('mouseover', function () {
      var menuItem = $(this).parent('.js-sub-item');

      if (menuItem.hasClass('main-menu__item--active')) {
        menuItem.children('.js-chilmenu').fadeOut(200);
        $(this).addClass('main-menu__item--active');
      }

      else {
        $('.sub-menu > li').removeClass('main-menu__item--active');
        $('.js-chilmenu').fadeOut(200);
        menuItem.children('.js-chilmenu').fadeIn(200);
        menuItem.toggleClass('main-menu__item--active');
      }
    })

  })
  $(document).on('click', function(event) {
    if (!$(event.target).closest('#main-menu-container').length) {
        $(".js-submenu").slideUp(200);
    }
  });

})

