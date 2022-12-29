/**
 * 参数
 * @param obj  要执行动画的对象
 * @param dir  要执行动画的样式；比如：left top width  height
 * @param target 执行动画的目标位置
 * @param speed 移动的速度
 * @param callback 回调函数，这个函数将会再动画执行完毕以后执行
 */
function move(obj, dir, target, speed, callback) {
    //关闭上一个定时器
    clearInterval(obj.timer);
    var current = parseInt(getComputedStyle(obj,null)[dir]);
    /*
        判断速度的正负值
        如果从0向1600移动，speed为正
        如果从1600向0移动，则speed为负
         */
    if (current > target) {
        speed = -speed;
    }
    obj.timer = setInterval(function () {
        var oldValue = parseInt(getComputedStyle(obj,null)[dir]);
        var newValue = oldValue + speed;
        //向左移动时，需要判断newValue是否小于target
        //向右移动时，需要判断newValue是否大于target
        if (speed < 0 && newValue < target || speed > 0 && newValue > target) {
            newValue = target;
        }
        obj.style[dir] = newValue + "px";

        if (newValue == target) {
            clearInterval(obj.timer);
            callback && callback();
        }
    }, 30)
}