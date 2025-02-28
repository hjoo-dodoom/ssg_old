//디자인 체크,라디오
$(document).ready(function() {
	$("label.design_radio input:checked,label.design_check input:checked").closest('label').addClass("active");
});

$("label.design_radio").bind("click", function() {
	if ($(this).find('input').is(":checked")) {
		$(this).closest('.label_control').find('label').removeClass('active');
		$(this).addClass('active');
	} else {
		$(this).removeClass('active');
	}
});

$("label.design_check").bind("click", function() {
	if ($(this).hasClass('active')){
		if($(this).hasClass('all')){	//전체선택
			$(this).closest('.label_control').find('.design_check').removeClass('active');
			$(this).closest('.label_control').find('.design_check input[type="checkbox"]').prop("checked", false);
			return false;
		}
		else if($(this).closest('.label_control').find('.all').hasClass('active')){
			$(this).closest('.label_control').find('.all').removeClass('active');
			$(this).closest('.label_control').find('.all input[type="checkbox"]').prop("checked", false);
			$(this).find('input[type="checkbox"]').prop("checked", false);
			$(this).removeClass('active');
			return false;
		}
		else{
			$(this).find('input[type="checkbox"]').prop("checked", false);
			$(this).removeClass('active');
			return false;
		}
	} else {
		if($(this).hasClass('all')){
			$(this).closest('.label_control').find('.design_check').addClass('active');
			$(this).closest('.label_control').find('.design_check input[type="checkbox"]').prop("checked", true);
			return false;
		}
		else{
			$(this).find('input[type="checkbox"]').prop("checked", true);
			$(this).addClass('active');
			return false;
		}
	}
});

//슬라이더 리로드
function sliderRe(){
	$('.slider').slick('refresh');
}

var scPosition =  '';

//레이어팝업 */
function layerShow(thisClass){
    //$('.contLayer').hide();
	$('.'+thisClass).show();
	if($('.'+thisClass).hasClass('fixed_layer')){
		scPosition =  window.pageYOffset;
		$('html,body').css('overflow-y' , 'hidden');
		$('body').addClass('sc_hidden');
	}
	/*
	if($('.'+thisClass).find('.lc_btn').length == 1){
		var lcbHeight = $('.'+thisClass).find('.lc_btn').outerHeight();
		$('.'+thisClass).css('padding-bottom', lcbHeight);
	}
	*/
	if($('.'+thisClass).find('.lc_btn').length == 1){
		var lcbHeight = $('.'+thisClass).find('.lc_btn').outerHeight();
		$('.'+thisClass).find('.lc_form').append('<span class="bk"></span>')
	}
}
function layerHide(thisClass){
    $('.'+thisClass).hide();
	if($('.layer_form.fixed_layer:visible').length == 0 ){
		$('html,body').css('overflow-y' , 'auto');
	}
	$('body').removeClass('sc_hidden');
	$('body,html').scrollTop( scPosition );
}



//인풋최대 글자수 제한
$(document).on('keyup', '.max_text', function () {
    var numChar = $(this).val().length;
	var maxNum = $(this).attr('maxlength');
	var lenDisplay = $(this).closest('.ip_group').find('.max_len b');
	 if(numChar == maxNum){
	  alert('최대 글자 수가 모두 찼습니다.');
	}
	lenDisplay.text(numChar);
});

//글자수 제한있는 항목 첫 로드 시 계산
if ($('span').hasClass('max_len')){
	$(".max_len").each(function() {
		var numChar = $(this).closest('.ip_group').find('.max_text').val().length;
		$(this).find('b').text(numChar);
	});
}

/*active 토글*/
$('.active_control li a').click(function(){
	$(this).closest('.active_control').find('li').removeClass('active');
	$(this).closest('li').addClass('active');
});


/*메뉴*/
$('.menu_toggle').click(function(){
	$('html').css('overflow-y', 'hidden');
	$('.menu_form').show();
	$('.menu_form .menu_bg').fadeIn(300);
	$('.menu_box').animate({left: "0"}, {
		duration: 300}
	);
});

$('.menu_form .menu_bg').click(function(){
	var hideCnt = function(){
		$('.menu_form').hide();
	}
	$('html').css('overflow-y', 'auto');
	$('.menu_form').show();
	$('.menu_form .menu_bg').fadeOut(300);
	$('.menu_box').animate({left: "-80%"}, {
		duration: 300, complete:hideCnt}
	);
});

//탭 박스
$('.tap_btn').click(function(){
	var target = $(this).attr('data-rel');
	
	$(this).closest('.tap_btn_form').find('.tap_btn').removeClass('active');
	$(this).addClass('active');

	$(this).closest('.tap_closest').find('.tap_box').hide();
	$(this).closest('.tap_closest').find('.' + target).show();
	if($('.tap_closest').find('.slider')){
		$('.slider').slick('refresh');
	}
});

/*
function content_padding(){
	if($('#header').is(":hidden")){
		$('#layout').css('padding-top', '0');
	}
	if($('#header').length == 1){
		$('#layout').css('padding-top', '50px');
	}
	if($('.fixed_nav').is(":hidden")){
		$('#layout').css('padding-bottom', '0');
	}
	if($('.fixed_nav').length == 1){
		var fnHeight = $('.fixed_nav').find('.inner').outerHeight();
		$('#layout').css('padding-bottom', fnHeight);
	}
	window.scrollTo(0,0);
}

$(document).ready(function(){
	content_padding();
});
*/

