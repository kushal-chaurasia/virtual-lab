/*  Document Name: hlfwvoscilloscope_knob.js
Created on : 14 oct, 2018
 Author     : sukriti
 */

var vmaxs;  //in volt
var tmaxs; // in msec  0.001; //in sec
$(document).ready(function () {

//------------------------------knob of frequency(tmax)time/div(ms/div)----------------------//
    $("#fq-knob").knob({
        readOnly: false,
        fgColor: '#6495ed', //'#999999',
        bgColor: '#bbd0f7', //'#dcdcdc',
        width: 100,
        height: 80,
        //cursor: pointer,
        min: 0.1,
        max: 10,
        step: 0.1,
        angleOffset: -125,
        angleArc: 250,
        'change': function (v) {
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
    });
    //-----------------------knob of amplitude1(vmax/div)-------------------------------//
    $("#amp-knob1").knob({
        readOnly: false,
        fgColor: '#6495ed', //'#999999',
        bgColor: '#bbd0f7', //'#dcdcdc',
        width: 100,
        height: 80,
        // cursor: pointer,
        min: 0.05,
        max: 10,
        step: 0.1,
        angleOffset: -125,
        angleArc: 250,
        'change': function (v) {
            if (flag == 1) {
                drawsine();
            }
            if(flag==3){
        bthdhlfrc();
    }
    if(flag==4){
       grndhlfrc();
    }
        }
    });
    //-----------------------knob of amplitude2(vmax/div)-------------------------------//
    $("#amp-knob2").knob({
        readOnly: false,
        fgColor: '#6495ed', //'#999999',
        bgColor: '#bbd0f7', //'#dcdcdc',
        width: 100,
        height: 80,
        // cursor: pointer,
        min: 0.05,
        max: 10,
        step: 0.1,
        angleOffset: -125,
        angleArc: 250,
        'change': function (v) {
           
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

    });
//------------------------------knob of frequency(hz)----------------------//
    $("#fq-knob-fng").knob({
        readOnly: false,
        fgColor: '#6495ed', //'#999999',
        bgColor: '#bbd0f7', //'#dcdcdc',
        width: 100,
        height: 80,
        //cursor: pointer,
        min: 500,
        max: 5000,
        step: 500,
        angleOffset: -125,
        angleArc: 250,
        'change': function (v) {
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

    });
    //-----------------------knob of amplitude1(volt)-------------------------------//
    $("#amp-knob-fng").knob({
        readOnly: false,
        fgColor: '#6495ed', //'#999999',
        bgColor: '#bbd0f7', //'#dcdcdc',
        width: 100,
        height: 80,
        // cursor: pointer,
        min: -2,
        max: 2,
        step: 0.1,
        angleOffset: -125,
        angleArc: 250,
        'change': function (v) {
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

    });
});

