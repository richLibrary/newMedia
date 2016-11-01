//页面加载和窗口重置执行
function baseFont() {
    var docEl = document.documentElement;
    var docWidth = $(window).width(); //获取屏幕宽度
    var baseFont = 20 * (docWidth / 320)//获取根字号大小
    if (docWidth < 641) {
        //把根字号大小传给html
        $(docEl).css({ "font-size": baseFont + "px" })
    };
}
//页面加载就执行
baseFont();
//窗口重置重新计算
$(window).resize(function () { baseFont(); });