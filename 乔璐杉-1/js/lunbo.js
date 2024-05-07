window.addEventListener('load', function () {
    //动态生成小圆圈
    var ul = document.querySelector('.lunbo ul');
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
            var lunbo = document.getElementById('lunbo');
            var lunboElement = document.querySelector('.lunbo');
            var lunboWidth = lunboElement.offsetWidth;
            animate(ul, -index * lunboWidth);
        })
    }
    ol.children[0].className = 'current';
})
