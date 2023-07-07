function resizeAllIframes() {
    var iframes = document.getElementsByTagName('iframe');
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if(width < 520) {
        for (var i = 0; i < iframes.length; i++) {
            const x = width - 40;
            const ratioXtoY = 16/9;
            var y = x * (1/ratioXtoY);
            y = y.toFixed(0);
            iframes[i].width = width-40;
            iframes[i].height = y;
        }
    }
}
window.onload = resizeAllIframes;
window.onresize = resizeAllIframes;