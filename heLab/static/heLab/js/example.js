


var halfadder = function () {
	this.switches = [];
	this.initialize = function () {

		for (var i = 0; i < 8; i++) {
			var json = { "name": "", "status": false };
			this.switches[i] = json
		}


	}
	this.getName = function (s) {
		var d = s.lastIndexOf('.');
		return s.substring(s.lastIndexOf('/') + 1, d < 0 ? s.length : d);
	}

	this.resetHalfAdder = function (id) {
		document.getElementById(id).src = "/static/heLab/images/on.png";
		document.getElementById(id + "_text").value = 1;
		this.switch_status(id);
	}

	this.switch_status = function (id) {
		$("#run_button_hadd").css('background-color', '#E6E6FA');

		var index = id.split("_", 3)[1];
		var that = this;
		var previous_image = that.getName(document.getElementById(id).src);
		if (previous_image == "off") {
			document.getElementById(id).src = "/static/heLab/images/on.png";
			document.getElementById(id + "_text").value = 1;
			var json = { "name": id, "status": true };
			this.switches[index] = json

		}
		else {
			document.getElementById(id).src = "/static/heLab/images/off.png";
			document.getElementById(id + "_text").value = 0;
			var json = { "name": id, "status": false };
			this.switches[index] = json

		}

		var scope = this
		//scope.calculate();
	}
	this.calculate = function () {
		//document.getElementById("run_button_hadd").style.backgroundColor="00FF00";
		$("#run_button_hadd").css('background-color', '#32CD32');
		var input1 = this.switches[0].status;
		var input2 = this.switches[1].status;
		var sum = (!input1 && input2) || (input1 && !input2)
		var carry = input1 && input2;

		if (sum == true) {
			document.getElementById("sum").src = "/static/heLab/images/lightbulb1.png";
			document.getElementById("sum_text").value = 1;
		}
		else {
			document.getElementById("sum").src = "/static/heLab/images/lightbulb.png";
			document.getElementById("sum_text").value = 0;
		}
		if (carry == true) {
			document.getElementById("carry").src = "/static/heLab/images/lightbulb1.png";
			document.getElementById("carry_text").value = 1;
		}
		else {
			document.getElementById("carry").src = "/static/heLab/images/lightbulb.png";
			document.getElementById("carry_text").value = 0;
		}
	}
}
var fulladder = function () {
	this.switches = [];
	this.initialize = function () {

		for (var i = 0; i < 8; i++) {
			var json = { "name": "", "status": false };
			this.switches[i] = json
		}


	}
	this.getName = function (s) {
		var d = s.lastIndexOf('.');
		return s.substring(s.lastIndexOf('/') + 1, d < 0 ? s.length : d);
	}
	this.switch_status = function (id) {
		$("#run_button_fadd").css('background-color', '#E6E6FA');
		var index = id.split("_", 3)[1];
		var that = this;

		var previous_image = that.getName(document.getElementById(id).src);
		if (previous_image == "off") {
			document.getElementById(id).src = "/static/heLab/images/on.png";
			document.getElementById(id + "_text").value = 1;
			var json = { "name": id, "status": true };
			this.switches[index] = json

		}
		else {
			document.getElementById(id).src = "/static/heLab/images/off.png";
			document.getElementById(id + "_text").value = 0;
			var json = { "name": id, "status": false };
			this.switches[index] = json
		}

		var scope = this
		//scope.calculate()
	}
	this.resetFullAdder = function (id) {
		document.getElementById(id).src = "/static/heLab/images/on.png";
		document.getElementById(id + "_text").value = 1;
		this.switch_status(id);
	}
	this.calculate = function () {
		$("#run_button_fadd").css('background-color', '#32CD32');
		var input3 = (this.switches[1].status != null) ? this.switches[1].status : false;
		var input4 = (this.switches[2].status != null) ? this.switches[2].status : false;
		var input5 = (this.switches[3].status != null) ? this.switches[3].status : false;

		var sum_halfadder = (!input3 && !input4 && input5) || (!input3 && input4 && !input5) || (input3 && !input4 && !input5) || (input3 && input4 && input5)
		var carry_halfadder = (input3 && input4) || (input3 && input5) || (input4 && input5)


		if (sum_halfadder == true) {
			document.getElementById("sum_fulladder").src = "/static/heLab/images/lightbulb1.png";
			document.getElementById("sum_fulladder_text").value = 1;
		}
		else {
			document.getElementById("sum_fulladder").src = "/static/heLab/images/lightbulb.png";
			document.getElementById("sum_fulladder_text").value = 0;
		}
		if (carry_halfadder == true) {
			document.getElementById("carry_fulladder").src = "/static/heLab/images/lightbulb1.png";
			document.getElementById("carry_fulladder_text").value = 1;
		}
		else {
			document.getElementById("carry_fulladder").src = "/static/heLab/images/lightbulb.png";
			document.getElementById("carry_fulladder_text").value = 0;
		}
	}
}
var bitadder = function () {
	this.switches = [];
	this.initialize = function () {

		for (var i = 0; i < 8; i++) {
			var json = { "name": "", "status": false };
			this.switches[i] = json
		}
		//	$("#outputbinary").text("V0 : ")

	}
	this.getName = function (s) {
		var d = s.lastIndexOf('.');
		return s.substring(s.lastIndexOf('/') + 1, d < 0 ? s.length : d);
	}

	this.resetBitAdder = function (id) {
		document.getElementById(id).src = "/static/heLab/images/on.png";
		document.getElementById(id + "_text").value = 1;
		this.switch_status(id);
	}

	this.switch_status = function (id) {
		$("#run_button_2bitadd").css('background-color', '#E6E6FA');
		var index = id.split("_", 3)[1];
		var that = this;
		var previous_image = that.getName(document.getElementById(id).src);
		if (previous_image == "off") {
			document.getElementById(id).src = "/static/heLab/images/on.png";
			document.getElementById(id + "_text").value = 1;
			var json = { "name": id, "status": true };
			this.switches[index] = json

		}
		else {
			document.getElementById(id).src = "/static/heLab/images/off.png";
			document.getElementById(id + "_text").value = 0;
			var json = { "name": id, "status": false };
			this.switches[index] = json

		}
		var scope = this
		//scope.calculate()
	}
	this.calculate = function () {
		$("#run_button_2bitadd").css('background-color', '#32CD32');
		var a1 = (this.switches[0].status != null) ? this.switches[0].status : false;
		var b1 = (this.switches[1].status != null) ? this.switches[1].status : false;
		var a0 = (this.switches[2].status != null) ? this.switches[2].status : false;
		var b0 = (this.switches[3].status != null) ? this.switches[3].status : false;
		var cin = (this.switches[4].status != null) ? this.switches[4].status : false;


		var temp0 = ((!a0) && b0) || (a0 && (!b0));
		var s0 = ((!temp0) && cin) || (temp0 && (!cin));
		var c0 = (a0 && b0) || (temp0 && cin);

		var temp1 = ((!a1) && b1) || (a1 && (!b1));
		var s1 = ((!temp1) && c0) || (temp1 && (!c0));
		var c1 = (a1 && b1) || (temp1 && c0);


		if (s0 == true) {
			document.getElementById("sum1_2bit").src = "/static/heLab/images/lightbulb1.png";
			document.getElementById("sum1_2bit_text").value = 1;
		}
		else {
			document.getElementById("sum1_2bit").src = "/static/heLab/images/lightbulb.png";
			document.getElementById("sum1_2bit_text").value = 0;
		}
		if (s1 == true) {
			document.getElementById("sum2_2bit").src = "/static/heLab/images/lightbulb1.png";
			document.getElementById("sum2_2bit_text").value = 1;
		}
		else {
			document.getElementById("sum2_2bit").src = "/static/heLab/images/lightbulb.png";
			document.getElementById("sum2_2bit_text").value = 0;
		}
		if (c1 == true) {
			document.getElementById("carry_2bit_text").value = 1;
			document.getElementById("carry_2bit").src = "/static/heLab/images/lightbulb1.png";
		}
		else {
			document.getElementById("carry_2bit").src = "/static/heLab/images/lightbulb.png";
			document.getElementById("carry_2bit_text").value = 0;
		}
	}
}
var halfsubtracter = function () {
	this.switches = [];
	this.initialize = function () {

		for (var i = 0; i < 8; i++) {
			var json = { "name": "", "status": false };
			this.switches[i] = json
		}

	}
	this.getName = function (s) {
		var d = s.lastIndexOf('.');
		return s.substring(s.lastIndexOf('/') + 1, d < 0 ? s.length : d);
	}

	this.resetHalfSubtracter = function (id) {
		document.getElementById(id).src = "/static/heLab/images/on.png";
		document.getElementById(id + "_text").value = 1;
		this.switch_status(id);
	}


	this.switch_status = function (id) {
		$("#run_button_hsub").css('background-color', '#E6E6FA');
		var index = id.split("_", 3)[1];
		var that = this;
		var previous_image = that.getName(document.getElementById(id).src);
		if (previous_image == "off") {
			document.getElementById(id).src = "/static/heLab/images/on.png";
			document.getElementById(id + "_text").value = 1;
			var json = { "name": id, "status": true };
			this.switches[index] = json

		}
		else {
			document.getElementById(id).src = "/static/heLab/images/off.png";
			document.getElementById(id + "_text").value = 0;
			var json = { "name": id, "status": false };
			this.switches[index] = json

		}

		var scope = this
		//scope.calculate();
	}
	this.calculate = function () {
		$("#run_button_hsub").css('background-color', '#32CD32');
		var input1 = this.switches[0].status;
		var input2 = this.switches[1].status;
		var sum = (!input1 && input2) || (input1 && !input2)
		var carry = !input1 && input2;

		if (sum == true) {
			document.getElementById("sum_halfsub").src = "/static/heLab/images/lightbulb1.png";
			document.getElementById("sum_halfsub_text").value = 1;
		}
		else {
			document.getElementById("sum_halfsub").src = "/static/heLab/images/lightbulb.png";
			document.getElementById("sum_halfsub_text").value = 0;
		}
		if (carry == true) {
			document.getElementById("carry_halfsub").src = "/static/heLab/images/lightbulb1.png";
			document.getElementById("carry_halfsub_text").value = 1;
		}
		else {
			document.getElementById("carry_halfsub").src = "/static/heLab/images/lightbulb.png";
			document.getElementById("carry_halfsub_text").value = 0;
		}
	}

}
var fullsubtracter = function () {
	this.switches = [];
	this.initialize = function () {

		for (var i = 0; i < 8; i++) {
			var json = { "name": "", "status": false };
			this.switches[i] = json
		}
		//$("#outputbinary").text("V0 : ")

	}
	this.getName = function (s) {
		var d = s.lastIndexOf('.');
		return s.substring(s.lastIndexOf('/') + 1, d < 0 ? s.length : d);
	}

	this.resetFullSubtracter = function (id) {
		document.getElementById(id).src = "/static/heLab/images/on.png";
		document.getElementById(id + "_text").value = 1;
		this.switch_status(id);
	}
	this.switch_status = function (id) {
		$("#run_button_fsub").css('background-color', '#E6E6FA');
		var index = id.split("_", 3)[1];
		var that = this;

		var previous_image = that.getName(document.getElementById(id).src);
		if (previous_image == "off") {
			document.getElementById(id).src = "/static/heLab/images/on.png";
			document.getElementById(id + "_text").value = 1;
			var json = { "name": id, "status": true };
			this.switches[index] = json

		}
		else {
			document.getElementById(id).src = "/static/heLab/images/off.png";
			document.getElementById(id + "_text").value = 0;
			var json = { "name": id, "status": false };
			this.switches[index] = json
		}

		var scope = this
		//scope.calculate()
	}
	this.calculate = function () {
		$("#run_button_fsub").css('background-color', '#32CD32');
		var x = (this.switches[0].status != null) ? this.switches[0].status : false;
		var y = (this.switches[1].status != null) ? this.switches[1].status : false;
		var z = (this.switches[2].status != null) ? this.switches[2].status : false;

		var sum_halfadder = (!x && !y && z) || (!x && y && !z) || (x && !y && !z) || (x && y && z)
		var carry_halfadder = z && !((!x && y) || (x && !y)) || (!x && y);


		if (sum_halfadder == true) {
			document.getElementById("sum_fullsub").src = "/static/heLab/images/lightbulb1.png";
			document.getElementById("sum_fullsub_text").value = 1;
		}
		else {
			document.getElementById("sum_fullsub").src = "/static/heLab/images/lightbulb.png";
			document.getElementById("sum_fullsub_text").value = 0;
		}
		if (carry_halfadder == true) {
			document.getElementById("carry_fullsub").src = "/static/heLab/images/lightbulb1.png";
			document.getElementById("carry_fullsub_text").value = 1;
		}
		else {
			document.getElementById("carry_fullsub").src = "/static/heLab/images/lightbulb.png";
			document.getElementById("carry_fullsub_text").value = 0;
		}
	}
}
var bitaddersubtracter = function () {
	this.switches = [];
	this.initialize = function () {

		for (var i = 0; i < 9; i++) {
			var json = { "name": "", "status": false };
			this.switches[i] = json
		}
		//$("#outputbinary").text("V0 : ")

	}
	this.getName = function (s) {
		var d = s.lastIndexOf('.');
		return s.substring(s.lastIndexOf('/') + 1, d < 0 ? s.length : d);
	}

	this.resetAddSubtracter = function (id) {
		document.getElementById(id).src = "/static/heLab/images/on.png";
		document.getElementById(id + "_text").value = 1;
		this.switch_status(id);
	}

	this.switch_status = function (id) {
		$("#run_button_4addsub").css('background-color', '#E6E6FA');
		var index = id.split("_", 3)[1];
		var that = this;
		var previous_image = that.getName(document.getElementById(id).src);
		if (previous_image == "off") {
			document.getElementById(id).src = "/static/heLab/images/on.png";
			document.getElementById(id + "_text").value = 1;
			var json = { "name": id, "status": true };
			this.switches[index] = json

		}
		else {
			document.getElementById(id).src = "/static/heLab/images/off.png";
			document.getElementById(id + "_text").value = 0;
			var json = { "name": id, "status": false };
			this.switches[index] = json

		}

		var scope = this
		//scope.calculate();
	}
	this.calculate = function () {
		$("#run_button_4addsub").css('background-color', '#32CD32');

		var a0 = (this.switches[7].status != null) ? this.switches[7].status : false
		var b0 = (this.switches[6].status != null) ? this.switches[6].status : false
		var a1 = (this.switches[5].status != null) ? this.switches[5].status : false
		var b1 = (this.switches[4].status != null) ? this.switches[4].status : false
		var a2 = (this.switches[3].status != null) ? this.switches[3].status : false
		var b2 = (this.switches[2].status != null) ? this.switches[2].status : false
		var a3 = (this.switches[1].status != null) ? this.switches[1].status : false
		var b3 = (this.switches[0].status != null) ? this.switches[0].status : false
		var cout = (this.switches[8].status != null) ? this.switches[8].status : false

		// alert(cout);

		var tb0 = ((!b0) && cout) || (b0 && (!cout));
		// alert(tb0);
		var tb1 = ((!b1) && cout) || (b1 && (!cout));
		//  alert(tb1);
		var tb2 = ((!b2) && cout) || (b2 && (!cout));
		// alert(tb2);
		var tb3 = ((!b3) && cout) || (b3 && (!cout));
		//  alert(tb3);
		var temp0 = ((!a0) && tb0) || (a0 && (!tb0));
		var s0 = ((!temp0) && cout) || (temp0 && (!cout));
		var c0 = (a0 && tb0) || (cout && temp0);
		//  alert(s0)
		var temp1 = (!a1 && tb1) || (a1 && !tb1);
		var s1 = ((!temp1 && c0) || (temp1 && !c0));
		var c1 = (a1 && tb1) || (c0 && temp1);
		var temp2 = ((!a2) && tb2) || (a2 && (!tb2));
		var s2 = ((!temp2) && c1) || (temp2 && (!c1));
		var c2 = (a2 && tb2) || (c1 && temp2);
		var temp3 = ((!a3) && tb3) || (a3 && (!tb3));
		var s3 = ((!temp3) && c2) || (temp3 && (!c2));
		var c3 = (a3 && tb3) || (c2 && temp3);
		/*var s1 = a1 && ((!b1 && cout) || (b1 && !cout))
		var s2 = a2 && ((!b2 && cout) || (b2 && !cout))
		var s3 = a3 && ((!b3 && cout) || (b3 && !cout))*/


		if (s0 == true) {
			document.getElementById("s0_4bit").src = "/static/heLab/images/lightbulb1.png";
			document.getElementById("s0_4bit_text").value = 1;
		}
		else {
			document.getElementById("s0_4bit").src = "/static/heLab/images/lightbulb.png";
			document.getElementById("s0_4bit_text").value = 0;
		}
		if (s1 == true) {
			document.getElementById("s1_4bit").src = "/static/heLab/images/lightbulb1.png";
			document.getElementById("s1_4bit_text").value = 1;
		}
		else {
			document.getElementById("s1_4bit").src = "/static/heLab/images/lightbulb.png";
			document.getElementById("s1_4bit_text").value = 0;
		}
		if (s2 == true) {
			document.getElementById("s2_4bit_text").value = 1;
			document.getElementById("s2_4bit").src = "/static/heLab/images/lightbulb1.png";
		}
		else {
			document.getElementById("s2_4bit").src = "/static/heLab/images/lightbulb.png";
			document.getElementById("s2_4bit_text").value = 0;

		}
		if (s3 == true) {
			document.getElementById("s3_4bit_text").value = 1;
			document.getElementById("s3_4bit").src = "/static/heLab/images/lightbulb1.png";
		}
		else {
			document.getElementById("s3_4bit").src = "/static/heLab/images/lightbulb.png";
			document.getElementById("s3_4bit_text").value = 0;
		}
		if (c3 == true) {
			document.getElementById("carry_4bit").src = "/static/heLab/images/lightbulb1.png";
			document.getElementById("carry_4bit_text").value = 1;
		}
		else {
			document.getElementById("carry_4bit").src = "/static/heLab/images/lightbulb.png";
			document.getElementById("carry_4bit_text").value = 0;
		}
	}

}

