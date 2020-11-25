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
                max: 8,
                intervals: [2, 4, 6, 8],
                intervalColors: ['#66cc66', '#93b75f', '#E7E658', '#cc6666', '#579575']
            }
        }
    });
});

//---------------------------------------------Metergauge2(zener current)---------------------------------------------------//
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
                max: 1,
                intervals: [0.2, 0.4, 0.6, 0.8],
                intervalColors: ['#66cc66', '#cc6666', '#cc6666', '#E7E658']
            }
        }
    });
});


var Vz,Vin,V_z,y_mA,V_Rs;
var rheo;
var table, clmns, vlt;
var diodetype,diodevalue ;

//---------------------------------------------------------Simulation--------------------------------------------------------------------------------//
function setdiode(){
   
diodetype = document.getElementById("diode_type");
 diodevalue = diodetype.options[diodetype.selectedIndex].value;
 document.getElementById("zenervalue").value=diodevalue;
 }

function setRheoResistance(){
	rheo=document.getElementById("rheostat").value;
       diodetype = document.getElementById("diode_type");
 diodevalue = diodetype.options[diodetype.selectedIndex].value;
 document.getElementById("zenervalue").value=diodevalue;

	Vz = parseFloat(diodevalue);
	Vin = (rheo * 12) / 100;
	V_z = Vin < Vz ? Vin : Vz;
       // diode_types = ["BZX79C5V6","BZX5C7V5","1N4733A","1N4739A","1N4729A","ZD5234A"];
	//diode_values = [5.6,7.5,5.1,9.1,3.6,6.2];
	
	calculations();
}

function calculations(){
	V_Rs = parseFloat(Vin) - parseFloat(V_z);
	y_mA = 1 / (190*(1 - Math.exp(Vz/Vin) ));
	I_A = Vin < Vz ? (-1 * y_mA) : (V_Rs / 200);
	volt_Rs = I_A * 200;
	volt_zener = Vin - volt_Rs;
        //alert(volt_zener);
        //alert(volt_Rs);
        
       document.getElementById("voltzener").value=parseFloat(volt_zener).toFixed(3);
        document.getElementById("ammeterzener").value=parseFloat(I_A).toFixed(3);
	
        

    s1[0] = parseFloat(document.getElementById('voltzener').value);
    plot3 = $.jqplot('chart1', [s1], {
        grid: {
            background: "transparent"
        },
        seriesDefaults: {
            renderer: $.jqplot.MeterGaugeRenderer,
            rendererOptions: {
               min: 0,
                max: 8,
                intervals: [2, 4, 6, 8],
                intervalColors: ['#66cc66', '#93b75f', '#E7E658', '#cc6666', '#579575']
            }
        }
    });

    s2[0] = parseFloat(document.getElementById('ammeterzener').value);
    plot3 = $.jqplot('chart2', [s2], {
        grid: {
            background: "transparent"
        },
        seriesDefaults: {
            renderer: $.jqplot.MeterGaugeRenderer,
            rendererOptions: {
                min: 0,
                max: 1,
                intervals: [0.2, 0.4, 0.6, 0.8],
                intervalColors: ['#66cc66', '#cc6666', '#cc6666', '#E7E658']
            }
        }
    });

    table = document.getElementById("mytable");

//    columns = table.rows[tabrowindex].cells[1];
//    rest = columns.innerHTML;

    clmns = table.rows[tabrowindex].cells[1];
    vlt = clmns.innerHTML;

    if (vlt == document.getElementById("voltzener").value) {
        // document.getElementById("add").style.display = "none";
        //Alert.render("Vary  DC voltage");
        document.getElementById("demo").innerHTML = "Vary  DC voltage";
        document.getElementById("voltzener").style.borderColor = "red";
       
    }

    
}