/**
 * Created by Administrator on 2017/9/7.
 */
$(window).ready(function () {
    //用户和商主选着tab按钮
    $('#content-regist li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        if($(this).index() == 1){
            $('.three').css('display','none');
        }else{
            $('.three').css('display','block');
        }
    })


});