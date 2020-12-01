var regBinary = /^[01]+$/;
var binarycounter = function() {
	var cbc;
	var timebc;
	var x, bin = [], counter = 0;

	this.init = function() {

	}
	this.destruct = function() {

		clearInterval(timebc);
		timebc = "";

		//alert(counter);
	}
	this.resetCounter = function() {
		counter = 0;
		clearInterval(timebc);
		time = "";
		//updatecounter;
		var b = utility.decimalToBinary(counter).split("")

		//console.log(b[3]+"  "+b[2]+"  "+b[1]+"  "+b[0])

		$("#decimaloutput_bc").text("");
		/*
		 if(b[0] == true)
		 document.getElementById("b3_binary_counter").src = "/static/heLab/images/lightbulb1_up.png"
		 else*/

		document.getElementById("b3_binary_counter").src = "/static/heLab/images/lightbulb_up.png"
		/*
		 if(b[1] == true)
		 document.getElementById("b2_binary_counter").src = "/static/heLab/images/lightbulb1_up.png"
		 else*/

		document.getElementById("b2_binary_counter").src = "/static/heLab/images/lightbulb_up.png"
		/*
		 if(b[2] == true)
		 document.getElementById("b1_binary_counter").src = "/static/heLab/images/lightbulb1_up.png"
		 else*/

		document.getElementById("b1_binary_counter").src = "/static/heLab/images/lightbulb_up.png"
		/*
		 if(b[3] == true)
		 document.getElementById("b0_binary_counter").src = "/static/heLab/images/lightbulb1_up.png"
		 else*/

		document.getElementById("b0_binary_counter").src = "/static/heLab/images/lightbulb_up.png"
	}
	this.updatecounter = function() {
		var localCounterBc = counter;
		var counterHex = utility.dec2hex(localCounterBc);
		if( typeof (counter) == "undefined") {
			localCounterBc = 0;
			counterHex = 0;
		}
		var b = utility.decimalToBinary(localCounterBc).split("")

		//console.log(b[3]+"  "+b[2]+"  "+b[1]+"  "+b[0])
		//alert(counterHex);
		$("#decimaloutput_bc").text(counterHex.toUpperCase());
		if(b[0] == true)
			document.getElementById("b3_binary_counter").src = "/static/heLab/images/lightbulb1_up.png"
		else
			document.getElementById("b3_binary_counter").src = "/static/heLab/images/lightbulb_up.png"
		if(b[1] == true)
			document.getElementById("b2_binary_counter").src = "/static/heLab/images/lightbulb1_up.png"
		else
			document.getElementById("b2_binary_counter").src = "/static/heLab/images/lightbulb_up.png"
		if(b[2] == true)
			document.getElementById("b1_binary_counter").src = "/static/heLab/images/lightbulb1_up.png"
		else
			document.getElementById("b1_binary_counter").src = "/static/heLab/images/lightbulb_up.png"
		if(b[3] == true)
			document.getElementById("b0_binary_counter").src = "/static/heLab/images/lightbulb1_up.png"
		else
			document.getElementById("b0_binary_counter").src = "/static/heLab/images/lightbulb_up.png"
		localCounterBc++;
		//alert(localCounter);
		if(localCounterBc >= 16)
			localCounterBc = 0;
		counter = localCounterBc;

		//alert(this.cbc);
		//time = setInterval(scope.updatecounter, ((this.cbc*10)));
	}
	var scope = this;
	this.startcounter = function() {
		//scope.updatecounter();
		cbc = $("#cbc").val()
		//alert((1/cbc) * 1000);
		//timebc = setInterval(scope.updatecounter, (cbc*10);
		timebc = setInterval(scope.updatecounter, (1 / cbc) * 1000);

		//alert(time);
	}
	this.addClockPulse = function() {
		var localCounterBc = counter;
		var counterHex = utility.dec2hex(localCounterBc);
		if( typeof (counter) == "undefined") {
			localCounterBc = 0;
			counterHex = 0;
		}
		var b = utility.decimalToBinary(localCounterBc).split("")

		//console.log(b[3]+"  "+b[2]+"  "+b[1]+"  "+b[0])
		//alert(counterHex);
		$("#decimaloutput_bc").text(counterHex.toUpperCase());
		if(b[0] == true)
			document.getElementById("b3_binary_counter").src = "/static/heLab/images/lightbulb1_up.png"
		else
			document.getElementById("b3_binary_counter").src = "/static/heLab/images/lightbulb_up.png"
		if(b[1] == true)
			document.getElementById("b2_binary_counter").src = "/static/heLab/images/lightbulb1_up.png"
		else
			document.getElementById("b2_binary_counter").src = "/static/heLab/images/lightbulb_up.png"
		if(b[2] == true)
			document.getElementById("b1_binary_counter").src = "/static/heLab/images/lightbulb1_up.png"
		else
			document.getElementById("b1_binary_counter").src = "/static/heLab/images/lightbulb_up.png"
		if(b[3] == true)
			document.getElementById("b0_binary_counter").src = "/static/heLab/images/lightbulb1_up.png"
		else
			document.getElementById("b0_binary_counter").src = "/static/heLab/images/lightbulb_up.png"
		localCounterBc++;
		//alert(localCounter);
		if(localCounterBc >= 16)
			localCounterBc = 0;
		counter = localCounterBc;
	}
}
var bcdcounter = function() {
	var cbcd;
	var x, bin = [], counter = 0;
	var time;
	this.init = function() {
		for(var i = 0; i < 10; i++)
		bin[i] = i.toString(2);
	}

	this.destruct = function() {
		clearInterval(time);
		time = ""
	}
	this.resetCounter = function() {
		counter = 0;
		clearInterval(time);
		time = "";
		//updatecounter;
		var b = utility.decimalToBinary(counter).split("")

		//console.log(b[3]+"  "+b[2]+"  "+b[1]+"  "+b[0])

		$("#decimaloutput_bcd").text("");
		/*
		 if(b[0] == true)
		 document.getElementById("b3_bcd_counter").src = "/static/heLab/images/lightbulb1_up.png"
		 else*/

		document.getElementById("b3_bcd_counter").src = "/static/heLab/images/lightbulb_up.png"
		/*
		 if(b[1] == true)
		 document.getElementById("b2_bcd_counter").src = "/static/heLab/images/lightbulb1_up.png"
		 else*/

		document.getElementById("b2_bcd_counter").src = "/static/heLab/images/lightbulb_up.png"
		/*
		 if(b[2] == true)
		 document.getElementById("b1_bcd_counter").src = "/static/heLab/images/lightbulb1_up.png"
		 else*/

		document.getElementById("b1_bcd_counter").src = "/static/heLab/images/lightbulb_up.png"
		/*
		 if(b[3] == true)
		 document.getElementById("b0_bcd_counter").src = "/static/heLab/images/lightbulb1_up.png"
		 else*/

		document.getElementById("b0_bcd_counter").src = "/static/heLab/images/lightbulb_up.png"
	}
	this.updatecounter = function() {
		var localCounter = counter;
		if( typeof (counter) == "undefined") {
			localCounter = 0;
		}
		var b = utility.decimalToBinary(localCounter).split("");
		//console.log(b[3]+"  "+b[2]+"  "+b[1]+"  "+b[0])
		$("#decimaloutput_bcd").text(localCounter);
		if(b[0] == true)
			document.getElementById("b3_bcd_counter").src = "/static/heLab/images/lightbulb1_up.png"
		else
			document.getElementById("b3_bcd_counter").src = "/static/heLab/images/lightbulb_up.png"
		if(b[1] == true)
			document.getElementById("b2_bcd_counter").src = "/static/heLab/images/lightbulb1_up.png"
		else
			document.getElementById("b2_bcd_counter").src = "/static/heLab/images/lightbulb_up.png"
		if(b[2] == true)
			document.getElementById("b1_bcd_counter").src = "/static/heLab/images/lightbulb1_up.png"
		else
			document.getElementById("b1_bcd_counter").src = "/static/heLab/images/lightbulb_up.png"
		if(b[3] == true)
			document.getElementById("b0_bcd_counter").src = "/static/heLab/images/lightbulb1_up.png"
		else
			document.getElementById("b0_bcd_counter").src = "/static/heLab/images/lightbulb_up.png"
		localCounter++;
		if(localCounter == 10)
			localCounter = 0;
		counter = localCounter;
	}
	var scope = this;
	this.startcounter = function() {
		//scope.updatecounter();
		cbcd = $("#cbcdc").val();
		time = setInterval(scope.updatecounter, (1 / cbcd) * 1000);
	}
	this.addClockPulse = function() {
		var localCounter = counter;
		if( typeof (counter) == "undefined") {
			localCounter = 0;
		}
		var b = utility.decimalToBinary(localCounter).split("");
		//console.log(b[3]+"  "+b[2]+"  "+b[1]+"  "+b[0])
		$("#decimaloutput_bcd").text(localCounter);
		if(b[0] == true)
			document.getElementById("b3_bcd_counter").src = "/static/heLab/images/lightbulb1_up.png"
		else
			document.getElementById("b3_bcd_counter").src = "/static/heLab/images/lightbulb_up.png"
		if(b[1] == true)
			document.getElementById("b2_bcd_counter").src = "/static/heLab/images/lightbulb1_up.png"
		else
			document.getElementById("b2_bcd_counter").src = "/static/heLab/images/lightbulb_up.png"
		if(b[2] == true)
			document.getElementById("b1_bcd_counter").src = "/static/heLab/images/lightbulb1_up.png"
		else
			document.getElementById("b1_bcd_counter").src = "/static/heLab/images/lightbulb_up.png"
		if(b[3] == true)
			document.getElementById("b0_bcd_counter").src = "/static/heLab/images/lightbulb1_up.png"
		else
			document.getElementById("b0_bcd_counter").src = "/static/heLab/images/lightbulb_up.png"
		localCounter++;
		if(localCounter == 10)
			localCounter = 0;
		counter = localCounter;
	}
}
var johncounter = function() {
	var cjohn;
	var x, bin = [], counter = 0;
	var time;
	//var data = new Array("1000","1100","1110","1111","0111","0011","0001","0000");
	var data = new Array("0000", "1000", "1100", "1110", "1111", "0111", "0011", "0001");
	this.init = function() {

	}

	this.destruct = function() {
		clearInterval(time);
		time = "";
		//
	}

	this.resetCounter = function() {
		counter = 0;
		clearInterval(time);
		time = "";
		var b = data[counter].split("");
		//console.log(b[3]+"  "+b[2]+"  "+b[1]+"  "+b[0])
		//earlier started with b[3]..
		/*
		 if(b[0] == true)
		 document.getElementById("b3_john_counter").src = "/static/heLab/images/lightbulb1_up.png"
		 else*/

		document.getElementById("b3_john_counter").src = "/static/heLab/images/lightbulb_up.png"
		/*
		 if(b[1] == true)
		 document.getElementById("b2_john_counter").src = "/static/heLab/images/lightbulb1_up.png"
		 else*/

		document.getElementById("b2_john_counter").src = "/static/heLab/images/lightbulb_up.png"
		/*
		 if(b[2] == true)
		 document.getElementById("b1_john_counter").src = "/static/heLab/images/lightbulb1_up.png"
		 else*/

		document.getElementById("b1_john_counter").src = "/static/heLab/images/lightbulb_up.png"
		/*
		 if(b[3] == true)
		 document.getElementById("b0_john_counter").src = "/static/heLab/images/lightbulb1_up.png"
		 else*/

		document.getElementById("b0_john_counter").src = "/static/heLab/images/lightbulb_up.png"
	}

	this.updatecounter = function() {
		var b = data[counter].split("");
		//console.log(b[3]+"  "+b[2]+"  "+b[1]+"  "+b[0])
		//earlier started with b[3]..
		if(b[0] == true)
			document.getElementById("b3_john_counter").src = "/static/heLab/images/lightbulb1_up.png"
		else
			document.getElementById("b3_john_counter").src = "/static/heLab/images/lightbulb_up.png"
		if(b[1] == true)
			document.getElementById("b2_john_counter").src = "/static/heLab/images/lightbulb1_up.png"
		else
			document.getElementById("b2_john_counter").src = "/static/heLab/images/lightbulb_up.png"
		if(b[2] == true)
			document.getElementById("b1_john_counter").src = "/static/heLab/images/lightbulb1_up.png"
		else
			document.getElementById("b1_john_counter").src = "/static/heLab/images/lightbulb_up.png"
		if(b[3] == true)
			document.getElementById("b0_john_counter").src = "/static/heLab/images/lightbulb1_up.png"
		else
			document.getElementById("b0_john_counter").src = "/static/heLab/images/lightbulb_up.png"
		counter++;
		if(counter >= 8)
			counter = 0;
		return
	}
	var scope = this;
	this.startcounter = function() {
		//scope.updatecounter();
		cjohn = $("#cjohnc").val();
		time = setInterval(scope.updatecounter, (1 / cjohn) * 1000);
	}

	this.addClockPulse = function() {
		var b = data[counter].split("");
		//console.log(b[3]+"  "+b[2]+"  "+b[1]+"  "+b[0])
		//earlier started with b[3]..
		if(b[0] == true)
			document.getElementById("b3_john_counter").src = "/static/heLab/images/lightbulb1_up.png"
		else
			document.getElementById("b3_john_counter").src = "/static/heLab/images/lightbulb_up.png"
		if(b[1] == true)
			document.getElementById("b2_john_counter").src = "/static/heLab/images/lightbulb1_up.png"
		else
			document.getElementById("b2_john_counter").src = "/static/heLab/images/lightbulb_up.png"
		if(b[2] == true)
			document.getElementById("b1_john_counter").src = "/static/heLab/images/lightbulb1_up.png"
		else
			document.getElementById("b1_john_counter").src = "/static/heLab/images/lightbulb_up.png"
		if(b[3] == true)
			document.getElementById("b0_john_counter").src = "/static/heLab/images/lightbulb1_up.png"
		else
			document.getElementById("b0_john_counter").src = "/static/heLab/images/lightbulb_up.png"
		counter++;
		if(counter >= 8)
			counter = 0;
	}
}
var ringcounter = function() {
	var cring;
	var x, bin = [], counter = 0;
	var time;
	var data = new Array("0000", "0001", "0010", "0100", "1000", "0001", "0010", "0100", "1000", "0001");
	this.init = function() {
		for(var i = 0; i < data.length; i++)
		bin[i] = data[i].toString(2);
		//alert(bin)
	}

	this.destruct = function() {
		clearInterval(time);
		time = ""
	}

	this.resetCounter = function() {
		counter = 0;
		clearInterval(time);
		time = ""
		var b = data[counter].split("")
		//console.log(b[3]+"  "+b[2]+"  "+b[1]+"  "+b[0])

		/*
		 if(b[3] == true)
		 document.getElementById("b0_ring_counter").src = "/static/heLab/images/lightbulb1_up.png"
		 else*/

		document.getElementById("b0_ring_counter").src = "/static/heLab/images/lightbulb_up.png"
		/*
		 if(b[2] == true)
		 document.getElementById("b1_ring_counter").src = "/static/heLab/images/lightbulb1_up.png"
		 else*/

		document.getElementById("b1_ring_counter").src = "/static/heLab/images/lightbulb_up.png"
		/*
		 if(b[1] == true)
		 document.getElementById("b2_ring_counter").src = "/static/heLab/images/lightbulb1_up.png"
		 else*/

		document.getElementById("b2_ring_counter").src = "/static/heLab/images/lightbulb_up.png"
		/*
		 if(b[0] == true)
		 document.getElementById("b3_ring_counter").src = "/static/heLab/images/lightbulb1_up.png"
		 else*/

		document.getElementById("b3_ring_counter").src = "/static/heLab/images/lightbulb_up.png"
	}
	this.updatecounter = function() {
		var b = data[counter].split("")
		//console.log(b[3]+"  "+b[2]+"  "+b[1]+"  "+b[0])

		if(b[3] == true)
			document.getElementById("b0_ring_counter").src = "/static/heLab/images/lightbulb1_up.png"
		else
			document.getElementById("b0_ring_counter").src = "/static/heLab/images/lightbulb_up.png"
		if(b[2] == true)
			document.getElementById("b1_ring_counter").src = "/static/heLab/images/lightbulb1_up.png"
		else
			document.getElementById("b1_ring_counter").src = "/static/heLab/images/lightbulb_up.png"
		if(b[1] == true)
			document.getElementById("b2_ring_counter").src = "/static/heLab/images/lightbulb1_up.png"
		else
			document.getElementById("b2_ring_counter").src = "/static/heLab/images/lightbulb_up.png"
		if(b[0] == true)
			document.getElementById("b3_ring_counter").src = "/static/heLab/images/lightbulb1_up.png"
		else
			document.getElementById("b3_ring_counter").src = "/static/heLab/images/lightbulb_up.png"
		counter++;
		if(counter == data.length)
			counter = 0;
		return
	}
	var scope = this;
	this.startcounter = function() {
		//scope.updatecounter();
		cring = $("#cringc").val();
		time = setInterval(scope.updatecounter, (1 / cring) * 1000);
	}

	this.addClockPulse = function() {
		var b = data[counter].split("")
		//console.log(b[3]+"  "+b[2]+"  "+b[1]+"  "+b[0])

		if(b[3] == true)
			document.getElementById("b0_ring_counter").src = "/static/heLab/images/lightbulb1_up.png"
		else
			document.getElementById("b0_ring_counter").src = "/static/heLab/images/lightbulb_up.png"
		if(b[2] == true)
			document.getElementById("b1_ring_counter").src = "/static/heLab/images/lightbulb1_up.png"
		else
			document.getElementById("b1_ring_counter").src = "/static/heLab/images/lightbulb_up.png"
		if(b[1] == true)
			document.getElementById("b2_ring_counter").src = "/static/heLab/images/lightbulb1_up.png"
		else
			document.getElementById("b2_ring_counter").src = "/static/heLab/images/lightbulb_up.png"
		if(b[0] == true)
			document.getElementById("b3_ring_counter").src = "/static/heLab/images/lightbulb1_up.png"
		else
			document.getElementById("b3_ring_counter").src = "/static/heLab/images/lightbulb_up.png"
		counter++;
		if(counter == data.length)
			counter = 0;
	}
}
///////////////////////////////////////
var shiftregister = function() {
	var cshiftr;
	var x, bin = [], counter = 0;
	var time;
	var inputData;
	var shift

	var data = new Array();
	this.init = function() {

		for(var i = 0; i < data.length; i++)
		bin[i] = data[i].toString(2);
		//bin[i]=inputData>>>1;
		//alert(bin)
	}

	this.destruct = function() {
		clearInterval(time);
		time = ""
	}

	this.resetCounter = function() {
		//	alert("reset called");
		counter = 0;
		clearInterval(time);
		time = ""
		//var b = data[counter].split("")
		var b = "0000";

		//var ip=inputdata.split("")

		//console.log(b[3]+"  "+b[2]+"  "+b[1]+"  "+b[0])
		//alert(b);

		document.getElementById("b0_shift_register").src = "/static/heLab/images/lightbulb_up.png";
		document.getElementById("b0_text").value = "";

		document.getElementById("b1_shift_register").src = "/static/heLab/images/lightbulb_up.png";
		document.getElementById("b1_text").value = "";

		document.getElementById("b2_shift_register").src = "/static/heLab/images/lightbulb_up.png";
		document.getElementById("b2_text").value = "";

		document.getElementById("b3_shift_register").src = "/static/heLab/images/lightbulb_up.png";
		document.getElementById("b3_text").value = "";

	}
	var scope = this;
	this.updatecounter = function() {
		//var temp;
		//alert(counter);
		/*
		var json=JSON.stringify({
		"one" : temp[1],
		"two" : temp[1],
		"three" : temp[1],
		"one" : temp[1],

		}temp);*/

		//alert(utility.decimalToBinary(temp>>>1)+":");
		var b = data[counter].split("")
		//console.log(b[3]+"  "+b[2]+"  "+b[1]+"  "+b[0])
		//alert(b+":");
		//alert(inputData>>>1);
		if(b[3] == true) {
			document.getElementById("b0_shift_register").src = "/static/heLab/images/lightbulb1_up.png";
			document.getElementById("b0_text").value = "1";
		} else {
			document.getElementById("b0_shift_register").src = "/static/heLab/images/lightbulb_up.png";
			document.getElementById("b0_text").value = "0";
		}
		if(b[2] == true) {
			document.getElementById("b1_shift_register").src = "/static/heLab/images/lightbulb1_up.png";
			document.getElementById("b1_text").value = "1";
		} else {
			document.getElementById("b1_shift_register").src = "/static/heLab/images/lightbulb_up.png";
			document.getElementById("b1_text").value = "0";
		}
		if(b[1] == true) {
			document.getElementById("b2_shift_register").src = "/static/heLab/images/lightbulb1_up.png";
			document.getElementById("b2_text").value = "1";
		} else {
			document.getElementById("b2_shift_register").src = "/static/heLab/images/lightbulb_up.png";
			document.getElementById("b2_text").value = "0";
		}
		if(b[0] == true) {
			document.getElementById("b3_shift_register").src = "/static/heLab/images/lightbulb1_up.png";
			document.getElementById("b3_text").value = "1";
		} else {
			document.getElementById("b3_shift_register").src = "/static/heLab/images/lightbulb_up.png";
			document.getElementById("b3_text").value = "0";
		}
		counter++;
		//alert(counter + ":");

		/*
		if(counter == data.length)
		counter = 0;*/

		//scope.resetCounter();

		return
	}
	var scope = this;
	this.startcounter = function() {
		//scope.updatecounter();
		//alert($("#cshiftr").val());
		inputData = $("#txt_inputdata").val();
		var inputDataArr = inputData.split("");
		var outDataArr = new Array();
		var outPutdata = "";
		// alert(inputDataArr[0])
		for(var a = 0; a <= 3; a++) {
			//alert(inputDataArr[3])
			if(a == 0) {
				outDataArr[3] = 0;
				outDataArr[2] = 0;
				outDataArr[1] = 0;
				outDataArr[0] = inputDataArr[3];

			} else if(a == 1) {
				outDataArr[3] = 0;
				outDataArr[2] = 0;
				outDataArr[1] = outDataArr[0];
				outDataArr[0] = inputDataArr[2];

			} else if(a == 2) {
				outDataArr[3] = 0;
				outDataArr[2] = outDataArr[1];
				outDataArr[1] = outDataArr[0];
				outDataArr[0] = inputDataArr[1];

			} else if(a == 3) {
				outDataArr[3] = outDataArr[2];
				outDataArr[2] = outDataArr[1];
				outDataArr[1] = outDataArr[0];
				outDataArr[0] = inputDataArr[0];

			}
			for(var b = 0; b <= 3; b++) {
				outPutdata += outDataArr[b];
			}
			data[a] = outPutdata;
			//alert(data[a]);
			outPutdata = "";

		}
		//data[4] = data[3];
		//alert(data);
		cshiftr = $("#cshiftr").val();
		time = setInterval(scope.updatecounter, (1 / cshiftr) * 1000);

	}

	this.addClockPulse = function() {
		inputData = $("#txt_inputdata").val();
		var inputDataArr = inputData.split("");
		var outDataArr = new Array();
		var outPutdata = "";
		// alert(inputDataArr[0])
		for(var a = 0; a <= 3; a++) {
			//alert(inputDataArr[3])
			if(a == 0) {
				outDataArr[3] = 0;
				outDataArr[2] = 0;
				outDataArr[1] = 0;
				outDataArr[0] = inputDataArr[3];

			} else if(a == 1) {
				outDataArr[3] = 0;
				outDataArr[2] = 0;
				outDataArr[1] = outDataArr[0];
				outDataArr[0] = inputDataArr[2];

			} else if(a == 2) {
				outDataArr[3] = 0;
				outDataArr[2] = outDataArr[1];
				outDataArr[1] = outDataArr[0];
				outDataArr[0] = inputDataArr[1];

			} else if(a == 3) {
				outDataArr[3] = outDataArr[2];
				outDataArr[2] = outDataArr[1];
				outDataArr[1] = outDataArr[0];
				outDataArr[0] = inputDataArr[0];

			}
			for(var b = 0; b <= 3; b++) {
				outPutdata += outDataArr[b];
			}
			data[a] = outPutdata;
			//alert(data[a]);
			outPutdata = "";

		}
		//data[4] = "0000";
		var b = data[counter].split("")
		//alert(counter + ":" + b);
		//console.log(b[3]+"  "+b[2]+"  "+b[1]+"  "+b[0])
		//alert(b+":");
		//alert(inputData>>>1);
		if(b[3] == true) {
			document.getElementById("b0_shift_register").src = "/static/heLab/images/lightbulb1_up.png";
			document.getElementById("b0_text").value = "1";
		} else {
			document.getElementById("b0_shift_register").src = "/static/heLab/images/lightbulb_up.png";
			document.getElementById("b0_text").value = "0";
		}
		if(b[2] == true) {
			document.getElementById("b1_shift_register").src = "/static/heLab/images/lightbulb1_up.png";
			document.getElementById("b1_text").value = "1";
		} else {
			document.getElementById("b1_shift_register").src = "/static/heLab/images/lightbulb_up.png";
			document.getElementById("b1_text").value = "0";
		}
		if(b[1] == true) {
			document.getElementById("b2_shift_register").src = "/static/heLab/images/lightbulb1_up.png";
			document.getElementById("b2_text").value = "1";
		} else {
			document.getElementById("b2_shift_register").src = "/static/heLab/images/lightbulb_up.png";
			document.getElementById("b2_text").value = "0";
		}
		if(b[0] == true) {
			document.getElementById("b3_shift_register").src = "/static/heLab/images/lightbulb1_up.png";
			document.getElementById("b3_text").value = "1";
		} else {
			document.getElementById("b3_shift_register").src = "/static/heLab/images/lightbulb_up.png";
			document.getElementById("b3_text").value = "0";
		}
		counter++;
		/*
		if(counter > data.length)
		scope.resetCounter();*/

		/*
		if(counter == data.length)
		counter = 0;*/

		//return

	}
}
//////////////////////////////////////
$(document).ready(function() {
	if($.browser.msie) {
		document.write("The Existing version of Internet Explorer is not supported ");
		document.write("<A href  = 'http://www.mozilla.com/en-US/products/download.html'>Click on the  Link :</A>")
	} else {

		$("ul.tabs").tabs("> .pane");

		$(":range").rangeinput({
			progress : true
		});

		var obj_binarycounter = new binarycounter();
		var obj_bcdcounter = new bcdcounter();
		var obj_johncounter = new johncounter();
		var obj_ringcounter = new ringcounter();
		var obj_shiftregister = new shiftregister();

		//binary counter
		{
			$("#start_bc").click(function() {
				//alert($("#cbc").val());
				//this.prop("disabled", true);
				//$("#start_bc").css('background-color','#32CD32');
				//alert("running");
				$("#start_bc").css('background-color','#32CD32');
				document.getElementById("manual_clock_bc").disabled = true;
				$("#manual_clock_bc").css('background-color','#E6E6FA');
				document.getElementById("start_bc").disabled = true;
				document.getElementById("stop_bc").disabled = false;
				document.getElementById("reset_bc").disabled = false;
				obj_binarycounter.init();
				obj_binarycounter.startcounter();
			});
			$("#cbc").change(function() {
				obj_binarycounter.cbc = ($("#cbc").val());
			});
			$("#stop_bc").click(function() {
				$("#start_bc").css('background-color','#E6E6FA');
				$("#manual_clock_bc").css('background-color','#E6E6FA');
				document.getElementById("manual_clock_bc").disabled = false;
				//$("#start_bc").prop("disabled", false);
				document.getElementById("start_bc").disabled = false;
				document.getElementById("stop_bc").disabled = true;
				//document.getElementById("reset_bc").disabled = true;
				obj_binarycounter.destruct();
			});
			$("#reset_bc").click(function() {
				$("#start_bc").css('background-color','#E6E6FA');
				$("#manual_clock_bc").css('background-color','#E6E6FA');
				//$("#start_bc").prop("disabled", false);
				document.getElementById("manual_clock_bc").disabled = false;
				document.getElementById("start_bc").disabled = false;
				document.getElementById("stop_bc").disabled = true;
				document.getElementById("reset_bc").disabled = true;
				obj_binarycounter.resetCounter();
				//obj_binarycounter.counter=0;
			});
			$("#manual_clock_bc").click(function() {
				$("#manual_clock_bc").css('background-color','#32CD32');
				document.getElementById("reset_bc").disabled = false;
				obj_binarycounter.addClockPulse();
			});
		}
		//bcd counter
		{
			obj_bcdcounter.init();
			$("#start_bcd").click(function() {
				$("#start_bcd").css('background-color','#32CD32');
				document.getElementById("manual_clock_bcd").disabled = true;
				$("#manual_clock_bcd").css('background-color','#E6E6FA');
				document.getElementById("start_bcd").disabled = true;
				document.getElementById("stop_bcd").disabled = false;
				document.getElementById("reset_bcd").disabled = false;
				obj_bcdcounter.init();
				obj_bcdcounter.startcounter();
			});
			$("#cbcdc").change(function() {
				obj_bcdcounter.cbcd = ($("#cbcdc").val());
				//alert(obj_bcdcounter.cbcd)
			})
			$("#stop_bcd").click(function() {
				$("#start_bcd").css('background-color','#E6E6FA');
				$("#manual_clock_bcd").css('background-color','#E6E6FA');
				document.getElementById("manual_clock_bcd").disabled = false;
				
				document.getElementById("start_bcd").disabled = false;
				document.getElementById("stop_bcd").disabled = true;
				//document.getElementById("reset_bcd").disabled = true;
				obj_bcdcounter.destruct();
			});
			$("#reset_bcd").click(function() {
				$("#start_bcd").css('background-color','#E6E6FA');
				$("#manual_clock_bcd").css('background-color','#E6E6FA');
				document.getElementById("manual_clock_bcd").disabled = false;
				
				document.getElementById("start_bcd").disabled = false;
				document.getElementById("stop_bcd").disabled = true;
				document.getElementById("reset_bcd").disabled = true;
				obj_bcdcounter.resetCounter();
			});
			$("#manual_clock_bcd").click(function() {
				$("#manual_clock_bcd").css('background-color','#32CD32');
				document.getElementById("reset_bcd").disabled = false;
				obj_bcdcounter.addClockPulse();
			});
		}
		//johnasen counter
		{
			obj_johncounter.init();
			$("#start_john").click(function() {
				$("#start_john").css('background-color','#32CD32');
				document.getElementById("manual_clock_john").disabled = true;
				$("#manual_clock_john").css('background-color','#E6E6FA');
				
				document.getElementById("start_john").disabled = true;
				document.getElementById("stop_john").disabled = false;
				document.getElementById("reset_john").disabled = false;
				obj_johncounter.init();
				obj_johncounter.startcounter();
			});
			$("#cjohnc").change(function() {
				obj_johncounter.cjohn = ($("#cjohnc").val());
				//alert(obj_bcdcounter.cbcd)
			})
			$("#stop_john").click(function() {
				$("#start_john").css('background-color','#E6E6FA');
				$("#manual_clock_john").css('background-color','#E6E6FA');
				document.getElementById("manual_clock_john").disabled = false;
				
				document.getElementById("start_john").disabled = false;
				document.getElementById("stop_john").disabled = true;
				//document.getElementById("reset_john").disabled = true;
				obj_johncounter.destruct();
			});
			$("#reset_john").click(function() {
				$("#start_john").css('background-color','#E6E6FA');
				$("#manual_clock_john").css('background-color','#E6E6FA');
				document.getElementById("manual_clock_john").disabled = false;
				
				document.getElementById("start_john").disabled = false;
				document.getElementById("stop_john").disabled = true;
				document.getElementById("reset_john").disabled = true;
				obj_johncounter.resetCounter();
			});
			$("#manual_clock_john").click(function() {
				$("#manual_clock_john").css('background-color','#32CD32');
				document.getElementById("reset_john").disabled = false;
				obj_johncounter.addClockPulse();
			});
		}
		//ring counter
		{

			//obj_ringcounter.init();
			$("#start_ring").click(function() {
				$("#start_ring").css('background-color','#32CD32');
				document.getElementById("manual_clock_ring").disabled = true;
				$("#manual_clock_ring").css('background-color','#E6E6FA');
				//obj_ringcounter.init();
				document.getElementById("start_ring").disabled = true;
				document.getElementById("stop_ring").disabled = false;
				document.getElementById("reset_ring").disabled = false;
				obj_ringcounter.startcounter();
			});
			$("#cringc").change(function() {
				obj_ringcounter.cring = ($("#cringc").val());
				//alert(obj_bcdcounter.cbcd)
			})
			$("#stop_ring").click(function() {
				$("#start_ring").css('background-color','#E6E6FA');
				$("#manual_clock_ring").css('background-color','#E6E6FA');
				document.getElementById("manual_clock_ring").disabled = false;
				
				document.getElementById("start_ring").disabled = false;
				document.getElementById("stop_ring").disabled = true;
				//document.getElementById("reset_ring").disabled = true;
				obj_ringcounter.destruct();
			});
			$("#reset_ring").click(function() {
				$("#start_ring").css('background-color','#E6E6FA');
				$("#manual_clock_ring").css('background-color','#E6E6FA');
				document.getElementById("manual_clock_ring").disabled = false;
				
				document.getElementById("start_ring").disabled = false;
				document.getElementById("stop_ring").disabled = true;
				document.getElementById("reset_ring").disabled = true;
				obj_ringcounter.resetCounter();
			});
			$("#manual_clock_ring").click(function() {
				$("#manual_clock_ring").css('background-color','#32CD32');
				document.getElementById("reset_ring").disabled = false;
				obj_ringcounter.addClockPulse();
			});
		} {

			//obj_ringcounter.init();
			$("#start_shift").click(function() {
				$("#start_shift").css('background-color','#32CD32');
				document.getElementById("manual_clock_shift").disabled = true;
				$("#manual_clock_shift").css('background-color','#E6E6FA');
				//obj_ringcounter.init();
				var input = $("#txt_inputdata").val().trim();
				if(input.length != 4) {
					alert("Please enter 4 bit binary input!!!");
				} else if(!regBinary.test(input)) {
					alert("Please enter 4 bit binary input!!!");
				} else {
					document.getElementById("start_shift").disabled = true;
					document.getElementById("stop_shift").disabled = false;
					document.getElementById("reset_shift").disabled = false;
					obj_shiftregister.startcounter();
				}
			});
			$("#cshiftr").change(function() {
				obj_shiftregister.cshiftr = ($("#cshiftr").val());
				//alert(obj_bcdcounter.cbcd)
			})
			$("#stop_shift").click(function() {
				$("#start_shift").css('background-color','#E6E6FA');
				$("#manual_clock_shift").css('background-color','#E6E6FA');
				document.getElementById("manual_clock_shift").disabled = false;
				
				document.getElementById("start_shift").disabled = false;
				document.getElementById("stop_shift").disabled = true;
				//document.getElementById("reset_ring").disabled = true;
				obj_shiftregister.destruct();
			});
			$("#reset_shift").click(function() {
				$("#start_shift").css('background-color','#E6E6FA');
				$("#manual_clock_shift").css('background-color','#E6E6FA');
				document.getElementById("manual_clock_shift").disabled = false;
				
				document.getElementById("start_shift").disabled = false;
				document.getElementById("stop_shift").disabled = true;
				document.getElementById("reset_shift").disabled = true;
				obj_shiftregister.resetCounter();
			});
			$("#manual_clock_shift").click(function() {
				$("#manual_clock_shift").css('background-color','#32CD32');
				var input = $("#txt_inputdata").val().trim();
				if(input.length != 4) {
					alert("Please enter 4 bit binary input!!!");
				} else if(!regBinary.test(input)) {
					alert("Please enter 4 bit binary input!!!");
				} else {
					document.getElementById("reset_shift").disabled = false;
					obj_shiftregister.addClockPulse();
				}
			});
		}
	}
});
