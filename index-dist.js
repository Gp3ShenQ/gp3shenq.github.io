function opacityControl(){let o=$(window).scrollTop()/3500;$(".mask").css("opacity",`${o}`)}AOS.init(),$(window).on("scroll",(function(){opacityControl()})),opacityControl(),$(".aboutMe").on("click",(function(){$("html,body").animate({scrollTop:890},100)})),$(".naveWork").on("click",(function(){$("html,body").animate({scrollTop:1769},100)})),$(".navePoj").on("click",(function(){$("html,body").animate({scrollTop:2550},100)})),$(".naveProfessional").on("click",(function(){$("html,body").animate({scrollTop:3500},100)})),$(window).scrollTop()>=499&&($(".indexCenter").css("display","none"),$(".cloud").css("display","none")),$(window).on("scroll",(function(){const o=$(window).scrollTop();0==o?($(".naveBgc").css("top","-70px"),$(".name").css("color","white"),$(".word").css("color","white"),$(".bottomArrow").css("display","block")):o>=100&&o<=499?($(".right1,.right2,.right3,.right4").css("right","-110px"),$(".cloud").css("display","block"),$(".rightBar").css("display","none"),$(".indexCenter").css("display","block")):o>=500&&o<=1249?($(".right1").css("right","-15px"),$(".right2,.right3,.right4").css("right","-110px"),$(".cloud").css("display","none"),$(".rightBar").css("display","block"),$(".indexCenter").css("display","none")):o>=1250&&o<=2177?($(".right2").css("right","-11px"),$(".right1,.right3,.right4").css("right","-110px")):o>=2178&&o<=2877?($(".right3").css("right","-28px"),$(".right1,.right2,.right4").css("right","-110px")):o>=2876&&o<=3500?($(".right1,.right2,.right3 ").css("right","-110px"),$(".right4").css("right","-2px")):($(".naveBgc").css("top","0"),$(".name").css("color","black"),$(".word").css("color","black"),$(".bottomArrow").css("display","none"))})),$(".work1").on("mouseenter",(function(){const o=$(this).index();$(".experience .goodByelight").eq(o-1).addClass("light")})),$(".work1").on("mouseleave",(function(){const o=$(this).index();$(".goodByelight").removeClass("light"),$(".experience .goodByelight").eq(o-1).addClass("blowlight"),setTimeout((function(){$(".blowlight").removeClass("blowlight")}),1e3)})),$(".school").on("mouseenter",(function(){const o=$(this).index();$(".schoolBox .goodByelight").eq(o).addClass("light")})),$(".school").on("mouseleave",(function(){const o=$(this).index();$(".goodByelight").removeClass("light"),$(".schoolBox .goodByelight").eq(o).addClass("blowlight"),setTimeout((function(){$(".blowlight").removeClass("blowlight")}),1e3)}));var swiper=new Swiper(".mySwiper",{effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",coverflowEffect:{rotate:30,stretch:0,depth:500,modifier:1,slideShadows:!0}});function addpercen(){$(window).on("scroll",(function(){$(window).scrollTop()>=3200&&$(".percentage").each(((o,t)=>{const i=$(t).attr("data");let s=0;$(t).siblings(".circle-inner").css("width",i+"%");const e=setInterval((()=>{s<i?(s+=1,$(t).text(s+"%")):$(window).scrollTop()<=2900?($(".circle-inner").css("width","0"),$(t).text("0%")):clearInterval(e)}),10)}))}))}addpercen();