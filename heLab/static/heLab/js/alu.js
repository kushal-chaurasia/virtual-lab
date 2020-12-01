var alu_logic = function()
{
	var selCount=0;
	this.switches = [];
	 this.initialize = function()
	 {
		
		for(var i=0;i<14;i++){
		var json = {"name" :"","status" : false };
			this.switches[i]=json}
	//	$("#outputbinary").text("V0 : ")
		
	 }
	this.getName = function(s) 
	{
	var d = s.lastIndexOf('.');
	return s.substring(s.lastIndexOf('/') + 1, d < 0 ? s.length : d);
	}
	this.switch_status = function(id)
	{
		$("#run_button").css('background-color','#E6E6FA');
		var index = id.split("_",3)[1];
		//alert(index);
		var that = this;
		
		var previous_image = that.getName(document.getElementById(id).src);
		
			if(previous_image == "off")
			{
				document.getElementById(id).src = "/static/heLab/images/on.png"
				document.getElementById(id+"_text").value="1";
				var json = {"name" :id,"status" : true };
				this.switches[index]=json
				selCount++;
			}
			else 
			{
				document.getElementById(id).src = "/static/heLab/images/off.png"
				document.getElementById(id+"_text").value="0";
				var json = {"name" :id,"status" : false };
				this.switches[index] = json
				if(selCount!=0){
				selCount--;	
				}
				
			}
	
		//var scope = this
		//scope.calculate()
		var a0 = (this.switches[0].status != null)? this.switches[0].status : false; 
		var a1 = (this.switches[1].status != null)? this.switches[1].status : false; 
		var a2 = (this.switches[2].status != null)? this.switches[2].status : false; 
		var a3 = (this.switches[3].status != null)? this.switches[3].status : false; 
		var a = (((a0)?1:0) * 1) + (((a1)?1:0) * 2) + (((a2)?1:0) * 4) + (((a3)?1:0) * 8);
			
		//for input B
		var b0 = (this.switches[7].status != null)? this.switches[7].status : false; 
		var b1 = (this.switches[6].status != null)? this.switches[6].status : false; 
		var b2 = (this.switches[5].status != null)? this.switches[5].status : false; 
		var b3 = (this.switches[4].status != null)? this.switches[4].status : false; 
		var b = (((b0)?1:0) * 1) + (((b1)?1:0) * 2) + (((b2)?1:0) * 4) + (((b3)?1:0) * 8);
		a = utility.decimalToBinary(a);
		b = utility.decimalToBinary(b);
		var a_bar = utility.computeOnesComplement(a);
		var b_bar = utility.computeOnesComplement(b);
		$("#a_l").html("A: "+a);
		$("#b_l").html("B: "+b);
	}
	this.toggleBits=function( dec ){
    var mask = 0xFFFFFFF;
    return ( dec ^ mask ).toString(2).match( RegExp( "[01]{"+(dec.toString(2).length)+"}$" ) )[0];
	}

	
	this.deciToBin = function(arg)
{
	res1 = 999;
	args = arg;
	while(args>1)
	{
		arg1 = parseInt(args/2);
		arg2 = args%2;
		args = arg1;
		if(res1 == 999)
		{
			res1 = arg2.toString();
		}
		else
		{
			res1 = arg2.toString()+res1.toString();
		}
	}
	if(args == 1 && res1 != 999)
	{
		res1 = args.toString()+res1.toString();
	}
	else if(args == 0 && res1 == 999)
	{
		res1 = 0;
	}
	else if(res1 == 999)
	{
		res1 = 1;
	}
	var ll = res1.length;
	while(ll%4 != 0)
	{
		res1 = "0"+res1;
		ll = res1.length;
	}	
	return res1;
}
	
	this.neg =  function (val)
	{ //alert("val: "+val);
		var x = Math.pow(2,4);
		//alert("x :"+x);
		var ans = ((x-1)-val);
		//alert("ans :"+ans);
		return ans;
		
	}
	var that = this;
	this.calculate = function ()
	{
		//alert("calc");
		//for input A
		$("#run_button").css('background-color','#32CD32');
		var a0 = (this.switches[0].status != null)? this.switches[0].status : false; 
		var a1 = (this.switches[1].status != null)? this.switches[1].status : false; 
		var a2 = (this.switches[2].status != null)? this.switches[2].status : false; 
		var a3 = (this.switches[3].status != null)? this.switches[3].status : false; 
		var a = (((a0)?1:0) * 1) + (((a1)?1:0) * 2) + (((a2)?1:0) * 4) + (((a3)?1:0) * 8);
			
		//for input B
		var b0 = (this.switches[7].status != null)? this.switches[7].status : false; 
		var b1 = (this.switches[6].status != null)? this.switches[6].status : false; 
		var b2 = (this.switches[5].status != null)? this.switches[5].status : false; 
		var b3 = (this.switches[4].status != null)? this.switches[4].status : false; 
		var b = (((b0)?1:0) * 1) + (((b1)?1:0) * 2) + (((b2)?1:0) * 4) + (((b3)?1:0) * 8);
			
		//for select lines
		var s0 = (this.switches[11].status != null)? this.switches[11].status : false; 
		var s1 = (this.switches[10].status != null)? this.switches[10].status : false; 
		var s2 = (this.switches[9].status != null)? this.switches[9].status : false; 
		var s3 = (this.switches[8].status != null)? this.switches[8].status : false; 

		a = utility.decimalToBinary(a);
		b = utility.decimalToBinary(b);
		var a_bar = utility.computeOnesComplement(a);
		var b_bar = utility.computeOnesComplement(b);
		
		if(!s3 && !s2 && !s1 && !s0) {
			y = a_bar
		} else if(!s3 && !s2 && !s1 && s0) {
			y = utility.computeOnesComplement(utility.BinaryAddition(a, b));
		} else if(!s3 && !s2 && s1 && !s0) {
			y = utility.BinaryMultiplication(a_bar, b);
		} else if(!s3 && !s2 && s1 && s0) {
			y = "0000";
		} else if(!s3 && s2 && !s1 && !s0) {
			y = utility.computeOnesComplement(utility.BinaryMultiplication(a, b));
		} else if(!s3 && s2 && !s1 && s0) {
			y = b_bar;
		} else if(!s3 && s2 && s1 && !s0) {
			y = utility.BinaryXOR(a, b);
		} else if(!s3 && s2 && s1 && s0) {
			y = utility.BinaryMultiplication(a, b_bar);
		} else if(s3 &&  !s2 && !s1 && !s0) {
			y = utility.BinaryAddition(a_bar, b);
		} else if(s3 &&  !s2 && !s1 && s0) {
			y = utility.computeOnesComplement(utility.BinaryXOR(a, b));
		} else if(s3 &&  !s2 && s1 && !s0) {
			y = b;
		} else if( s3 &&  !s2 && s1 && s0) {
			y = utility.BinaryMultiplication(a, b);
		} else if(s3 &&  s2 && !s1 && !s0) {
			y = "1111";
		} else if(s3 &&  s2 && !s1 && s0) {
			y = utility.BinaryAddition(a, b_bar);
		} else if(s3 &&  s2 && s1 && !s0) {
			y = utility.BinaryAddition(a, b);
		} else if(s3 &&  s2 && s1 && s0) {
			y = a;
		}
		var y_bin = y.toString().split("");
		$("#a_l").html("A: "+a);
		$("#b_l").html("B: "+b);
		$("#y_l").html("Y: "+y);
	//alert(""+y_bin)
		document.getElementById("glow3").src = y_bin[0] == true ? "/static/heLab/images/lightbulb1_up.png" : "/static/heLab/images/lightbulb_up.png";
		document.getElementById("glow2").src = y_bin[1] == true ? "/static/heLab/images/lightbulb1_up.png" : "/static/heLab/images/lightbulb_up.png";
		document.getElementById("glow1").src = y_bin[2] == true ? "/static/heLab/images/lightbulb1_up.png" : "/static/heLab/images/lightbulb_up.png";
		document.getElementById("glow0").src = y_bin[3] == true ? "/static/heLab/images/lightbulb1_up.png" : "/static/heLab/images/lightbulb_up.png";
	}
}

