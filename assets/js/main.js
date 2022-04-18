function checkScroll(element, fraction) {
    var rect = element.getBoundingClientRect();
    var y = rect.top,window_height = window.innerHeight;
    var visible = -1;
    
    if(y <= window_height && y > 0) visible = Math.abs(y - window_height)/window_height;

    if (visible > fraction) return true;
    else return false;
}

function checkScrollBlocks(elements, fraction) {
for(var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var visible = checkScroll(element, fraction);
    if( visible && element.classList.contains("is-visible") == false ) {
        element.classList.add("is-visible");
        
        var videos = element.querySelectorAll('video');
        Array.from(videos).forEach( (video_el) => {
            if(video_el){
                var video_src = video_el.getAttribute("data-src");
                if(video_src) video_el.setAttribute("src",video_src);
            }
        });
        
        var imgs = element.querySelectorAll('img');
        Array.from(imgs).forEach( (img_el) => {
            if(img_el){
                var img_src = img_el.getAttribute("data-src");
                if(img_src) img_el.setAttribute("src", img_src);
            }
        });
    }
}
}

var blocks = document.getElementsByClassName("section");

window.addEventListener('scroll', function(){checkScrollBlocks(blocks,0.5)}, false);
window.addEventListener('resize', function(){checkScrollBlocks(blocks,0.5)}, false);


$(".button-2").on("click", function () {
    $(".preto").removeClass('active');
    $(".preto-right").removeClass('active');
    $(".preto-left").removeClass('active');
    $(".azul").addClass('active');
    $(".azul-right").addClass('active');
    $(".azul-left").addClass('active');
});

$(".button-3").on("click", function () {
    $(".azul").removeClass('active');
    $(".azul-right").removeClass('active');
    $(".azul-left").removeClass('active');
    $(".preto").addClass('active');
    $(".preto-right").addClass('active');
    $(".preto-left").addClass('active');
});

$(".slide-btn-wide").on("click", function () {
    $(".slick-dots li:nth-child(1)").addClass('slick-active');
    $(".slick-dots li:nth-child(2)").removeClass('slick-active');
    $(".lalalalala").attr('src','https://i01.appmifile.com/webfile/globalimg/products/responsive/xiaomi-12-pc/50MP.jpg');

});

$(".slide-btn-ultra").on("click", function () {
    $(".slick-dots li:nth-child(1)").removeClass('slick-active');
    $(".slick-dots li:nth-child(2)").addClass('slick-active');
    $(".lalalalala").attr('src','https://i01.appmifile.com/webfile/globalimg/products/responsive/xiaomi-12-pc/Ultra-wide.jpg');
});