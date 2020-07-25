(function (w) {
    //初始化一个命名空间
    w.$ = {}
    w.$.layout = function (imgArrs) {
        //获取元素
        var swiperWrap = document.querySelector(".swiper-wrap");
        var pointsWrap = swiperWrap.querySelector(".points-wrap")

        //无缝滑屏的整体布局
        var swiperList = document.createElement("ul");
        swiperList.classList.add("swiper-list");
        for(var i=0;i<imgArrs.length;i++){
            var swiperItem = document.createElement("li");
            swiperItem.classList.add("swiper-item");
            var imgNode =document.createElement("img");
            imgNode.src = imgArrs[i];
            swiperItem.appendChild(imgNode);
            swiperList.appendChild(swiperItem);
        }
        swiperWrap.appendChild(swiperList)

        //小圆点的布局
        if(pointsWrap){
            var pointsList = document.createElement("ul");
            pointsList.classList.add("points-list");
            for(var i=0;i<imgArrs.length;i++){
                var pointsItem = document.createElement("li");
                pointsItem.classList.add("points-item");
                if(i===0)
                    pointsItem.classList.add("active");
                pointsList.appendChild(pointsItem);
            }
            pointsWrap.appendChild(pointsList)
        }

        //操作css
        var styleNode = document.createElement("style");
        styleNode.innerHTML = `.swiper-wrap .swiper-list{
            width: ${imgArrs.length*100}%;
        }`;
        styleNode.innerHTML += `.swiper-wrap .swiper-list .swiper-item{
            width: ${(1/imgArrs.length)*100}%;
        }`;
        document.head.appendChild(styleNode);


    }
})(window)