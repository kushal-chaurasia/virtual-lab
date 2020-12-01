var binarytogray = function() {
	this.switches = [];
	this.initialize = function() {

		for(var i = 0; i < 8; i++) {
			var json = {
				"name" : "",
				"status" : false
			};
			this.switches[i] = json
		}

	}
	this.getName = function(s) {

		var d = s.lastIndexOf('.');
		return s.substring(s.lastIndexOf('/') + 1, d < 0 ? s.length : d);

	}
	this.resetBinarytogray = function(id) {
		document.getElementById(id).src = "/static/heLab/images/on.png";
		document.getElementById(id + "_text").value = 1;
		this.switch_status(id);
	}

	this.switch_status = function(id) {
		$("#run_button_b2g").css('background-color','#E6E6FA');
		var index = id.split("_",3)[1];
		var that = this;

		var previous_image = that.getName(document.getElementById(id).src);

		if(previous_image == "off") {
			document.getElementById(id).src = "/static/heLab/images/on.png";
			document.getElementById(id + "_text").value = 1;
			var json = {
				"name" : id,
				"status" : true
			};
			this.switches[index] = json

		} else {
			document.getElementById(id).src = "/static/heLab/images/off.png";
			document.getElementById(id + "_text").value = 0;
			var json = {
				"name" : id,
				"status" : false
			};
			this.switches[index] = json
		}
		var b0 = this.switches[0].status;
		var b1 = this.switches[1].status;
		var b2 = this.switches[2].status;
		var b3 = this.switches[3].status;

		//var b = (((b0) ? 1 : 0) * 1) + (((b1) ? 1 : 0) * 2) + (((b2) ? 1 : 0) * 4) + (((b3) ? 1 : 0) * 8);
		var b = (((b3) ? 1 : 0)) +""+ (((b2) ? 1 : 0)) +""+ (((b1) ? 1 : 0)) +""+ (((b0) ? 1 : 0));
		
		var b_decimal = (((b0) ? 1 : 0) * 1) + (((b1) ? 1 : 0) * 2) + (((b2) ? 1 : 0) * 4) + (((b3) ? 1 : 0) * 8);
		$("#b_tog_text").html(b)
		$('#b_tog_text_dec').html("Decimal : "+b_decimal);
		var scope = this
		//scope.calculate()
	}
	this.calculate = function() {
		$("#run_button_b2g").css('background-color','#32CD32');
		var b0 = this.switches[0].status;
		var b1 = this.switches[1].status;
		var b2 = this.switches[2].status;
		var b3 = this.switches[3].status;

		var g0 = (!b1 && b0) || (b1 && !b0)
		var g1 = (!b2 && b1) || (b2 && !b1)
		var g2 = ((!b3 && b2) || (b3 && !b2))
		var g3 = b3;

		//	var b = (((b0)?1:0) * 1) + (((b1)?1:0) * 2) + (((b2)?1:0) * 4) + (((b3)?1:0) * 8);
		//$("#b_tog_text").html(b)
		//var g = (((g0) ? 1 : 0) * 1) + (((g1) ? 1 : 0) * 2) + (((g2) ? 1 : 0) * 4) + (((g3) ? 1 : 0) * 8);//dec val
		var g = (((g3) ? 1 : 0)) +""+ (((g2) ? 1 : 0)) +""+ (((g1) ? 1 : 0)) +""+  (((g0) ? 1 : 0));
		var g_decimal = (((g0) ? 1 : 0) * 1) + (((g1) ? 1 : 0) * 2) + (((g2) ? 1 : 0) * 4) + (((g3) ? 1 : 0) * 8);//dec val
		$("#g_tog_text").html(g)
		$('#g_tog_text_dec').html("Decimal : "+g_decimal);

		if(g0 == true) {
			document.getElementById("bulb0").src = "/static/heLab/images/lightbulb1left.png";
			document.getElementById("bulb0_text").value = 1;
		} else {
			document.getElementById("bulb0").src = "/static/heLab/images/lightbulbleft.png";
			document.getElementById("bulb0_text").value = 0;
		}

		if(g1 == true) {
			document.getElementById("bulb1").src = "/static/heLab/images/lightbulb1left.png";
			document.getElementById("bulb1_text").value = 1;
		} else {
			document.getElementById("bulb1").src = "/static/heLab/images/lightbulbleft.png";
			document.getElementById("bulb1_text").value = 0;
		}

		if(g2 == true) {
			document.getElementById("bulb2").src = "/static/heLab/images/lightbulb1left.png";
			document.getElementById("bulb2_text").value = 1;
		} else {
			document.getElementById("bulb2").src = "/static/heLab/images/lightbulbleft.png";
			document.getElementById("bulb2_text").value = 0;
		}

		if(g3 == true) {
			document.getElementById("bulb3").src = "/static/heLab/images/lightbulb1left.png";
			document.getElementById("bulb3_text").value = 1;
		} else {
			document.getElementById("bulb3").src = "/static/heLab/images/lightbulbleft.png";
			document.getElementById("bulb3_text").value = 0;
		}

	}
}
var graytobinary = function() {
	$("#run_button_g2b").css('background-color','#E6E6FA');
	this.switches = [];
	this.initialize = function() {

		for(var i = 0; i < 8; i++) {
			var json = {
				"name" : "",
				"status" : false
			};
			this.switches[i] = json
		}

	}
	this.getName = function(s) {
		var d = s.lastIndexOf('.');
		return s.substring(s.lastIndexOf('/') + 1, d < 0 ? s.length : d);
	}

	this.resetGraytobinary = function(id) {
		document.getElementById(id).src = "/static/heLab/images/on.png";
		document.getElementById(id + "_text").value = 1;
		this.switch_status(id);
	}

	this.switch_status = function(id) {
		$("#run_button_g2b").css('background-color','#E6E6FA');
		var index = id.split("_",3)[1];
		var that = this;
		var previous_image = that.getName(document.getElementById(id).src);
		if(previous_image == "off") {
			document.getElementById(id).src = "/static/heLab/images/on.png";
			document.getElementById(id + "_text").value = 1;
			var json = {
				"name" : id,
				"status" : true
			};
			this.switches[index] = json

		} else {
			document.getElementById(id).src = "/static/heLab/images/off.png";
			document.getElementById(id + "_text").value = 0;
			var json = {
				"name" : id,
				"status" : false
			};
			this.switches[index] = json
		}
		var g0 = (this.switches[0].status != null) ? this.switches[0].status : false;
		var g1 = (this.switches[1].status != null) ? this.switches[1].status : false;
		var g2 = (this.switches[2].status != null) ? this.switches[2].status : false;
		var g3 = (this.switches[3].status != null) ? this.switches[3].status : false;
		//var g = (((g0) ? 1 : 0) * 1) + (((g1) ? 1 : 0) * 2) + (((g2) ? 1 : 0) * 4) + (((g3) ? 1 : 0) * 8);
		var g = (((g3) ? 1 : 0)) +""+ (((g2) ? 1 : 0)) +""+ (((g1) ? 1 : 0)) +""+  (((g0) ? 1 : 0));
		var g_decimal = (((g0) ? 1 : 0) * 1) + (((g1) ? 1 : 0) * 2) + (((g2) ? 1 : 0) * 4) + (((g3) ? 1 : 0) * 8);
		$("#g_graytobinary").html(g);
		$("#g_graytobinary_dec").html("Decimal : "+g_decimal);
		var scope = this
		//scope.calculate()
	}
	this.calculate = function() {
		$("#run_button_g2b").css('background-color','#32CD32');
		var g0 = (this.switches[0].status != null) ? this.switches[0].status : false;
		var g1 = (this.switches[1].status != null) ? this.switches[1].status : false;
		var g2 = (this.switches[2].status != null) ? this.switches[2].status : false;
		var g3 = (this.switches[3].status != null) ? this.switches[3].status : false;

		var g3xorg2 = ((!g3 && g2) || (g3 && !g2));
		var g0xorg1 = ((!g1 && g0) || (g1 && !g0));

		var a = ((!g3xorg2 && g0xorg1) || (g3xorg2 && !g0xorg1))
		var b = ((!g3xorg2 && g1 ) || (g3xorg2 && !g1))
		var c = g3xorg2;
		var d = g3;

		//var b1 = (((a) ? 1 : 0) * 1) + (((b) ? 1 : 0) * 2) + (((c) ? 1 : 0) * 4) + (((d) ? 1 : 0) * 8);
		var b1 = (((d) ? 1 : 0)) +""+ (((c) ? 1 : 0)) +""+(((b) ? 1 : 0)) +""+(((a) ? 1 : 0));
		var b1_decimal = (((a) ? 1 : 0) * 1) + (((b) ? 1 : 0) * 2) + (((c) ? 1 : 0) * 4) + (((d) ? 1 : 0) * 8);
		$("#b_graytobinary").html(b1);
		$("#b_graytobinary_dec").html("Decimal : "+b1_decimal);
		var g = (((g0) ? 1 : 0) * 1) + (((g1) ? 1 : 0) * 2) + (((g2) ? 1 : 0) * 4) + (((g3) ? 1 : 0) * 8);
		//$("#g_graytobinary").html(g);

		if(a == true) {
			document.getElementById("bulb4").src = "/static/heLab/images/lightbulb1left.png";
			document.getElementById("bulb4_text").value = 1;
		} else {
			document.getElementById("bulb4").src = "/static/heLab/images/lightbulbleft.png";
			document.getElementById("bulb4_text").value = 0;
		}
		if(b == true) {
			document.getElementById("bulb5").src = "/static/heLab/images/lightbulb1left.png";
			document.getElementById("bulb5_text").value = 1;
		} else {
			document.getElementById("bulb5").src = "/static/heLab/images/lightbulbleft.png";
			document.getElementById("bulb5_text").value = 0;
		}
		if(c == true) {
			document.getElementById("bulb6").src = "/static/heLab/images/lightbulb1left.png";
			document.getElementById("bulb6_text").value = 1;
		} else {
			document.getElementById("bulb6").src = "/static/heLab/images/lightbulbleft.png";
			document.getElementById("bulb6_text").value = 0;
		}
		if(d == true) {
			document.getElementById("bulb7").src = "/static/heLab/images/lightbulb1left.png";
			document.getElementById("bulb7_text").value = 1;
		} else {
			document.getElementById("bulb7").src = "/static/heLab/images/lightbulbleft.png";
			document.getElementById("bulb7_text").value = 0;
		}
	}
}
var bcdtoexcess = function() {
	this.switches = [];
	this.initialize = function() {

		for(var i = 0; i < 8; i++) {
			var json = {
				"name" : "",
				"status" : false
			};
			this.switches[i] = json
		}

	}
	this.getName = function(s) {
		var d = s.lastIndexOf('.');
		return s.substring(s.lastIndexOf('/') + 1, d < 0 ? s.length : d);
	}
	this.switch_status = function(id) {
		$("#run_button_bc2e").css('background-color','#E6E6FA');
		$("#e_bcdtoe3_invl").html("&nbsp;")
		var index = id.split("_",3)[1];
		var that = this;
		
		var previous_image = that.getName(document.getElementById(id).src);
		if(previous_image == "off") {
			document.getElementById(id).src = "/static/heLab/images/on.png";
			document.getElementById(id+"_text").value = 1;
			var json = {
				"name" : id,
				"status" : true
			};
			this.switches[index] = json

		} else {
			document.getElementById(id).src = "/static/heLab/images/off.png";
			document.getElementById(id+"_text").value = 0;
			var json = {
				"name" : id,
				"status" : false
			};
			this.switches[index] = json
		}

		var b0 = (this.switches[0].status != null) ? this.switches[0].status : false;
		var b1 = (this.switches[1].status != null) ? this.switches[1].status : false;
		var b2 = (this.switches[2].status != null) ? this.switches[2].status : false;
		var b3 = (this.switches[3].status != null) ? this.switches[3].status : false;

		var b = (((b3) ? 1 : 0)) +""+ (((b2) ? 1 : 0)) +""+ (((b1) ? 1 : 0)) +""+ (((b0) ? 1 : 0));
		var b_decimal = (((b0) ? 1 : 0) * 1) + (((b1) ? 1 : 0) * 2) + (((b2) ? 1 : 0) * 4) + (((b3) ? 1 : 0) * 8);
			$("#b_bcdtoexcess").html(b);
			$("#b_bcdtoexcess_dec").html("Decimal : "+b_decimal);

		var scope = this
		//scope.calculate()
		
	}
	
	this.resetBcdtoexess = function(id) {
		document.getElementById(id).src = "/static/heLab/images/on.png";
		document.getElementById(id + "_text").value = 1;
		this.switch_status(id);
	}
	
	this.calculate = function() {
		$("#run_button_bc2e").css('background-color','#32CD32');
		var b0 = (this.switches[0].status != null) ? this.switches[0].status : false;
		var b1 = (this.switches[1].status != null) ? this.switches[1].status : false;
		var b2 = (this.switches[2].status != null) ? this.switches[2].status : false;
		var b3 = (this.switches[3].status != null) ? this.switches[3].status : false;

		//var b = (((b0) ? 1 : 0) * 1) + (((b1) ? 1 : 0) * 2) + (((b2) ? 1 : 0) * 4) + (((b3) ? 1 : 0) * 8);
		var b = (((b0) ? 1 : 0)) +""+ (((b1) ? 1 : 0)) +""+ (((b2) ? 1 : 0)) +""+ (((b3) ? 1 : 0));
		var b_decimal = (((b0) ? 1 : 0) * 1) + (((b1) ? 1 : 0) * 2) + (((b2) ? 1 : 0) * 4) + (((b3) ? 1 : 0) * 8);
		if(b_decimal> 9) {
			$("#b_bcdtoexcess").html(b);
			$("#b_bcdtoexcess_dec").html("Decimal : "+b_decimal);
			$("#e_bcdtoe3").html("&nbsp;");
			$("#e_bcdtoe3_dec").html("");
			//invl1
			//alert("Invalid Value");
			$("#e_bcdtoe3_invl").html("<div style='color:red;background-color: pink;-webkit-border-radius: 10px;-moz-border-radius: 10px;border-radius: 10px;padding:5px;'>ERROR : Invalid Input Value</div>")
			document.getElementById("e0_bcdtoe3").src = "/static/heLab/images/lightbulbleft.png";
			document.getElementById("e1_bcdtoe3").src = "/static/heLab/images/lightbulbleft.png";
			document.getElementById("e2_bcdtoe3").src = "/static/heLab/images/lightbulbleft.png";
			document.getElementById("e3_bcdtoe3").src = "/static/heLab/images/lightbulbleft.png";
			return;
		}
		
		var e = b_decimal + 3;
		var e_binary = utility.decimalToBinary(e);
		var eArray = e_binary.toString().split("");

		//$("#b_bcdtoexcess").html(b);
		$("#b_bcdtoexcess").html(b);
		$("#b_bcdtoexcess_dec").html("Decimal : "+b_decimal);
		$("#e_bcdtoe3").html(e_binary);
		$("#e_bcdtoe3_dec").html("Decimal : "+e);

		document.getElementById("bulb8").src = eArray[3] == true ? "/static/heLab/images/lightbulb1left.png" : "/static/heLab/images/lightbulbleft.png";
		document.getElementById("bulb9").src = eArray[2] == true ? "/static/heLab/images/lightbulb1left.png" : "/static/heLab/images/lightbulbleft.png";
		document.getElementById("bulb10").src = eArray[1] == true ? "/static/heLab/images/lightbulb1left.png" : "/static/heLab/images/lightbulbleft.png";
		document.getElementById("bulb11").src = eArray[0] == true ? "/static/heLab/images/lightbulb1left.png" : "/static/heLab/images/lightbulbleft.png";
		
		document.getElementById("bulb8_text").value = eArray[3] == true ? 1 : 0;
		document.getElementById("bulb9_text").value = eArray[2] == true ? 1 : 0;
		document.getElementById("bulb10_text").value = eArray[1] == true ? 1 : 0;
		document.getElementById("bulb11_text").value = eArray[0] == true ? 1 : 0;
	}
}
var excesstobcd = function() {
	this.switches = [];
	this.initialize = function() {

		for(var i = 0; i < 8; i++) {
			var json = {
				"name" : "",
				"status" : false
			};
			this.switches[i] = json
		}

	}
	this.getName = function(s) {
		var d = s.lastIndexOf('.');
		return s.substring(s.lastIndexOf('/') + 1, d < 0 ? s.length : d);
	}
	this.switch_status = function(id) {
		
		$("#run_button_e2bc").css('background-color','#E6E6FA');
		$("#e2_bcinvl").html("");
		var index = id.split("_",3)[1];
		var that = this;

		var previous_image = that.getName(document.getElementById(id).src);
		if(previous_image == "off") {
			document.getElementById(id).src = "/static/heLab/images/on.png";
			document.getElementById(id+"_text").value = 1;
			var json = {
				"name" : id,
				"status" : true
			};
			this.switches[index] = json
		} else {
			document.getElementById(id).src = "/static/heLab/images/off.png";
			document.getElementById(id+"_text").value = 0;
			var json = {
				"name" : id,
				"status" : false
			};
			this.switches[index] = json
		}
		var w = (this.switches[0].status != null) ? this.switches[0].status : false;
		var x = (this.switches[1].status != null) ? this.switches[1].status : false;
		var y = (this.switches[2].status != null) ? this.switches[2].status : false;
		var z = (this.switches[3].status != null) ? this.switches[3].status : false;

		var e = (((z) ? 1 : 0)) +""+ (((y) ? 1 : 0)) +""+ (((x) ? 1 : 0)) +""+ (((w) ? 1 : 0));
		var e_decimal = (((w) ? 1 : 0) * 1) + (((x) ? 1 : 0) * 2) + (((y) ? 1 : 0) * 4) + (((z) ? 1 : 0) * 8);
			$("#e_excesstobcd").html(e);
			$("#e_excesstobcd_dec").html("Decimal : "+e_decimal);
		
		var scope = this
		//scope.calculate()
	}
	this.resetExcesstobcd = function(id){
		
		document.getElementById(id).src = "/static/heLab/images/on.png";
		document.getElementById(id + "_text").value = 1;
		this.switch_status(id);
	}
	this.calculate = function() {
		$("#run_button_e2bc").css('background-color','#32CD32');
		var w = (this.switches[0].status != null) ? this.switches[0].status : false;
		var x = (this.switches[1].status != null) ? this.switches[1].status : false;
		var y = (this.switches[2].status != null) ? this.switches[2].status : false;
		var z = (this.switches[3].status != null) ? this.switches[3].status : false;

		//var e = (((w) ? 1 : 0) * 1) + (((x) ? 1 : 0) * 2) + (((y) ? 1 : 0) * 4) + (((z) ? 1 : 0) * 8);
		var e = (((z) ? 1 : 0)) +""+ (((y) ? 1 : 0)) +""+ (((x) ? 1 : 0)) +""+ (((w) ? 1 : 0));
		var e_decimal = (((w) ? 1 : 0) * 1) + (((x) ? 1 : 0) * 2) + (((y) ? 1 : 0) * 4) + (((z) ? 1 : 0) * 8);
		if(e_decimal == 0 || e_decimal == 1 || e_decimal == 2 || e_decimal== 13 || e_decimal == 14 || e_decimal == 15) {
			$("#e_excesstobcd").html(e);
			$("#e_excesstobcd_dec").html("Decimal : "+e_decimal);
			$("#b_excesstobcd").html("&nbsp;");
			$("#b_excesstobcd_dec").html("");
			//alert("Invalid Value");
			$("#e2_bcinvl").html("<div style='color:red;background-color: pink;-webkit-border-radius: 10px;-moz-border-radius: 10px;border-radius: 10px;padding:5px;'>ERROR : Invalid Input Value</div>");
			document.getElementById("b0_excesstobcd").src = "/static/heLab/images/lightbulbleft.png";
			document.getElementById("b1_excesstobcd").src = "/static/heLab/images/lightbulbleft.png";
			document.getElementById("b2_excesstobcd").src = "/static/heLab/images/lightbulbleft.png";
			document.getElementById("b3_excesstobcd").src = "/static/heLab/images/lightbulbleft.png";
			return
		}

		var b = e_decimal - 3;
		var b_binary = utility.decimalToBinary(b);
		var bArray = b_binary.toString().split("");
		var bArray = b_binary.toString().split("");

		$("#e_excesstobcd").html(e);
		$("#e_excesstobcd_dec").html("Decimal : "+e_decimal);
		$("#b_excesstobcd").html(b_binary);
		$("#b_excesstobcd_dec").html("Decimal : "+b);

		document.getElementById("bulb12").src = bArray[3] == true ? "/static/heLab/images/lightbulb1left.png" : "/static/heLab/images/lightbulbleft.png";
		document.getElementById("bulb13").src = bArray[2] == true ? "/static/heLab/images/lightbulb1left.png" : "/static/heLab/images/lightbulbleft.png";
		document.getElementById("bulb14").src = bArray[1] == true ? "/static/heLab/images/lightbulb1left.png" : "/static/heLab/images/lightbulbleft.png";
		document.getElementById("bulb15").src = bArray[0] == true ? "/static/heLab/images/lightbulb1left.png" : "/static/heLab/images/lightbulbleft.png";
		
		document.getElementById("bulb12_text").value = bArray[3] == true ? 1 : 0;
		document.getElementById("bulb13_text").value = bArray[2] == true ? 1 : 0;
		document.getElementById("bulb14_text").value = bArray[1] == true ? 1 : 0;
		document.getElementById("bulb15_text").value = bArray[0] == true ? 1 : 0;
	}
}

