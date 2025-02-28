$(document).ready(function(){

	/* snb*/
	$(".snb > ul > li.depth > a").bind('click', function () {
		if ( !($(this).parent().is('.on')) ) {
			$(this).parent().addClass('on');
			$(this).parent().find('ul').slideDown('300');
		} else {
			$(this).parent().removeClass('on');
			$(this).parent('li').find('ul').slideUp('300');
		}
	});

	$(".qna li a").bind('click', function () {
		if ( !($(this).is('.on')) ) {
			$(this).addClass('on');
			$(this).parent('dt').next('dd').slideDown('300');
		} else {
			$(this).removeClass('on');
			$(this).parent('dt').next('dd').slideUp('300');
		}
	});

	$(".reviews .outer .subject").bind('click', function () {
		if ( !($(this).is('.on')) ) {
			$(this).addClass('on');
			$(this).parent('.outer').next('.subject_info').show();
		} else {
			$(this).removeClass('on');
			$(this).parent('.outer').next('.subject_info').hide();
		}
	});

	/* tab common */
	$('.click .tab_tit a').click(function() {
		var tabIndex = $(this).parent().index()+1;
		$(this).parent().parent().find('li').removeClass('on');
		$(this).parent().addClass('on');
		$(this).parents('.click').find('div[class^="tab_cnt"]').hide();
		$(this).parents('.click').find('.tab_cnt'+ tabIndex).show();
	});

	/* accordion */
	$('.accordion a').click(function() {
		if ( !($(this).parent().parent().parent().is('.on')) ) {
			$(this).parent().parent().parent().addClass('on');
		} else {
			$(this).parent().parent().parent().removeClass('on');
		}
	});

	$(".mn_all").mouseenter(function () {
        $('.menu_all').show();
    });
	$(".mn_all").mouseleave(function () {
        $('.menu_all').hide();
    });

	$('.btn_top_banner_closed').click(function() {
		$(this).parent('.slide_outer').hide();		
	});

	$('.btn_pop_closed').click(function() {
		$(this).parent('.popup').hide();		
	});

	$('.pop_closed').click(function() {
		$(this).parents('.popup').hide();		
	});

	$('.list_hover .zoom').click(function() {
		$('.pop_bg, .pop_list_hover').show();
		return false;	
	});
	$('.closed').click(function() {
		$(this).parents('.pop_bg, .pop_list_hover').hide();		
	});

	/* calendar */
	if ($('input').hasClass('datepicker')) {
		$( ".datepicker" ).datepicker({
			dateFormat: "yy-mm-dd" ,
			monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
			monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
			dayNames: ['일', '월', '화', '수', '목', '금', '토'],
			dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
			dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
			showMonthAfterYear: true,
			yearSuffix: '년',
			showOn: "button",
			buttonImage: "../../images/btn/btn_datepicker.png",
			buttonImageOnly: true,
			buttonText: "Select date"
		});
	}

	/* selectbox */
	if ($('select').parent().hasClass("sel_ty1")) {
		$(".sel_ty1 select").selectbox();
	}
	/* selectbox */
	if ($('select').parent().hasClass("sel_ty2")) {
		$(".sel_ty2 select").selectbox();
	}		
	/* selectbox */
	if ($('select').parent().hasClass("sel_ty3")) {
		$(".sel_ty3 select").selectbox();
	}		
	/* selectbox */
	if ($('select').parent().hasClass("sel_ty4")) {
		$(".sel_ty4 select").selectbox();
	}		
	/* selectbox */
	if ($('select').parent().hasClass("sel_ty5")) {
		$(".sel_ty5 select").selectbox();
	}		

	$(".css-checkbox:checked + label").css("background-position", "0 -46px");
	$(".css-checkbox").bind("click", function() {
		if ($(this).is(":checked")) {
			$(this).next("label").css("background-position", "0 -46px");
		} else {
			$(this).next("label").css("background-position", "0 0");
		}
	});


	/* slide */
	if ($('div').hasClass('main_banner')) {
		$(".main_banner").ssgSlider({
			auto:true,
			pagerCustom: '#mb_pager'
		});
	}
	if ($('div').hasClass('main_category_tit')) {
		$('.main_category_tit ul').ssgSlider({
			slideWidth: 120,
			minSlides: 1,
			maxSlides: 8,
			moveSlides: 1,
			pager: false,
			infiniteLoop: false,
			auto: false,
			speed: 800,
			pause: 5000
		});
	}
	/*
	if ($('div').hasClass('quick_left')) {
		$(function() {
			$('.quick_left').after('<div class="slide-counter qr"><span></span> / </div>');
				var slider = $('.quick_left').ssgSlider({
				pager: false,
				autoHeight: true,
				mode:'fade',
				preloadImages: 'visible',
				onSliderLoad: function(currentIndex) {
					$('.quick_left_out .slide-counter.qr span').text(currentIndex + 1);
					$('.quick_left').css("display", "block");
				},
				onSlideBefore: function($slideElement, oldIndex, newIndex) {
					$('.quick_left_out .slide-counter.qr span').text(newIndex + 1);
				}
			});
			$('.quick_left_out .slide-counter.qr').append(slider.getSlideCount());
		});
	}
	*/
	if ($('div').hasClass('quick_left')) {
		$(function() {
			$('.quick_left').after('<div class="slide-counter qr"><span></span> / </div>');
				var slider = $('.quick_left').ssgSlider({
				pager: false,
				mode:'fade',
				preloadImages: 'visible',
				onSliderLoad: function(currentIndex) {
					$('.quick_left_out .slide-counter.qr span').text(currentIndex + 1);
				},
				onSlideBefore: function($slideElement, oldIndex, newIndex) {
					$('.quick_left_out .slide-counter.qr span').text(newIndex + 1);
				}
			});
			$('.quick_left_out .slide-counter.qr').append(slider.getSlideCount());
		});
	}

	if ($('div').hasClass('quick_r')) {
		$(function() {
			$('.quick_r').after('<div class="slide-counter qr"><span></span> / </div>');
				var slider = $('.quick_r').ssgSlider({
				pager: false,
				mode:'fade',
				preloadImages: 'visible',
				onSliderLoad: function(currentIndex) {
					$('.quick_r_out .slide-counter.qr span').text(currentIndex + 1);
					$('.quick_r').css("display", "block");
					$('.quick_r_out .ssg-viewport').css("height", ($(".quick_r div").height()));
				},
				onSlideBefore: function($slideElement, oldIndex, newIndex) {
					$('.quick_r_out .slide-counter.qr span').text(newIndex + 1);
				}
			});
			$('.quick_r_out .slide-counter.qr').append(slider.getSlideCount());
		});
	}
	if ($('div').hasClass('newitem_slide')) {
		$(function() {
			$('.newitem_slide').after('<div class="slide-counter ns"><span></span> / </div>');
				var slider = $('.newitem_slide').ssgSlider({
				pager: false,
				auto:true,
				autoHover: true,
				onSliderLoad: function(currentIndex) {
					$('.slide-counter.ns span').text(currentIndex + 1);
				},
				onSlideBefore: function($slideElement, oldIndex, newIndex) {
					$('.slide-counter.ns span').text(newIndex + 1);
				}
			});
			$('.slide-counter.ns').append(slider.getSlideCount());
		});

	}
	if ($('div').hasClass('giftcon_new_slide')) {
		$(function() {
			$('.giftcon_new_slide').after('<div class="slide-counter ns"><span></span> / </div>');
				var slider = $('.giftcon_new_slide').ssgSlider({
				pager: false,
				onSliderLoad: function(currentIndex) {
					$('.slide-counter.ns span').text(currentIndex + 1);
				},
				onSlideBefore: function($slideElement, oldIndex, newIndex) {
					$('.slide-counter.ns span').text(newIndex + 1);
				}
			});
			$('.slide-counter.ns').append(slider.getSlideCount());
		});

	}
	if ($('div').hasClass('giftcon_mb_slide')) {
		$(".giftcon_mb_slide").ssgSlider({
			auto:true
		});
	}

	/* line setting */
	if ($('div').hasClass('tab_ty1')) {
		$('.tab_ty1 .tab_tit li:nth-child(5n + 1) a').css('border-left','1px solid #dcdcdc');
		$('.tab_ty1 .tab_tit li:nth-child(5n)~ li a').css('border-top','0 none');
	}
	if ($('div').hasClass('tab_ty2')) {
		$('.tab_ty2 .tab_tit li:nth-child(5n + 1) a').css('border-left','1px solid #e3e3e3');
		$('.tab_ty2 .tab_tit li:nth-child(5n)~ li a').css('border-top','0 none');
	}
	if ($('div').hasClass('tab_ty3')) {
		$('.tab_ty3 .tab_tit li:nth-child(6n) a').css('border-left','1px solid #e3e3e3');
		$('.tab_ty3 .tab_tit li:nth-child(5n)~ li a').css('border-top','0 none');
	}

	$('.qc_banner').click(function(){
		if ($(this).hasClass('on')) {
			$( ".qc_box" ).fadeOut();
			$(this).removeClass('on');
		}else{
			$( ".qc_box" ).fadeIn();
			$(this).addClass('on');
		}
	});
	$('.qc_close').click(function(){
		$( ".qc_box" ).fadeOut();
		$('.qc_banner').removeClass('on');
	});

});//ready

