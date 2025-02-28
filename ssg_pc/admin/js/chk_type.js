$(document).ready(function(){
	
	var target = ".quantity";		//여러개는 콤마(,)로 구분
	
	$(target).bind('keydown', function (e) {
            var keyCode = e.which;

            // 48-57 Standard Keyboard Numbers    
            var isStandard = (keyCode > 47 && keyCode < 58);

            // 96-105 Extended Keyboard Numbers (aka Keypad)    
            var isExtended = (keyCode > 95 && keyCode < 106);

            // 8 Backspace,     46 Forward Delete    
            // 37 Left Arrow,   38 Up Arrow,        39 Right Arrow,     
// 40 Down Arrow    
            var validKeyCodes = ',8,37,38,39,40,46,';    
            var isOther = (-1 < validKeyCodes.indexOf(',' + keyCode + ','));

            if (isStandard || isExtended || isOther) {
                return true;
            }
            else {
                return false;
            }
        }).bind('blur', function () {
            // regular expression that matches everything that is 
// not a number    
            var pattern = new RegExp('[^0-9]+', 'g');
            var $input = $(this);
            var value = $input.val();

            // clean the value using the regular expression    
            value = value.replace(pattern, '');
            if(value.length==0) value = 1;
            $input.val(value)
        });

});//ready