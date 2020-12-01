
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
                max: 100,
                intervals: [20, 40, 60, 80],
                intervalColors: ['#66cc66', '#cc6666', '#cc6666', '#E7E658']
            }
        }
    });
});

var bf = 120, br = 0.3;
var k = 1.381, q = 1.602;
var ea = 5, js = 2;
var vt, is, ar, af, ies, ics;
var vbe, vce, ib, ic;
var table, tabrowindex, tabrowindex2;
var clmns, vltce, clmns1, vltce1;
//---------------------------------------------------------Simulation--------------------------------------------------------------------------------//
function firstres(){
    base_res=document.getElementById("r_base").value;
    vbe=base_res*0.02;
	ib=10*Math.exp(vbe/0.7); //micro ampere
        
	document.getElementById("ampb").value = ib.toPrecision(4);
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

    s2[0] = parseFloat(document.getElementById('ampb').value);
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
}
function check() {

//initially base_res=1,collector_res=1

 	
	collector_res=document.getElementById("r_collector").value;

	

	vce=collector_res*0.1;
	ic=parseFloat(ib)*Math.sqrt(parseFloat(ib))*(Math.exp(parseFloat(vce))-Math.exp(-parseFloat(vce)))/(Math.exp(parseFloat(vce))+Math.exp(-parseFloat(vce))); //mili ampere
	
    	document.getElementById("ampc").value = parseFloat(ic).toPrecision(4);
 	document.getElementById("voltce").value=vce.toPrecision(4);
	
   	
//.toFixed(3)

s3[0] = parseFloat(document.getElementById('voltce').value);
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
                max: 100,
                intervals: [20, 40, 60, 80],
                intervalColors: ['#66cc66', '#cc6666', '#cc6666', '#E7E658']
            }
        }
    });
   
    table = document.getElementById("mytable");

    clmns = table.rows[tabrowindex + 1].cells[1];
    vltce = clmns.innerHTML;

    if (document.getElementById("ampb").value != ((document.getElementById("tbib1").value) )) {
       
        document.getElementById("ampb").style.borderColor = "red";
        document.getElementById("demo").innerHTML = "Make the Base Current Constant";
    }

    else if (vltce == document.getElementById("voltce").value) {
       
        document.getElementById("voltce").style.borderColor = "red";
        document.getElementById("demo").innrHTML = "Change the Collector-Emitter Voltage";
    }


}

