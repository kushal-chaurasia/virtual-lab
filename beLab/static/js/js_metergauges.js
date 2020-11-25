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
                max: 5,
                intervals: [1, 2, 3, 4],
                intervalColors: ['#66cc66', '#cc6666', '#cc6666', '#E7E658']
            }
        }
    });
});
var r, r1, r2, v, z;
var table;
var columns, rests1, clmns, vlt,columns2 ,rests2;

//-------------------------------------------------- Simulation----------------------------------------------------------------//
function check() {

    r1 = document.getElementById("res1").value;  //Resistance 1 //kohm

    r2 = document.getElementById("res2").value; //Resistance 2 //kohm

    v = document.getElementById("dc").value;  // input voltage //volt

    document.getElementById("volt").value = v; //Voltmeter reading //
    r = parseInt(r1) + parseInt(r2);//kohm
//alert("rtol" +r);
    z = v / r;//mAmp

    document.getElementById("amp").value = z.toPrecision(3); //Ammeter reading //

//
//    if (v == "") {
//        Alert.render("Enter the Input Voltage");
//        //document.getElementById("add").style.display = "none";
//    }
//    else if (r1 == "") {
//        Alert.render("Enter the Resistance Value 1");
//        //document.getElementById("add").style.display = "none";
//    }
//    else if (r2 == "") {
//        Alert.render("Enter the Resistance Value 2");
//        // document.getElementById("add").style.display = "none";
//    }
//    else {
//        //document.getElementById("add").style.display = "block";
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
                max: 5,
                intervals: [1, 2, 3, 4],
                intervalColors: ['#66cc66', '#cc6666', '#cc6666', '#E7E658']
            }
        }
    });



    table = document.getElementById("mytable");

//    columns = table.rows[1].cells[3];   // cell 3 contains the value of resistance 1//
//    rests1 = columns.innerHTML;
//
//    columns2 = table.rows[1].cells[4];  // cell 4 contains the value of resistance 2//
//    rests2 = columns2.innerHTML;

    var clmns = table.rows[tabrowindex].cells[1];  // cell 1 contains the value of voltmeter//
    var vlt = clmns.innerHTML;

    if(document.getElementById("rs1").value!=document.getElementById("res1").value) {
       // document.getElementById("add").style.display = "none";
       // Alert.render("Same resistance1 value required for linear graph");
        document.getElementById("demo").innerHTML = "Same Resistance(R1) value required for linear graph";
        document.getElementById("res1").style.borderColor = "red";
    }
   
    else if(document.getElementById("rs2").value!=document.getElementById("res2").value){
       // document.getElementById("add").style.display = "none";
        //Alert.render("Same resistance2 value required for linear graph");
         document.getElementById("demo").innerHTML = "Same Resistance(R2) value required for linear graph";
        document.getElementById("res2").style.borderColor = "red";
    }
    else if (vlt == document.getElementById("volt").value) {
       // document.getElementById("add").style.display = "none";
        //Alert.render("change th DC voltage");
         document.getElementById("demo").innerHTML = "Change the DC Voltage";
        document.getElementById("volt").style.borderColor = "red";
        document.getElementById("dc").style.borderColor = "red";
    }
//    else {
//        document.getElementById("add").style.display = "block";
//    }
}