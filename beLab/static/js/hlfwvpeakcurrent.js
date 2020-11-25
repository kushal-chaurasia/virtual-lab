/*  Document Name:hlfwvpeakcurrent.js
 Created on : 16 oct, 2018
 Author     : sukriti
 */
var res;

function reschange(){
   res=document.getElementById("resistor").value;
    document.getElementById("restr").value=res;
}
 function peakcurrent(){
    var  vp = document.getElementById("amp-knob-fng").value;
     var vs, vdo=0.7;
     vs=vp*Math.sin(3.1415/2);
     var ipk=((vs-vdo)/res)* Math.pow(10, 3);//mA
      document.getElementById("pkcrt").value=ipk;
     //alert("Peakcurrent:" +ipk+ "mA");
 }
 //--------------------------------------------------------- scroll to bottom--------------------------------------------------//
$(document).ready(function () {
    $("#rectifiedop").click(function () {
        $('html,body').animate({
            scrollTop: $("#calcln").offset().top},
        'slow');
    });
});