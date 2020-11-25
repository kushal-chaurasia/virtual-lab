
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
var tabrowindex = 0;
var arr = [];
var table;
var clmns, vlt, columns, rest;
var chart;
var dataPoints = [];
// var showAlert;
//------------------------------------------------- Table Creation -----------------------------------------------//
function tabled() {


    arr[0] = tabrowindex + 1;
    arr[1] = document.getElementById("volt").value;
    arr[2] = document.getElementById("amp").value;
    //arr[3] = document.getElementById("res").value;

    if (document.getElementById("dc").value == "") {
        //Alert.render("Enter the Input Voltage");
        document.getElementById("dc").style.borderColor = "red";
        document.getElementById("demo").innerHTML = "Enter the Input Voltage";
    }
    else if (document.getElementById("res").value == "") {
        // Alert.render("Enter the Resistance Value");
        document.getElementById("res").style.borderColor = "red";
        document.getElementById("demo").innerHTML = "Enter the Resistance Value";
    }
    else if (vlt == document.getElementById("volt").value) {
        // document.getElementById("add").style.display = "none";
        //Alert.render("Change the DC voltage");
        document.getElementById("demo").innerHTML = "Change the DC Voltage";
        document.getElementById("volt").style.borderColor = "red";
        document.getElementById("dc").style.borderColor = "red";
    }
    else if (table.rows.length <= 15) {
        document.getElementById("dc").style.borderColor = "";
        document.getElementById("res").style.borderColor = "";
        document.getElementById("volt").style.borderColor = "";
        document.getElementById("demo").innerHTML = "";

        table = document.getElementById("mytable");
        document.getElementById("rs").value = document.getElementById("res").value;
        var row = table.insertRow(++tabrowindex); // Row increment
        for (var q = 0; q < 3; q++) {

            var cell = row.insertCell(q);
            cell.innerHTML = arr[q];
//            document.getElementById("add").style.display = "none";
//            document.getElementById("plt").style.display = "none";
        }

    }

//    columns = table.rows[1].cells[3];
//    rest = columns.innerHTML;
    clmns = table.rows[tabrowindex].cells[1];
    vlt = clmns.innerHTML;

    if (document.getElementById("res").value != document.getElementById("rs").value) {
        //  document.getElementById("add").style.display = "none";
        //Alert.render("Same resistance value required for linear graph");
        document.getElementById("demo").innerHTML = "Keep the Resistance Value Constant";
        document.getElementById("res").style.borderColor = "red";
    }

}



//--------------------------------------------------------- print-------------------------------------------------------//
function printf() {
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
        var rwe1 = table.rows[tabrowindex].cells;

        dataPoints.push({x: parseFloat(rwe1[2].innerHTML), y: parseFloat(rwe1[1].innerHTML)});
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

    document.getElementById("demos").innerHTML = "Print It <br><br>Take another sets of Voltmeter and <br> Ammeter readings for another Resistance value";

}

//---------------------------------------clear data----------------------------------------------------------------------------//
function clearf() {

    document.getElementById("dc").value = "";
    document.getElementById("volt").value = "";
    document.getElementById("amp").value = "";
    document.getElementById("res").value = "";
    document.getElementById("vdc").value = "";
    document.getElementById("res1").value = "";
    document.getElementById("rs").value = "";
    document.getElementById("chartContainer").innerHTML = "";
    document.getElementById("demo").innerHTML = "";
    document.getElementById("demos").innerHTML = "";
    document.getElementById("dc").style.borderColor = "";
    document.getElementById("res").style.borderColor = "";
    document.getElementById("volt").style.borderColor = "";
    // document.getElementById("prnt").style.display="none";
    var rowCount = mytable.rows.length;
    for (var j = rowCount - 1; j > 0; j--) {
        mytable.deleteRow(j);

    }
    tabrowindex = 0;
    dataPoints = [];
//tabled();
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
