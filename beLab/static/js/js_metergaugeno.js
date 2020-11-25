
//---------------------------------------------Metergauge1(Voltmeter)----------------------------------------------//
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
                max: 2,
                intervals: [0.5, 1, 1.5, 2],
                intervalColors: ['#66cc66', '#93b75f', '#E7E658', '#cc6666', '#579575']
            }
        }
    });
});

//---------------------------------------------Metergauge2(Ammeter)---------------------------------------------------//
$(document).ready(function () {
    s2 = [0];
    plot3 = $.jqplot('chart2', [s2], {
        grid: {
            background: "transparent"
        },
        seriesDefaults: {
            renderer: $.jqplot.MeterGaugeRenderer,
            rendererOptions: {
                min: -1,
                max: 1,
                intervals: [-0.25, 0, 0.25, 1],
                intervalColors: ['#66cc66', '#cc6666', '#cc6666', '#E7E658']
            }
        }
    });
});

var r, rs, id, id1, vd, vr, rd;
var c = 0.026, is = 0.000000000001;
var table;
var  columns,rest;
//-------------------------------------------------- Simulation----------------------------------------------------------------//

function check() {

    r = document.getElementById("res").value;
    rs = r * 1000;
    vr = document.getElementById("dc").value;

    id1 = parseInt(vr) / parseInt(r);
    document.getElementById("amp").value = id1.toPrecision(3);

    id = parseInt(vr) / parseInt(rs);
    var t = Math.log(id / is);

    vd = c * t;

    document.getElementById("volt").value = vd.toPrecision(3);

    rd = parseInt(vd) / parseInt(id);
//
//    if (vr == "") {
//        Alert.render("Enter the Input Voltage");
//        // document.getElementById("dltr").innerHTML="Enter the Input Voltage";
//        document.getElementById("add").style.display = "none";
//    }
//    else if (vr != 5) {
//        Alert.render("Set the  DC source to 5 V");
//        document.getElementById("add").style.display = "none";
//    }
//    else if (r == "") {
//        Alert.render("Enter the Resistance Value");
//        // document.getElementById("dltr").innerHTML="Enter the Resistance Value";
//        document.getElementById("add").style.display = "none";
//    }
//
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
                max: 2,
                intervals: [0.5, 1, 1.5, 2],
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
                min: -1,
                max: 1,
                intervals: [-0.25, 0, 0.25, 1],
                intervalColors: ['#66cc66', '#cc6666', '#cc6666', '#E7E658']
            }
        }
    });

   table = document.getElementById("mytable");

     columns = table.rows[tabrowindex].cells[3];
     rest = columns.innerHTML;

    if (r == rest) {
       // document.getElementById("add").style.display = "none";
        //Alert.render("Vary the resistance value");
        document.getElementById("demo").innerHTML="Vary the resistance value";
         document.getElementById("res").style.borderColor = "red";
    }

//    else {
//        document.getElementById("add").style.display = "block";
//
//    }
}
    