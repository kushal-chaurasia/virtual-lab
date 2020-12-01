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


var bf = 120, br = 0.3;
var alpha=0.95;

var vbe, vbc, ie, ic;
var table;
var clmns, vlt,clmns1, vlt1;
//---------------------------------------------------------Simulation--------------------------------------------------------------------------------//
function check(){
  collector_res=document.getElementById("r_collector").value;
 
 
     
     vcb=0.1*collector_res-vbe;
     //alert(vcb);
      ic =parseFloat(ie)*(Math.exp(parseFloat(vcb))-Math.exp(parseFloat(-vcb)))/(Math.exp(parseFloat(vcb))+Math.exp(parseFloat(-vcb)));
     document.getElementById("ampc").value=parseFloat(ic).toPrecision(4);
     document.getElementById("voltcb").value=parseFloat(vcb).toPrecision(4);
     
     s3[0] = parseFloat(document.getElementById('voltcb').value);
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
function   firstres() {

    
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
  
    if (document.getElementById("ampe").value !=((document.getElementById("tbie1").value ))) {
        //Alert.render("Make the Emitter Current Constant");
        //document.getElementById("add").style.display = "none";
        document.getElementById("ampe").style.borderColor="red";
        document.getElementById("demo").innerHTML="Make the Emitter Current Constant";
    }

    else if (vlt == document.getElementById("voltbc").value) {
       // document.getElementById("add").style.display = "none";
        //Alert.render("Change the Base-Collector Voltage");
        document.getElementById("voltbc").style.borderColor="red";
         document.getElementById("demo").innerHTML="Change the Base-Collector Voltage";
    }
    

}