//initliaze the Adder

$(document).ready(function () {
	if ($.browser.msie) {
		document.write("The Existing version of Internet Explorer is not supported ");
		document.write("<A href  = 'http://www.mozilla.com/en-US/products/download.html'>Click on the  Link :</A>")
		//window.close()
	}
	else {
		$("ul.tabs").tabs("> .pane");

		$(":range").rangeinput({ progress: true });

		//halfadder
		{
			var obj_halfadder = new halfadder();
			obj_halfadder.initialize();
			$("#switch0").delegate("img", "click", null, function () {
				var id = this.id;
				obj_halfadder.switch_status(id);
			});
		}
		//fulladder
		{
			var obj_fulladder = new fulladder();
			obj_fulladder.initialize();
			$("#switches1").delegate("img", "click", null, function () {
				var id = this.id;
				obj_fulladder.switch_status(id);
			});
		}
		//2bitadder
		{
			var obj_bitadder = new bitadder();
			obj_bitadder.initialize();
			$("#switches2").delegate("img", "click", null, function () {
				var id = this.id;
				obj_bitadder.switch_status(id);
			});


		}
		//halfsubtracter
		{
			var obj_halfsubtracter = new halfsubtracter();
			obj_halfsubtracter.initialize();
			$("#switches3").delegate("img", "click", null, function () {
				var id = this.id;
				obj_halfsubtracter.switch_status(id);
			});

		}
		//fullsubtracter
		{
			var obj_fullsubtracter = new fullsubtracter();
			obj_fullsubtracter.initialize();
			$("#switches4").delegate("img", "click", null, function () {
				var id = this.id;
				obj_fullsubtracter.switch_status(id);
			});
		}
		//addersubtracter
		{
			var obj_bitaddersubtracter = new bitaddersubtracter();
			obj_bitaddersubtracter.initialize();
			$("#switches5").delegate("img", "click", null, function () {
				var id = this.id;
				obj_bitaddersubtracter.switch_status(id);
			});

		}

		{
			$("#run_button_hadd").click(function () {
				obj_halfadder.calculate();
			})
			$("#clear_button_hadd").click(function () {
				obj_halfadder.resetHalfAdder("a_0");
				obj_halfadder.resetHalfAdder("b_1");

				$("#sum").attr("src", "/static/heLab/images/lightbulb.png");
				$("#sum_text").val(0);

				$("#carry").attr("src", "/static/heLab/images/lightbulb.png");
				$("#carry_text").val(0);
			})
		}
		{
			$("#run_button_fadd").click(function () {
				obj_fulladder.calculate();
			})
			$("#clear_button_fadd").click(function () {
				for (var i = 1; i <= 3; i++) {
					obj_fulladder.resetFullAdder("button" + i + "_" + i);
				}

				$("#sum_fulladder").attr("src", "/static/heLab/images/lightbulb.png");
				$("#sum_fulladder_text").val(0);

				$("#carry_fulladder").attr("src", "/static/heLab/images/lightbulb.png");
				$("#carry_fulladder_text").val(0);
			})
		}

		{
			$("#run_button_2bitadd").click(function () {
				obj_bitadder.calculate();
			})
			$("#clear_button_2bitadd").click(function () {
				j = 0;
				for (var i = 1; i <= 5; i++) {
					obj_bitadder.resetBitAdder("button" + i + "_" + j);
					j++;
				}

				$("#carry_2bit").attr("src", "/static/heLab/images/lightbulb.png");
				$("#carry_2bit_text").val(0);

				$("#sum2_2bit").attr("src", "/static/heLab/images/lightbulb.png");
				$("#sum2_2bit_text").val(0);

				$("#sum1_2bit").attr("src", "/static/heLab/images/lightbulb.png");
				$("#sum1_2bit_text").val(0);
			})
		}

		{
			$("#run_button_hsub").click(function () {
				obj_halfsubtracter.calculate();
			})
			$("#clear_button_hsub").click(function () {
				obj_halfsubtracter.resetHalfSubtracter("button_0");
				obj_halfsubtracter.resetHalfSubtracter("button_1");

				$("#sum_halfsub").attr("src", "/static/heLab/images/lightbulb.png");
				$("#sum_halfsub_text").val(0);

				$("#carry_halfsub").attr("src", "/static/heLab/images/lightbulb.png");
				$("#carry_halfsub_text").val(0);

			})
		}
		{
			$("#run_button_fsub").click(function () {
				obj_fullsubtracter.calculate();
			})
			$("#clear_button_fsub").click(function () {
				obj_fullsubtracter.resetFullSubtracter("button6_0");
				obj_fullsubtracter.resetFullSubtracter("button7_1");
				obj_fullsubtracter.resetFullSubtracter("button8_2");

				$("#sum_fullsub").attr("src", "/static/heLab/images/lightbulb.png");
				$("#sum_fullsub_text").val(0);

				$("#carry_fullsub").attr("src", "/static/heLab/images/lightbulb.png");
				$("#carry_fullsub_text").val(0);

			})
		}

		{
			$("#run_button_4addsub").click(function () {
				obj_bitaddersubtracter.calculate();
			})
			$("#clear_button_4addsub").click(function () {
				var j = 0;
				for (var i = 3; i >= 0; i--) {
					//alert("b"+i+"_"+j);
					obj_bitaddersubtracter.resetAddSubtracter("b" + i + "_" + j);
					j = j + 2;
				}

				var k = 1;
				for (var i = 3; i >= 0; i--) {
					obj_bitaddersubtracter.resetAddSubtracter("a" + i + "_" + k);
					k = k + 2;
				}

				obj_bitaddersubtracter.resetAddSubtracter("cout_8");

				for (var i = 0; i <= 3; i++) {
					$("#s" + i + "_4bit").attr("src", "/static/heLab/images/lightbulb.png");
					$("#s" + i + "_4bit_text").val(0);
				}

				$("#carry_4bit").attr("src", "/static/heLab/images/lightbulb.png");
				$("#carry_4bit_text").val(0);

			})
		}

	}
});

