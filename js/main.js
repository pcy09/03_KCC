/* section2_호버시 이미지 변경*/
$(".business a").hover(function () {
	$(this).parent().siblings().children("a").removeClass("bg");
	$(this).addClass("bg");
});

// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	slidesPerView: 2.2,
	spaceBetween: 10,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	breakpoints: {
		1024: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
		1600: {
			slidesPerView: 5,
			spaceBetween: 30,
		},
	},
});
