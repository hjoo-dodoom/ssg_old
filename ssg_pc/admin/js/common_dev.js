/**
 * 숫자만 입력받도록
 *   ex) onkeydown="return numbersOnly(event, false, this, 13);" onkeyup="numbersOnly2(this);"
 *  주의 : onkeypress 함수가 한글입력시 발생하지 않고
 *          chrome과 firefox 에서 ime-mode:disabled 가 작동하지 않아
 *          부득이 onkeyup 이벤트를 세트로 적어주시기 바랍니다.       
 *  e: 이벤트
 *  decimal : true 정수만, false 소수점포함
 *  obj : 오브벡트
 *  num : 최대 자릿수
 */ 
function numbersOnly(e, decimal, obj, num) {
    var key; 
    var keychar; 
 
   if (window.event) { 
      key = window.event.keyCode; 
   } else if (e) { 
      key = e.which; 
   } else { 
      return true; 
   } 
 
   keychar = String.fromCharCode(key);
   
   if ((key == null) || (key == 0) || (key == 8) || (key == 9) || (key == 13) || (key == 27)) { 
	    return true;
   } else if (obj.value.length >= num){  //숫자제한부분
		return false;
   } else if (key > 47 && key < 58) {
	    return true;
   } else if (decimal && (keychar == ".")) { 
        return true;
   } else {
	   //obj.value = obj.value.replace(/[\ㄱ-하-ㅑ가-힣]/g, 'a');
	    return false;
   }
}

function numbersOnly2(obj) {
	obj.value = obj.value.replace(/[\ㄱ-하-ㅑ가-힣]/g, '');
}
 
/**
 *  날짜 유효성 체크
 *  ex) onchange="isValidDate(this.value);"
 */
 function isValidDate(param) {
     try
     {
         param = param.replace(/-/g,'');

         // 자리수가 맞지않을때
         if( isNaN(param) || param.length!=8 ) {
             return false;
         }
          
         var year = Number(param.substring(0, 4));
         var month = Number(param.substring(4, 6));
         var day = Number(param.substring(6, 8));

         var dd = day / 0;
          
         if( month<1 || month>12 ) {
        	 alert("유효하지 않은 날짜입니다.");
             return false;
         }
          
         var maxDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
         var maxDay = maxDaysInMonth[month-1];
          
         // 윤년 체크
         if( month==2 && ( year%4==0 && year%100!=0 || year%400==0 ) ) {
             maxDay = 29;
         }
          
         if( day<=0 || day>maxDay ) {
        	 alert("유효하지 않은 날짜입니다.");
             return false;
         }
         return true;

     } catch (err) {
    	 alert("유효하지 않은 날짜입니다.");
         return false;
     }                      
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
  * 아이디 유효성 체크 : 함수호출용
  * param : object id
  * ex) fnIdValidChk("inputId");
  */
  function fnIdValidChk(objId) {
 	 var idReg = /^[a-z]+[a-z0-9]{3,11}$/g;
      if( !idReg.test( $("#" + objId).val() ) ) {
          alert("아이디는 영문자로 시작하는 4~12자 소문자 영문자 또는 숫자이어야 합니다.");
          $("#" + objId).val("");
          $("#" + objId).focus();
          return false;
      }
      return true;
  }
  
  /**
   * input 패턴 체크
   * param : objId 오브젝트 ID
   *            pattern (enghan 한글영문만)
   * ex) onkeyup="chkInputPattern('srchSellMemberId', 'enghan');"           
   */
  function chkInputPattern(objId, type) {
	  if (event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 37 || event.keyCode == 39 || event.keyCode == 46) {
		  return true;
	  }
	  
	  if(type == "enghan") {		
		  var idReg = /^[가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z\s]+$/;
		  
	      if( !idReg.test( $("#" + objId).val() ) ) {
	          alert("영문, 한글만 입력 가능합니다.");
	          $("#" + objId).val("");
	          $("#" + objId).focus();
	          return false;
	      }
	  }
       
	  return true;
  }
  
  
/**
  * 비밀번호 패턴 체크
  * 문자, 숫자, 특수문자 조합 8자리 이상 or 2가지 조합의 경우 10자리 이상
 */
  
/*function chkPwd(str) {
	if(str.length < 8) {
		alert("비밀번호는 8자리 이상 입력해주세요.");
		return false
	} else if(str.length >= 8 || str.length < 10) {
		return chkPwd8(str);
	} else if(str.length >= 10) {
		return chkPwd10(str);
	} 
}*/

function chkPwd(str) {
	if(str.length < 8 || str.length > 20) {
		alert("비밀번호는 8자리 이상 20자 이하로 입력해주세요.");
		return false;
	}else{
		return true;
	} 
}
  
