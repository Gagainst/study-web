function currentTime(CT) {
    var nowTime = +new Date();//当前的毫秒数
    var inputTime = +new Date(CT);//用户输入的毫秒数
    var times = (nowTime - inputTime) / 1000;//剩余时间的总秒数（1秒==1000毫秒）
    var d = parseInt(times / 60 / 60 / 24);
    d = d < 10 ? "0" + d : d;
    var h = parseInt(times / 60 / 60 % 24);
    h = h < 10 ? "0" + h : h;
    var m = parseInt(times / 60 % 60);
    m = m < 10 ? "0" + m : m;
    var s = parseInt(times % 60);
    s = s < 10 ? "0" + s : s;
    return d + "天" + h + "小时" + m + "分" + s + "秒";
}