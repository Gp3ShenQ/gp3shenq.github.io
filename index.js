AOS.init();

$(".aboutMe").on('mouseover',function(){
  $(this).find('p').text("關於我")
})
$(".aboutMe").on('mouseleave',function(){
  $(this).find('p').text("AboutMe")
})

$(".naveWork").on('mouseover',function(){
  $(this).find('p').text("工作經歷")
})
$(".naveWork").on('mouseleave',function(){
  $(this).find('p').text("Experience")
})

$(".navePoj").on('mouseover',function(){
  $(this).find('p').text("作品")
})
$(".navePoj").on('mouseleave',function(){
  $(this).find('p').text("Project")
})

$(".naveProfessional").on('mouseover',function(){
  $(this).find('p').text("職業技能")
})
$(".naveProfessional").on('mouseleave',function(){
  $(this).find('p').text("Professional")
})

$(window).on('scroll',function(){
  const top = $(window).scrollTop()
  if(top == 0){
    $(".naveBgc").css("top","-70px")
    $(".name").css("color","white")
    $(".word").css("color","white")
  }else{
    $(".naveBgc").css("top","0")
    $(".name").css("color","black")
    $(".word").css("color","black")
  }
})

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 30,
    stretch: 0,
    depth: 500,
    modifier: 1,
    slideShadows: true,
  },
  // pagination: {
  //   el: ".swiper-pagination",
  // },
});