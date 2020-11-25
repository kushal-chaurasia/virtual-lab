var sliderVal;
function sliderChange() {
    sliderVal = document.getElementById("vdc").value;
    document.getElementById("dc").value = sliderVal;
    check();
}
var txtVal;
function textChange() {
    txtVal = document.getElementById("res1").value;
    document.getElementById("res").value = txtVal;
    check();
}
var ldval;
function tetChange() {
    ldval = document.getElementById("res2").value;
    document.getElementById("resl").value = ldval;
    check();
}
var znv;
function znrchange() {
    znv = document.getElementById("znrvlt").value;
    document.getElementById("zenrv").value = znv;
    check();
}
var tc;
function txtchng() {
    tc = document.getElementById("dc").value;
    document.getElementById("vdc").value = tc;
}
var rc;
function txtchnge() {
    rc = document.getElementById("res").value;
    document.getElementById("res1").value = rc;
}
var lc;
function loadchange() {
    lc = document.getElementById("resl").value;
    document.getElementById("res2").value = lc;
}
var zv;
function znrvchange() {
    zv = document.getElementById("zenrv").value;
    document.getElementById("znrvlt").value = zv;
}

var tabrowindex = 0;
var arr = [];
var table;
var clmns, vlt;
var vr, vot, vin;
var chart;
var dataPoints = [];


