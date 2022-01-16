$(function(){

  //reviews__slider
  $('.reviews__slider-inner').slick({
    infinite: true,
    slidesToShow: 3, 
    slidesToScroll: 1,
    centerMode: true,
    arrows: true,
    appendArrows: $('.reviews__slider-btns'),
    prevArrow: '<button type="button" class="slick-prev reviews__slider-btn reviews__slider-btn-prev"><img src="./icons/prev_btn.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next reviews__slider-btn reviews__slider-btn-next"><img src="./icons/next_btn.png" alt=""></button>'
  });
  
  //production
  $('.production__slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    arrows: false,
    fade: true,
    // infinite: true,
    asNavFor: '.production__slider-nav'
  });
  $('.production__slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.production__slider-for',
    focusOnSelect: true,
    infinite: true,
    arrows: true,
    centerMode: true,
    appendArrows: $('.production__slider-btns'),
    prevArrow: '<button type="button" class="production__slider-btn production__btn-prev slick-prev"></button>',
    nextArrow: '<button type="button" class="production__slider-btn production__btn-next"></button>'
  });


  //mask input modal
  $("#modal-phone").mask("+7 (999) 999-99-99");

  //modal 
  $('.contacts__btn').on('click', function(){
    $('.overlay').show();
  });
  $('.popup__close').on('click', function(){
    $('.overlay').hide();
  });


  //fancyapps
  Fancybox.bind('[data-fancybox="gallery"]', {
    dragToClose: false,
  
    Toolbar: false,
    closeButton: "top",
  
    Image: {
      zoom: true,
    }
  });

   //On scroll fixed menu
   $(window).scroll(function() {
    const wh = window.innerWidth;
    const h = window.innerHeight;
    const window_top = $(window).scrollTop() + 1;
    if (window_top > 100) {
        $('.menu').addClass('menu__fixed');
    } else {
        $('.menu').removeClass('menu__fixed');
    }


});



})