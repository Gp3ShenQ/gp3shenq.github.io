

$(".line").on('click', function(){
  if($('.leftbar-box').hasClass('change')) {
    $('.leftbar-box').removeClass('change')
    return;
  }
    $('.leftbar-box').addClass('change')
    $('.leftbar-shadow').addClass('change')
})
    
$(window).on('resize',function() {
  if (window.innerWidth>1200) $('.leftbar-box').removeClass('change')
})

$('.leftbar-shadow').on('click',function(){
  $('.leftbar-shadow').removeClass('change')
  $('.leftbar-box').removeClass('change')
})

//-----------首頁輪播
const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".mySwiper", {
      // spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false
      },
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
    });
//-----------首頁輪播

//-----------商品輪播
var swiper = new Swiper(".mySwiper11", {
  loop: true,
  spaceBetween: 0,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper12", {
  loop: true,
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-button-next11",
    prevEl: ".swiper-button-prev11",
  },
  thumbs: {
    swiper: swiper,
  },
});
//-----------商品輪播