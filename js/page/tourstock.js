$(function() {
	var winHeight = $(window).height(),
		sectionHeight = /*winHeight > 900 ? winHeight : 900*/'100%',
		partnerFlag = true,
		eventsFlag = true;
alert(winHeight)
    $('.section, .our_partner, .our_people, .events_wrapper, .contact_us').css('height', sectionHeight);
    $('#homeSection').css('height', winHeight);

	/* top nav */
	$('a', '.nav_list').click(function() {
		var _this = $(this),
			gParent = _this.parent().parent(),
			index = parseInt(_this.attr('data-index')),
			targetSection = $('.section[data-index="' + index + '"]'),
			offset = targetSection.offset(),
			top = offset.top;

		/* nav tag change */
		gParent.find('.nav_current').removeClass('nav_current');
		_this.addClass('nav_current');

		$('body,html').animate({
			scrollTop: top
		}, 500);
	});
	/* window scroll && resize */
	$(window).scroll(function() {
		var top = $(this).scrollTop(),
			navList = $('.nav_list '),
			sectionList = $('.section');

		/* nav show && hide */
		if (top >= winHeight) {
			$('.nav').stop();
			$('.nav').animate({
				top: 0
			}, 500);
		}
		if (top < winHeight) {
			$('.nav').stop();
			$('.nav').animate({
				top: '-56px'
			}, 500);
		}
		
		/* nav tag change */
		for (var i=0; i<sectionList.length; i++) {
			var item = $(sectionList[i]),
				index = parseInt(item.attr('data-index')),
				navList = $('.nav_list');
			if (item.offset().top - $(window).scrollTop() >= -winHeight && item.offset().top - $(window).scrollTop() <= 0) {
				navList.find('.nav_current').removeClass('nav_current');
				navList.find('a').eq(index - 1).addClass('nav_current');
				
				if (partnerFlag && index == 3) {
					partnerFlag = false;
					$('.increase_line').stop().animate({
						'height': '+=60'
					}, 1500);
				} else if (eventsFlag && index == 5) {
					eventsFlag = false;
					$('.rocket').stop().animate({
						'right': '-=30',
						'bottom': '+=80'
					}, 1500);
				} else if (!partnerFlag && index != 3 && index != 2) {
					partnerFlag = true;
					$('.increase_line').stop().animate({
						'height': '-=60'
					}, 0);
				} else if (!eventsFlag && index != 5 && index != 4) {
					eventsFlag = true;
					$('.rocket').stop().animate({
						'right': '+=30',
						'bottom': '-=80'
					}, 0);
				}

			}
		}
	}).resize(function() {
		winHeight = $(window).height();
		sectionHeight = winHeight > 900 ? winHeight : 900,
	    $('.section, .our_partner, .our_people, .events_wrapper, .contact_us').css('height', sectionHeight);
    	$('#homeSection').css('height', winHeight);
	});


	/* home page arrow btn click event */
	$('#arrowDown').click(function() {
		$('body,html').animate({
			scrollTop: $('#homeSection').height()
		}, 500);
	}).hover(function() {
		$('.arrow_down_text').css('visibility', 'visible');
	}, function() {
		$('.arrow_down_text').css('visibility', 'hidden');
	});
	/* home page arrow btn animate */
	function arrowBtnAnimate() {
		$('.arrow_down_icon', '#arrowDown').animate({
			'top': '50px',
			'opacity': 0
		}, 1000, function() {
			$(this).css({
				'top': '30px',
				'opacity': 0.7
			});
		});
	}
	setInterval(arrowBtnAnimate, 1500);
});