//------------------------------------------------- Table Creation -----------------------------------------------//
function tabled() {
    vot = document.getElementById("volt").value;
    vin = document.getElementById("dc").value;
    vr = parseInt(vot) / parseInt(vin);
    vre = parseFloat(vr) * 100;
    table = document.getElementById("mytable");
    arr[0] = tabrowindex + 1;
    arr[1] = document.getElementById("dc").value;
    arr[2] = document.getElementById("ampl").value;
    arr[3] = document.getElementById("ampz").value;
    arr[4] = document.getElementById("volt").value;
    arr[5] = vre.toPrecision(3);

    if (document.getElementById("dc").value == "") {
        //Alert.render("Enter the Input Voltage");
        document.getElementById("dc").style.borderColor = "red";
        document.getElementById("demo").innerHTML = "Enter the Input Voltage";
    }

    else if (document.getElementById("zenrv").value == "") {
        // Alert.render("Enter the Zener Voltage");
        // document.getElementById("add").style.display = "none";
        document.getElementById("zenrv").style.borderColor = "red";
        document.getElementById("demo").innerHTML = "Enter the Zener Voltage";
    }
    else if (document.getElementById("res").value == "") {
        //Alert.render("Enter the Series Resistance Value");
        //document.getElementById("add").style.display = "none";
        document.getElementById("res").style.borderColor = "red";
        document.getElementById("demo").innerHTML = "Enter the Series Resistance Value";
    }
//    else if (document.getElementById("res").value != 5000) {
//        //Alert.render("Set Series Resistance Value to 5 Kohm");
//        //document.getElementById("add").style.display = "none";
//        document.getElementById("res").style.borderColor = "red";
//        document.getElementById("demo").innerHTML = "Set Series Resistance Value to 5 Kohm";
//    }
    else if (document.getElementById("resl").value == "") {
        //Alert.render("Enter the Load Resistance Value");
        //document.getElementById("add").style.display = "none";
        document.getElementById("res1").style.borderColor = "red";
        document.getElementById("demo").innerHTML = "Enter the Load Resistance Value";
    }
//    else if (document.getElementById("resl").value != 10000) {
//        // Alert.render("Set Load Resistance Value to 10KOhm");
//        //document.getElementById("add").style.display = "none";
//        document.getElementById("res1").style.borderColor = "red";
//        document.getElementById("demo").innerHTML = "Set Load Resistance Value to 10KOhm";
//    }
    else if (vlt == document.getElementById("dc").value) {
        //document.getElementById("add").style.display = "none";
        //Alert.render("Change the DC voltage");
        document.getElementById("demo").innerHTML = "Change the DC Voltage";
        document.getElementById("volt").style.borderColor = "red";
        document.getElementById("dc").style.borderColor = "red";

    }
    else if (table.rows.length <= 15) {
        document.getElementById("dc").style.borderColor = "";
        document.getElementById("res").style.borderColor = "";
        document.getElementById("volt").style.borderColor = "";
        document.getElementById("res1").style.borderColor = "";
        document.getElementById("zenrv").style.borderColor = "";
        document.getElementById("demo").innerHTML = "";

        document.getElementById("znv").value = document.getElementById("zenrv").value;
        document.getElementById("rs").value = (document.getElementById("res").value) / 1000;
        document.getElementById("rl").value = (document.getElementById("resl").value) / 1000;

        var row = table.insertRow(++tabrowindex); // Row increment
        for (var q = 0; q < 6; q++) {

            var cell = row.insertCell(q);
            cell.innerHTML = arr[q];
            // document.getElementById("add").style.display = "none";
        }

    }
//   var columns = table.rows[1].cells[3];
//var rest = columns.innerHTML;
// var r= document.getElementById("res").value;

    clmns = table.rows[tabrowindex].cells[1];
    vlt = clmns.innerHTML;

    if (document.getElementById("znv").value != document.getElementById("zenrv").value) {
        // document.getElementById("add").style.display = "none";
        //Alert.render("Make the Zener Voltage Constant");
        document.getElementById("zenrv").style.borderColor = "red";
        document.getElementById("demo").innerHTML = "Make the Zener Voltage Constant";
    }
    else if (document.getElementById("rs").value != (document.getElementById("res").value) / 1000) {
        //document.getElementById("add").style.display = "none";
        //Alert.render("Make the Series Resistance Constant");
        document.getElementById("demo").innerHTML = "Make the Series Resistance Constant";
        document.getElementById("res").style.borderColor = "red";
    }
    else if (document.getElementById("rl").value != (document.getElementById("resl").value) / 1000) {
        //document.getElementById("add").style.display = "none";
        //Alert.render("Make the Load Resistance Constant");
        document.getElementById("demo").innerHTML = "Make the Load Resistance Constant";
        document.getElementById("res1").style.borderColor = "red";
    }


//    var showAlert;
//    if (arr[0] == 6) {
//
//        document.getElementById("plt").style.display = "block";
//        document.getElementById("add").style.display = "none";
//        document.getElementById("siml").style.display = "none";
//    }
//    else {
//        document.getElementById("plt").style.display = "none";
////        if (showAlert == true)
////        {
////            alert("Take 6 readings");
////            showAlert = false;
////        }
//
//    }
}
//----------------------------------------------print-----------------------------------//
function printf() {
    document.getElementById("demo").innerHTML = "";
    document.getElementById("demos").innerHTML = "";
    document.getElementById("dc").style.borderColor = "";
    document.getElementById("res").style.borderColor = "";
    document.getElementById("volt").style.borderColor = "";
    document.getElementById("res1").style.borderColor = "";
    document.getElementById("zenrv").style.borderColor = "";
    window.print();
}
//--------------------------------------------------------- scroll to bottom--------------------------------------------------//
$(document).ready(function () {
    $("#plt").click(function () {
        $('html,body').animate({
            scrollTop: $("#grpwrap").offset().top},
        'slow');
    });
});
// -------------------------------------canvas.js ------------------------//
function plot() {

for (var tabrowindex = 1; tabrowindex < table.rows.length; tabrowindex++) {
        var rwe1 = table.rows[tabrowindex].cells;
        
        dataPoints.push({x: parseFloat(rwe1[1].innerHTML), y: parseFloat(rwe1[4].innerHTML)});
    }

    chart = new CanvasJS.Chart("chartContainer", {
        theme: "theme1", //theme1
        // backgroundColor: "#bdf5bd",
        title: {
            text: "Vs-Vo Plot "
        },
        // animationEnabled: true,
        // change to true
        legend: {
            verticalAlign: "bottom",
            horizontalAlign: "center",
        },
        axisX: {
            title: "Source Voltage(Vs)",
        },
        axisY: {
            title: " Output Voltage (Vo)",
        },
        data: [
            {
                type: "line",
                dataPoints: dataPoints
            }
        ]
    });

    chart.render();
    
    document.getElementById("demos").innerHTML = "Print It <br><br>Take another sets of Output Volatge<br>  for another Zener value";

}

