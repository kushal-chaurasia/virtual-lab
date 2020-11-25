
var sliderVal;
function sliderChange() {
    sliderVal = document.getElementById("vdc").value;
    document.getElementById("dc").value = sliderVal;
    check();
}
var rc;
function textChange() {
    rc = document.getElementById("res1").value;
    document.getElementById("res").value = rc;
    check();
}

var tabrowindex = 0;
var arr = [];
var table;
var clmns, vlt;
var chart;
var dataPoints = [];
//------------------------------------------------- Table Creation -----------------------------------------------//
function tabled() {

    table = document.getElementById("mytable");
    arr[0] = tabrowindex + 1;
    arr[1] = document.getElementById("volt").value;
    arr[2] = document.getElementById("amp").value;
//    arr[3] = document.getElementById("res").value;
    if (document.getElementById("dc").value == "") {
        // Alert.render("Enter the Input Voltage");
        // document.getElementById("dltr").innerHTML="Enter the Input Voltage";
        document.getElementById("dc").style.borderColor = "red";
        document.getElementById("demo").innerHTML = "Enter the Input Voltage";
    }
    else if (document.getElementById("res").value == "") {
        //Alert.render("Enter the Resistance Value");
        // document.getElementById("add").style.display = "none";
        document.getElementById("res").style.borderColor = "red";
        document.getElementById("demo").innerHTML = "Enter the Resistance Value";
    }
    //else if (document.getElementById("res").value != 1) {
     //   ///Alert.render("Set the Resistance Value to 1 Kohm");
////document.getElementById("add").style.display = "none";
    //    document.getElementById("res").style.borderColor = "red";
    //    document.getElementById("demo").innerHTML = "Set the Resistance Value to 1 Kohm";
    //}
    else if (vlt == document.getElementById("volt").value) {
        //document.getElementById("add").style.display = "none";
        //Alert.render("Change DC voltage");
        document.getElementById("demo").innerHTML = "Vary  DC voltage";
        document.getElementById("volt").style.borderColor = "red";
        document.getElementById("dc").style.borderColor = "red";
    }

    else if (table.rows.length <= 30) {
        document.getElementById("dc").style.borderColor = "";
        document.getElementById("res").style.borderColor = "";
        document.getElementById("volt").style.borderColor = "";
        document.getElementById("demo").innerHTML = "";

        var row = table.insertRow(++tabrowindex); // Row increment
        for (var q = 0; q < 3; q++) {

            var cell = row.insertCell(q);
            cell.innerHTML = arr[q];
            // document.getElementById("add").style.display = "none";
        }

    }
    clmns = table.rows[tabrowindex].cells[1];
    vlt = clmns.innerHTML;

}

//--------------------------------------------------------- print-------------------------------------------------------//

function printl() {
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
function plotrvs() {

    for (var tabrowindex = 1; tabrowindex < table.rows.length; tabrowindex++) {
        var rwe1 = table.rows[tabrowindex].cells;
        
        dataPoints.push({x: -parseFloat(rwe1[1].innerHTML), y: -parseFloat(rwe1[2].innerHTML)});
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
            title: "Voltage (V)",
           //  minimum: -2,
     // maximum: 0
        },
        axisY: {
            title: "Current (uAmp)",
        },
        data: [
            {
                type: "spline",
                dataPoints: dataPoints
            }
        ]
    });

    //chart.options.data[0].dataPoints = dataPoints;
    chart.render();
//document.getElementById("clr").style.display = "block";
    document.getElementById("demos").innerHTML = "Print It ";
    //document.getElementById("demos").innerHTML = "Take another sets of Voltmeter and <br> Ammeter readings for another Resistance value";



}
//--------------------------------------------------------- print-------------------------------------------------------//
function printf() {

    document.getElementById("demo").innerHTML = "";
    // document.getElementById("demos").innerHTML = "";

    window.print();
}
function clearf() {

    document.getElementById("dc").value = "";
    document.getElementById("volt").value = "";
    document.getElementById("amp").value = "";
    document.getElementById("res").value = "";
    document.getElementById("vdc").value = "";
    document.getElementById("res1").value = "";
	document.getElementById("diode_type").value ="";
	document.getElementById("diodevalue").value ="";

    document.getElementById("chartContainer").innerHTML = "";
    document.getElementById("demo").innerHTML = "";
    // document.getElementById("demos").innerHTML = "";
    document.getElementById("dc").style.borderColor = "";
    document.getElementById("res").style.borderColor = "";
    document.getElementById("volt").style.borderColor = "";
    var rowCount = mytable.rows.length;
    for (var j = rowCount - 1; j > 0; j--) {
        mytable.deleteRow(j);

    }
    tabrowindex = 0;
    dataPoints=[];
    // window.location.reload();

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
                intervals: [4,8,12,16],
                    intervalColors: ['#66cc66', '#cc6666', '#cc6666', '#E7E658']
                }
            }
        });
    });

}



s