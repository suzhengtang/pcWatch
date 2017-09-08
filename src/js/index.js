/**
 * Created by Administrator on 2017/9/4.
 */
//右侧栏元素的显示和隐藏方法：
function showHideEle(obj,element1,element2) {
    obj.hover(function () {
        element1.fadeIn({'display':'block'},500);
        element2.fadeIn({'display':'block'},500);
    },function () {
        element1.fadeOut({'display':'none'},500);
        element2.fadeOut({'display':'none'},500);
    });
}

$(window).ready(function () {
    //轮播图的实现
    var lastClone = $('.banner-pic li')[0].cloneNode(true);
    $('.banner-pic').append(lastClone);
    var index = 0;
    var liLength = $('.banner-pic li').length;
    var timer = setInterval(autoPlay,3000);
    function autoPlay() {
        index ++;
        if(index > liLength-1){
            $('.banner-pic').css({left:0});
            index = 1;
        }
        $('.banner-pic').animate({left:-(index*100)+'%'});
        $('.banner-circle li').eq(index).addClass('active').siblings().removeClass('active');
        if(index == 4){
            $('.banner-circle li').eq(0).addClass('active').siblings().removeClass('active');
        }
    }

    $('.banner-circle li').mouseover(function () {
       $(this).addClass('active').siblings().removeClass('active');
       var i = $(this).index();
        // console.log(i);这里有问题，
        $('.banner-pic').animate({left:-(i*100)+'%'});
    });

    $('.banner-pic').hover(function () {
        clearInterval(timer);
    },function () {
        timer = setInterval(autoPlay,2000);
    });

//    右侧栏元素显示和隐藏方法的调用
    showHideEle($('.my-qq'),$('.qq'),$('.qq-qq'));
    showHideEle($('.my-phone'),$('.phone'),$('.phone-phone'));
    showHideEle($('.my-text'),$('.text'),$('.text-text'));
    showHideEle($('.my-weixin'),$('.weixin'));

    console.log($(window).scrollTop());
    $(window).on('scroll',function () {
        var scTop = $(window).scrollTop();
        if(scTop > 10){
            $('.my-top').fadeIn(500).css('display','block');
        }else{
            $('.my-top').fadeOut(500).css('display','none');
        }
    });
    // $('.my-top').on('click',function () {
    //     $('html body').animate({scrollTop:0});
    // })

});

