$(function () {
      $('.screen1').removeClass('out');
      $('.dream').hover(function(){
         $(this).toggleClass('animated rubberBand')
      })
//滚滚屏以及导航变化：
;(function(){
  var num=0;
  var timer=null;
   //点击导航效果
  $('.gps li:not(li.music)').click(function(event) {
      var index=$(this).index()
      num=index;
      change();
  });
  //点击音乐停止
  $('.music').click(function(event) {
    if($('.music audio').get(0).paused==true){
       $('.music audio').get(0).play();
       }else{
       $('.music audio').get(0).pause();
       }
  });
  //滚屏以及相应导航变化
  $(window).mousewheel(function(e,d){
   clearTimeout(timer)
   timer=setTimeout(function(){  //函数截流
       num-=d;//num=num-d 本次网站的难点所在
       if (num>3){num=3};
       if (num<0){num=0};
       change();
     //音乐
     $('figure audio').eq(num).get(0).currentTime=0;
     $('figure audio').eq(num).get(0).play();   },300)
  });
  //封装函数；
  function change(){
     $('.nav_right li').eq(num).addClass('current').siblings().removeClass('current');
     $('.gps li').eq(num).addClass('current').siblings().removeClass('current');
     $('.main').stop().animate({top:-num*100+'%'},500)//加.stop()可避免排队（实际效果可自测）
     $('.main>div').eq(num).removeClass('out').siblings().addClass('out');

  }
//头部导航
   $('.nav_right li').hover(function(){
      $(this).addClass('active').siblings().removeClass('active');
   },function(){
     $(this).removeClass('active');
   })
   $('.nav_right li').click(function(){
      var index=$(this).index()
      num=index;
      change();
   })
})();
//水波纹
$(window).click(function(e){
   $('.wen_box').append('<span class="ripple"></span>')
   $('.ripple').css({left:e.pageX-2,top:e.pageY-2})
   $('.ripple').on('animationend',function(){
    $(this).remove()
   })
})
//第二屏--------------------------------------------------------
//切换内容
;(function(){
$('.title li').click(function(event) {
  var index=$(this).index();
$('.con>div').eq(index).css({'display':'block','visibility': 'visible'}).siblings().css({'display':'none','visibility': 'hidden'})
});
//icon部分----------------------------
  var ph=$('.con1 li p').height();
  $('.con1 li p').css({lineHeight:ph+'px'})

  $('.con2 li').hover(function(e) {
        $(this).stop().animate({width:302},500).siblings().stop().animate({width:80},500)
    },function(){
    $('.con2 li').stop().animate({width:100});
   });
//手机主题部分-----------------------------------
  var x=$('.con').offset().left;
  var timer=null,
      num=0,
      themeH=$('.theme').height();

  //图片加载完后执行
  $('.theme img').load(function(){
        var imgH=$('.theme img').height()
        var hH=imgH-themeH;
  //鼠标移上上部分自动播放
  $('.theme .up').mouseover(function(event) {
    clearInterval(timer)
     timer=setInterval(function(){
      num=num-1
      if(num<-hH){num=-hH}
     $('.theme img').css({top:num})
    },20)
  });
  //鼠标移上下部分自动播放
  $('.theme .down').mouseover(function(event) {
    clearInterval(timer)
     timer=setInterval(function(){
      num++;
      if(num>0){num=0}
     $('.theme img').css({top:num})
    },20)
  });
  //鼠标移出停止播放
  $('.con').mouseout(function(event) {
    clearInterval(timer)
  });
  })
  //鼠标跟随放大图
  $('.con4 .detail li').mouseover(function(e) {
    var bg=$(this).children().attr('href');
    $('.big_img img').attr('src',bg);
    //显示图片并show动画出来。
    $('.big_img').stop().show(300);
    }).mousemove(function(e){
    $('.big_img').css({left:e.pageX-x+20,top:e.pageY-300})
  }).mouseout(function(e){
    $('.big_img').hide();
  });

})();
//APP部分----------------------------------------
;(function(){
  var timer=null,
      num=0,
      imgW=0;
  //点击图片{全局变量可以用在布局函数中}
  $('.apps li').click(function(){
    var appbg=$(this).children().attr('src');
    $('.img img').attr('src',appbg);
    $(this).addClass('current').siblings().removeClass('current')
    var index=$(this).index();
    num=index;
    $('.apps ul').animate({left:-index*168})
  });
  //获取图片宽度
  $('.apps li img').load(function(){
    imgW=$('.apps li img').width()
  })
  //点击右边箭头
  $('.apps .right').click(function(){
    num++;
    if(num>5){num=0};
    $('.apps ul').animate({left:-num*imgW})
    console.log(imgW)
    $('.apps li').eq(num).addClass('current').siblings().removeClass('current')
    $('.img img').attr('src','images/app'+num+'.png')
  });
  //点击左边箭头
  $('.apps .left').click(function(){
    num--;
    if(num<0){num=5};
    $('.apps ul').animate({left:-num*imgW});
    $('.apps li').eq(num).addClass('current').siblings().removeClass('current')
    $('.img img').attr('src','images/app'+num+'.png')
  });
  $('.apps li img').faceCursor();
})();









})