//aluarithmetic not working properly wtih delegate

var alu_arithmetic = function()
{

	this.switches = [];
	 this.initialize = function()
	 {
		
		for(var i=0;i<14;i++){
		var json = {"name" :"","status" : false };
			this.switches[i]=json}
	//	$("#outputbinary").text("V0 : ")
		
	 }
	this.getName = function(s) 
	{
	var d = s.lastIndexOf('.');
	return s.substring(s.lastIndexOf('/') + 1, d < 0 ? s.length : d);
	}
	this.switch_status = function(id)
	{
		$("#run_button_arith").css('background-color','#E6E6FA');
		var index = id.split("_",3)[1];
		var that = this;
		
		var previous_image = that.getName(document.getElementById(id).src);
			if(previous_image == "off")
			{
				document.getElementById(id).src = "/static/heLab/images/on.png";
				document.getElementById(id+"_text").value = "1";
				var json = {"name" :id,"status" : true };
				this.switches[index]=json
				
			}
			else 
			{
				document.getElementById(id).src = "/static/heLab/images/off.png";
				document.getElementById(id+"_text").value = "0";
				var json = {"name" :id,"status" : false };
				this.switches[index] = json
			}
	
		//var scope = this
		//scope.calculate()
		var a0 = (this.switches[3].status != null)? this.switches[3].status : false; 
		var a1 = (this.switches[2].status != null)? this.switches[2].status : false; 
		var a2 = (this.switches[1].status != null)? this.switches[1].status : false; 
		var a3 = (this.switches[0].status != null)? this.switches[0].status : false; 
		var a = (((a0)?1:0) * 1) + (((a1)?1:0) * 2) + (((a2)?1:0) * 4) + (((a3)?1:0) * 8);
			
		//for input B
		var b0 = (this.switches[7].status != null)? this.switches[7].status : false; 
		var b1 = (this.switches[6].status != null)? this.switches[6].status : false; 
		var b2 = (this.switches[5].status != null)? this.switches[5].status : false; 
		var b3 = (this.switches[4].status != null)? this.switches[4].status : false; 
		var b = (((b0)?1:0) * 1) + (((b1)?1:0) * 2) + (((b2)?1:0) * 4) + (((b3)?1:0) * 8);

		//for select lines
		var s0 = (this.switches[11].status != null)? this.switches[11].status : false; 
		var s1 = (this.switches[10].status != null)? this.switches[10].status : false; 
		var s2 = (this.switches[9].status != null)? this.switches[9].status : false; 
		var s3 = (this.switches[8].status != null)? this.switches[8].status : false;

		//for mode in cin
		//var mode = (this.switches[12].status != null)? this.switches[12].status : false; 
		var cin = (this.switches[12].status != null)? this.switches[12].status : false;
		
		a = utility.decimalToBinary(a);
		b = utility.decimalToBinary(b);
		$("#a_a").html("A: "+a);
		$("#b_a").html("B: "+b);
	}
	this.toggleBits=function( dec ){
    var mask = 0xFFFFFFF;
    return ( dec ^ mask ).toString(2).match( RegExp( "[01]{"+(dec.toString(2).length)+"}$" ) )[0];
	}
	
		this.neg1 =  function (val)
	{ //alert("val: "+val);
		var x = Math.pow(2,4);
		//alert("x :"+x);
		var ans = ((x-1)-val);
		//alert("ans :"+ans);
		return ans;
		
	}
	
	this.deciToBin1 = function(arg)
{
	res1 = 999;
	args = arg;
	while(args>1)
	{
		arg1 = parseInt(args/2);
		arg2 = args%2;
		args = arg1;
		if(res1 == 999)
		{
			res1 = arg2.toString();
		}
		else
		{
			res1 = arg2.toString()+res1.toString();
		}
	}
	if(args == 1 && res1 != 999)
	{
		res1 = args.toString()+res1.toString();
	}
	else if(args == 0 && res1 == 999)
	{
		res1 = 0;
	}
	else if(res1 == 999)
	{
		res1 = 1;
	}
	var ll = res1.length;
	while(ll%4 != 0)
	{
		res1 = "0"+res1;
		ll = res1.length;
	}	
	return res1;
}


	var that = this;
	this.calculate = function () {
		$("#run_button_arith").css('background-color','#32CD32');
		//for input A
		var a0 = (this.switches[3].status != null)? this.switches[3].status : false; 
		var a1 = (this.switches[2].status != null)? this.switches[2].status : false; 
		var a2 = (this.switches[1].status != null)? this.switches[1].status : false; 
		var a3 = (this.switches[0].status != null)? this.switches[0].status : false; 
		var a = (((a0)?1:0) * 1) + (((a1)?1:0) * 2) + (((a2)?1:0) * 4) + (((a3)?1:0) * 8);
			
		//for input B
		var b0 = (this.switches[7].status != null)? this.switches[7].status : false; 
		var b1 = (this.switches[6].status != null)? this.switches[6].status : false; 
		var b2 = (this.switches[5].status != null)? this.switches[5].status : false; 
		var b3 = (this.switches[4].status != null)? this.switches[4].status : false; 
		var b = (((b0)?1:0) * 1) + (((b1)?1:0) * 2) + (((b2)?1:0) * 4) + (((b3)?1:0) * 8);

		//for select lines
		var s0 = (this.switches[11].status != null)? this.switches[11].status : false; 
		var s1 = (this.switches[10].status != null)? this.switches[10].status : false; 
		var s2 = (this.switches[9].status != null)? this.switches[9].status : false; 
		var s3 = (this.switches[8].status != null)? this.switches[8].status : false;

		//for mode in cin
		//var mode = (this.switches[12].status != null)? this.switches[12].status : false; 
		var cin = (this.switches[12].status != null)? this.switches[12].status : false;
		
		a = utility.decimalToBinary(a);
		b = utility.decimalToBinary(b);
		
		var a_bar = utility.computeOnesComplement(a);
		var b_bar = utility.computeOnesComplement(b);
		
		var AB = utility.BinaryMultiplication(a, b);
		var ABBar = utility.BinaryMultiplication(a, b_bar);

		//A+B
		var AplusBlogical = utility.BinaryAddition(a, b);
		//A+BBar
		var AplusBBarlogical = utility.BinaryAddition(a, b_bar);
	
		/** Arithmetic operations*/
		if(cin == true) { /* with carry*/
			if(!s3 && !s2 && !s1 && !s0) {
				y = {number: a, carry: 0};
			} else if(!s3 && !s2 && !s1 && s0) {
				y = {number: AplusBlogical, carry: 0};
			} else if(!s3 && !s2 && s1 && !s0) {
				y = {number: AplusBBarlogical, carry: 0};
			} else if(!s3 && !s2 && s1 && s0) {
				y = {number: utility.computeTwosComplement("0001"), carry: 0};
			} else if(!s3 && s2 && !s1 && !s0) {
				var result = utility.ArithmaticAddition(a, ABBar);
				y = {number: result.number, carry: result.carry};
			} else if(!s3 && s2 && !s1 && s0) {
				var result = utility.ArithmaticAddition(AplusBlogical, ABBar);
				y = {number: result.number, carry: result.carry};
			} else if(!s3 && s2 && s1 && !s0) {
				var res1 = utility.ArithmaticAddition(a, utility.computeTwosComplement(b));
				var result = utility.ArithmaticAddition(res1.number, utility.computeTwosComplement("0001"), res1.carry);
				y = {number: result.number, carry: result.carry};
			} else if(!s3 && s2 && s1 && s0) {
				var result = utility.ArithmaticAddition(ABBar, utility.computeTwosComplement("0001"));
				y = {number: result.number, carry: result.carry};
			} else if(s3 &&  !s2 && !s1 && !s0) {
				var result = utility.ArithmaticAddition(a, AB);
				y = {number: result.number, carry: result.carry};
			} else if(s3 &&  !s2 && !s1 && s0) {
				var result = utility.ArithmaticAddition(a, b);
				y = {number: result.number, carry: result.carry};
			} else if(s3 &&  !s2 && s1 && !s0) {
				var result = utility.ArithmaticAddition(AplusBBarlogical, AB);
				y = {number: result.number, carry: result.carry};
			} else if(s3 &&  !s2 && s1 && s0) {
				var result = utility.ArithmaticAddition(AB, utility.computeTwosComplement("0001"));
				y = {number: result.number, carry: result.carry};
			} else if(s3 && s2 && !s1 && !s0) {
				//var result = utility.ArithmaticAddition(a, a_bar);
				var result = utility.ArithmaticAddition(a, a);
				y = {number: result.number, carry: result.carry};
			} else if(s3 &&  s2 && !s1 && s0) {
				var result = utility.ArithmaticAddition(AplusBlogical, a);
				y = {number: result.number, carry: result.carry};
			} else if(s3 &&  s2 && s1 && !s0) {
				var result = utility.ArithmaticAddition(AplusBBarlogical, a);
				y = {number: result.number, carry: result.carry};
			} else if(s3 &&  s2 && s1 && s0) {
				var result = utility.ArithmaticAddition(a, utility.computeTwosComplement("0001"));
				y = {number: result.number, carry: result.carry};
			} 
		} else { /* no carry*/
			if(!s3 && !s2 && !s1 && !s0) {
				var result = utility.ArithmaticAddition(a, "0001");
				y = {number: result.number, carry: result.carry};
			} else if(!s3 && !s2 && !s1 && s0) {
				var result = utility.ArithmaticAddition(AplusBlogical, "0001");
				y = {number: result.number, carry: result.carry};
			} else if(!s3 && !s2 && s1 && !s0) {
				var result = utility.ArithmaticAddition(AplusBBarlogical, "0001");
				y = {number: result.number, carry: result.carry};
			} else if(!s3 && !s2 && s1 && s0) {
				y = {number: "0000", carry: 0};
			} else if(!s3 && s2 && !s1 && !s0) {
				var result1 = utility.ArithmaticAddition(a, ABBar);
				var result = utility.ArithmaticAddition(result1.number, "0001", result1.carry);
				y = {number: result.number, carry: result.carry};
			} else if(!s3 && s2 && !s1 && s0) {
				var result1 = utility.ArithmaticAddition(AplusBlogical, ABBar);
				var result = utility.ArithmaticAddition(result1.number, "0001", result1.carry);
				y = {number: result.number, carry: result.carry};
			} else if(!s3 && s2 && s1 && !s0) {
				var result = utility.ArithmaticAddition(a, utility.computeTwosComplement(b));
				y = {number: result.number, carry: result.carry};
			} else if(!s3 && s2 && s1 && s0) {
				y = {number: ABBar, carry: 0};
			} else if(s3 &&  !s2 && !s1 && !s0) {
				var result1 = utility.ArithmaticAddition(a, AB);
				var result = utility.ArithmaticAddition(result1.number, "0001", result1.carry);
				y = {number: result.number, carry: result.carry};
			} else if(s3 &&  !s2 && !s1 && s0) {
				var result1 = utility.ArithmaticAddition(a, b);
				var result = utility.ArithmaticAddition(result1.number, "0001", result1.carry);
				y = {number: result.number, carry: result.carry};
			} else if(s3 &&  !s2 && s1 && !s0) {
				var result1 = utility.ArithmaticAddition(AplusBBarlogical, AB);
				var result = utility.ArithmaticAddition(result1.number, "0001", result1.carry);
				y = {number: result.number, carry: result.carry};
			} else if(s3 &&  !s2 && s1 && s0) {
				y = {number: AB, carry: 0};
			} else if(s3 && s2 && !s1 && !s0) {
				var result1 = utility.ArithmaticAddition(a, a);
				var result = utility.ArithmaticAddition(result1.number, "0001", result1.carry);
				y = {number: result.number, carry: result.carry};
			} else if(s3 &&  s2 && !s1 && s0) {
				var result1 = utility.ArithmaticAddition(AplusBlogical, a);
				var result = utility.ArithmaticAddition(result1.number, "0001", result1.carry);
				y = {number: result.number, carry: result.carry};
			} else if(s3 &&  s2 && s1 && !s0) {
				var result1 = utility.ArithmaticAddition(AplusBBarlogical, a);
				var result = utility.ArithmaticAddition(result1.number, "0001", result1.carry);
				y = {number: result.number, carry: result.carry};
			} else if(s3 &&  s2 && s1 && s0) {
				y = {number: a, carry: 0};
			}
		}
		var bin = y.number;
		var carry = y.carry;
		var y_bin = bin.toString().split("");
		$("#a_a").html("A: "+a);
		$("#b_a").html("B: "+b);
		$("#y_arith").val(bin);
		document.getElementById("glow4").src = y_bin[0] == true ? "/static/heLab/images/lightbulb1_up.png" : "/static/heLab/images/lightbulb_up.png";
		document.getElementById("glow5").src = y_bin[1] == true ? "/static/heLab/images/lightbulb1_up.png" : "/static/heLab/images/lightbulb_up.png";
		document.getElementById("glow6").src = y_bin[2] == true ? "/static/heLab/images/lightbulb1_up.png" : "/static/heLab/images/lightbulb_up.png";
		document.getElementById("glow7").src = y_bin[3] == true ? "/static/heLab/images/lightbulb1_up.png" : "/static/heLab/images/lightbulb_up.png";
		document.getElementById("y_alu_carry").src = (carry == "1" ? "/static/heLab/images/lightbulb1_up.png" : "/static/heLab/images/lightbulb_up.png");		
		document.getElementById("y_carry_text").value = (carry == "1" ? "1" : "0");
	}
}

  
 $(document).ready(function(){ 
 	if($.browser.msie)
    {
    document.write("The Existing version of Internet Explorer is not supported ");
    document.write("<A href  = 'http://www.mozilla.com/en-US/products/download.html'>Click on the  Link :</A>")
     //window.close()
    }
	else
	{	
	$("ul.tabs").tabs("> .pane");
		
	$(":range").rangeinput({  progress: true });
		
		//alu_arithmetic
	{
		var obj_alu_arithmetic = new alu_arithmetic();
		obj_alu_arithmetic.initialize();
		$("#switch1").delegate("img", "click",null, function(){
			var id=this.id;
			obj_alu_arithmetic.switch_status(id);
    });
    $("#run_button_arith").click(function (){
			obj_alu_arithmetic.calculate();
		});
		$("#reset_button_arith").click(function (){
			document.getElementById("cin_12").src="/static/heLab/images/on.png";
			document.getElementById("cin_12").value=1;
			obj_alu_arithmetic.switch_status("cin_12");
			for(var i=0;i<=3;i++){
				//alert("a_"+i+"_"+i);
				document.getElementById("at"+i+"_"+i).src="/static/heLab/images/on.png";
				document.getElementById("at"+i+"_"+i+"_text").value=1;
				obj_alu_arithmetic.switch_status("at"+i+"_"+i);
			}
			
			var j=4;
			for(var i=0;i<=3;i++){
				//alert("a_"+i+"_"+i);
				document.getElementById("b"+i+"_"+j).src="/static/heLab/images/on.png";
				document.getElementById("b"+i+"_"+j+"_text").value=1;
				obj_alu_arithmetic.switch_status("b"+i+"_"+j);
				j++;
			}
			
			j=8;
			for(var i=0;i<=3;i++){
				//alert("a_"+i+"_"+i);
				document.getElementById("s"+i+"_"+j).src="/static/heLab/images/on.png";
				document.getElementById("s"+i+"_"+j+"_text").value=1;
				obj_alu_arithmetic.switch_status("s"+i+"_"+j);
				j++;
			}
			
			document.getElementById("y_alu_carry").src="/static/heLab/images/lightbulb_up.png";
			for(var i=4;i<=7;i++){
				document.getElementById("glow"+i).src="/static/heLab/images/lightbulb_up.png";
			}
			document.getElementById("a_a").innerHTML="<input type='text' style='text-align:center;' id = 'a_arith' size = 4 disabled='true'/>";
			document.getElementById("b_a").innerHTML="<input type='text' style='text-align:center;'  id = 'b_arith' style='top:50px' size = 4 disabled='true'/>";
			document.getElementById("y_carry_text").value="";
			document.getElementById("y_arith").value="";
		});
		/*$(function(){
		$("#cn_a").click( function(){
		obj_alu_arithmetic.switch_status("cn_a",13)
		})
		$("#a3_a").click( function(){
		obj_alu_arithmetic.switch_status("a3_a",3)
		})
		$("#a2_a").click( function(){
		obj_alu_arithmetic.switch_status("a2_a",2)
		})
		$("#a1_a").click( function(){
		obj_alu_arithmetic.switch_status("a1_a",1)
		})
		$("#a0_a").click( function(){
		obj_alu_arithmetic.switch_status("a0_a",0)
		})
		$("#b3_a").click( function(){
		obj_alu_arithmetic.switch_status("b3_a",7)
		})
		$("#b2_a").click( function(){
		obj_alu_arithmetic.switch_status("b2_a",6)
		})
		$("#b1_a").click( function(){
		obj_alu_arithmetic.switch_status("b1_a",5)
		})
		$("#b0_a").click( function(){
		obj_alu_arithmetic.switch_status("b0_a",4)
		})
		$("#s3_a").click( function(){
		obj_alu_arithmetic.switch_status("s3_a",11)
		})
		$("#s2_a").click( function(){
		obj_alu_arithmetic.switch_status("s2_a",10)
		})
		$("#s1_a").click( function(){
		obj_alu_arithmetic.switch_status("s1_a",9)
		})
		$("#s0_a").click( function(){
		obj_alu_arithmetic.switch_status("s0_a",8)
		})		
		
		});*/
	}
	//alu_logic
	{
		var obj_alu_logic = new alu_logic();
		obj_alu_logic.initialize();
		 $("#switch0").delegate("img", "click",null, function(){
		 	
			var id=this.id;
			obj_alu_logic.switch_status(id);
    });
   
		$("#run_button").click(function (){
			obj_alu_logic.calculate();
		});
	
		$("#reset_button").click(function (){
			for(var i=3;i>=0;i--){
				//alert("a_"+i+"_"+i);
				document.getElementById("a"+i+"_"+i).src="/static/heLab/images/on.png";
				document.getElementById("a"+i+"_"+i+"_text").value=1;
				obj_alu_logic.switch_status("a"+i+"_"+i);
				
			}
			
			var j=4;
			for(var i=3;i>=0;i--){
				//alert("b"+i+"_"+j);
				document.getElementById("b"+i+"_"+j).src="/static/heLab/images/on.png";
				document.getElementById("b"+i+"_"+j+"_text").value=1;
				obj_alu_logic.switch_status("b"+i+"_"+j);
				j++;
				
			}
			
			
			j=8;			
			for(var i=3;i>=0;i--){
				//alert("b"+i+"_"+j);
				document.getElementById("s"+i+"_"+j).src="/static/heLab/images/on.png";
				document.getElementById("s"+i+"_"+j+"_text").value=1;
				obj_alu_logic.switch_status("s"+i+"_"+j);
				j++;
				
			}
			
			for(var i=3;i>=0;i--){
				//alert("b"+i+"_"+j);
				document.getElementById("glow"+i).src="/static/heLab/images/lightbulb_up.png";
				
			}
			document.getElementById("a_l").innerHTML="<input type='text' style='text-align:center;'  id = 'a_logic' size = '4' disabled='true'  />";
			document.getElementById("b_l").innerHTML="<input type='text' style='text-align:center;' id = 'b_logic' size = '4' disabled='true'  />";
			document.getElementById("y_l").innerHTML="<input type='text' style='text-align:center;' id = 'y_logic' size = '4' disabled='true'  />";
		});
	
	}
	
	}
});

		