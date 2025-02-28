//콤마찍기 함수
function fnSetComma(str) {
  str = String(str);
  return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}

//콤마풀기 함수
function fnSetUncomma(str) {
  str = String(str);
  return str.replace(/[^\d]+/g, '');
}

function openDaumPostcode(zipId, addressId){
	
	new daum.Postcode({
		oncomplete: function(data) {
			// 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

	            // 도로명 주소의 노출 규칙에 따라 주소를 조합한다.
	            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
	            var fullRoadAddr = data.roadAddress; // 도로명 주소 변수
	            var extraRoadAddr = ''; // 도로명 조합형 주소 변수

	            // 법정동명이 있을 경우 추가한다. (법정리는 제외)
	            // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
	            if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
	                extraRoadAddr += data.bname;
	            }
	            // 건물명이 있고, 공동주택일 경우 추가한다.
	            if(data.buildingName !== '' && data.apartment === 'Y'){
	               extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
	            }
	            // 도로명, 지번 조합형 주소가 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
	            if(extraRoadAddr !== ''){
	                extraRoadAddr = ' (' + extraRoadAddr + ')';
	            }
	            // 도로명, 지번 주소의 유무에 따라 해당 조합형 주소를 추가한다.
	            if(fullRoadAddr !== ''){
	                fullRoadAddr += extraRoadAddr;
	            }

	            // 우편번호와 주소 정보를 해당 필드에 넣는다.
	            document.getElementById(zipId).value = data.zonecode; //5자리 새우편번호 사용
	            document.getElementById(addressId).value = fullRoadAddr;

	        }
		}).open();        	
}

/**
 * 아이디 유효성 체크 :  element event용
 * param : object.value
 * ex) onchange="idValidChk(this.value);"
 */
 function idValidChk(param) {
	 var idReg = /^[a-z]+[a-z0-9]{7,11}$/g;
     if( !idReg.test( param ) ) {
         alert("아이디는 영문자로 시작하는 8~12자 소문자 영문자 또는 숫자이어야 합니다.");
         return false;
     }
     return true;
 }
 
 /**
  * Byte 글자수로 자르고 문자 붙여주기
  * str : 문자열
  * maxByte : 최대 자리 수
  * addChar : 추가 문자열
  */
 function fnCutByLen(str, maxByte, addChar) {
	 var strResult = "";
	 var strChar = "";
	 
	 for(b = i = 0; c = str.charCodeAt(i);) {
		 b += c >> 7 ? 2 : 1;
		 
		 if (b > maxByte) {
			 strChar = addChar;
			 break;
		 }
		 
		 i++;
	 }
	 
	 strResult = str.substring(0, i) + strChar;
	 
	 return strResult;
}
 
// 레이어 로딩화면 호출함수
function fnLoadingBar(flag, msg) {
	if (flag != null && flag != "null" && flag != undefined && flag != "null" && flag != "" && flag != '') { // 구분값이 있을 때
		var loadingMsg = "";
		
		if (msg != null && msg != "null" && msg != undefined && msg != "null" && msg != "" && msg != '') { // 구분값이 있을 때
			loadingMsg = msg;
		} else {
			loadingMsg = "로딩 중입니다.";
		}
		
		if ("1" == flag) { // 레이어 Show
			$.blockUI({message: ""}); // message 는 빈값으로 비워둬야 Text 기본영역이 영역이 감춰짐
			$("#loading_text").text(loadingMsg);
			$(".loading_layer").show();
		} else if ("2" == flag) { // 레이어 Hide
			setTimeout($.unblockUI, 100); // 짧은 로딩시 점멸현상을 막기위해 타임아웃 설정
			$("#loading_text").text("");
			$(".loading_layer").hide();
		}
	}
}

//여러경우의 널값들을 "" 로 치환
function fnToNotNull(val) {
	var returnVal = "";
	
	returnVal = fnToNotNullDefVal(val, ""); 
	
	return returnVal;
}

//여러경우의 널값들을 지정 문자로 치환
function fnToNotNullDefVal(val, defStr) {
	var returnVal = "";
	
	if (val == "null" || val == "undefined" || val == null || val == undefined || val == "") {
		if (defStr == null || defStr == undefined) {
			returnVal = "";
		} else {
			if (defStr.length == 0) {
				returnVal = "";
			} else {
				returnVal = defStr;
			}
		}
	} else {
		returnVal = val;
	}
	
	return returnVal;
}

//전화번호, 휴대폰 번호 형식으로 치환
function fnMakeTelPhoneForm(val) {
	var returnVal = fnToNotNull(val).replace(/[^0-9]/g, '');
	
	if (returnVal != "") {
		returnVal = returnVal.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,"$1-$2-$3");
	} else {
		returnVal = "";
	}
	
	return returnVal;
}

// PCID 발급
function fnMakePcid(name, val, length, expiredDate, pathVal, domain) {
	var cookie;
	var today = new Date();
	var expiredDate = new Date(2099, 1, 1); // 만료시간
	
	cookie = $.cookie(name);
	
	if (cookie) {
		return;
	}
	
	if (fnToNotNull(val) == "" && length != "") {
		var values = new Array();
		
		for (i=0; i < length; i++) {
			values[i] = "" + Math.random();
		}
		
		val = today.getTime();
		
		for (i=0; i < length; i++) {
			val += values[i].charAt(2);
		}
	}
	
	$.cookie(name, val, {expires : expiredDate, path : pathVal});
}

function fnCallApi(reqUrl) {
	var url = "";
	
	if (reqUrl.indexOf("api_code") > -1) {
		var apiCode = reqUrl.replace("api_code=", "");
		
		$.ajax({
			type : 'post',
			url:'/reqAccessApi.ajax',
			data : {"am_code" : apiCode},
			dataType: 'json',
			async: false,
			success : function(data) {
				if (data.result_code == "0000") {
					fnCustomOpenPop(data.result_etc, "blank");
				} else {
					alert(data.result_msg);
				}
			},
		    error: function() {
		    	alert("관리자에게 문의하여 주시기 바랍니다.");
			}
		});
	}
}

function fnCustomOpenPop(reqUrl, reqTarget) {
	if (reqTarget == "blank") {
		var params = "";
		var newwin = null;
		
		params += 'width='+screen.width;
		params += ', height='+screen.height;
		params += ', top=0, left=0'
		params += ', fullscreen=yes';

		newwin = window.open(reqUrl,'samsungfirePop', params);
		
		if (window.focus) {newwin.focus()}
	} else {
		location.href = reqUrl;
	}
}