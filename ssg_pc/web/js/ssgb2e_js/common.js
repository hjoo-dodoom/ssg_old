// gnb 2뎁스 위치값
$(".gnb_1li").hover(function(){
	$(this).find(".gnb_2ul").css("margin-left", "-" + $(this).find(".gnb_2ul").width() / 2 + "px");
});
