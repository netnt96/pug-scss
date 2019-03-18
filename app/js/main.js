$(document).ready(function() {

  //sticky
  $(window).bind('scroll', function () {
    if ($(window).scrollTop() > 0) {
        $('.header').addClass('sticky');
    } else {
        $('.header').removeClass('sticky');
    }
  });


  // main-menu
  $('.js-menu-item').each(function(){

    var subMenu   = $(this).children('.js-submenu')
        menuLink  = $(this).children('.js-menulink')
        subItem = $(this).children('.js-sub-item')
        chilMenu = $(this).children('.js-chilmenu')
        // subItem = $(this).children('.js-sub-item')

    $(this).children('.js-menulink').on('click', function(){
      $(this).parent('.js-menu-item.main-menu__item--has-children').toggleClass('open', 50, 'swing');
      subMenu.toggle('swing');
    })

    if($('.js-sub-item').hasClass('main-menu__item--active')) {
      $('.js-sub-item.main-menu__item--active').parent().parent('.js-menu-item').addClass('main-menu__item--active');
      $('.js-sub-item.main-menu__item--active').parent('.js-submenu').show();
    }

    if($('.js-child-item').hasClass('main-menu__item--active')) {
      $('.js-child-item.main-menu__item--active').parent().parent('.js-menu-item').addClass('main-menu__item--active');
      $('.js-child-item.main-menu__item--active').parent('.js-chilmenu').show();
    }
  })
})