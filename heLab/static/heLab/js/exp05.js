var encoder = function() {
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
		$("#run_button_enc").css('background-color','#E6E6FA');
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
		var d0 = (this.switches[0].status != null) ? this.switches[0].status : false;
		var d1 = (this.switches[1].status != null) ? this.switches[1].status : false;
		var d2 = (this.switches[2].status != null) ? this.switches[2].status : false;
		var d3 = (this.switches[3].status != null) ? this.switches[3].status : false;
		var d4 = (this.switches[4].status != null) ? this.switches[4].status : false;
		var d5 = (this.switches[5].status != null) ? this.switches[5].status : false;
		var d6 = (this.switches[6].status != null) ? this.switches[6].status : false;
		var d7 = (this.switches[7].status != null) ? this.switches[7].status : false;
		//alert("d0 :" +d0)
		/*var A0 = d0
		var A1 = d1 || d3 || d5 ||d7
		var A2 = d2 || d3 || d6 ||d7
		var A3 = d4 || d5 || d6 || d7*/

		//alert("A0 :" + A0)
		$("#d_encoder").html(( d7 ? 1 : 0) + "" + ( d6 ? 1 : 0) + "" + ( d5 ? 1 : 0) + "" + ( d4 ? 1 : 0) + "" + ( d3 ? 1 : 0) + "" + ( d2 ? 1 : 0) + "" + ( d1 ? 1 : 0) + "" + ( d0 ? 1 : 0));
		//$("#a_encoder").html((A2?1:0)+""+(A1?1:0)+""+(A0?1:0));

		var scope = this
		//scope.calculate();
	}
	this.resetEncoder = function(id) {
		document.getElementById(id).src = "/static/heLab/images/on.png";
		document.getElementById(id + "_text").value = 1;
		this.switch_status(id);
	}
	this.calculate = function() {
		$("#run_button_enc").css('background-color','#32CD32');
		var d0 = (this.switches[0].status != null) ? this.switches[0].status : false;
		var d1 = (this.switches[1].status != null) ? this.switches[1].status : false;
		var d2 = (this.switches[2].status != null) ? this.switches[2].status : false;
		var d3 = (this.switches[3].status != null) ? this.switches[3].status : false;
		var d4 = (this.switches[4].status != null) ? this.switches[4].status : false;
		var d5 = (this.switches[5].status != null) ? this.switches[5].status : false;
		var d6 = (this.switches[6].status != null) ? this.switches[6].status : false;
		var d7 = (this.switches[7].status != null) ? this.switches[7].status : false;
		//alert("d0 :" +d0)
		/*var A0 = d0
		 var A1 = d1 || d3 || d5 ||d7
		 var A2 = d2 || d3 || d6 ||d7
		 var A3 = d4 || d5 || d6 || d7*/
		var A0 = d1 || d3 || d5 || d7
		var A1 = d2 || d3 || d6 || d7
		var A2 = d4 || d5 || d6 || d7
		//alert("A0 :" + A0)
		$("#d_encoder").html(( d7 ? 1 : 0) + "" + ( d6 ? 1 : 0) + "" + ( d5 ? 1 : 0) + "" + ( d4 ? 1 : 0) + "" + ( d3 ? 1 : 0) + "" + ( d2 ? 1 : 0) + "" + ( d1 ? 1 : 0) + "" + ( d0 ? 1 : 0));
		$("#a_encoder").html(( A2 ? 1 : 0) + "" + ( A1 ? 1 : 0) + "" + ( A0 ? 1 : 0));
		if(A0 == true) {
			document.getElementById("encoder0").src = "/static/heLab/images/lightbulb1left.png";
			document.getElementById("encoder0_text").value = 1;
		} else {
			document.getElementById("encoder0").src = "/static/heLab/images/lightbulbleft.png";
			document.getElementById("encoder0_text").value = 0;
		}
		if(A1 == true) {
			document.getElementById("encoder1").src = "/static/heLab/images/lightbulb1left.png";
			document.getElementById("encoder1_text").value = 1;
		} else {
			document.getElementById("encoder1").src = "/static/heLab/images/lightbulbleft.png";
			document.getElementById("encoder1_text").value = 0;
		}
		if(A2 == true) {
			document.getElementById("encoder2").src = "/static/heLab/images/lightbulb1left.png";
			document.getElementById("encoder2_text").value = 1;
		} else {
			document.getElementById("encoder2").src = "/static/heLab/images/lightbulbleft.png";
			document.getElementById("encoder2_text").value = 0;
		}
		/*if(A3 ==true)
		 document.getElementById("encoder4").src = "lightbulb1left.png"
		 else
		 document.getElementById("encoder4").src = "lightbulbleft.png"*/
	}
}
var decoder = function() {

	this.switches = [];
	this.initialize = function() {

		for(var i = 0; i < 8; i++) {
			var json = {
				"name" : "",
				"status" : false
			};
			this.switches[i] = json
		}
		//$("#outputbinary").text("V0 : ")

	}
	this.getName = function(s) {
		var d = s.lastIndexOf('.');
		return s.substring(s.lastIndexOf('/') + 1, d < 0 ? s.length : d);
	}
	this.switch_status = function(id) {
		$("#run_button_dec").css('background-color','#E6E6FA');
		var index = id.split("_",3)[1];
		//alert(index);
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
		var s0 = (this.switches[0].status != null) ? this.switches[0].status : false;
		var s1 = (this.switches[1].status != null) ? this.switches[1].status : false;
		var s2 = (this.switches[2].status != null) ? this.switches[2].status : false;
		$("#s_decoder").html(( s2 ? 1 : 0) + "" + ( s1 ? 1 : 0) + "" + ( s0 ? 1 : 0));

		var scope = this
		//scope.calculate();
	}

	this.resetDecoder = function(id) {
		document.getElementById(id).src = "/static/heLab/images/on.png";
		document.getElementById(id + "_text").value = 1;
		this.switch_status(id);
	}

	this.calculate = function() {
		$("#run_button_dec").css('background-color','#32CD32');
		var s0 = (this.switches[0].status != null) ? this.switches[0].status : false;
		var s1 = (this.switches[1].status != null) ? this.switches[1].status : false;
		var s2 = (this.switches[2].status != null) ? this.switches[2].status : false;

		var q0 = !s2 && !s1 && !s0
		var q1 = !s2 && !s1 && s0
		var q2 = !s2 && s1 && !s0
		var q3 = !s2 && s1 && s0
		var q4 = s2 && !s1 && !s0
		var q5 = s2 && !s1 && s0
		var q6 = s2 && s1 && !s0
		var q7 = s2 && s1 && s0
		//$("#s_decoder").html((s2?1:0)+""+(s1?1:0)+""+(s0?1:0));
		$("#q_decoder").html(( q7 ? 1 : 0) + "" + ( q6 ? 1 : 0) + "" + ( q5 ? 1 : 0) + "" + ( q4 ? 1 : 0) + "" + ( q3 ? 1 : 0) + "" + ( q2 ? 1 : 0) + "" + ( q1 ? 1 : 0) + "" + ( q0 ? 1 : 0));
		if(q0 == true) {
			document.getElementById("decoder0").src = "/static/heLab/images/lightbulb1left.png";
			document.getElementById("decoder0_text").value = 1;
		} else {
			document.getElementById("decoder0").src = "/static/heLab/images/lightbulbleft.png";
			document.getElementById("decoder0_text").value = 0;
		}
		if(q1 == true) {
			document.getElementById("decoder1").src = "/static/heLab/images/lightbulb1left.png";
			document.getElementById("decoder1_text").value = 1;
		} else {
			document.getElementById("decoder1").src = "/static/heLab/images/lightbulbleft.png";
			document.getElementById("decoder1_text").value = 0;
		}
		if(q2 == true) {
			document.getElementById("decoder2").src = "/static/heLab/images/lightbulb1left.png";
			document.getElementById("decoder2_text").value = 1;
		} else {
			document.getElementById("decoder2").src = "/static/heLab/images/lightbulbleft.png";
			document.getElementById("decoder2_text").value = 0;
		}
		if(q3 == true) {
			document.getElementById("decoder3").src = "/static/heLab/images/lightbulb1left.png";
			document.getElementById("decoder3_text").value = 1;
		} else {
			document.getElementById("decoder3").src = "/static/heLab/images/lightbulbleft.png";
			document.getElementById("decoder3_text").value = 0;
		}
		if(q4 == true) {
			document.getElementById("decoder4").src = "/static/heLab/images/lightbulb1left.png";
			document.getElementById("decoder4_text").value = 1;
		} else {
			document.getElementById("decoder4").src = "/static/heLab/images/lightbulbleft.png";
			document.getElementById("decoder4_text").value = 0;
		}
		if(q5 == true) {
			document.getElementById("decoder5").src = "/static/heLab/images/lightbulb1left.png";
			document.getElementById("decoder5_text").value = 1;
		} else {
			document.getElementById("decoder5").src = "/static/heLab/images/lightbulbleft.png";
			document.getElementById("decoder5_text").value = 0;
		}
		if(q6 == true) {
			document.getElementById("decoder6").src = "/static/heLab/images/lightbulb1left.png";
			document.getElementById("decoder6_text").value = 1;
		} else {
			document.getElementById("decoder6").src = "/static/heLab/images/lightbulbleft.png";
			document.getElementById("decoder6_text").value = 0;
		}
		if(q7 == true) {
			document.getElementById("decoder7").src = "/static/heLab/images/lightbulb1left.png";
			document.getElementById("decoder7_text").value = 1;
		} else {
			document.getElementById("decoder7").src = "/static/heLab/images/lightbulbleft.png";
			document.getElementById("decoder7_text").value = 0;
		}
	}
}
var multiplexer = function() {
	this.switches = [];
	this.initialize = function() {

		for(var i = 0; i < 11; i++) {
			var json = {
				"name" : "",
				"status" : false
			};
			this.switches[i] = json
		}
		//	$("#outputbinary").text("V0 : ")

	}
	this.getName = function(s) {
		var d = s.lastIndexOf('.');
		return s.substring(s.lastIndexOf('/') + 1, d < 0 ? s.length : d);
	}
	this.switch_status = function(id) {
		$("#run_button_mux").css('background-color','#E6E6FA');
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
		var i0 = (this.switches[0].status != null) ? this.switches[0].status : false;
		var i1 = (this.switches[1].status != null) ? this.switches[1].status : false;
		var i2 = (this.switches[2].status != null) ? this.switches[2].status : false;
		var i3 = (this.switches[3].status != null) ? this.switches[3].status : false;
		var i4 = (this.switches[4].status != null) ? this.switches[4].status : false;
		var i5 = (this.switches[5].status != null) ? this.switches[5].status : false;
		var i6 = (this.switches[6].status != null) ? this.switches[6].status : false;
		var i7 = (this.switches[7].status != null) ? this.switches[7].status : false;
		var s0 = (this.switches[8].status != null) ? this.switches[8].status : false;
		var s1 = (this.switches[9].status != null) ? this.switches[9].status : false;
		var s2 = (this.switches[10].status != null) ? this.switches[10].status : false;

		var y = (i0 && !s1 && !s0 && !s2) || (i1 && !s1 && s0 && !s2) || (i2 && s1 && !s0 && !s2) || (i3 && s1 && s0 && !s2) || (i4 && !s1 && !s0 && s2) || (i5 && !s1 && s0 && s2) || (i6 && s1 && !s0 && s2) || (i7 && s1 && s0 && s2);

		//$("#s_mul").val(( s2 ? 1 : 0) + "" + ( s1 ? 1 : 0) + "" + ( s0 ? 1 : 0));
		$("#s_mul").val(( s2 ? 1 : 0) + "" + ( s1 ? 1 : 0) + "" + ( s0 ? 1 : 0));
		$("#i_mul").val(( i7 ? 1 : 0) + "" + ( i6 ? 1 : 0) + "" + ( i5 ? 1 : 0) + "" + ( i4 ? 1 : 0) + "" + ( i3 ? 1 : 0) + "" + ( i2 ? 1 : 0) + "" + ( i1 ? 1 : 0) + "" + ( i0 ? 1 : 0));

		var scope = this
		//scope.calculate();
	}

	this.resetMultiplexer = function(id) {
		document.getElementById(id).src = "/static/heLab/images/on.png";
		document.getElementById(id + "_text").value = 1;
		this.switch_status(id);
	}

	this.calculate = function() {
		$("#run_button_mux").css('background-color','#32CD32');
		var i0 = (this.switches[0].status != null) ? this.switches[0].status : false;
		var i1 = (this.switches[1].status != null) ? this.switches[1].status : false;
		var i2 = (this.switches[2].status != null) ? this.switches[2].status : false;
		var i3 = (this.switches[3].status != null) ? this.switches[3].status : false;
		var i4 = (this.switches[4].status != null) ? this.switches[4].status : false;
		var i5 = (this.switches[5].status != null) ? this.switches[5].status : false;
		var i6 = (this.switches[6].status != null) ? this.switches[6].status : false;
		var i7 = (this.switches[7].status != null) ? this.switches[7].status : false;
		var s0 = (this.switches[8].status != null) ? this.switches[8].status : false;
		var s1 = (this.switches[9].status != null) ? this.switches[9].status : false;
		var s2 = (this.switches[10].status != null) ? this.switches[10].status : false;

		var y = (i0 && !s1 && !s0 && !s2) || (i1 && !s1 && s0 && !s2) || (i2 && s1 && !s0 && !s2) || (i3 && s1 && s0 && !s2) || (i4 && !s1 && !s0 && s2) || (i5 && !s1 && s0 && s2) || (i6 && s1 && !s0 && s2) || (i7 && s1 && s0 && s2)
		//$("#s_mul").val((s2?1:0)+""+(s1?1:0)+""+(s0?1:0));
		//$("#i_mul").val((i0?1:0)+""+(i1?1:0)+""+(i2?1:0)+""+(i3?1:0)+""+(i4?1:0)+""+(i5?1:0)+""+(i6?1:0)+""+(i7?1:0));
		$("#yout_mul").val( y ? 1 : 0)
		if(y == true) {
			document.getElementById("mul0").src = "/static/heLab/images/lightbulb1left.png";
			document.getElementById("mul0_text").value = 1;
		} else {
			document.getElementById("mul0").src = "/static/heLab/images/lightbulbleft.png";
			document.getElementById("mul0_text").value = 0;
		}

	}
}
var demultiplexer = function() {
	this.switches = [];
	this.initialize = function() {

		for(var i = 0; i < 8; i++) {
			var json = {
				"name" : "",
				"status" : false
			};
			this.switches[i] = json
		}
		//	$("#outputbinary").text("V0 : ")

	}
	this.getName = function(s) {
		var d = s.lastIndexOf('.');
		return s.substring(s.lastIndexOf('/') + 1, d < 0 ? s.length : d);
	}

	this.resetDemultiplexer = function(id) {
		document.getElementById(id).src = "/static/heLab/images/on.png";
		document.getElementById(id + "_text").value = 1;
		this.switch_status(id);
	}
	this.switch_status = function(id) {
		$("#run_button_demux").css('background-color','#E6E6FA');
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
		
		
		
		var s0 = (this.switches[3].status != null) ? this.switches[3].status : false;
		var s1 = (this.switches[4].status != null) ? this.switches[4].status : false;
		var s2 = (this.switches[5].status != null) ? this.switches[5].status : false;
			
		//$("#s_demul").html(( s2 ? 1 : 0) + "" + ( s1 ? 1 : 0) + "" + ( s0 ? 1 : 0));
		$("#s_demul").html(( s2 ? 1 : 0) + "" + ( s1 ? 1 : 0) + "" + ( s0 ? 1 : 0));
		var scope = this
		//scope.calculate();
	}
	this.calculate = function() {
		$("#run_button_demux").css('background-color','#32CD32');
		var i = (this.switches[0].status != null) ? this.switches[0].status : false;
		var s0 = (this.switches[3].status != null) ? this.switches[3].status : false;
		var s1 = (this.switches[4].status != null) ? this.switches[4].status : false;
		var s2 = (this.switches[5].status != null) ? this.switches[5].status : false;

		var q0 = (i && !s1 && !s0 && !s2)
		var q1 = (i && !s1 && s0 && !s2 )
		var q2 = (i && s1 && !s0 && !s2 )
		var q3 = (i && s1 && s0 && !s2)
		var q4 = (i && !s1 && !s0 && s2)
		var q5 = (i && !s1 && s0 && s2 )
		var q6 = (i && s1 && !s0 && s2 )
		var q7 = (i && s1 && s0 && s2)

		$("#q_demul").html(( q7 ? 1 : 0) + "" + ( q6 ? 1 : 0) + "" + ( q5 ? 1 : 0) + "" + ( q4 ? 1 : 0) + "" + ( q3 ? 1 : 0) + "" + ( q2 ? 1 : 0) + "" + ( q1 ? 1 : 0) + "" + ( q0 ? 1 : 0));
		$("#in_demul").html(( i ? 1 : 0))

		if(q0 == true) {
			document.getElementById("demul0").src = "/static/heLab/images/lightbulb1left.png";
			document.getElementById("demul0_text").value = 1;
		} else {
			document.getElementById("demul0").src = "/static/heLab/images/lightbulbleft.png";
			document.getElementById("demul0_text").value = 0;
		}
		if(q1 == true) {
			document.getElementById("demul1").src = "/static/heLab/images/lightbulb1left.png";
			document.getElementById("demul1_text").value = 1;
		} else {
			document.getElementById("demul1").src = "/static/heLab/images/lightbulbleft.png";
			document.getElementById("demul1_text").value = 0;
		}
		if(q2 == true) {
			document.getElementById("demul2").src = "/static/heLab/images/lightbulb1left.png";
			document.getElementById("demul2_text").value = 1;
		} else {
			document.getElementById("demul2").src = "/static/heLab/images/lightbulbleft.png";
			document.getElementById("demul2_text").value = 0;
		}
		if(q3 == true) {
			document.getElementById("demul3").src = "/static/heLab/images/lightbulb1left.png";
			document.getElementById("demul3_text").value = 1;
		} else {
			document.getElementById("demul3").src = "/static/heLab/images/lightbulbleft.png"
			document.getElementById("demul3_text").value = 0;
		}
		if(q4 == true) {
			document.getElementById("demul4").src = "/static/heLab/images/lightbulb1left.png";
			document.getElementById("demul4_text").value = 1;
		} else {
			document.getElementById("demul4").src = "/static/heLab/images/lightbulbleft.png";
			document.getElementById("demul4_text").value = 0;
		}
		if(q5 == true) {
			document.getElementById("demul5").src = "/static/heLab/images/lightbulb1left.png";
			document.getElementById("demul5_text").value = 1;
		} else {
			document.getElementById("demul5").src = "/static/heLab/images/lightbulbleft.png";
			document.getElementById("demul5_text").value = 0;
		}
		if(q6 == true) {
			document.getElementById("demul6").src = "/static/heLab/images/lightbulb1left.png";
			document.getElementById("demul6_text").value = 1;
		} else {
			document.getElementById("demul6").src = "/static/heLab/images/lightbulbleft.png";
			document.getElementById("demul6_text").value = 0;
		}
		if(q7 == true) {
			document.getElementById("demul7").src = "/static/heLab/images/lightbulb1left.png";
			document.getElementById("demul7_text").value = 1;
		} else {
			document.getElementById("demul7").src = "/static/heLab/images/lightbulbleft.png";
			document.getElementById("demul7_text").value = 0;
		}
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

		//encoder
		{
			var obj_encoder = new encoder();
			obj_encoder.initialize();
			$("#switches0").delegate("img", "click", null, function() {
				var id = this.id;
				obj_encoder.switch_status(id);
			});
		}
		//decoder
		{
			var obj_decoder = new decoder();
			obj_decoder.initialize();

			$("#switches11").delegate("img", "click", null, function() {
				var id = this.id;
				obj_decoder.switch_status(id)
			});
		}
		//multiplexerr
		{
			var obj_multiplexer = new multiplexer();
			obj_multiplexer.initialize();
			$("#switches12").delegate("img", "click", null, function() {
				var id = this.id;
				obj_multiplexer.switch_status(id)
			});
		}
		//demultiplexer
		{
			var obj_demultiplexer = new demultiplexer();
			obj_demultiplexer.initialize();
			$("#switches13").delegate("img", "click", null, function() {
				var id = this.id;
				obj_demultiplexer.switch_status(id)
			});
		} {

			$("#run_button_enc").click(function() {
				obj_encoder.calculate()
			})

			$("#clear_button_enc").click(function() {
				document.getElementById("a_encoder").innerHTML = "000";
				document.getElementById("d_encoder").innerHTML = "00000000";
				for(var i = 0; i <= 2; i++) {
					document.getElementById("encoder" + i).src = "/static/heLab/images/lightbulbleft.png";
					document.getElementById("encoder" + i + "_text").value = 0;
				}

				for(var i = 0; i <= 7; i++) {
					obj_encoder.resetEncoder("d" + i + "_" + i);
				}

			})
		} {

			$("#run_button_dec").click(function() {
				obj_decoder.calculate()
			})

			$("#clear_button_dec").click(function() {
				document.getElementById("s_decoder").innerHTML = "000";
				document.getElementById("q_decoder").innerHTML = "00000000";
				for(var i = 0; i <= 7; i++) {
					document.getElementById("decoder" + i).src = "/static/heLab/images/lightbulbleft.png";
					document.getElementById("decoder" + i + "_text").value = 0;
				}

				for(var i = 0; i <= 2; i++) {
					obj_decoder.resetDecoder("s" + i + "_" + i);
				}

			})
		} {

			$("#run_button_mux").click(function() {
				obj_multiplexer.calculate();
			})

			$("#clear_button_mux").click(function() {
				document.getElementById("i_mul").value = "";
				document.getElementById("s_mul").value = "";
				document.getElementById("yout_mul").value = "";

				document.getElementById("mul0").src = "/static/heLab/images/lightbulbleft.png";
				document.getElementById("mul0_text").value = 0;

				for(var i = 0; i <= 10; i++) {
					obj_multiplexer.resetMultiplexer("i" + i + "_" + i);
				}

			})
		} {

			$("#run_button_demux").click(function() {
				obj_demultiplexer.calculate();
			})

			$("#clear_button_demux").click(function() {

				for(var k = 0; k <= 7; k++) {
					document.getElementById("demul" + k).src = "/static/heLab/images/lightbulbleft.png";
					document.getElementById("demul" + k + "_text").value = 0;
				}

				obj_demultiplexer.resetDemultiplexer("i_0");
				j = 3;
				for(var i = 0; i <= 2; i++) {

					obj_demultiplexer.resetDemultiplexer("s" + i + "_" + j);
					j++;
				}

				document.getElementById("in_demul").innerHTML = "0";
				document.getElementById("q_demul").innerHTML = "00000000";
				document.getElementById("s_demul").innerHTML="000";

			})
		}
	}
});
