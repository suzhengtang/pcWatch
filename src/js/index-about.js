/**
 * Created by Administrator on 2017/9/5.
 */
//点击左侧tab切换按钮的方法
function clickTab() {
    $('#box_left li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        // console.log($(this));
        var liIndex = $(this).index();
        // $('#box_right li')[liIndex].addClass('current').siblings().removeClass('current'); 此方法无效
        $('#box_right li').eq(liIndex).addClass('current').siblings().removeClass('current');
    });
}

$(window).ready(function () {
    //关于我们tab切换和对应内容的改变
    clickTab();

    //点击底部按钮应对应选中左侧的标签元素
    $('#ft_top li').click(function () {
        window.location = "index-about.html";
        var liIndex = $(this).index();
        $('#box_left li').eq(liIndex).addClass('active').siblings().removeClass('active');
        $('#box_right li').eq(liIndex).addClass('current').siblings().removeClass('current');
    })
});