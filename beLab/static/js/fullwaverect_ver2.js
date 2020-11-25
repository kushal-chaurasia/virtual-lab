/*  Document Name:halfwaverect.js
 Created on : 14 oct, 2018
 Author     : sukriti
 */

var flag;
var vp;
var  posy2;
var phsl;
var frqfng;
var axes = {};
var vmaxs;  //in volt
var tmaxs;// in msec  0.001; //in sec

//----------------------------------------Channel 2------------------------------------------------------------//


function posiy2chnge() {
    posy2 = document.getElementById("positiony2").value;
    
    if (flag == 2) {
       drawhlfrectifier();
    }

   
}

function posix2chnge() {
    phsl = document.getElementById("positionx").value;
    if (flag == 1) {
        drawsine();
    }
    if (flag == 2) {
       drawhlfrectifier();
    }

   
}

function ampfng() {
    vp = document.getElementById("amp-knob-fng").value;
    if (flag == 1) {
        drawsine();
    }
    if (flag == 2) {
        drawhlfrectifier();
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
       drawhlfrectifier();
    }
if(flag==3){
        bthdhlfrc();
    }
    if(flag==4){
       grndhlfrc();
    }
   
}

//----------------------------------------code for drawing rectify output--------------------------------------------------//
function drawhlfrectifier() {
    canvas = document.getElementById("mycanvas");
    if (null == canvas || !canvas.getContext)
        return;
    ctx = canvas.getContext("2d");
    // fill canvas
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    document.getElementById("chhn1").disabled = false;
        document.getElementById("chhn2").disabled = false;
        document.getElementById("dual").disabled = false;
        document.getElementById("grnd").disabled = false;
    drawGrid(ctx);
    drawAxis();
    rectfy();
    peakcurrent();
    
}

function rectfy() {

    vp = document.getElementById("amp-knob-fng").value;
    frqfng = document.getElementById("fq-knob-fng").value;
    phsl = document.getElementById("positionx").value;
    posy2 = document.getElementById("positiony2").value;
tmaxs= document.getElementById("fq-knob").value *10*Math.pow(10,-3);// in msec  0.001; //in sec
//---------------------------------------------------------rectified  wave-------------------------------------------------------------------------------//

    var x = new Array(), y = new Array();  // x,y plotting variables
    var dt, tstart, tstop;             // time variables
    flag = 2;
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
    ctx.strokeStyle = "#ff6600";
    var p = y0 - parseInt(posy2) * yscale;
    for (i = 0; i < axes.N; i++) {

        // translate actual x,y to plot xp,yp
        xp = x0 + x[i] * xscale;
        yp = (y0 - Math.abs(y[i]) * yscale + p - 175);

        // draw line to next point
        if (i == 0)
            ctx.moveTo(xp, yp);
        else
            ctx.lineTo(xp, yp);
   
    }
   
    ctx.stroke();

}

