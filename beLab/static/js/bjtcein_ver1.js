var resb;
function resbChange() {
    resb = document.getElementById("base_r").value;
    document.getElementById("r_base").value = resb;
    check();
}

var resc;
function rescChange() {
    resc = document.getElementById("collector_r").value;
    document.getElementById("r_collector").value = resc;
   secondres();
}



var tabrowindex = 0, tabrowindex2 = 0;
var arr = [];
var table;
var clmns, vltbe, clmns1, vltbe1;
var chart;
var dataPoints = [];


//------------------------------------------------- Table Creation -----------------------------------------------//
function tabled() {

    //var vbem = document.getElementById("voltbe").value;
    //var vcolem = document.getElementById("voltce").value;


    arr[0] = tabrowindex + 1;
    arr[1] = document.getElementById("voltbe").value;
    arr[2] = document.getElementById("ampb").value;

    table = document.getElementById("mytable");
    if (document.getElementById("voltbe").value == "") {

        document.getElementById("voltbe").style.borderColor = "red";
        document.getElementById("demo").innerHTML = "Enter the Base-Emitter Voltage";
    }
    else if (document.getElementById("voltce").value == "") {

        document.getElementById("voltce").style.borderColor = "red";
        document.getElementById("demo").innerHTML = "Enter the Collector-Emitter Voltage";
    }
    else if (vltbe == document.getElementById("voltbe").value) {

        document.getElementById("voltbe").style.borderColor = "red";
        document.getElementById("demo").innerHTML = "Change the Base-Emitter Voltage";
    }

    else if (table.rows.length <= 21) {
        document.getElementById("voltbe").style.borderColor = "";
        document.getElementById("voltce").style.borderColor = "";
        document.getElementById("demo").innerHTML = "";

        document.getElementById("tbvce1").value = document.getElementById("voltce").value;


        var row = table.insertRow(++tabrowindex + 1); // Row increment
        for (var q = 0; q < 3; q++) {

            var cell = row.insertCell(q);
            cell.innerHTML = arr[q];
            // document.getElementById("add").style.display = "none";
        }

    }

    clmns = table.rows[tabrowindex + 1].cells[1];
    vltbe = clmns.innerHTML;

    if (document.getElementById("voltce").value != ((document.getElementById("tbvce1").value))) {

        document.getElementById("voltce").style.borderColor = "red";
        document.getElementById("demo").innerHTML = "Make the Collector-Emitter<br> Voltage Constant";
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
            title: "Base Emitter Voltage (V)",
        },
        axisY: {
            title: " Base Current(microA)",
        },
        data: [
            {
                type: "line",
                dataPoints: dataPoints

            }
        ]
    });

    chart.render();

    document.getElementById("demo").innerHTML = "";
    document.getElementById("demos").innerHTML = "Print It <br><br>Take another sets of Base-Emitter and <br> Base Current readings for<br> another Collector-Emitter value";


}

function printf() {
    document.getElementById("demo").innerHTML = "";
    document.getElementById("demos").innerHTML = "";
    document.getElementById("voltbe").style.borderColor = "";
    document.getElementById("voltce").style.borderColor = "";
    window.print();
}
function clearfn() {

   
    document.getElementById("voltbe").value = "";
    document.getElementById("voltce").value = "";
    document.getElementById("ampb").value = "";
    document.getElementById("ampc").value = "";
     document.getElementById("r_base").value = 1;
    document.getElementById("r_collector").value = 1;
     document.getElementById("base_r").value = 1;
    document.getElementById("collector_r").value = 1;


    document.getElementById("chartContainer").innerHTML = "";
    document.getElementById("demo").innerHTML = "";
    document.getElementById("demos").innerHTML = "";
    document.getElementById("voltbe").style.borderColor = "";
    document.getElementById("voltce").style.borderColor = "";
    document.getElementById("tbvce1").value = "";
    
    var rowCount = mytable.rows.length;

    for (var j = rowCount - 1; j > 1; j--) {
        mytable.deleteRow(j);
 }
    tabrowindex = 0;
    dataPoints=[];
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

//---------------------------------------------Metergauge2(base current)---------------------------------------------------//
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


//---------------------------------------------Metergauge3(collector-emitter voltage)---------------------------------------------------//
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
                    max: 10,
                    intervals: [2, 4, 6, 10],
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
                    max: 4,
                    intervals: [1, 2, 3, 4],
                    intervalColors: ['#66cc66', '#cc6666', '#cc6666', '#E7E658']
                }
            }
        });
    });
}

