//---------------------------------------------Metergauge1----------------------------------------------//
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
                max: 30,
                intervals: [5, 10, 15, 20, 25],
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
                max: 20,
                intervals: [5, 10, 15, 20],
                intervalColors: ['#66cc66', '#cc6666', '#cc6666', '#E7E658']
            }
        }
    });
});
var r, r1, r2, v, z;
var table;
var columns, rest, clmns, vlt;

//-------------------------------------------------- Simulation----------------------------------------------------------------//
function check() {

    r1 = document.getElementById("rest1").value;  //Resistance 1 ////ohms
    r2 = document.getElementById("rest2").value; //Resistance 2 //ohms
//r2=20000000;
    v = document.getElementById("dc").value;  // input voltage //

    document.getElementById("volt").value = v; //Voltmeter reading //

    r = ((parseInt(r1) * parseInt(r2) * 1000) / (parseInt(r1) + (parseInt(r2) * 1000)));
//alert("rtol" +r);
    z = v / r;

    document.getElementById("amp").value = (z * 1000).toPrecision(3); //Ammeter reading //mAmp

//    else {
//        document.getElementById("add").style.display = "block";
//    }


    s1[0] = parseFloat(document.getElementById('dc').value);
    plot3 = $.jqplot('chart1', [s1], {
        grid: {
            background: "transparent"
        },
        seriesDefaults: {
            renderer: $.jqplot.MeterGaugeRenderer,
            rendererOptions: {
                min: 0,
                max: 30,
                intervals: [5, 10, 15, 20, 25],
                intervalColors: ['#66cc66', '#93b75f', '#E7E658', '#cc6666', '#579575']
            }
        }
    });

    s2[0] = parseFloat(document.getElementById('amp').value);
    plot3 = $.jqplot('chart2', [s2], {
        grid: {
            background: "transparent"
        },
        seriesDefaults: {
            renderer: $.jqplot.MeterGaugeRenderer,
            rendererOptions: {
                min: 0,
                max: 20,
                intervals: [5, 10, 15, 20],
                intervalColors: ['#66cc66', '#cc6666', '#cc6666', '#E7E658']
            }
        }
    });


    table = document.getElementById("mytable");

//    columns = table.rows[1].cells[3];
//    rests1 = columns.innerHTML;
//
//    columns2 = table.rows[1].cells[4];
//    rests2 = columns2.innerHTML;

    var clmns = table.rows[tabrowindex].cells[1];
    var vlt = clmns.innerHTML;

//    if (r1 == rests1) {
//        document.getElementById("add").style.display = "block";
//        // document.getElementById("rest1").style.display = "block";
//   // document.getElementById("rest1").disabled = true;
//    }
    if (document.getElementById("rs1").value != document.getElementById("res1").value) {
        //document.getElementById("add").style.display = "none";
        // Alert.render("Same resistance1 value required for linear graph");
        document.getElementById("demo").innerHTML = "Same resistance(R1) value required for linear graph";
        document.getElementById("res1").style.borderColor = "red";
    }

    else if (document.getElementById("rs2").value != document.getElementById("res2").value) {
        // document.getElementById("add").style.display = "none";
        //Alert.render("Same resistance2 value required for linear graph");
        document.getElementById("demo").innerHTML = "Same Resistance(R2) value required for linear graph";
        document.getElementById("res2").style.borderColor = "red";
    }

//    if (r2 == rests2) {
//        document.getElementById("add").style.display = "block";
//    }
//    else {
//        document.getElementById("add").style.display = "none";
//        Alert.render("Same resistance2 value required for linear graph");
//    }

    else if (vlt == document.getElementById("volt").value) {
        //document.getElementById("add").style.display = "none";
        //Alert.render("Change th DC voltage");
        document.getElementById("demo").innerHTML = "Change the DC Voltage";
        document.getElementById("volt").style.borderColor = "red";
        document.getElementById("dc").style.borderColor = "red";
    }

//    else {
//        document.getElementById("add").style.display = "block";
//    }


}