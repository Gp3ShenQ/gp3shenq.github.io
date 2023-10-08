AOS.init();

// $(".aboutMe").on('mouseover',function(){
//   $(this).find('p').text("關於我")
// })
// $(".aboutMe").on('mouseleave',function(){
//   $(this).find('p').text("AboutMe")
// })

// $(".naveWork").on('mouseover',function(){
//   $(this).find('p').text("工作經歷")
// })
// $(".naveWork").on('mouseleave',function(){
//   $(this).find('p').text("Experience")
// })

// $(".navePoj").on('mouseover',function(){
//   $(this).find('p').text("作品")
// })
// $(".navePoj").on('mouseleave',function(){
//   $(this).find('p').text("Project")
// })

// $(".naveProfessional").on('mouseover',function(){
//   $(this).find('p').text("職業技能")
// })
// $(".naveProfessional").on('mouseleave',function(){
//   $(this).find('p').text("Professional")
// })

   ///計算背景遮罩顏色
function opacityControl(){
  let opacity = $(window).scrollTop()/3500;
  $('.mask').css("opacity",`${opacity}`)
}
$(window).on('scroll',function(){
  opacityControl()
  })
opacityControl()

      //點擊按鈕後定位
$(".aboutMe").on("click",function(){
  $('html,body').animate({scrollTop:750}, 100)
})
$(".naveWork").on("click",function(){
  $('html,body').animate({scrollTop:1620}, 100)
})
$(".navePoj").on("click",function(){
  $('html,body').animate({scrollTop:2550}, 100)
})
$(".naveProfessional").on("click",function(){
  $('html,body').animate({scrollTop:3300}, 100)
})


$(window).on('scroll',function(){
  const top = $(window).scrollTop()
  if(top == 0){
    $(".naveBgc").css("top","-70px")
    $(".name").css("color","white")
    $(".word").css("color","white")
    $(".bottomArrow").css("display" , "block")
  }else if(top >= 100 && top <= 499){
    $(".right1,.right2,.right3,.right4").css("right" , "-110px")
    $(".cloud").css("display" , "block")
    $(".rightBar").css("display" , "none")
    $(".indexCenter").css("display" , "block")
  }else if(top >= 500 && top <= 1249){
    $(".right1").css("right" , "-15px")
    $(".right2,.right3,.right4").css("right" , "-110px")
    $(".cloud").css("display" , "none")
    $(".rightBar").css("display" , "block")
    $(".indexCenter").css("display" , "none")
  }else if(top >= 1250 && top <= 2177){
    $(".right2").css("right" , "-11px")
    $(".right1,.right3,.right4").css("right" , "-110px")
  }else if(top >= 2178 && top <= 2877){
    $(".right3").css("right" , "-28px")
    $(".right1,.right2,.right4").css("right" , "-110px")
  }else if(top >= 2876 && top <= 3000){
    $(".right1,.right2,.right3 ").css("right" , "-110px")
    $(".right4").css("right" , "-2px")
  }else{
    $(".naveBgc").css("top","0")
    $(".name").css("color","black")
    $(".word").css("color","black")
    $(".bottomArrow").css("display" , "none")
  }
})

$(".work1").on("mouseenter",function(){
  const index = $(this).index()
  $('.experience .goodByelight').eq(index -1).addClass("light")
})
$(".work1").on("mouseleave",function(){
  const index = $(this).index()
  $(".goodByelight").removeClass("light")
  $('.experience .goodByelight').eq(index -1).addClass("blowlight")
  setTimeout(function(){$(".blowlight").removeClass("blowlight")},1000)
})
$(".school").on("mouseenter",function(){
  const index = $(this).index()
  $('.schoolBox .goodByelight').eq(index).addClass("light")
})
$(".school").on("mouseleave",function(){
  const index = $(this).index()
  $(".goodByelight").removeClass("light")
  $('.schoolBox .goodByelight').eq(index).addClass("blowlight")
  setTimeout(function(){$(".blowlight").removeClass("blowlight")},1000)
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

