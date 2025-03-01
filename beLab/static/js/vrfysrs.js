var sliderVal;
function sliderChange() {
    sliderVal = document.getElementById("vdc").value;
    document.getElementById("dc").value = sliderVal;
    check();
}
var txtVal1, txtval2;
function txtChange() {
    txtVal1 = document.getElementById("rest1").value;
    document.getElementById("res1").value = txtVal1;
    check();
}
function txtChnge() {
    txtval2 = document.getElementById("rest2").value;
    document.getElementById("res2").value = txtval2;
    check();
}

var tc;
function txtchng() {
    tc = document.getElementById("dc").value;
    document.getElementById("vdc").value = tc;
}
var rc, rec;
function rschnge() {
    rc = document.getElementById("res1").value;
    document.getElementById("rest1").value = rc;
}
function reschnge() {
    rec = document.getElementById("res2").value;
    document.getElementById("rest2").value = rec;
}
var tabrowindex = 0;
var arr = [];
var table;
var clmns, vlt, rests1, columns, columns2, rests2;
var chart;
var dataPoints = [];

//------------------------------------------------- Table Creation -----------------------------------------------//
function tabled() {


    arr[0] = tabrowindex + 1;
    arr[1] = document.getElementById("volt").value;
    arr[2] = document.getElementById("amp").value;
//    arr[3] = document.getElementById("res1").value;
//    arr[4] = document.getElementById("res2").value;
    table = document.getElementById("mytable");
    if (document.getElementById("dc").value == "") {
        // Alert.render("Enter the Input Voltage");
        document.getElementById("dc").style.borderColor = "red";
        document.getElementById("demo").innerHTML = "Enter the Input Voltage";
    }
    else if (document.getElementById("res1").value == "") {
        //Alert.render("Enter the Resistance Value 1");
        // document.getElementById("add").style.display = "none";
        document.getElementById("res1").style.borderColor = "red";
        document.getElementById("demo").innerHTML = "Enter the Resistance(R1) Value";
    }
    else if (document.getElementById("res2").value == "") {
        //Alert.render("Enter the Resistance Value 2");
        document.getElementById("res2").style.borderColor = "red";
        document.getElementById("demo").innerHTML = "Enter the Resistance(R2) Value";
        //document.getElementById("add").style.display = "none";
    }
    else if (vlt == document.getElementById("volt").value) {
        //document.getElementById("add").style.display = "none";
        //Alert.render("Change DC voltage");
        document.getElementById("demo").innerHTML = "Change the DC Voltage";
        document.getElementById("volt").style.borderColor = "red";
        document.getElementById("dc").style.borderColor = "red";
    }
    else if (table.rows.length <= 15) {
        //document.getElementById("add").style.display = "block";
        document.getElementById("dc").style.borderColor = "";
        document.getElementById("res1").style.borderColor = "";
        document.getElementById("res2").style.borderColor = "";
        document.getElementById("volt").style.borderColor = "";
        document.getElementById("demo").innerHTML = "";

        document.getElementById("rs1").value = document.getElementById("res1").value;
        document.getElementById("rs2").value = document.getElementById("res2").value;
        var reqv=parseInt(document.getElementById("res1").value)+parseInt(document.getElementById("res2").value);
         document.getElementById("req").value=reqv;


        var row = table.insertRow(++tabrowindex); // Row increment
        for (var q = 0; q < 3; q++) {

            var cell = row.insertCell(q);
            cell.innerHTML = arr[q];
            // document.getElementById("add").style.display = "none";
        }

    }
    clmns = table.rows[tabrowindex].cells[1];
    vlt = clmns.innerHTML;
//     columns = table.rows[1].cells[3];   // cell 3 contains the value of resistance 1//
//    rests1 = columns.innerHTML;
//    
//    columns2 = table.rows[1].cells[4];  // cell 4 contains the value of resistance 2//
//    rests2 = columns2.innerHTML;

    if (document.getElementById("rs1").value != document.getElementById("res1").value) {
        // document.getElementById("add").style.display = "none";
        //Alert.render("Same resistance1 value required for linear graph");
        document.getElementById("demo").innerHTML = "Same Resistance(R1) value required for linear graph";
        document.getElementById("res1").style.borderColor = "red";
    }

    else if (document.getElementById("rs2").value != document.getElementById("res2").value) {
        // document.getElementById("add").style.display = "none";
        //Alert.render("Same resistance2 value required for linear graph");
        document.getElementById("demo").innerHTML = "Same Resistance(R2) value required for linear graph";
        document.getElementById("res2").style.borderColor = "red";
    }
}
//--------------------------------------------------------- print-------------------------------------------------------//
function printn() {

    document.getElementById("demo").innerHTML = "";
    document.getElementById("demos").innerHTML = "";

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
        var rwr1 = table.rows[tabrowindex].cells;
        
        dataPoints.push({x: parseFloat(rwr1[2].innerHTML), y: parseFloat(rwr1[1].innerHTML)});
    }

    chart = new CanvasJS.Chart("chartContainer", {
        theme: "theme1", //theme1
        // backgroundColor: "#bdf5bd",
        title: {
            text: "V-I Plot "
        },
        // animationEnabled: true,
        // change to true
        legend: {
            verticalAlign: "bottom",
            horizontalAlign: "center",
        },
        axisX: {
            title: "Current (mAmp)",
        },
        axisY: {
            title: "Voltage (V)",
        },
        data: [
            {
                type: "line",
                dataPoints: dataPoints
            }
        ]
    });

    chart.render();

    document.getElementById("demos").innerHTML = "Print It <br><br> Take another sets of Voltmeter and <br> Ammeter readings for another Resistance value";
}

//--------------------------------------------------Clear data-------------------------------------------------------------------------//
function clearf() {

    document.getElementById("dc").value = "";
    document.getElementById("volt").value = "";
    document.getElementById("amp").value = "";
    document.getElementById("res1").value = "";
    document.getElementById("res2").value = "";
    document.getElementById("vdc").value = "";
    document.getElementById("rest1").value = "";
    document.getElementById("rest2").value = "";
    document.getElementById("rs1").value = "";
    document.getElementById("rs2").value = "";
     document.getElementById("req").value = "";
    document.getElementById("chartContainer").innerHTML = "";
    document.getElementById("demo").innerHTML = "";
    document.getElementById("demos").innerHTML = "";
    document.getElementById("dc").style.borderColor = "";
    document.getElementById("res1").style.borderColor = "";
    document.getElementById("res2").style.borderColor = "";
    document.getElementById("volt").style.borderColor = "";
    var rowCount = mytable.rows.length;
    for (var j = rowCount - 1; j > 0; j--) {
        mytable.deleteRow(j);

    }

    tabrowindex = 0;
    dataPoints=[];
    //window.location.reload();

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
                    max: 2,
                    intervals: [0.5, 1, 1.5, 2],
                    intervalColors: ['#66cc66', '#cc6666', '#cc6666', '#E7E658']
                }
            }
        });
    });
}

