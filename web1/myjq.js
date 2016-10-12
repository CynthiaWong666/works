$(function(){
;(function(){
//地址栏hold的状态

  $('.address').hover(function(){
      $('.address .userad').css({'border-bottom':'none'});
      $('.adressbox').stop().slideDown(300)
    },function(){
      $('.address .userad').css({'border-bottom':'1px solid #f0f0f0' })
      $('.adressbox').stop().slideUp(300)
  });

// topbaner展示效果
      $('.topBanner span').html('收起')
      $('.topBanner .big').slideDown(3000).siblings('a').hide();
     setTimeout(function(){
      $('.topBanner .big').slideUp(1000).siblings('a').slideDown();
      $('.topBanner span').html('展开').css({'background-position':'0 34px'});

      }, 1500)

      $('.topBanner span').click(function(){

        if($('.topBanner span').html()=='展开'){  //为什么大banner下拉过程没有动画效果？？？？？

            $('.topBanner .big').stop().slideDown().siblings('a').slideUp();
            $('.topBanner span').html('收起').css({'background-position':'-16px 34px'});
         }else{
            $('.topBanner .big').stop().slideUp().siblings('a').slideDown();
            $('.topBanner span').html('展开').css({'background-position':'0 34px'});
         }})

// login的hover状态
      $('.login').hover(function() {
            $('.login_hoverbox').show();
            $('.login_hover').css({'background-position':'-60px -870px'})
        }, function() {
            $('.login_hoverbox').hide();
            $('.login_hover').css({'background-position':'0px -870px'})});

//topbar的menu hover效果
        $('.topbar_fr .li1').hover(function(event) {
            /* Act on the event */
            $(this).toggleClass('current').siblings().removeClass('current');
        });

// search_tab效果
$('.search_tab').hover(function(){
    $(this).addClass('search_tab_hover');
    $('.search_tab a').eq(1).click(function(event) {
    /* Act on the event */
    var text0=$('.search_tab a').eq(0).html();
    var text1=$('.search_tab a').eq(1).html();

    $('.search_tab a').eq(1).html(text0);
    $('.search_tab a').eq(0).html(text1);
    $('.search_tab').removeClass('search_tab_hover');
   });
   },function(){
    $(this).removeClass('search_tab_hover');
})




// 搜索框
  $('.txt').focus(function(event) {
        /* Act on the event */
       if( $('.txt').val()=='请输入关键字' ){
            $(this).val('');
            $(this).css({color:'#000'});
       };
    });
  $('.txt').blur(function(event) {
        if($('.txt').val()==''){
            $(this).val('请输入关键字');
            $(this).css({color:'#666'});
        }

    });

//购物车
  $('.cart').hover(function(event) {
  /* Act on the event */
  $('.mycart').toggle();});

//  banner轮播
     var bgc=['#1d90e3','#11afeb','#fe5c5d','#12e1df','#01aff6','#4da618','#a14be0','#f34367','#f25763']
     $('.bannerol li').each(function(index, el) {
          $(el).css({background:bgc[index]})
     });

     // 自动播放
     var timer=null;
     var num=0;
     function lunbo(){
      clearInterval(timer)
      timer=setInterval(function(){
        autoplay();
     },2500);};


      function autoplay(){
          num++;
        if (num>8){
          num=0      //为什么初始化是显示第一张？？？？？
                          //因为我当时将autoplay(); change();函数执行多了一次
        }           //为什么第一张一定要display: block;???????
        change();
       }

      function change(){
              $('.bannerol li').eq(num).fadeIn().siblings().hide();
              $('.marknum li').eq(num).addClass('current').siblings().removeClass();
             }

          lunbo();

      //移上停播及左右显示
       $('.banner_promo').hover(function(){
          $('.showarrow span').show();
          clearInterval(timer)
       },function(){
          $('.showarrow span').hide();
           lunbo();
       })
        //角标及左右切换
      $('.marknum li').mouseover(function(event) {
        /* Act on the event */
        var index=$(this).index();
        num=index;
        change();
      });
      $('.showarrow .right').click(function(){
            autoplay();
      });
       $('.showarrow .left').click(function(){
               num--;
          if (num<0){
          num=8
        }
        change();
    });
//侧边菜单栏
$('.allSort_detail li').hover(function(){
    $(this).children('.category').toggle()
})


//selection_activity_list
  //让span显示隐藏
  $('.selection_activity_list').hover(function(){
    var ulleft=$('.selection_ul').css('left')
  if (ulleft=='0px'){
    $('.fr').show();

   }else{
    $('.fl').show();

  }
  //点击span可以切换图片

  $('.fr').click(function(){
    $('.selection_ul').stop().animate({left:-1200});
    $('.fl').show();
    $('.fr').hide();
  });
  $('.fl').click(function(){
    $('.selection_ul').stop().animate({left:0})
    $('.fr').show();
    $('.fl').hide();
  });
  },function(){
   $('.selection_activity_list a').hide();
  });

//con1的图片hover效果
  $('.con1 .biger img').hover(function(){
      $(this).stop().animate({marginLeft:30}, 300);
  },function(){
      $(this).stop().animate({marginLeft:40}, 300);
  })

//.con 中img的闪效果
    $('.con img').mouseover(function(event) {
      /* Act on the event */
      $(this).stop().fadeTo(200,0.7,function(){$(this).fadeTo(200,1)})
      })
})();

//fl1中的轮播
;(function(){
    $.fn.slideshow=function(opt){
        var defualts={
          "playtime":3000
        }//取数据有点类似json
       $.extend(defualts,opt);//不传参时就直接用defualts的数据。传参就是用opt的数据；
       //遍历每个JQ对象
       return this.each(function(){
        var me=$(this),
            timer=null,
            num=0,
            conb=me.find('.conb'),
            uls=me.find('.conb ul'),
            pro=me.find('.progres a');

          function lunbo(){
            clearInterval(timer)
            timer=setInterval(function(){
            change();
            num++;
            if (num>2){num=0}
             },defualts.playtime);
          };
          function change(){
            uls.stop().animate({left:-num*330},400);
             pro.eq(num).children().stop().animate({width:30}, defualts.playtime-400).parent().siblings().children().width(0);
             pro.eq(num).addClass('current').siblings().removeClass('current');
             }
          lunbo();
        //鼠标移上清除定时器666666

        //鼠标移上角标：
        pro.mouseover(function(event){
          var index=$(this).index();
          num=index;
          change();
          pro.eq(num).children().stop().animate({width:30}, 100).parent().siblings().children().width(0);
        });
      });
    }
    $('.floor1').slideshow({'playtime':4000});
    $('.floor2').slideshow();
    $('.floor3').slideshow({'playtime':3500});
    $('.floor4').slideshow();
    $('.floor5').slideshow({'playtime':4000});
    $('.floor6').slideshow({'playtime':3500});
    $('.floor7').slideshow();
    $('.floor8').slideshow({'playtime':3000});
    $('.buyto').slideshow({'playtime':3500});
    $('.lasrfl').slideshow();
})();


//限时打折
;(function(){
  //hover的时候显示时间
  function hovertime(b,a){
     $(b).hover(function(){
      $(a).stop().slideDown(200)
     },function(){
      $(a).stop().slideUp(200)
     });
  };
  hovertime(".lasrfl .conb","#colockbox1");
  hovertime(".lasrfl .conc","#colockbox2");
  hovertime(".lasrfl .cond","#colockbox3");
  hovertime(".lasrfl .conf","#colockbox4");

 //传入倒计时 参数，运行函数
  countDown("2016/10/1 10:00:00","#colockbox1");
  countDown("2016/10/2 00:00:00","#colockbox2");
  countDown("2016/10/3 08:00:00","#colockbox3");
  countDown("2016/10/4 20:00:00","#colockbox4");
 //封装倒计时函数
  function countDown(time,id){
    var day_elem = $(id).find('.day');
    var hour_elem = $(id).find('.hour');
    var end_time = new Date(time).getTime(),

    s_second = (end_time-new Date().getTime())/1000;
    var timer = setInterval(function(){
        if (s_second > 1) {
            s_second -= 1;
            var day = Math.floor((s_second / 3600) / 24);
            var hour = Math.floor((s_second / 3600) % 24);
            $(day_elem).html(day);//计算天
            $(hour_elem).html(hour)//计算小时

            //当数字小于10时
            if (day<10) {$(day_elem).html("0"+day)};
            if (hour<10) {$(hour_elem).html("0"+hour)};
        } else {
            clearInterval(timer);
        }
    }, 1000);
}
})();

//楼层电梯
;(function(){
    $('.aside_nav_l a').hover(function(){

      $(this).toggleClass('aside_nav_hover ').siblings().removeClass('.aside_nav_hover ');

    });

     var floors=[$('#floor').offset().top-300,
     $('.floor2').offset().top-300,$('.floor3').offset().top-300,
     $('.floor4').offset().top-300,$('.floor5').offset().top-300,
     $('.floor6').offset().top-300,$('.floor7').offset().top-300,
     $('.floor8').offset().top-300,$('.buyto').offset().top-300,
     $('.lasrfl').offset().top-300]

     var winH=$(window).height();
     $('.aside_nav_l a').click(function(){
          var index=$(this).index();
    // $(this).addClass('current').siblings().removeClass('current');不用写，因为点击它，scrolltop值也会改变，相应的类也跟着变。
         $('html,body').animate({scrollTop:floors[index]+30});

        });
    $(window).scroll(function(event) {
      /* Act on the event */
      var winT=$(window).scrollTop();
      var floor=parseInt((winT-floors[0])/414)
      if(winT>floors[0]){
        $('.aside_nav_l').show()
      }else{
        $('.aside_nav_l').hide()
      }

      function classadd(a){
        $('.aside_nav_l a').eq(a).addClass('current').siblings().removeClass('current');
      }

      if(winT>floors[0] && winT<floors[3]){
           classadd(floor);
       } else if(winT>floors[3] && winT<floors[4]){
           classadd(3);
       } else if(winT>floors[4] && winT<floors[5]){
           classadd(4);
       } else if(winT>floors[5] && winT<floors[6]){
           classadd(5);
       } else if(winT>floors[6] && winT<floors[7]){
           classadd(6);
       } else if(winT>floors[7] && winT<floors[8]){
           classadd(7);
       } else if(winT>floors[8] && winT<floors[9]){
           classadd(8);
       }else if(winT>floors[9]){
           classadd(9);
       }

    });

})();

// 右侧栏

  $('.small a').hover(function(){
    $(this).children('.iconfont').css('color', '#fff');
    $(this).children('p').addClass('ahover')
    $(this).children('.saosao').show(200)
},function(){
    $(this).children('.iconfont').css('color', '#ff5c4d');
    $(this).children('p').removeClass('ahover')
    $(this).children('.saosao').hide()
});
  $('.shopcart').click(function(event) {
    $('.aside_nav_r').toggleClass('aside_nav_r_wider');
  });

  $('.backtotop').click(function(event) {
    /* Act on the event */
    $('body,html').animate({scrollTop:0}, 300);
  });






})






































