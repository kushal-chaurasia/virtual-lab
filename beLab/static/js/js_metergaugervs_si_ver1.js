
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
                min: 0,
                max: 16,
                intervals: [4, 8, 12, 16],
                intervalColors: ['#66cc66', '#cc6666', '#cc6666', '#E7E658']
            }
        }
    });
});

var r, rs, id, id1, id2, vd, vr, vd, vr, rd;
var vt = 0.026, isc = 0.000000000001, n = 1.2, vdo = 0.7;
var table, clmns, vlt;
var diodetype;
var diodereversevalue;
//-------------------------------------------------- Simulation----------------------------------------------------------------//
function setdiode(){ 
 diodetype = document.getElementById("diode_type");
 diodereversevalue = diodetype.options[diodetype.selectedIndex].value;
 document.getElementById("diodevalue").value=diodereversevalue;
 }
function check() {

    r = document.getElementById("res").value;//in ohm

    rs = (r/1000);//in ohms
    vr = document.getElementById("dc").value;//volt
	rd=0.3;
	
	var  ir1 = (parseFloat(vr) / ((parseInt(rs))+parseFloat(rd)));//in uamp diode current

   // vd = parseFloat(vr);
    id =parseFloat(isc) *Math.pow(10, 11);
	var ir1_is = Math.log(ir1 / isc);
	vd =vr*n*vt * ir1_is;

    document.getElementById("amp").value = id.toPrecision(3);//in uamp
    document.getElementById("volt").value = vd.toPrecision(3);
    if (vr >= parseFloat(diodereversevalue)) {
        id = (parseFloat(vr) / ((parseFloat(rs))+parseFloat(rd)));//in uamp diode current
        document.getElementById("amp").value = id;//in uamp
    }
   // rd = parseInt(vd) / parseInt(id);

//    if (vr == "") {
//        Alert.render("Enter the Input Voltage");
//        // document.getElementById("dltr").innerHTML="Enter the Input Voltage";
//        document.getElementById("add").style.display = "none";
//    }
//    
//    else if (r == "") {
//        Alert.render("Enter the Resistance Value");
//        // document.getElementById("dltr").innerHTML="Enter the Resistance Value";
//        document.getElementById("add").style.display = "none";
//    }
//    else if (r !=1) {
//        Alert.render("Set the Resistance Value to 1 Kohm");
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
                min: 0,
                max: 16,
                intervals: [4, 8, 12, 16],
                intervalColors: ['#66cc66', '#cc6666', '#cc6666', '#E7E658']
            }
        }
    });

    table = document.getElementById("mytable");

//    columns = table.rows[tabrowindex].cells[1];
//    rest = columns.innerHTML;

    clmns = table.rows[tabrowindex].cells[1];
    vlt = clmns.innerHTML;

    if (vlt == document.getElementById("volt").value) {
        //document.getElementById("add").style.display = "none";
        //Alert.render("Vary  DC voltage");
        document.getElementById("demo").innerHTML = "Vary  DC voltage";
        document.getElementById("volt").style.borderColor = "red";
        document.getElementById("dc").style.borderColor = "red";
    }

//    if (r == rest) {
//        document.getElementById("add").style.display = "none";
//        Alert.render("Vary the resistance value");
//        //document.getElementById("dltr").innerHTML="Same resistance value required for linear graph";
//    }

//    else {
//        document.getElementById("add").style.display = "block";
//
//    }
}
    