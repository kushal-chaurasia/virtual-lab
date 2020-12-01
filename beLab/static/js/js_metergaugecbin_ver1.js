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
var tabrowindex = 0, tabrowindex2 = 0;
var ie, ic;
var vbe, vbc;
var table, clmns, vlt, clmns1, vlt1;
//---------------------------------------------------------Simulation--------------------------------------------------------------------------------//
function secondres(){
  collector_res=document.getElementById("r_collector").value;
  vbc=collector_res*0.1;
 
     
     vcb=0.1*collector_res;
      ic =parseFloat(ie)*Math.sqrt(ie)* Math.exp((parseFloat(vcb) /0.7) - 1);
     document.getElementById("ampc").value=parseFloat(ic).toPrecision(2);
     document.getElementById("voltbc").value=vbc.toPrecision(4);
     
     s3[0] = parseFloat(document.getElementById('voltbc').value);
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
 s4[0] = parseFloat(document.getElementById('ampc').value);
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
}
function check() {

    
      base_res=document.getElementById("r_base").value;
      vbe=base_res*0.02;
 
     ie = 2 * Math.exp((parseFloat(vbe) /0.7) - 1).toPrecision(4); //in mili ampere 
     document.getElementById("ampe").value = parseFloat(ie).toPrecision(2);
     document.getElementById("voltbe").value=vbe.toPrecision(4);

    




    s1[0] = parseFloat(document.getElementById('voltbe').value);
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

    s2[0] = parseFloat(document.getElementById('ampe').value);
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

    
    table = document.getElementById("mytable");

    clmns = table.rows[tabrowindex + 1].cells[1];
    vlt = clmns.innerHTML;
  
    if (document.getElementById("voltbc").value != ((document.getElementById("tbvbc1").value))) {
       // Alert.render("Make the Base-Collector Volatge Constant");
        //document.getElementById("add").style.display = "none";
        document.getElementById("voltbc").style.borderColor = "red";
        document.getElementById("demo").innerHTML="Make the Base-Collector Volatge Constant";
    }
    else if (vlt == document.getElementById("voltbe").value) {
        // document.getElementById("add").style.display = "none";
        //Alert.render("Change the Base-Emitter Voltage");
        document.getElementById("voltbe").style.borderColor = "red";
        document.getElementById("demo").innerHTML="Change the Base-Emitter Voltage";
    }
  
//    else {
//        document.getElementById("add").style.display = "block";
//    }

}