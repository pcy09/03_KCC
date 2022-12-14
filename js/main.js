/* section2_호버시 이미지 변경*/
$('.business a').hover(function(){
    $(this).parent().siblings().children('a').removeClass('bg');
    $(this).addClass('bg');
});


// Initialize Swiper

if($(window).width()>1024){
    var swiper = new Swiper(".mySwiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        }
    });
}
if($(window).width()<=1024){
    var swiper = new Swiper(".mySwiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        slidesPerView: 1.2,
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        }
    });
}

$(window).resize(function(){
    if($(window).width()>1024){
        var swiper = new Swiper(".mySwiper", {
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            slidesPerView: 3,
            spaceBetween: 30,
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            }
        });
    }
    if($(window).width()<=1024){
        var swiper = new Swiper(".mySwiper", {
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            slidesPerView: 1.2,
            spaceBetween: 10,
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            }
        });
    }
});






