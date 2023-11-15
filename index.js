AOS.init();
   ///計算背景遮罩顏色
function opacityControl(){
  let opacity = $(window).scrollTop()/3500;
  $('.mask').css("opacity",`${opacity}`)
}
$(window).on('scroll',function(){
  opacityControl()
  })
opacityControl()
    ///計算背景遮罩顏色

    ///點擊按鈕後定位
function anchor(el){
  $(el).on("click",function(){
    const target = $(this).attr('target-anchor')
    const height = $(target).offset().top - 60;
    window.scrollTo({top: height, behavior: 'smooth'})
})
}
anchor('.word')
    ///點擊按鈕後定位


  if($(window).scrollTop() >= 499){
    $(".indexCenter").css("display" , "none")
    $(".cloud").css("display" , "none")
  }
$(window).on('scroll',function(){
  const top = $(window).scrollTop()
  if(top == 0){
    $(".naveBgc").css("top","-70px")
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
  }else if(top >= 2876 && top <= 3500){
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
});

function addpercen(){
  $(".percentage").each((index,el)=>{el.number = 0})
  $(window).on("scroll",function(){
    if($(window).scrollTop() >= 3100){
      $(".percentage").each((index,el)=>{
        const data = $(el).attr('data')
        $(el).siblings(".circle-inner").css("width",data+"%")
        const timer = setInterval(()=>{
          if(el.number < data){
            el.number += 1
            $(el).text(el.number+"%")
          }else{
            clearInterval(timer)
          }
        },10)
      })
    }
  })
}
addpercen()
