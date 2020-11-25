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
                max: 30,
                intervals: [5, 10, 15, 20, 25],
                intervalColors: ['#66cc66', '#cc6666', '#cc6666', '#E7E658']
            }
        }
    });
});
var r, v, z;
var table;
var columns, rest, clmns, vlt;

//-------------------------------------------------- Simulation----------------------------------------------------------------//
function check() {

    r = document.getElementById("res").value; // in kOhm

    v = document.getElementById("dc").value;
    document.getElementById("volt").value = v; //in volt

    z = v / r; 
   // alert(z);
    document.getElementById("amp").value = z.toPrecision(3);
//    if (v == "") {
//        Alert.render("Enter the Input Voltage");
//        // document.getElementById("add").style.display = "none";
//    }
//    else if (r == "") {
//        Alert.render("Enter the Resistance Value");
//// document.getElementById("add").style.display = "none";
//    }
////    else {
////        document.getElementById("add").style.display = "block";
////    }



    s1[0] = parseFloat(document.getElementById('volt').value);
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
                max: 30,
                intervals: [5, 10, 15, 20, 25],
                intervalColors: ['#66cc66', '#cc6666', '#cc6666', '#E7E658']
            }
        }
    });

    table = document.getElementById("mytable");

//    columns = table.rows[1].cells[3];
//    rest = columns.innerHTML;

    clmns = table.rows[tabrowindex].cells[1];
    vlt = clmns.innerHTML;

    if (document.getElementById("res").value!= document.getElementById("rs").value) {
      //  document.getElementById("add").style.display = "none";
       // Alert.render("Same resistance value required for linear graph");
       document.getElementById("demo").innerHTML="Keep the Resistance Value Constant";
    }
    else if (vlt == document.getElementById("volt").value) {
        // document.getElementById("add").style.display = "none";
        //Alert.render("Change the DC voltage");
         document.getElementById("demo").innerHTML="Change the DC Voltage";
    }
//    else {
//        document.getElementById("add").style.display = "block";
//
//    }
}