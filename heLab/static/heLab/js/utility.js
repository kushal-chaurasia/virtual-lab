(function(scope) {
	var utility = scope.utility = {};
	
	utility.decimalToBinary = function(arg) {
		res1 = 999;
		args = arg;
		while(args>1) {
			arg1 = parseInt(args/2);
			arg2 = args%2;
			args = arg1;
			if(res1 == 999) {
				res1 = arg2.toString();
			} else {
				res1 = arg2.toString()+res1.toString();
			}
		}
		if(args == 1 && res1 != 999) {
			res1 = args.toString()+res1.toString();
		} else if(args == 0 && res1 == 999) {
			res1 = 0;
		} else if(res1 == 999) {
			res1 = 1;
		}
		var ll = res1.length;
		while(ll%4 != 0) {
			res1 = "0"+res1;
			ll = res1.length;
		}	
		return res1;
	};

	utility.BinaryAddition = function(num1, num2) {
		var index;
		var arrayLength = num1.length - 1;
		var resultnumber = "";
		num1 = num1.toString().split("");
		num2 = num2.toString().split("");
		for(index = arrayLength; index >= 0; index--) {
			if(num1[index] == 0 && num2[index] == 0) {
				resultnumber = 0 + resultnumber;
			} else if(num1[index] == 1 && num2[index] == 0 || num1[index] == 0 && num2[index] == 1) {
				resultnumber = 1 + resultnumber;
			} else {
				resultnumber = 1 + resultnumber;
			}
		}
		return resultnumber;
	};

	utility.ArithmaticAddition = function(num1, num2, preCarry) {
		num1 = num1.toString().split("");
		num2 = num2.toString().split("");
		var carry = 0;
		var index = 0;
		var arrayLength = num1.length - 1;
		var resultnumber = "";
		var resultObject = {};
		var prevoiusCarry = 0;
		if(!!preCarry)
			prevoiusCarry = preCarry;
		for(index = arrayLength; index >= 0; index--) {
			if(carry == 1) {
				if(num1[index] == 0 && num2[index] == 0) {
					resultnumber = 1 + resultnumber;
					carry = 0;
				} else if(num1[index] == 1 && num2[index] == 0 || num1[index] == 0 && num2[index] == 1) {
					resultnumber = 0 + resultnumber;
					carry = 1;
				} else {
					resultnumber = 1 + resultnumber;
					carry = 1;
				}
			} else {
				if(num1[index] == 0 && num2[index] == 0) {
					resultnumber = 0 + resultnumber;
					carry = 0;
				} else if(num1[index] == 1 && num2[index] == 0 || num1[index] == 0 && num2[index] == 1) {
					resultnumber = 1 + resultnumber;
					carry = 0;
				} else {
					resultnumber = 0 + resultnumber;
					carry = 1;
				}				
			}
		}
		if(prevoiusCarry > 0) 
			carry = prevoiusCarry;
		resultObject.number = resultnumber;
		resultObject.carry = carry;
		return resultObject;
	};

	utility.BinaryMultiplication = function(num1, num2) {
		var index;
		var arrayLength = num1.length - 1;
		var resultnumber = "";
		num1 = num1.toString().split("");
		num2 = num2.toString().split("");
		for(index = arrayLength; index >= 0; index--) {
			if(num1[index] == 0 && num2[index] == 0) {
				resultnumber = 0 + resultnumber;
			} else if(num1[index] == 1 && num2[index] == 0 || num1[index] == 0 && num2[index] == 1) {
				resultnumber = 0 + resultnumber;
			} else {
				resultnumber = 1 + resultnumber;
			}
		}
		return resultnumber;
	};	
	
	utility.BinaryXOR = function(num1, num2) {
		var index;
		var arrayLength = num1.length - 1;
		var resultnumber = "";
		num1 = num1.toString().split("");
		num2 = num2.toString().split("");
		for(index = arrayLength; index >= 0; index--) {
			if(num1[index] == 0 && num2[index] == 0) {
				resultnumber = 0 + resultnumber;
			} else if(num1[index] == 1 && num2[index] == 0 || num1[index] == 0 && num2[index] == 1) {
				resultnumber = 1 + resultnumber;
			} else {
				resultnumber = 0 + resultnumber;
			}
		}
		return resultnumber;
	};	

	
	utility.computeTwosComplement = function(num) {
		var numberArray	= num.toString().split("");
		var arrayLength =  numberArray.length - 1;
		var resultnumber = "";
		var toggle = false;
		for(index = arrayLength; index >= 0; index--) {
			if(toggle) {
				resultnumber = (numberArray[index] == 1 ? 0 : 1) + resultnumber;
			} else {
				if(numberArray[index] == 1)
					toggle = true;
				resultnumber = numberArray[index] + resultnumber;
			}
		}
		return resultnumber;
	};
	
	utility.computeOnesComplement =  function (num) {
		var numberArray	= num.toString().split("");
		var arrayLength =  numberArray.length - 1;
		var resultnumber = "";
		for(index = arrayLength; index >= 0; index--) {
			resultnumber = (numberArray[index] == 1 ? 0 : 1) + resultnumber;
		}
		return resultnumber;
	}

	utility.convertToDecimal = function(num) {
		var array = num.toString().split("");
		var length = array.length;
		var decimalEquivalent = 0;
		for(var index = 0; index < length; index) {
			decimalEquivalent += parseInt(array[index]) * Math.pow(2, index);
		}
	}
})(this);
