
var fq;
var rs, rc, re, rl;
var rb1, rb2;
var cc1, cc2;
var ce;
var w, f;

function srcresChange() {
    rs = document.getElementById("srcres").value;
    document.getElementById("srcrest").value = rs;
}
function cllcresChange() {
    rc = document.getElementById("cllcres").value;
    document.getElementById("cllcrest").value = rc;
}
function emtresChange() {
    re = document.getElementById("emtres").value;
    document.getElementById("emtrest").value = re;
}
function ldresChange() {
    rl = document.getElementById("ldres").value;
    document.getElementById("ldrest").value = rl;
}
function bsres1Change() {
    rb1 = document.getElementById("bsres1").value;
    document.getElementById("bsres1t").value = rb1;
}
function bsres2Change() {
    rb2 = document.getElementById("bsres2").value;
    document.getElementById("bsres2t").value = rb2;
}
function cplcp1Change() {
    cc1 = document.getElementById("cplcp1").value;
    document.getElementById("cplcp1t").value = cc1;
}
function cplcp2Change() {
    cc2 = document.getElementById("cplcp2").value;
    document.getElementById("cplcp2t").value = cc2;
}
function bypscpaChange() {
    ce = document.getElementById("bypscap").value;
    document.getElementById("bypscapt").value = ce;
}
function freqChange() {
    fq = document.getElementById("fq").value;
    w = Math.pow(10, fq); //logspace(1,10,20)ie first term is 1, last term is 10 ,number of terms is 20
    f = (parseFloat(w) / (2 * (Math.PI))).toPrecision(6); // f=w/2pi
    document.getElementById("fqr").value = Math.round(f);
}
var rb;
var vbb;
var vcc = 12, vbe = 0.7, vt = 0.026;
var icq;
var beta = 150;
var rpi, rb_rpi;
var rin, rc_rce;
var wl1, wl2, wl3, wz, wh;
var wl;
var rb_rs, rx1, re_prime;
var rbrs_prx, rt, rl_rc;
var rcercrl;
var gm;
var ct;
var am;
var rce = 5600, rx = 10; //60 * Math.pow(10, 3),
var cpi = 100 * Math.pow(10, -12);
var cmu = 5 * Math.pow(10, -12);
var tabrowindex = 0;
var arr = [];
var table;
var chart;
var dataPoints = [];
var clmns, frqncy;
//-------------------------------------------------------initial calculation------------------------------------------------------------//