function chkPwd8(str){
	  var pw = str;
	  var num = pw.search(/[0-9]/g);
	  var eng = pw.search(/[a-z]/ig);
	  var spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
	  
	  if(pw.length < 8 || pw.length > 20){
	   alert("8자리 ~ 20자리 이내로 입력해주세요.");
	   return false;
	  }
	  if(pw.search(/₩s/) != -1){
	   alert("비밀번호는 공백업이 입력해주세요.");
	   return false;
	  } if(num < 0 || eng < 0 || spe < 0 ){
	   alert("영문,숫자, 특수문자를 혼합하여 입력해주세요.");
	   return false;
	  }
	  
  return true;
}
	 
function chkPwd10(str){
	  var pw = str;
	  var num = pw.search(/[0-9]/g);
	  var eng = pw.search(/[a-z]/ig);
	  var spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
	  if(pw.length < 10 || pw.length > 20){
	   alert("10자리 ~ 20자리 이내로 입력해주세요.");
	   return false;
	  }
	  if(pw.search(/₩s/) != -1){
	   alert("비밀번호는 공백업이 입력해주세요.");
	   return false;
	  }
	  if( (num < 0 && eng < 0) || (eng < 0 && spe < 0) || (spe < 0 && num < 0) ){
	   alert("영문,숫자, 특수문자 중 2가지 이상을 혼합하여 입력해주세요.");
	   return false;
	  }
	  return true;
}

function openDaumPostcode(){	
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
            document.getElementById('shipzipcode').value = data.zonecode; //5자리 새우편번호 사용
            document.getElementById('shipaddr1').value = fullRoadAddr;

		}
	}).open();
}

function validateDate(date){
	var pattern = /[0-9]{4}-[0-9]{2}-[0-9]{2}/;

	if(!pattern.test(date)){
		return false;
	}else{
		return true;
	}
}

//레이어 로딩화면 호출함수
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
			$.unblockUI();
			$("#loading_text").text("");
			$(".loading_layer").hide();
		}
	}
}

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

//날짜 구하기 함수
function fnSetSearchDate(date, terms, delimeter) {
	var newDate = null;
	var resultDt = "";
	var strYear = "";
	var strMon = "";
	var strDay = "";

	if (date == null || date == "" || date == '' || date == "null" || date == undefined || date == "undefined") {
		newDate = new Date();
	} else {
		newDate = new Date(date);
	}
	
	newDate.setDate(newDate.getDate() - Number(terms));
	
	strYear = newDate.getFullYear();
	strMon = (newDate.getMonth()+1) > 9 ? '' + (newDate.getMonth() + 1) : '0' +(newDate.getMonth() + 1);
	strDay = newDate.getDate() > 9 ? '' + newDate.getDate() : '0' + newDate.getDate();
	
	resultDt = strYear + delimeter + strMon + delimeter + strDay;
	
	return resultDt; 
}

//숫자만 허용
function fnGetNumberOnly(val) {
	var resultVal;
	
	resultVal = val.replace(/[^0-9]/g, "");
	
	return resultVal;
}

//여러경우의 널값들을 "" 로 치환
function fnToNotNull(val) {
	var returnVal = "";
	
	returnVal = fnToNotNullDefVal(val, ""); 
	
	return returnVal;
}

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

function fnAjaxFileDownload(formId, url) {
	var loadingMsg = "파일을 다운로드 중 입니다.";
	var failMsg = "다운로드에 실패하였습니다.";
	
	fnAjaxFileDownloadWithMsg(formId, url, loadingMsg, failMsg);
}

function fnAjaxFileDownloadWithMsg(formId, url, loadingMsg, failMsg) {
	var resultLoadingMsg = "";
	var resultFailMsg = "";
	
	if (fnToNotNull(loadingMsg) == "") {
		resultLoadingMsg = "파일을 다운로드 중 입니다";
	} else {
		resultLoadingMsg = loadingMsg;
	}
	
	if (fnToNotNull(failMsg) == "") {
		resultFailMsg = "다운로드에 실패하였습니다.";
	} else {
		resultFailMsg = failMsg;
	}
	
	$.fileDownload(url,{
		httpMethod: 'POST',
		data:$("#" + formId).serialize(),
		prepareCallback:function(url){
			fnLoadingBar(1, resultLoadingMsg);
		},
		successCallback:function(url){
			fnLoadingBar(2);
		},
		failCallback: function (html, url) {
			alert(resultFailMsg);
			fnLoadingBar(2);
		}
	});
}

// 전화번호, 휴대폰 번호 형식으로 치환
function fnMakeTelPhoneForm(val) {
	var returnVal = fnToNotNull(val).replace(/[^0-9]/g, '');
	
	if (returnVal != "") {
		returnVal = returnVal.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,"$1-$2-$3");
	} else {
		returnVal = "";
	}
	
	return returnVal;
}

