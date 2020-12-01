/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




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
var clmns, vlt, clmns1, vlt1;
var chart;
var dataPoints = [];

//------------------------------------------------- Table Creation -----------------------------------------------//
function tabled() {

    var vbem = document.getElementById("voltbe").value;
    var vbcol = document.getElementById("voltbc").value;

    arr[0] = tabrowindex + 1;
    arr[1] = document.getElementById("voltbe").value;
    arr[2] = document.getElementById("ampe").value;
    table = document.getElementById("mytable");

    if (document.getElementById("voltbe").value == "") {
        //Alert.render("Enter the Base-Emitter voltage");
        document.getElementById("voltbe").style.borderColor = "red";
        document.getElementById("demo").innerHTML = "Enter the Base-Emitter voltage";
    }
    else if (document.getElementById("voltbc").value == "") {
        //Alert.render("Enter the Base-Collector Volatge");
        //document.getElementById("add").style.display = "none";
        document.getElementById("voltbc").style.borderColor = "red";
        document.getElementById("demo").innerHTML = "Enter the Base-Collector Volatge";
    }
    else if (vlt == document.getElementById("voltbe").value) {
        //Alert.render("Change the Base-Emitter Voltage");
        document.getElementById("voltbe").style.borderColor = "red";
        document.getElementById("demo").innerHTML = "Change the Base-Emitter Voltage by adjusting Rheostat R<sub>h1</sub>";
    }
    
   

    else if (table.rows.length <= 21) {
        document.getElementById("voltbe").style.borderColor = "";
        document.getElementById("voltbc").style.borderColor = "";
        document.getElementById("demo").innerHTML = "";

        document.getElementById("tbvbc1").value = document.getElementById("voltbc").value;

        var row = table.insertRow(++tabrowindex + 1); // Row increment
        for (var q = 0; q < 3; q++) {

            var cell = row.insertCell(q);
            cell.innerHTML = arr[q];
            //document.getElementById("add").style.display = "none";
        }
    }

    clmns = table.rows[tabrowindex + 1].cells[1];
    vlt = clmns.innerHTML;

     if (document.getElementById("voltbc").value != ((document.getElementById("tbvbc1").value))) {
       
        document.getElementById("voltbc").style.borderColor = "red";
        document.getElementById("demo").innerHTML = "Make the Base-Collector Volatge Constant";
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
            title: " Emitter Current(uA)",
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

    document.getElementById("demos").innerHTML = "Print It  <br><br> Take another sets of Base-Emitter Voltage and <br> Emitter current readings for another <br>Base-Collector value";
    document.getElementById("voltbe").style.borderColor = "";
    document.getElementById("voltbc").style.borderColor = "";
}
function printf() {
    document.getElementById("demo").innerHTML = "";
    document.getElementById("demos").innerHTML = "";
    document.getElementById("voltbe").style.borderColor = "";
    document.getElementById("voltbc").style.borderColor = "";
    window.print();
}
function clearf() {



    document.getElementById("voltbe").value = "";
    document.getElementById("voltbc").value = "";
    document.getElementById("ampb").value = "";
    document.getElementById("ampc").value = "";
     document.getElementById("r_base").value = 1;
    document.getElementById("r_collector").value = 1;
     document.getElementById("base_r").value = 1;
    document.getElementById("collector_r").value = 1;
    
    document.getElementById("chartContainer").innerHTML = "";
    document.getElementById("demo").innerHTML = "";
    document.getElementById("demos").innerHTML = "";
    document.getElementById("tbvbc1").value = "";
    document.getElementById("voltbe").style.borderColor = "";
    document.getElementById("voltbc").style.borderColor = "";

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
                    max: 35,
                    intervals: [5, 15, 25, 35],
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
                    min: 0,
                    max: 10,
                    intervals: [2, 4, 6, 10],
                    intervalColors: ['#66cc66', '#cc6666', '#cc6666', '#E7E658']
                }
            }
        });
    });
}