//---------------------------------------clear data----------------------------------------------------------------------------//
function clearf() {
//    document.getElementById("siml").style.display = "block";
//    document.getElementById("plt").style.display = "none";
//    document.getElementById("clr").style.display = "none";

    document.getElementById("dc").value = "";
    document.getElementById("volt").value = "";
    document.getElementById("amps").value = "";
    document.getElementById("ampl").value = "";
    document.getElementById("ampz").value = "";
    document.getElementById("res").value = "";
    document.getElementById("resl").value = "";
    document.getElementById("zenrv").value = "";
    document.getElementById("vdc").value = "";
    document.getElementById("res1").value = "";
    document.getElementById("res2").value = "";
    document.getElementById("znrvlt").value = "";
    document.getElementById("znv").value = "";
    document.getElementById("rs").value = "";
    document.getElementById("rl").value = "";
    document.getElementById("dc").style.borderColor = "";
    document.getElementById("res").style.borderColor = "";
    document.getElementById("volt").style.borderColor = "";
    document.getElementById("res1").style.borderColor = "";
    document.getElementById("zenrv").style.borderColor = "";
    document.getElementById("chartContainer").innerHTML = "";
    document.getElementById("demo").innerHTML = "";
    document.getElementById("demos").innerHTML = "";

    var rowCount = mytable.rows.length;
    for (var j = rowCount - 1; j > 0; j--) {
        mytable.deleteRow(j);

    }
    tabrowindex = 0;
dataPoints=[];
    //window.location.reload();

    $(document).ready(function () {
        s1 = [0];
        plot3 = $.jqplot('chart1', [s1], {
            grid: {
                background: "transparent"
            },
            seriesDefaults: {
                renderer: $.jqplot.MeterGaugeRenderer,
                rendererOptions: {
                    min: 0,
                    max: 20,
                    intervals: [5, 10, 15, 20],
                    intervalColors: ['#66cc66', '#93b75f', '#E7E658', '#cc6666', '#579575']
                }
            }
        });
    });

//---------------------------------------------Metergauge2---------------------------------------------------//
    $(document).ready(function () {
        s2 = [0];
        plot3 = $.jqplot('chart2', [s2], {
            grid: {
                background: "transparent"
            },
            seriesDefaults: {
                renderer: $.jqplot.MeterGaugeRenderer,
                rendererOptions: {
                    min: 0,
                    max: 40,
                    intervals: [10, 20, 30, 40],
                    intervalColors: ['#66cc66', '#cc6666', '#cc6666', '#E7E658']
                }
            }
        });
    });

    $(document).ready(function () {
        s3 = [0];
        plot3 = $.jqplot('chart3', [s3], {
            grid: {
                background: "transparent"
            },
            seriesDefaults: {
                renderer: $.jqplot.MeterGaugeRenderer,
                rendererOptions: {
                    min: 0,
                    max: 40,
                    intervals: [10, 20, 30, 40],
                    intervalColors: ['#66cc66', '#cc6666', '#cc6666', '#E7E658']
                }
            }
        });
    });
//---------------------------------------------Metergauge4(zener current)---------------------------------------------------//
    $(document).ready(function () {
        s4 = [0];
        plot3 = $.jqplot('chart4', [s4], {
            grid: {
                background: "transparent"
            },
            seriesDefaults: {
                renderer: $.jqplot.MeterGaugeRenderer,
                rendererOptions: {
                    min: 0,
                    max: 40,
                    intervals: [10, 20, 30, 40],
                    intervalColors: ['#66cc66', '#cc6666', '#cc6666', '#E7E658']
                }
            }
        });
    });
}

