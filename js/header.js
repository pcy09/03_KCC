/* a href='#' 클릭 무시 */
$('a[href="#"]').click(function (ignore) {
	ignore.preventDefault();
});

// PC버전
$("ul.gnb > li").on("mouseenter mouseleave", function (aa) {
	if ($(window).width() > 1024) {
		if (aa.type == "mouseenter") {
			$(this).children(".gnbSubWrap").stop().fadeIn(300);
			$(this).addClass("hover");
		} else {
			$(this)
				.children(".gnbSubWrap")
				.stop()
				.fadeOut(300, function () {
					$(this).children(".gnbSubWrap").removeAttr("style");
				});
			$(this).removeClass("hover");
		}
	}
});

// 모바일버전
const $mainBtn = $("ul.gnb>li>a"); //메인메뉴
$mainBtn.click(function () {
	if ($(window).width() <= 1024) {
		if ($(this).parents("li").hasClass("on")) {
			$(this).siblings(".gnbSubWrap").slideUp();
			$(this).parents("li").removeClass("on");
		} else {
			$(".gnbSubWrap").slideUp();
			$(this).siblings(".gnbSubWrap").slideDown();
			$("li").removeClass("on");
			$(this).parents("li").addClass("on");
		}
	}
});

// 모바일 상태에서 햄버거 버튼을 누르면 사이드바가 열리고 닫힘
$(".trigger").click(function () {
	$(this).toggleClass("open");
	if ($(this).hasClass("open")) {
		$(".gnb").animate({ right: 0 }, 400);
		$("nav").animate({ left: -250 }, 400);
	} else {
		$(".gnb").animate({ right: -250 }, 400);
		$("nav").animate({ left: 0 }, 400);
	}
});

// 윈도우 사이즈가 바뀔 때 스타일 초기화
$(window).resize(function () {
	if ($(window).width() > 1024) {
		$(".gnbSubWrap").removeAttr("style");
		$(".gnb").removeAttr("style");
		$("ul.gnbSub").css({ "margin-top": "30px" });
		$("ul.gnb>li").removeClass("on");
		$("nav").animate({ left: 0 }, 0);
		$(".trigger").removeClass("open");
		$("header").removeClass("mscroll");

		if ($(window).scrollTop() >= 400) {
			$("header").addClass("scroll");
			$("ul.gnbSub").css({ "margin-top": "16px" });
			$("ul.gnb > li").addClass("scroll");
		}
	}
	if ($(window).width() <= 1024) {
		$("header").removeClass("scroll");
		$("ul.gnb > li").removeClass("scroll");
		$("ul.gnbSub").css({ "margin-top": "0px" });
		if ($(window).scrollTop() >= 400) {
			$("header").addClass("mscroll");
		}
	}
});

/* header_스크롤이 되면 헤더 배경색이 들어감*/
$(window).scroll(function () {
	if ($(window).width() > 1024) {
		if ($(window).scrollTop() >= 400) {
			$("header").addClass("scroll");
			$("ul.gnbSub").css({ "margin-top": "16px" });
			$("ul.gnb > li").addClass("scroll");
		} else {
			$("header").removeClass("scroll");
			$("ul.gnbSub").css({ "margin-top": "30px" });
			$("ul.gnb > li").removeClass("scroll");
		}
		// scrollTop() 스크롤바 위치를 알아오거나 정함 (위에서부터)
	}
	if ($(window).width() <= 1024) {
		if ($(window).scrollTop() >= 400) {
			$("header").addClass("mscroll");
		} else {
			$("header").removeClass("mscroll");
		}
	}
});