function scrollHidden(){
$('body').css('overflow-y','hidden');	
}
function scrollAuto(){
	$('body').css('overflow-y','auto');	
}


//// s:레이어 팝업 ////
function layerShow(thisClass){
    //$('.contLayer').hide();
    $('.'+thisClass).show();
	
	if($('.'+thisClass).hasClass('fixed_layer')){
		$('html,body').css('overflow-y' , 'hidden');
	}
}
function layerHide(thisClass){
    $('.'+thisClass).hide();
	
	if($('.layer_form.fixed_layer:visible').length == 0 ){
		$('html,body').css('overflow-y' , 'auto');
	}
}


$('#checkAll').bind("click", function() {
	if ($(this).is(":checked")) {
		$(this).closest('.label_control').find('input[type="checkbox"]').prop("checked", true);
	}else{
		$(this).closest('.label_control').find('input[type="checkbox"]').prop("checked", false);
	}
});


//따라다니는 퀵배너
if($('div').hasClass('quick_area')){
$(window).on('scroll', function() {
	var here = $(".container").offset().top,
		height = $('.container').outerHeight(),
		target = here + height;

	if ($(window).scrollTop() >= here <= $(window).scrollTop()& $(window).scrollTop() < target) {
		if($(window).scrollTop() >= $('.container').offset().top) {
			$(".quick_area").addClass('q_scroll');
		} else {
			$(".quick_area").removeClass('q_scroll');
		}
	}
});
}