function tabled() {
    //----ic is calculated----------//
    rb = ((parseInt(rb1) * parseInt(rb2)) / (parseInt(rb1) + parseInt(rb2))).toPrecision(6);
    vbb = (parseInt(vcc) * parseInt(rb2) / (parseInt(rb1) + parseInt(rb2))).toPrecision(6);
    icq = (parseInt(beta) * (parseFloat(vbb) - parseFloat(vbe)) / (parseFloat(rb) + (parseInt(beta) + 1) * parseInt(re))).toPrecision(6);
//-------Calculation of low frequency poles-----//
    rpi = ((parseInt(beta) * parseFloat(vt) / parseFloat(icq))).toPrecision(6);
    rb_rpi = (parseFloat(rpi) * parseFloat(rb) / (parseFloat(rpi) + parseFloat(rb))).toPrecision(6);
    rin = (parseInt(rs) + parseFloat(rb_rpi)).toPrecision(6);
    wl1 = (1 / (parseFloat(rin) * (parseFloat(cc1) * Math.pow(10, -6)))).toPrecision(6);
    rc_rce = (parseInt(rc) * parseInt(rce) / (parseInt(rc) + parseInt(rce))).toPrecision(6);
    wl2 = (1 / ((parseFloat(cc2) * Math.pow(10, -6)) * (parseInt(rl) + parseFloat(rc_rce)))).toPrecision(6);
    rb_rs = (parseFloat(rb) * parseInt(rs) / (parseFloat(rb) + parseFloat(rs))).toPrecision(6);
    rx1 = ((parseFloat(rpi) + parseFloat(rb_rs)) / (parseInt(beta) + 1)).toPrecision(6);
    re_prime = (parseInt(re) * parseFloat(rx1) / (parseInt(re) + parseFloat(rx1))).toPrecision(6);
    wl3 = (1 / (parseFloat(re_prime) * (parseFloat(ce) * Math.pow(10, -6)))).toPrecision(6);
    wz = (1 / (parseInt(re) * (parseFloat(ce) * Math.pow(10, -6)))).toPrecision(6); //the low frequency zero
    wl = Math.sqrt(Math.pow(parseFloat(wl1), 2) + Math.pow(parseFloat(wl2), 2) + Math.pow(parseFloat(wl3), 2));//low frequency cut-off
    //------------------calculation of higher frequency poles----//
    gm = (parseFloat(icq) / parseFloat(vt)).toPrecision(6);
    rbrs_prx = ((parseFloat(rb) * parseInt(rs) / (parseFloat(rb) + parseInt(rs))) + parseInt(rx)).toPrecision(6);
    rt = ((parseFloat(rpi) * parseFloat(rbrs_prx)) / (parseFloat(rpi) + parseFloat(rbrs_prx))).toPrecision(6);
    rl_rc = (parseInt(rl) * parseInt(rc) / (parseInt(rl) + parseInt(rc))).toPrecision(6);
    ct = (parseFloat(cpi) + parseFloat(cmu) * (1 + parseFloat(gm) * parseFloat(rl_rc))).toPrecision(6);
    wh = (1 / (parseFloat(ct) * parseFloat(rt))).toPrecision(6);//high frequency cut-off
    //-----------------Midband gain is calculated------------------//
    rcercrl = (parseFloat(rce) * parseFloat(rl_rc) / (parseFloat(rce) + parseFloat(rl_rc))).toPrecision(6);
    am = -(parseFloat(beta) * parseFloat(rcercrl) * (parseFloat(rb) / (parseFloat(rb) + parseFloat(rpi))) * (1 / (parseFloat(rin)))).toPrecision(6);// midband gain

    //-------------------------------------------------------final calculation--------------------------------------------------------------//
    var dt = [], fr = [];
    var x;

    var h1 = [], h2 = [];
    var h, mg;
    var mag;

    dt += w + "<br>";
    fr += f + "<br>";

//-----------------------------------------------------------------------------------------------//        

    var num = math.complex({re: (parseFloat(am) * parseFloat(wz) * Math.pow(parseFloat(w), 2)), im: (parseFloat(am) * Math.pow(parseFloat(w), 3))});
    // alert("num"+num.re);
    // alert("numim"+num.im);
    h1 += num + "<br>";

    var den = math.complex({re: ((Math.pow(w, 4) / parseFloat(wh)) - parseFloat(wl3) * Math.pow(w, 2) - parseFloat(wl2) * Math.pow(w, 2) - ((parseFloat(wl3) * parseFloat(wl2)) / parseFloat(wh)) * Math.pow(w, 2) - parseFloat(wl1) * Math.pow(w, 2) - ((parseFloat(wl3) * parseFloat(wl1)) / parseFloat(wh)) * Math.pow(w, 2) - ((parseFloat(wl1) * parseFloat(wl2)) / parseFloat(wh)) * Math.pow(w, 2) + (parseFloat(wl1) * parseFloat(wl2) * parseFloat(wl3))), im: (-Math.pow(w, 3) - (parseFloat(wl3) / parseFloat(wh)) * Math.pow(w, 3) - (parseFloat(wl2) / parseFloat(wh)) * Math.pow(w, 3) + parseFloat(wl2) * parseFloat(wl3) * parseFloat(w) - (parseFloat(wl1) / parseFloat(wh)) * Math.pow(w, 3) + parseFloat(wl3) * parseFloat(wl1) * parseFloat(w) + parseFloat(wl1) * parseFloat(w) + ((parseFloat(wl1) * parseFloat(wl2) * parseFloat(wl3)) / parseFloat(wh)) * parseFloat(w))});
    h2 += den + "<br>";
//--------------------------------------------------------------complex division-----------------------------------------------//
    var real = ((num.re * den.re + num.im * den.im) / (Math.pow(den.re, 2) + Math.pow(den.im, 2))).toPrecision(5);
    var imaginary = ((num.im * den.re - num.re * den.im) / (Math.pow(den.re, 2) + Math.pow(den.im, 2))).toPrecision(5);
    var frw = math.complex({re: parseFloat(real), im: parseFloat(imaginary)});
    h += frw + "<br>";
    var absolute = Math.sqrt(Math.pow((parseFloat(real)), 2) + Math.pow((parseFloat(imaginary)), 2));//gain
    mag = 20 * Math.log10(parseFloat(absolute)).toPrecision(6);//gain in db
    mg += mag + "<br>";
    //  alert(parseFloat(mag));
    table = document.getElementById("mytable");
    arr[0] = tabrowindex + 1;
    arr[1] = Math.round(f);
    arr[2] = mag;
    // dataPoints.push({x: parseFloat(f), y: parseFloat(mag)});
    if (document.getElementById("srcrest").value == "") {
        alert("Enter the  Source Resistance");
        document.getElementById("srcrest").style.borderColor = "red";
    }

    else if (document.getElementById("cllcrest").value === "") {
        alert("Enter the  Collector Resistance");
        document.getElementById("cllcrest").style.borderColor = "red";
    }
    else if (document.getElementById("emtrest").value == "") {
        alert("Enter the t Emitter Resistance");
        document.getElementById("emtrest").style.borderColor = "red";
    }
    else if (document.getElementById("ldrest").value == "") {
        alert("Enter the Load Resistance");
        document.getElementById("ldrest").style.borderColor = "red";
    }
    else if (document.getElementById("bsres1t").value == "") {
        alert("Enter the Base Resistance1");
        document.getElementById("bsres1t").style.borderColor = "red";
    }
    else if (document.getElementById("bsres2t").value == "") {
        alert("Enter the Base Resistance2");
        document.getElementById("bsres2t").style.borderColor = "red";
    }
    else if (document.getElementById("cplcp1t").value == "") {
        alert("Enter the Coupling Capacitor1");
        document.getElementById("cplcp1t").style.borderColor = "red";
    }
    else if (document.getElementById("cplcp2t").value == "") {
        alert("Enter the Coupling Capacitor2");
        document.getElementById("cplcp2t").style.borderColor = "red";
    }
    else if (document.getElementById("bypscapt").value == "") {
        alert("Enter the Bypass Capacitor");
        document.getElementById("bypscapt").style.borderColor = "red";
    }
    else if (document.getElementById("fqr").value == "") {
        alert("Enter the Input Frequency");
        document.getElementById("fqr").style.borderColor = "red";
//        document.getElementById("demo").innerHTML = "Enter the Input Voltage";
    }

    else if (Math.round(frqncy) == Math.round(f)) {
//document.getElementById("demo").innerHTML = "Change the Frequency";
        alert("Change the Frequency");
        document.getElementById("fqr").style.borderColor = "red";
    }
    else if (table.rows.length <= 25) {
        document.getElementById("fqr").style.borderColor = "green";
        var row = table.insertRow(++tabrowindex); // Row increment
        for (var q = 0; q < 3; q++) {
            var cell = row.insertCell(q);
            cell.innerHTML = arr[q];
        }

    }
    clmns = table.rows[tabrowindex].cells;
    frqncy = clmns[1].innerHTML;


}