//이미지 첨부  
function readURL(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();
		var target = $(input).closest('.profile').find('.profile_upcnt');
		var ext = $(input).val().split('.').pop().toLowerCase();

		if($.inArray(ext, ['gif','png','jpg','jpeg']) == -1) {
			alert('gif,png,jpg,jpeg만 등록가능합니다.');
			return;
		}
		reader.onload = function(e) {
			target.css('background-image', 'url(' + e.target.result + ')');
		}
		reader.readAsDataURL(input.files[0]);
	}
}

$(document).on('change', ".file_upload input[type='file']", function() {
	readURL(this);
});


$(document).on('change', '.file_upload input', function() {
	var imageName = $(this).val();
	$(this).closest('.file_upload').find('.file_name').text(imageName);
});

$('.toggle_btn').click(function(){
	$(this).toggleClass('active');
	$(this).closest('.toggle_slide').find('.toggle_cnt').slideToggle();
});

//필드 초기화
$(document).on('click', '.ip_clear', function(){
	$(this).closest('.ip_group').find('input[type="text"],input[type="password"],input[type="tel"]').val('');
	$(this).remove();
});

$('.clear_box input[type="text"],.clear_box input[type="password"],.clear_box input[type="tel"]').on("change keyup paste", function() {
	if(!$(this).val() == ''){
		if($(this).closest('.clear_box').find('.ip_clear').length >= 1){
			return false;
		}
		$(this).closest('.clear_box').append('<button type="button" class="ip_clear">지우기</button>')
	}else{
		$(this).closest('.clear_box').find('.ip_clear').remove();
	}
});

if ($('div').hasClass('clear_box')){
	$(".clear_box").each(function() {
		if(!$(this).find('input').val() == ''){
			$(this).append('<button type="button" class="ip_clear">지우기</button>');
		}
	});
}

//인풋최대 글자수 제한
$(document).on('propertychange change keyup paste input', '.max_text', function () {
    var numChar = $(this).val().length;
	var maxNum = $(this).attr('maxlength');
	var lenDisplay = $(this).closest('.ip_group').find('.max_len b');
	 if(numChar == maxNum){
	  alert('최대 글자 수가 모두 찼습니다.');
	}
	lenDisplay.text(numChar);
});

//글자수 제한있는 항목 첫 로드 시 계산
if ($('span').hasClass('max_len')){
	$(".max_len").each(function() {
		var numChar = $(this).closest('.ip_group').find('.max_text').val().length;
		$(this).find('b').text(numChar);
	});
}


function menuShow(){
	$( ".menu_ly" ).show();
	$( ".menu_ly" ).animate({
		left: "0",
	}, 400, function() {
  });
}

function menuHide(){
	$( ".menu_ly" ).animate({
		left: "-100%",
	}, 400, function() {
		$( ".menu_ly" ).hide();
		if($('.layer_form.fixed_layer:visible').length == 0 ){
			$('html,body').css('overflow-y' , 'auto');
		}
	});
}


//최근본상품
var scPosition2 =  '';
var scPosition3 =  '';

function lastestShow(){
	scPosition2 =  window.pageYOffset;
	scPosition3 =  $('html').scrollTop();
	$('#layout').css('position' , 'relative');
	$('#layout').offset({ top: scPosition3 * -1 });
	$( "#layout, #header" ).animate({ left: "-85%"}, 300);
	$('.lastest_goods').animate({ right: "0"}, 300);
	$('.lastest_bg').show();


	$('html,body').css('overflow-y' , 'hidden');
	$('body').addClass('sc_hidden');

};
function lastestHide(){
	$('#layout').removeClass('lastest_active');
	$('.lastest_goods').animate({ right: "-85%"}, 300);
	$('.lastest_bg').hide();

	$('html,body').css('overflow-y', 'auto');
	$('#layout').css('position' , 'relative');
	$( "#layout, #header" ).animate({ left: "0"}, 300);
	$('#layout').offset({ top: 0 });

	$('body').removeClass('sc_hidden');
	$('body,html').scrollTop( scPosition2 );
	$('#layout').removeClass('lastest_active').removeClass('trst');
};

//카테고리 active
$('.tcate_active .tcate_item a').click(function(){
	if(!$(this).hasClass('active')){
		$('.tcate_active .tcate_item a').removeClass('active');
		$(this).addClass('active');
	}
});

//페이지 로드 시 카테고리 active 스크롤 포지션
if($('div').hasClass('tcate_scroll')){
	$(document).ready(function() {
		var stap_active = $('.tcate_item a.active').closest('.tcate_item');
		var active_index = stap_active.index();
		//var max_position = 0 - $('.tcate_scroll').width();
		var set = $('.tcate_scroll .tcate_item');
		//set.each(function(){
		//	max_position = max_position + $(this).width();
		//})
		
		var before_width = 0;
		var before_i = 0;
		
		if(active_index>=1){
			$('.tcate_scroll .tcate_item').each(function(){
				before_width = before_width + $(this).width();
				before_i++;
				if(before_i==active_index){
					return false;
				}
			});
		}
		//if(before_width > max_position){
		//	var before_width = max_position;
		//}
		$('.tcate_scroll').scrollLeft(Math.abs(before_width)); 
	})
}