/*  Document Name:hlfwvoscilloscope_sinewv.js
 Created on : 14 oct, 2018
 Author     : sukriti
 */

var flag;
var vp;
var posy1;
var phsl;
var frqfng;
var axes = {};
var vmaxs;  //in volt
var tmaxs;

//----------------------------------------Channel 1------------------------------------------------------------//

function posiy1chnge() {
    posy1 = document.getElementById("positiony1").value;
    if (flag == 1) {
        drawsine();
    }
    
}

function posix2chnge() {
    phsl = document.getElementById("positionx").value;
    if (flag == 1) {
        drawsine();
    }
    if (flag == 2) {
          drawhlfrectifier();;
    }
 
}

function ampfng() {
    vp = document.getElementById("amp-knob-fng").value;
    if (flag == 1) {
        drawsine();
    }
    if (flag == 2) {
          drawhlfrectifier();;
    }
if(flag==3){
        bthdhlfrc();
    }
    if(flag==4){
       grndhlfrc();
    }
    
}

function freqfng() {
    frqfng = document.getElementById("fq-knob-fng").value;
    if (flag == 1) {
        drawsine();
    }
    if (flag == 2) {
          drawhlfrectifier();;
    }

   if(flag==3){
        bthdhlfrc();
    }
    if(flag==4){
       grndhlfrc();
    }
}

//----------------------------------------code for drawing sine wave--------------------------------------------------//
function drawsine() {
    canvas = document.getElementById("mycanvas");
    if (null == canvas || !canvas.getContext)
        return;
    ctx = canvas.getContext("2d");
    // fill canvas
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
     document.getElementById("rectifiedop").disabled = false;
    drawGrid(ctx);
    drawAxis();
    sinwv();
}

function sinwv() {

    vp = document.getElementById("amp-knob-fng").value;
    frqfng = document.getElementById("fq-knob-fng").value;
    phsl = document.getElementById("positionx").value;
    posy1 = document.getElementById("positiony1").value;
   tmaxs= document.getElementById("fq-knob").value *10*Math.pow(10,-3);// in msec  0.001; //in sec
//---------------------------------------------------------Sine wave-------------------------------------------------------------------------------//

    var x = new Array(), y = new Array();  // x,y plotting variables
    var dt, tstart, tstop;             // time variables
    flag = 1;
    // define plot paramaters
    tstart = 0; //in sec
    tstop = tmaxs;
    dt = (tstop - tstart) / (101 - 1);// time increment over N points

    // create function 
    for (var i = 0; i < axes.N; i++) {
        x[i] = tstart + i * dt;
        y[i] = vp * Math.sin(2 * 3.1415 * frqfng * x[i] + phsl * 3.1415 / 180);
    }

    var i, x0, y0, xscale, yscale, xp, yp;

    x0 = axes.x0;//260.5
    y0 = axes.y0;//175.5
    xscale = axes.xscale;//260000
    yscale = axes.yscale;//87.5

    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = "#0059b3";
    var p = y0 - parseInt(posy1) * yscale;
    for (i = 0; i < axes.N; i++) {

        // translate actual x,y to plot xp,yp
        xp = x0 + x[i] * xscale;
        yp = y0 - y[i] * yscale + p - 175;

        // draw line to next point
        if (i == 0)
            ctx.moveTo(xp, yp);
        else
            ctx.lineTo(xp, yp);
    }

    ctx.stroke();

}