//--------------------------------------------------------- scroll to bottom--------------------------------------------------//
$(document).ready(function () {
    $("#plt").click(function () {
        $('html,body').animate({
            scrollTop: $("#grpwrap").offset().top},
        'slow');
    });

});
//-----------------------------------------------------------------canvas.js ---------------------------------------------------------------//
function plot() {

    for (var tabrowindex = 1; tabrowindex < table.rows.length; tabrowindex++) {
        var rwe1 = table.rows[tabrowindex].cells;
        dataPoints.push({x: parseFloat(rwe1[1].innerHTML), y: parseFloat(rwe1[2].innerHTML)});
    }


    chart = new CanvasJS.Chart("chartContainer", {
        theme: "theme1", //theme1
        // backgroundColor: "#bdf5bd",
        title: {
            text: "Frequency Response "
        },
        // animationEnabled: true,
        // change to true
        legend: {
            verticalAlign: "bottom",
            horizontalAlign: "center",
        },
        axisX: {
            logarithmic: true,
            gridColor: "lightblue",
            gridThickness: 2,
            title: "Frequency(Hz)",
            includeZero: false,
            labelFormatter: addSymbols,
        },
        axisY: {
            title: "Magnitude(dB)",
        },
        data: [
            {
                type: "line",
                dataPoints: dataPoints
            }
        ]
    });
    chart.render();
    document.getElementById("lowfq").value = wl;
    document.getElementById("highfq").value = wh;
    document.getElementById("midbnd").value = parseFloat(am);
}

function addSymbols(e) {
    var suffixes = ["", "K", "M", "B"];
    var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
    if (order > suffixes.length - 1)
        order = suffixes.length - 1;
    var suffix = suffixes[order];
    return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
}
//---------------------------------------------- clearing----------------------------------------------------------//
function cleard() {
//-------------------------table clearing-------------------------------//
    var rowCount = mytable.rows.length;
    for (var j = rowCount - 1; j > 0; j--) {
        mytable.deleteRow(j);
    }
    tabrowindex = 0;
    dataPoints = [];
//--------------------------text box clearing---------------------------//
    document.getElementById("fqr").value = "";
    document.getElementById("bypscapt").value = "";
    document.getElementById("cplcp2t").value = "";
    document.getElementById("cplcp1t").value = "";
    document.getElementById("bsres2t").value = "";
    document.getElementById("bsres1t").value = "";
    document.getElementById("ldrest").value = "";
    document.getElementById("emtrest").value = "";
    document.getElementById("cllcrest").value = "";
    document.getElementById("srcrest").value = "";
    document.getElementById("lowfq").value = "";
    document.getElementById("highfq").value = "";
    document.getElementById("midbnd").value = "";
    document.getElementById("chartContainer").innerHTML = "";
}