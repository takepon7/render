/* ===========================================
common.js
=========================================== */
(function($) {
	"use strict";

/* var
------------------------------------- */
	var $win = $(window),
		speed = 300,
		easing = 'swing';

/* smoothScroll
------------------------------------- */
	//scroll speed
	var speed = 500;
	//pagetop btn
	$('a[href="#top"]').on('click', function() {
		$('body,html').animate({ scrollTop: '0' }, speed, 'swing');
		return false;
	});
	// .js-headerがなかった時は「var headerHeight....」と「 - headerHeightを消してください」
	$(window).on('load',function(){
		//unchor link in site
		var urlHash = location.hash;
		if(urlHash){
			var target = $(urlHash);
			if( target.length ) {
				var headerHeight = $('.js-header').innerHeight();
				var position = target.offset().top - headerHeight;
				$('body,html').animate({ scrollTop:position }, speed, easing);
			}
		}
	});
	//other link
	$('a[href^="#"]:not([href="#top"]):not(".js-no-scroll")').on('click',function(){
		var href= $(this).attr('href'),
		target = $(href === '#' || href === '' ? 'html' : href);
		if( target.length ) {
			var headerHeight = $('.js-header').innerHeight(),
			position = target.offset().top - headerHeight;
			$('body,html').animate({ scrollTop:position }, speed, easing);
			return false;
		}
	});

/* hamburger menu
------------------------------------- */
	var $navBtn = $('.js-nav-btn'),
		$navCon = $('.js-nav-content'),
        $navOverlay = $('.js-nav-overlay'),
		$navLine = $('.js-nav-line'),
		$navWrapper = $('.js-nav-wrapper'),
		class_open = 'is-open';
	function funcNaviOpen(){
		$navOverlay.fadeIn(speed);
		$navCon.addClass(class_open);
        $navBtn.addClass(class_open);
		$navLine.addClass(class_open);
		$navWrapper.addClass(class_open);
	}
	function funcNaviReset(){
		$navOverlay.fadeOut(speed);
		$navCon.removeClass(class_open);
        $navBtn.removeClass(class_open);
		$navLine.removeClass(class_open);
		$navWrapper.removeClass(class_open);
	}
	$navBtn.on('click',function(){
		if($navCon.hasClass(class_open)) {
			funcNaviReset();
			return false;
		} else {
			funcNaviOpen();
			return false;
		}
	});
	$navOverlay.on('click',function(){
		funcNaviReset();
	});
	$navCon.on('click',function(event){
		event.stopPropagation();
	});
	$('#nav a').on('click', function () {
		if($navCon.hasClass(class_open)) {
			funcNaviReset();
			return false;
		} else {
			funcNaviOpen();
			return false;
		}
	});

	$('#nav').on('click', function (event) {
		// if(event.target.className!== 'gnav__inner' && event.target.className!== ''){
		if(event.target.className === 'js-nav-content gnav is-open'){
			if($navCon.hasClass(class_open)) {
				funcNaviReset();
				return false;
			} else {
				funcNaviOpen();
				return false;
			}
		  }
	});
})(jQuery);