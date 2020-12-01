

var resb;
function resbChange() {
    resb = document.getElementById("base_r").value;
    document.getElementById("r_base").value = resb;
    firstres();
}

var resc;
function rescChange() {
    resc = document.getElementById("collector_r").value;
    document.getElementById("r_collector").value = resc;
   check();
}

var tabrowindex = 0, tabrowindex2 = 0;
var arr = [];
var table;
var clmns, vlt, clmns1, vlt1;
var chart;
var dataPoints = [];

//------------------------------------------------- Table Creation -----------------------------------------------//
function tabled() {

    var iec = document.getElementById("ampc").value;
    var vbcol = document.getElementById("voltcb").value;


    arr[0] = tabrowindex + 1;
    arr[1] = document.getElementById("voltcb").value;
    arr[2] = document.getElementById("ampc").value;

    table = document.getElementById("mytable");
    if (document.getElementById("voltcb").value == "") {
        // Alert.render("Enter the Base-Collector voltage");
        document.getElementById("voltcb").style.borderColor = "red";
        document.getElementById("demo").innerHTML = "Enter the Base-Collector voltage";
    }
    else if (document.getElementById("ampe").value == "") {
        //Alert.render("Enter the Emitter Current");
        //document.getElementById("add").style.display = "none";
        document.getElementById("ampe").style.borderColor = "red";
        document.getElementById("demo").innerHTML = "Enter the Emitter Current";
    }
    else if (vlt == document.getElementById("voltcb").value) {
        // document.getElementById("add").style.display = "none";
        //Alert.render("Change the Base-Collector Voltage");
        document.getElementById("voltcb").style.borderColor = "red";
        document.getElementById("demo").innerHTML = "Change the Base-Collector Voltage by adjusting Rheostat R<sub>h2</sub>";
    }

    else if (table.rows.length <= 21) {
        document.getElementById("voltcb").style.borderColor = "";
        document.getElementById("ampe").style.borderColor = "";
        document.getElementById("demo").innerHTML = "";

        document.getElementById("tbie1").value = document.getElementById("ampe").value;

        var row = table.insertRow(++tabrowindex + 1); // Row increment
        for (var q = 0; q < 3; q++) {

            var cell = row.insertCell(q);
            cell.innerHTML = arr[q];
            //document.getElementById("add").style.display = "none";
        }
    }

    clmns = table.rows[tabrowindex + 1].cells[1];
    vlt = clmns.innerHTML;

    if (document.getElementById("ampe").value != ((document.getElementById("tbie1").value))) {
        // Alert.render("Make the Emitter Current Constant");
        //document.getElementById("add").style.display = "none";
        document.getElementById("ampe").style.borderColor = "red";
        document.getElementById("demo").innerHTML = "Make the Emitter Current Constant";
    }

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
    for (var tabrowindex = 2; tabrowindex < table.rows.length; tabrowindex++) {
        var rwe1 = table.rows[tabrowindex].cells;

        dataPoints.push({x: parseFloat(rwe1[1].innerHTML), y: parseFloat(rwe1[2].innerHTML)});
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
            title: "Base Collector Voltage (V)",
        },
        axisY: {
            title: " Collector Current(mA)",
        },
        data: [
            {
                type: "line",
                dataPoints: dataPoints
            }
        ]
    });

    //chart.options.data[0].dataPoints = dataPoints;
    chart.render();


    document.getElementById("demo").innerHTML = "";
    document.getElementById("demos").innerHTML = "Print It  <br><br>Take another sets of Base-Collector and <br> Collector Current readings for<br> another Emitter Current ";



    document.getElementById("voltbc").style.borderColor = "";
    document.getElementById("ampe").style.borderColor = "";
}
function printf() {
    document.getElementById("demo").innerHTML = "";
    document.getElementById("demos").innerHTML = "";
    document.getElementById("voltcb").style.borderColor = "";
    document.getElementById("ampe").style.borderColor = "";
    window.print();
}
function clearf() {


    document.getElementById("voltbe").value = "";
    document.getElementById("voltcb").value = "";
    document.getElementById("ampe").value = "";
    document.getElementById("ampc").value = "";
     document.getElementById("r_base").value = 1;
    document.getElementById("r_collector").value = 1;
     document.getElementById("base_r").value = 1;
    document.getElementById("collector_r").value = 1;
   

    document.getElementById("chartContainer").innerHTML = "";
    document.getElementById("demo").innerHTML = "";
    document.getElementById("demos").innerHTML = "";
    document.getElementById("tbie1").value = "";
    document.getElementById("voltcb").style.borderColor = "";
    document.getElementById("ampe").style.borderColor = "";
    var rowCount = mytable.rows.length;

    for (var j = rowCount - 1; j > 1; j--) {
        mytable.deleteRow(j);

    }
    tabrowindex = 0;
    dataPoints = [];


    //---------------------------------------------Metergauge1(base-emitter voltage)----------------------------------------------//
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
                    intervals: [0.5, 1, 2],
                    intervalColors: ['#66cc66', '#93b75f', '#E7E658', '#cc6666', '#579575']
                }
            }
        });
    });

//---------------------------------------------Metergauge2(emitter current)---------------------------------------------------//
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
                    max: 10,
                    intervals: [2, 4, 6, 10],
                    intervalColors: ['#66cc66', '#cc6666', '#cc6666', '#E7E658']
                }
            }
        });
    });


//---------------------------------------------Metergauge3(collector-base voltage)---------------------------------------------------//
    $(document).ready(function () {
        s3 = [0];
        plot3 = $.jqplot('chart3', [s3], {
            grid: {
                background: "transparent"
            },
            seriesDefaults: {
                renderer: $.jqplot.MeterGaugeRenderer,
                rendererOptions: {
                     min: -2,
                max: 4,
                intervals: [-2,0,2,4],
                    intervalColors: ['#66cc66', '#cc6666', '#cc6666', '#E7E658']
                }
            }
        });
    });
//---------------------------------------------Metergauge4(collector current)---------------------------------------------------//
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
                    max: 10,
                    intervals: [2, 4, 6, 10],
                    intervalColors: ['#66cc66', '#cc6666', '#cc6666', '#E7E658']
                }
            }
        });
    });

}