$(document).ready(function() {

	if($.browser.msie) {
		document.write("The Existing version of Internet Explorer is not supported ");
		document.write("<A href  = 'http://www.mozilla.com/en-US/products/download.html'>Click on the  Link :</A>")
	} else {

		$("ul.tabs").tabs("> .pane");

		$(":range").rangeinput({
			progress : true
		});

		//binarytogray

		{
			var obj_binarytogray = new binarytogray();
			obj_binarytogray.initialize();
			$("#switches").delegate("img", "click", null, function() {
				var id = this.id;
				obj_binarytogray.switch_status(id);
			});
		}

		//graytobinary
		{
			var obj_graytobinary = new graytobinary();
			obj_graytobinary.initialize();
			$("#switches1").delegate("img", "click", null, function() {
				var id = this.id;
				obj_graytobinary.switch_status(id);
			});
		}
		//bcdtoexcess
		{
			var obj_bcdtoexcess = new bcdtoexcess()
			obj_bcdtoexcess.initialize();
			$("#switches2").delegate("img", "click", null, function() {
				var id = this.id;
				obj_bcdtoexcess.switch_status(id);
			});
		}
		//excesstobcd
		{
			var obj_excesstobcd = new excesstobcd();
			obj_excesstobcd.initialize();
			$("#switches3").delegate("img", "click", null, function() {
				var id = this.id;
				obj_excesstobcd.switch_status(id);
			});
		} {
			$("#run_button_b2g").click(function() {
				obj_binarytogray.calculate();
			})
			$("#clear_button_b2g").click(function() {

				for(var i = 0; i <= 3; i++) {
					obj_binarytogray.resetBinarytogray("b" + i + "_" + i);
				}

				for(var i = 0; i <= 3; i++) {

					$("#bulb" + i).attr("src", "/static/heLab/images/lightbulbleft.png");
					$("#bulb" + i + "_text").val(0);
					$("#b_tog_text").html("&nbsp;");
					$("#b_tog_text_dec").html("");
					$("#g_tog_text").html("&nbsp;");
					$("#g_tog_text_dec").html("");
				}
			})
		} 
		{
			$("#run_button_g2b").click(function() {
				obj_graytobinary.calculate();
			})
			$("#clear_button_g2b").click(function() {

				for(var i = 0; i <= 3; i++) {
					obj_graytobinary.resetGraytobinary("g" + i + "_" + i);
				}

				for(var i = 4; i <= 7; i++) {

					$("#bulb" + i).attr("src", "/static/heLab/images/lightbulbleft.png");
					$("#bulb" + i + "_text").val(0);
					$("#g_graytobinary").html("&nbsp;");
					$("#g_graytobinary_dec").html("");
					$("#b_graytobinary").html("&nbsp;");
					$("#b_graytobinary_dec").html("");
				}
			})
		}
		
		{
			$("#run_button_bc2e").click(function() {
				obj_bcdtoexcess.calculate();
			})
			$("#clear_button_bc2e").click(function() {
				$("#e_bcdtoe3_invl").html("");
				var j=4;
				for(var i = 0; i <= 3; i++) {
					obj_bcdtoexcess.resetBcdtoexess("b" + j + "_" + i);
					j++;
				}

				for(var i = 8; i <= 11; i++) {

					$("#bulb" + i).attr("src", "/static/heLab/images/lightbulbleft.png");
					$("#bulb" + i + "_text").val(0);
					$("#b_bcdtoexcess").html("&nbsp;");
					$("#b_bcdtoexcess_dec").html("");
					$("#e_bcdtoe3").html("&nbsp;");
					$("#e_bcdtoe3_dec").html("");
				}
			})
		}
		
		{
			$("#run_button_e2bc").click(function() {
				obj_excesstobcd.calculate();
			})
			$("#clear_button_e2bc").click(function() {
				$("#e2_bcinvl").html("&nbsp;");
				for(var i = 0; i <= 3; i++) {
					obj_excesstobcd.resetExcesstobcd("e" + i + "_" + i);
				}

				for(var i = 12; i <= 15; i++) {

					$("#bulb" + i).attr("src", "/static/heLab/images/lightbulbleft.png");
					$("#bulb" + i + "_text").val(0);
					$("#e_excesstobcd").html("&nbsp;");
					$("#e_excesstobcd_dec").html("");
					$("#b_excesstobcd").html("&nbsp;");
					$("#b_excesstobcd_dec").html("");
				}
			})
		}
	}
});
