AOS.init();

// ------- innerpage
var swiper = new Swiper(".innerSwiper", {
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true
});

// -----------

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".lArrow ",
    prevEl: ".rArrow ",
  },
  loop: true
});



let beforeTop;
let direction;
$(window).on('scroll',()=>{
  const top = $(window).scrollTop();
  console.log(top);
  if(top!=0 || $(".point").hasClass("change"))
    $(".navbar").addClass("bgcwhite")
  else
  $(".navbar").removeClass("bgcwhite")

  if(beforeTop < $(window).scrollTop()){
    //往下滾
      direction = true
    }else {
    //往上滾
      direction = false
    }
  setTimeout(()=>{
    beforeTop = $(window).scrollTop()
  },100)
})

//-----往上下須要動作
if(direction){

}

// if($("body").hasClass("innerPage")){
//   $(".navbar").addClass("bgcbrown")
// }else{
//   $(".navbar").removeClass("bgcbrown")
// }

$(".point").on('click',function(){
  if($(".point").hasClass("change")){
    $(".point").removeClass("change")
    $('.box').fadeIn(1000)
    $(".innerPage").fadeOut(300)
    $('html,body').animate({scrollTop:0}, 100)
    $('footer').fadeIn(1000)
  }else{
  $(".point").addClass("change")
  $('.box').fadeOut(900)
  $(".innerPage").fadeIn(1000)
  $('footer').fadeOut(900)
  about()
}
})

$(".aboutMe").on('click',function(){
  about()
})
function about(){
    $(".aboutBox").show()
    $(".projectBox").hide()
    $(".serviceBox").hide()
}

$(".project").on('click',function(){
  $(".aboutBox").hide()
  $(".projectBox").show()
  $(".serviceBox").hide()
})

$(".service").on('click',function(){
  $(".aboutBox").hide()
  $(".projectBox").hide()
  $(".serviceBox").show()
})

  //------- 隱藏page function
function pageNone(){
  $(".pageBox1").css("display","none")
  $(".pageBox2").css("display","none")
  $(".pageBox3").css("display","none")
  $(".pageBox4").css("display","none")
}


let display;

function detectDisplay(){
  if($(window).scrollTop() >= 1700 && $(window).scrollTop() <= 2300){
    if(display) return
    $('main').attr('theme','1800')
    $(".mask").css("display"," block")
    display = true;
  }
  else if($(window).scrollTop() <= 1700){
    $('main').attr('theme','1799')
    $(".bg1,.bg4,.bg3,.bg2").css("width","25%")
    $(".back").css("display","none")
    $(".mask").css("display","none")
    pageNone()
    display = false;
  }else if($(window).scrollTop() >= 2600){
    // $('main').attr('theme','1799')
    $(".bg1,.bg4,.bg3,.bg2").css("width","25%")
    $(".back").css("display","none")
    $(".mask").css("display","block")
    pageNone()
    // display = false;
  }}

  // if($(window).scrollTop() < 1800 && display){

// 進入網頁後先執行一次
if($(window).scrollTop() >= 1800){
  $('main').attr('theme','1800')
  display = true;
}else if($(window).scrollTop() < 1800){
  $('main').attr('theme','1799')
  $(".bg1,.bg4,.bg3,.bg2").css("width","25%")
  display = false;
}else if($(window).scrollTop() >= 2500){
  $('.mask').css("display","none")
  pageNone()
}

//運算opacity的scroll的位子來變色
function opacityControl(){
  let blockTop = $('.innerStyle').offset().top - 300;
  let winHeight = window.innerHeight * 2 / 3;
  let opacity = 1 - ($(window).scrollTop() - blockTop)/winHeight > 0.6? 0.6:1 - ($(window).scrollTop() - blockTop)/winHeight;
  if($(window).scrollTop() > blockTop){
    console.log(opacity)
    opacity = 1 - ($(window).scrollTop() - blockTop)/winHeight > 0.6? 0.6:1 - ($(window).scrollTop() - blockTop)/winHeight;
    $('.mask').css("background-color",`rgba(0,0,0,${opacity}`)
  }
}
//運算opacity的scroll的位子來變色

//-----卷軸位置1800顯現
$(window).on('scroll',function(){
  detectDisplay()
  // opacityControl()
})
// $(window).on('scroll',function(){
//   if($(window).scrollTop() >= 1800){
//     $('mian').addClass('')

//   }else if($(window).scrollTop() < 1800){
//     $('mian').removeClass('')

//   }
// })
//-----卷軸位置1800顯現

///-----點擊後背景圖展開

$(".word1").on("click",function(){
  $(".bg4,.bg3,.bg2").css("width","0")
  $(".bg1").css("width","100%")
  $(".pageBox1").css("display","block")
})

$(".word2").on("click",function(){
  $(".bg1,.bg4,.bg3").css("width","0")
  $(".bg2").css("width","100%")
  $(".pageBox2").css("display","block")
})

$(".word3").on("click",function(){
  $(".bg1,.bg4,.bg2").css("width","0")
  $(".bg3").css("width","100%")
  $(".pageBox3").css("display","block")
})

$(".word4").on("click",function(){
  $(".bg1,.bg3,.bg2").css("width","0")
  $(".bg4").css("width","100%")
  $(".pageBox4").css("display","block")
})

$(".word1,.word2,.word3,.word4").on("click",function(){
  $(".mask").css("display","none")
  $(".back").css("display","block")
})

$(".back").on("click",function(){
  blockEvent()
})
function blockEvent(){
  $(".bg1,.bg4,.bg3,.bg2").css("width","25%")
  $(".back").css("display","none")
  $(".pageBox1").css("display","none")
  $(".pageBox2").css("display","none")
  $(".pageBox3").css("display","none")
  $(".pageBox4").css("display","none")
  $(".mask").css("display","block")
  
}
///-----點擊後背景圖展開