function fnGetByte(str) {
	var resultByte = 0;
	var val = fnToNotNull(str);
	
	for (b=i=0; c=val.charCodeAt(i);) {
		b+=c >> 7 ? 3 : 1;
		i++;
	}
	
	resultByte = b;
	
	return resultByte;
}

// 바이트 계산
function fnCutByteLen(str, limitByte) {
	var resultStr = "";
	var val = fnToNotNull(str);
	
	for (b=i=0; c=val.charCodeAt(i);) {
		b+=c >> 7 ? 3 : 1;
		
		if (b > limitByte) {
			break;
		}
		
		i++;
	}
	
	resultStr = val.substring(0, i);
	
	return resultStr;
}

/**
 * groupCodeId : 그룹사 id 값
 * targetCodeId : 고객사 id 값
 */
function fnCmmPtnSelectBoxTypeAList(groupCodeId, targetCodeId) {
	var ptncode = fnToNotNull($("#" + groupCodeId + " option:selected").val());
	
	$.ajax({
		type : 'post',
		url:'/member/selectPtnMemberAjaxList.ajax',
		data: {"ptncode2" : ptncode},
		dataType: 'json',
		success : function(data) {
			if (data != null) {
				var strHtml = "";
				
				$("#" + targetCodeId).children().remove();
				
				strHtml += '<option value="">선택</option>';
				strHtml += '<optgroup label="정상승인" value="2">';
				
				$.each(data, function(i, objData) {
					if (objData.mbst == "2") {
						strHtml += '<option value="' + objData.ptncode + '">' + objData.mbname + '</option>';
					}
				});
				
				strHtml += '<optgroup label="가승인" value="1">';
				
				$.each(data, function(i, objData) {
					if (objData.mbst == "1") {
						strHtml += '<option value="' + objData.ptncode + '">' + objData.mbname + '</option>';
					}
				});
				
				strHtml += '<optgroup label="정지" value="3">';
				
				$.each(data, function(i, objData) {
					if (objData.mbst == "3") {
						strHtml += '<option value="' + objData.ptncode + '">' + objData.mbname + '</option>';
					}
				});
				
				strHtml += '<optgroup label="만료" value="4">';
				
				$.each(data, function(i, objData) {
					if (objData.mbst == "4") {
						strHtml += '<option value="' + objData.ptncode + '">' + objData.mbname + '</option>';
					}
				});
				
				$("#" + targetCodeId).append(strHtml);
			}
		},
		error: function() {
		}
	});
}

/**
 * groupCodeId : 그룹사 id 값
 * targetCodeId : 고객사 id 값
 */
function fnCmmPtnSelectBoxTypeBList(groupCodeId, targetCodeId) {
	var mbst = fnToNotNull($("#" + groupCodeId + " option:selected").val());
	
	$.ajax({
		type : 'post',
		url:'/member/selectPtnMemberAjaxList.ajax',
		data: {"mbst" : mbst},
		dataType: 'json',
		success : function(data) {
			if (data != null) {
				var strHtml = "";
				
				$("#" + targetCodeId).children().remove();
				
				strHtml += '<option value="">선택</option>';
				
				$.each(data, function(i, objData) {
					strHtml += '<option value="' + objData.ptncode + '">' + objData.mbname + '</option>';
				});
				
				$("#" + targetCodeId).append(strHtml);
			}
		},
		error: function() {
		}
	});
}

/**
 * groupCodeId : 그룹사 id 값
 * targetCodeId : 고객사 id 값
 */
function fnCmmPtnCheckBoxList(groupCodeId, targetCodeId) {
	var ptncode = fnToNotNull($("#" + groupCodeId + " option:selected").val());
	
	$.ajax({
		type : 'post',
		url:'/member/selectPtnMemberAjaxList.ajax',
		data: {"ptncode2" : ptncode},
		dataType: 'json',
		success : function(data) {
			if (data != null) {
				var strHtml = "";
				
				$("#" + targetCodeId).children().remove();
				
				strHtml += '<tr class="trSelected">';
				strHtml += '	<td>';
				strHtml += '		<input type="checkbox" name="chkAll" id="chkAll" value=""/>&nbsp;전체';	
				strHtml += '	</td>';
				strHtml += '</tr>';
				
				$.each(data, function(i, objData) {
					strHtml += '<tr class="trSelected">';
					strHtml += '	<td>';
					strHtml += '		<input type="checkbox" name="arryPtncode" value="' + objData.ptncode + '"/>&nbsp;' + objData.mbname;	
					strHtml += '	</td>';
					strHtml += '</tr>';
				});
				
				$("#" + targetCodeId).append(strHtml);
			}
		},
		error: function() {
		}
	});
}