$(document).ready(function(){

	$('.gnb .depth2').each(function(index){
		var width = $(this).children('li').outerWidth(),
			length = $(this).children('li').length;
			if (length >= 2){
				$(this).css('width', width * length +'px');
			}
	});

	$('.gnb .depth2').each(function(index){
		var height = $(this).outerHeight();
		$(this).children('li').css('height', height + 'px');
	});

	/* snb */
/*	$(".snb_btn").bind('click', function () {
		if ( !($(this).is('.on')) ) {
			$('.snb').animate({
				left: '-150px'
			}, function(){
				$('.content').css('padding-left','0')
				$('.content .inner').css('width','1200px')
			});
			$(this).addClass('on');
		} else {
			$('.content').css('padding-left','150px');
			$('.content .inner').css('width','1050px')
						$('.snb').animate({left: '0px'});
			$(this).removeClass('on');
		}
	});*/

	$(".snb > ul > li.depth > a").bind('click', function () {
		if ( !($(this).parent().is('.on')) ) {
			$(this).parent().addClass('on');
			$(this).parent().find('ul').slideDown('300');
		} else {
			$(this).parent().removeClass('on');
			$(this).parent('li').find('ul').slideUp('300');
		}
	});

	$(".layer_price .price").mouseover(function() {
		$(this).parent('tr').find('.hover').show();
	}).mouseout( function () {
		$(this).parent('tr').find('.hover').hide();
	});

	/* tab common */
	$('.click .tab_tit a').click(function() {
		var tabIndex = $(this).parent().index()+1;
		$(this).parent().parent().find('li').removeClass('on');
		$(this).parent().addClass('on');
		$(this).parent().parent().parent().find('div[class^="tab_cnt"]').hide();
		$(this).parent().parent().parent().find('.tab_cnt'+tabIndex).show();
	});

	/* calendar */
	if ($('input').hasClass('datepicker')) {
		$(".datepicker").datepicker({
			changeMonth: true,
            changeYear: true,
			dateFormat: "yy-mm-dd" ,
			monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
			monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
			dayNames: ['일', '월', '화', '수', '목', '금', '토'],
			dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
			dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
			showMonthAfterYear: true,
			//yearSuffix: '년',
			yearRange: "c-100:c+100",
			buttonText: "Select date"
		});
	}
	
	$(".css-checkbox:checked + label").css("background-position", "0 -46px");

	$(".css-checkbox").bind("click", function() {
		if ($(this).is(":checked")) {
			$(this).next("label").css("background-position", "0 -46px");
		} else {
			$(this).next("label").css("background-position", "0 0");
		}
	});

	/* board_view */
	$('.tbl_search_list .btn_img_ty1').click(function() {
		$('[class^="btn_img_ty"]').removeClass('on');
		$(this).addClass('on');
		$('.tbl_search_list .list').hide();
		$('.tbl_search_list .bord_view').hide();
		$('.tbl_search_list .img_outer').show();
	});
	$('.tbl_search_list .btn_img_ty2').click(function() {
		$('[class^="btn_img_ty"]').removeClass('on');
		$(this).addClass('on');
		$('.tbl_search_list .img_outer').hide();
		$('.tbl_search_list .bord_view').hide();
		$('.tbl_search_list .list').show();
	});

	/* sms_toggle */
	$('.sms_toggle').click(function() {
		$(this).parents('tr').next('tr').toggle();
	});

	$('.editor_toggle1').click(function() {
		if ( !($(this).is(':checked')) ) {
			$(this).parent().parent().find('.choice2').hide();
			$(this).parent().parent().find('.choice1').show();
		} else {
			$(this).parent().parent().find('.choice2').hide();
			$(this).parent().parent().find('.choice1').show();
		}
	});
	$('.editor_toggle2').click(function() {
		if ( !($(this).is(':checked')) ) {
			$(this).parent().parent().find('.choice1').hide();
		} else {
			$(this).parent().parent().find('.choice1').hide();
			$(this).parent().parent().find('.choice2').show();
		}
	});

	$('.tree_toggle').click(function() {
		if ( !($(this).parent().parent('li').is('.off')) ) {
			$(this).parent().parent('li').addClass('off');
		} else {
			$(this).parent().parent('li:first').removeClass('off');
		}
	});

	jQuery.cookie = function (name, value, options) { if (typeof value != 'undefined') { options = options || {}; if (value === null) { value = ''; options = $.extend({}, options); options.expires = -1; } var expires = ''; if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) { var date; if (typeof options.expires == 'number') { date = new Date(); date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000)); } else { date = options.expires; } expires = '; expires=' + date.toUTCString(); } var path = options.path ? '; path=' + (options.path) : ''; var domain = options.domain ? '; domain=' + (options.domain) : ''; var secure = options.secure ? '; secure' : ''; document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join(''); } else { var cookieValue = null; if (document.cookie && document.cookie != '') { var cookies = document.cookie.split(';'); for (var i = 0; i < cookies.length; i++) { var cookie = jQuery.trim(cookies[i]); if (cookie.substring(0, name.length + 1) == (name + '=')) { cookieValue = decodeURIComponent(cookie.substring(name.length + 1)); break; } } } return cookieValue; } };
	/*if ($.cookie('asideMenu') == 'open') {
		$('.content').css('padding-left','150px');
		$('.content .inner').css('width','1050px');
		$('.snb').css('left','0');
		$('.snb_btn').addClass('on');
	} else {
		$('.content').css('padding-left','0');
		$('.content .inner').css('width','1200px');
		$('.snb').css('left','-150px');
		$('.snb_btn').removeClass('on');
	};
	
	$(".snb_btn").click(function () {
		if ($(this).hasClass('on')) {
			$('.snb').animate({
				left: '-150px'
			}, function(){
				$('.content').css('padding-left','0');
				$('.content .inner').css('width','1200px')
			});
			$(this).removeClass('on');
			$.cookie('asideMenu', 'close',  { expires : 365, path : '/' });
		} else {
			$('.content').css('padding-left','150px');
			$('.content .inner').css('width','1050px');
			$('.snb').animate({left: '0'});
			$(this).addClass('on');
			$.cookie('asideMenu', 'open',  { expires : 365, path : '/' });
		}
		return false;
	});*/
	
	$('.thum_over').mouseover(function(){
		$(this).closest('tr').find('.thum_hover').show();
	});
	$('.thum_over').mouseout(function(){
		$(this).closest('tr').find('.thum_hover').hide();
	});
	
	//right menu
	if ($.cookie('rightPopMenu') == 'open' || $.cookie('rightPopMenu') == null) {
		if(!$('.dev_statu').hasClass('active')){
			$('.dev_statu').addClass('active');
			$('.devs_toggle').addClass('active');
			$('.devs_toggle').text('>');
			$('.devs_toggle').css('left','-20px');
		}
	} else {
		$('.dev_statu').removeClass('active');
		$('.devs_toggle').removeClass('active');	
		$('.devs_toggle').text('<');
		$('.devs_toggle').css('left','-40px');
	}
	
	$(".devs_toggle").click(function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
			$(this).text('<');
			$('.dev_statu').removeClass('active');
			
			$(this).css('left','-40px');
			$.cookie('rightPopMenu', 'close',  { expires : 365, path : '/' });	
		}else{
			$(this).addClass('active');
			$('.dev_statu').addClass('active');
			$(this).text('>');
			
			$(this).css('left','-20px');
			$.cookie('rightPopMenu', 'open',  { expires : 365, path : '/' });
		}    
		return false;
	});

	$('#checkAll').bind("click", function() {
		if ($(this).is(":checked")) {
    		$(this).closest('.label_control').find('input[type="checkbox"]').prop("checked", true);
		}else{
    		$(this).closest('.label_control').find('input[type="checkbox"]').prop("checked", false);
		}
	});
});//ready
