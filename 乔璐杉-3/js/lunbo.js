window.addEventListener('load', function () {
    //动态生成小圆圈
    var lunbo = document.querySelector('.lunbo')
    var ul = document.querySelector('.lunbo ul');
    var win_arrow_r = document.querySelector('.win_arrow_r');
    var win_arrow_l = document.querySelector('.win_arrow_l');
    var lunboWidth = lunbo.offsetWidth
    console.log(ul.children.length)
    var ol = document.querySelector('.lunbo ol');
    for (var i = 0; i < ul.children.length; i++) {
        console.log(ul.children, this.length);
        var li = document.createElement('li');
        li.setAttribute('index', i);
        ol.appendChild(li);
        li.addEventListener('click', function () {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            var index = this.getAttribute('index');
            num = index;
            circle = index;
            var lunbo = document.getElementById('lunbo');
            var lunboElement = document.querySelector('.lunbo');
            var lunboWidth = lunboElement.offsetWidth;
            animate(ul, -index * lunboWidth);
        })
    }
    ol.children[0].className = 'current';
// 右侧按钮
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    var num = 0;
    var circle = 0;
    win_arrow_r.addEventListener('click', function () {
        if (num == ul.children.length - 1) {
            ul.style.left = 0;
            num = 0;
        }
        num++;
        animate(ul, -num * lunboWidth);
        circle++;
        if (circle == ol.children.length) {
            circle = 0;
        }
       circleChange();
    });
// 左侧按钮
    win_arrow_l.addEventListener('click', function () {
        if (num == 0) {
            num = ul.children.length-1;
            ul.style.left = -num*lunboWidth+'px';
            
        }
        num--;
        animate(ul, -num * lunboWidth);
        circle--;
        if (circle <0) {
            circle = ol.children.length-1;
        }
        circleChange();
    });
    function circleChange(){
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
    }
    // 自动播放
    var timer=this.setInterval(function() {
        win_arrow_r.click();
    },4000);
    lunbo.addEventListener('mouseenter',function(){
        clearInterval(timer);
        timer=null;
    });
    lunbo.addEventListener('mouseleave',function(){
        timer=setInterval(function(){
            win_arrow_r.click();
        },4000);
    })
})
